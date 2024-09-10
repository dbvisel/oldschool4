const fs = require("fs").promises;
const fetch = require("node-fetch");
const Airtable = require("airtable");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

// This prebuild downloads all the images from Airtable and saves them to the public folder
// TODO: maybe get thumbnails rather than full-size versions? We're never using the biggest one.

// Authenticate
Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const resourcesBase = base("oldschool");
const teamBase = base("The Team/Collaborators");

// const slugify = (record) =>
//   record.fields.Slug ||
//   encodeURIComponent(
//     record.fields.Title.toLowerCase()
//       .normalize("NFD")
//       .replace(/[\u0300-\u036f]/g, "")
//       .replace(/[?|.,/#!$%^&*;¿:{}'"“”‘’––=\-_`~()æœ]/g, "")
//       .replace(/\s+/g, "-")
//   );

const getMinifiedRecords = async (records) => {
  return records.map((record) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const getResources = async () => {
  const records = await resourcesBase.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);
  return minifiedRecords;
};

const getTeam = async () => {
  const records = await teamBase.select({ view: "For site" }).all();
  const minifiedRecords = await getMinifiedRecords(records);
  return minifiedRecords;
};

// 1. Go through all resources. Download

const downloadFile = async (url, filename) => {
  const response = await fetch(url);
  const blob = await response.blob();

  const arrayBuffer = await blob.arrayBuffer();

  const buffer = Buffer.from(arrayBuffer);

  // TODO: normalize extensions? "jpeg" and "JPG" seem like they are sometimes causing problems

  await fs.writeFile(filename, buffer);
  return `Downloaded ${url} to ${filename}.`;
};

const downloadPdf = async (url, filename) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const arrayBuffer = await blob.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);
    const fileType = buffer.toString("utf8", 0, 4);
    if (fileType === "%PDF") {
      await fs.writeFile(filename, buffer);
      return true;
    } else {
      return false;
    }
  } catch (e) {
    // console.error(`Error downloading PDF at ${url}: `, e);
    return false;
  }
};

const content = async (path) => {
  return await fs.readFile(path, "utf8");
};

const prebuild = async () => {
  console.log("Started prebuild script.");
  console.log("\nLooking for team cache...");
  const team = await getTeam();

  // save a stringified array of all the IDs to a file as a cache.
  // if the current array of all the IDs doesn't match it, redo the build.
  let teamCache;
  try {
    teamCache = await content("./public/images/team/cache.json");
  } catch (e) {
    console.log("Team cache not found.");
    teamCache = "";
  }
  const teamCurrent = JSON.stringify(team.map((x) => x.id));

  if (teamCache === teamCurrent) {
    console.log("Team cache is up to date. Skipping team image download.");
  } else {
    console.log(
      "Team cache not found or out of date. Downloading team images."
    );
    for (let i = 0; i < team.length; i++) {
      if (team[i].fields["Name"] && team[i].fields["Attachments"].length) {
        const thisAttachment = team[i].fields["Attachments"][0];
        const theUrl = thisAttachment.thumbnails.large.url; // because this is 200 x 200
        const theFilename = team[i].id;
        const theExtension = thisAttachment.filename.split(".").pop();
        const done = await downloadFile(
          theUrl,
          `./public/images/team/${theFilename}.${theExtension}`
        );
        // console.log(thisAttachment, done);
      } else {
        console.error("No team image: ", team[i]);
      }
    }
    fs.writeFile("./public/images/team/cache.json", teamCurrent);
  }

  console.log("\nLooking for resource cache...");
  const preResources = await getResources();
  const resources = preResources
    // .filter((x) => x.fields.Types && x.fields.Types.length)
    .filter((x) => x.fields.Status === "publish");

  let resourcesCache;
  try {
    resourcesCache = await content("./public/images/resources/cache.json");
  } catch (e) {
    console.log("Resources cache not found.");
    resourcesCache = "";
  }

  const resourcesCurrent = JSON.stringify(resources.map((x) => x.id));

  if (resourcesCache === resourcesCurrent) {
    console.log(
      "Resource image cache is up to date. Skipping resource image download."
    );
  } else {
    console.log(
      "Resource image cache not found or out of date. Downloading resource images."
    );
    // TODO: would it be better to do this as await Promise.all(resources.map(async (x) => { ... }))?
    // it seems like this works, though using await in a loop is bad.
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].fields["Image"] && resources[i].fields["Image"].length) {
        const thisResource = resources[i].fields["Image"][0];
        const theUrl = thisResource.url;
        const theFilename = resources[i].id;
        const theExtension = thisResource.filename.split(".").pop();
        if (resourcesCache.indexOf(resources[i].id) > -1) {
          // don't download if it's already in the cache
          // console.log("Skipping " + resources[i].id);
        } else {
          const done = await downloadFile(
            theUrl,
            `./public/images/resources/${theFilename}.${theExtension}`
          );
        }
        // console.log(done);
      } else {
        console.error("No resource image: ", resources[i]);
        // TODO: we shour probably take this image ID out of resourcesCurrent because this will
        // make the ID appear in the cache though no image has been downloaded if an image is added in the future.
      }
    }
    fs.writeFile("./public/images/resources/cache.json", resourcesCurrent);
  }

  let pdfCache;
  try {
    const pdfCacheFile = await content("./public/pdfs/cache.json");
    pdfCache = JSON.parse(pdfCacheFile); //now it is an object
  } catch (e) {
    console.log("\n\nPDF cache not found.");
    pdfCache = "";
  }

  console.log("\n\nLooking for new PDFs to download...\n\n");
  const pdfsCurrent = [];
  const failureList = [];
  for (let i = 0; i < resources.length; i++) {
    const thisResourceId = resources[i].id;
    if (pdfCache.indexOf(thisResourceId) > -1) {
      // if we're here, we already have the PDF
      // console.log("We already have the PDF for", thisResourceId);
    } else {
      const thisUrl = resources[i].fields["Resource URL"];
      const isThisAPdf = thisUrl && thisUrl.includes(".pdf");
      if (isThisAPdf) {
        const theFilename = thisResourceId;
        const theExtension = "pdf";
        const done = await downloadPdf(
          thisUrl,
          `./public/pdfs/${theFilename}.${theExtension}`
        );
        if (done) {
          console.log(
            pdfsCurrent.length + 1,
            "Downloaded PDF as",
            thisResourceId,
            ": ",
            thisUrl
          );

          pdfsCurrent.push(thisResourceId);
        } else {
          failureList.push({ title: resources[i].fields.Title, url: thisUrl });
          // console.log("Failed!");
        }
      } else {
        const maybeAGooglePDF = thisUrl && thisUrl.includes("drive.google.com");
        if (maybeAGooglePDF) {
          try {
            const googleDriveId = thisUrl
              .split("file/d/")
              .pop()
              .split("/")
              .shift();
            // from this: https://drive.google.com/file/d/1psya7KDxaIsgJjz44h9Ni4TOYU5MP-b0/view
            // to this: https://drive.google.com/uc?export=download&id=1psya7KDxaIsgJjz44h9Ni4TOYU5MP-b0
            const downloadURL = `https://drive.google.com/uc?export=download&id=${googleDriveId}`;
            const theFilename = thisResourceId;
            const theExtension = "pdf";
            const done = await downloadPdf(
              downloadURL,
              `./public/pdfs/${theFilename}.${theExtension}`
            );
            if (done) {
              console.log(
                pdfsCurrent.length + 1,
                "Downloaded Google PDF as",
                thisResourceId,
                ": ",
                downloadURL
              );

              pdfsCurrent.push(thisResourceId);
            } else {
              failureList.push({
                title: resources[i].fields.Title,
                url: thisUrl,
              });
              console.log(
                "Google PDF failed:",
                resources[i].fields.Title,
                thisUrl
              );
            }
          } catch (e) {
            console.log("This Google URL didn't work? ", thisUrl);
          }
        }
      }
    }
  }
  const completeList = JSON.stringify(pdfCache.concat(pdfsCurrent));
  fs.writeFile("./public/pdfs/cache.json", completeList, "utf8");
  fs.writeFile("./src/caches/pdfs/cache.json", completeList, "utf8");

  console.log(
    "\n\nPDF download failures:",
    failureList.length,
    "\n\n",
    failureList
      .map((x, i) => i + 1 + ": " + x.title + " – " + x.url)
      .join("\n"),
    "\n\n"
  );

  console.log("Prebuild done!");
};

prebuild();
