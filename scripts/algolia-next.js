const Airtable = require("airtable");
const algoliasearch = require("algoliasearch/lite");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const testMode = false; // If this is true, we don't actually send the records to Algolia. If false, we do.
const addSubresources = true; // If this is true, subresources will be added to the index. If false, they will not be added.

(async function () {
  try {
    if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
      throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
    }

    if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY) {
      throw new Error("ALGOLIA_SEARCH_ADMIN_KEY is not defined");
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  // Authenticate
  Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  // Initialize a base
  const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

  // Reference a table
  const resourcesBase = base("oldschool");
  const eventsBase = base("EVENTS");

  // maps over the records, calling minifyRecord, giving us required data
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

    // console.log(minifiedRecords);

    return minifiedRecords;
  };

  const getEvents = async () => {
    const records = await eventsBase.select({}).all();
    const minifiedRecords = await getMinifiedRecords(records);

    const now = new Date();

    const currentRecords = minifiedRecords
      .filter((x) => x.fields.Title)
      .filter((x) => x.fields.Description)
      .filter((x) => x.fields.Status === "confirmed")
      .filter((x) => {
        if (x.fields.End) {
          const end = new Date(x.fields.End);
          return end > now;
        }
        // if there's no end, try using start
        if (x.fields.Start) {
          const start = new Date(x.fields.Start);
          return start > now;
        }
        return true;
      });

    return currentRecords;
  };

  const getRecordsForAlgolia = async () => {
    const resourceRecords = await getResources();
    const eventRecords = await getEvents();
    const subResourcePages = [];
    const subResoucesIdMemo = [];

    const titleMemo = [];
    const basicEventRecords = eventRecords
      .map((x) => {
        if (titleMemo.indexOf(x.fields.Title) > -1) {
          console.error("Duplicate event title found: ", x.fields.Title);
          return null;
        }
        titleMemo.push(x.fields.Title);
        return {
          id: x.id,
          objectID: x.id,
          resultType: "event",
          title: x.fields.Title,
          start: x.fields.Start,
          end: x.fields.End,
          description: x.fields.Description,
          location: x.fields.Location,
          link: x.fields["Event Link"],
        };
      })
      .filter((x) => x !== null);

    const basicResourceRecords = resourceRecords
      .filter((x) => x.fields.Title)
      .filter((x) => x.fields.Status === "publish")
      .filter((x) => x.fields["Hide?"] !== "yes")
      .filter((x) => x.fields["Is this a subresource?"] !== true)
      .filter((x) =>
        x.fields["Types"] ? x.fields["Types"].indexOf("Secret") < 0 : true
      ); // this is to hide the old school record itself
    const mappedResourceRecords = basicResourceRecords.map((x) => {
      const parentSlug =
        x.fields.Slug ||
        encodeURIComponent(
          x.fields.Title.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[?|.,/#!$%^&*;¿:{}'"“”‘’––=\-_`~()æœ]/g, "")
            .replace(/\s+/g, "-")
        );
      if (addSubresources && typeof x.fields.Subresource !== "undefined") {
        // add records for subresources pointing to the resource that uses them.
        const subResourcesIdList = x.fields.Subresource;
        // console.log(
        //   "Subresources for " +
        //     parentSlug +
        //     ": " +
        //     subResourcesIdList.join(", ")
        // );
        subResourcesIdList.forEach((y) => {
          if (subResoucesIdMemo.indexOf(y) === -1) {
            const thisRecord = resourceRecords.find((x) => x.id === y);
            if (
              thisRecord.fields["Is this a subresource?"] &&
              !Boolean(thisRecord.fields["Doesn't appear in search"]) &&
              thisRecord.fields.Status === "publish"
            ) {
              // Only add subresources that are hidden

              subResoucesIdMemo.push(y);
              const thisPage = {
                objectID: thisRecord.id,
                title: thisRecord.fields.Title,
                id: thisRecord.id,
                slug: parentSlug,
                Contact_info_email:
                  thisRecord.fields["Contact info email"] || "",
                Contact_info_link: thisRecord.fields["Contact info link"] || "",
                Contact_info_phone:
                  thisRecord.fields["Contact info phone"] || "",
                Description: thisRecord.fields.Description,
                image: thisRecord.fields.Image
                  ? {
                      width: thisRecord.fields.Image[0].width,
                      height: thisRecord.fields.Image[0].height,
                      id: thisRecord.id,
                      extension: thisRecord.fields.Image[0].filename
                        .split(".")
                        .pop(),
                    }
                  : {},
                Location: thisRecord.fields.Location || "",
                Resource_URL: thisRecord.fields["Resource URL"],
                Short_Description: thisRecord.fields["Short Description"],
                Tags: thisRecord.fields.Tags,
                Title: thisRecord.fields.Title,
                Types: thisRecord.fields.Types,
                Subresource: [],
              };
              // add these to subResourcePages
              subResourcePages.push(thisPage);
            }
          } else {
            console.error("Duplicate subresource found: ", y);
          }
        });
      }
      // console.log(
      //   "Subresources: ",
      //   subResourcePages.map((x) => x.title)
      // );

      return {
        objectID: x.id,
        title: x.fields.Title,
        id: x.id,
        slug: parentSlug,
        Contact_info_email: x.fields["Contact info email"] || "",
        Contact_info_link: x.fields["Contact info link"] || "",
        Contact_info_phone: x.fields["Contact info phone"] || "",
        Description: x.fields.Description,
        ShowOnFrontPage: Boolean(x.fields["Show on Front Page"]),
        image: x.fields.Image
          ? {
              width: x.fields.Image[0].width,
              height: x.fields.Image[0].height,
              id: x.id,
              extension: x.fields.Image[0].filename.split(".").pop(),
            }
          : {},
        Location: x.fields.Location || "",
        Resource_URL: x.fields["Resource URL"],
        Short_Description: x.fields["Short Description"],
        Tags: x.fields.Tags,
        Title: x.fields.Title,
        Types: x.fields.Types,
        resultType: "resource",
        Subresource:
          typeof x.fields.Subresource === "undefined"
            ? []
            : x.fields.Subresource.map((y) => {
                const thisID = y;
                const thisRecord = resourceRecords.find((x) => x.id === thisID);
                return {
                  id: y,
                  data: {
                    title: thisRecord.fields.Title,
                    types: thisRecord.fields.Types,
                    Description: thisRecord.fields.Description,
                    Short_Description: thisRecord.fields["Short Description"],
                  },
                };
              }),
      };
    });
    // console.log(mappedRecords.map((x) => x.title).join("\n"));
    console.log("Event records to send: ", basicEventRecords.length);
    if (addSubresources) {
      console.log("Subresources to send: ", subResourcePages.length);
      return [
        ...mappedResourceRecords.concat(subResourcePages),
        ...basicEventRecords,
      ];
    }
    return [...mappedResourceRecords, ...basicEventRecords];
  };

  try {
    console.log("Getting records from Airtable...");
    const transformed = await getRecordsForAlgolia();

    // initialize the client with your environment variables
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    );

    // initialize the index with your index name
    if (testMode) {
      console.log("Done. Total records to send: ", transformed.length);
    } else {
      const index = client.initIndex("nextindex");
      // add the data to the index
      // Old method was adding data rather than replacing it – moved to .replaceAllObjects, which seems to work
      // const algoliaResponse = await index.saveObjects(transformed);
      const algoliaResponse = await index.replaceAllObjects(transformed);
      console.log(
        `Successfully added ${algoliaResponse.objectIDs.length} records to Algolia search!`
      );
    }
    // console.log(`Object IDs:\n${algoliaResponse.objectIDs.join("\n")}`);
  } catch (err) {
    console.error("Error: ", err);
  }
})();
