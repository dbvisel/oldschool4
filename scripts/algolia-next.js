const Airtable = require("airtable");
const algoliasearch = require("algoliasearch/lite");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const testMode = true; // If this is true, we don't actually send the records to Algolia. If false, we do.
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

  const getRecordsForAlgolia = async () => {
    const records = await getResources();
    const subResourcePages = [];
    const subResoucesIdMemo = [];
    const basicRecords = records
      .filter((x) => x.fields.Title)
      .filter((x) => x.fields.Status === "publish")
      .filter((x) => x.fields["Hide?"] !== "yes")
      .filter((x) => x.fields["Is this a subresource?"] !== true)
      .filter((x) =>
        x.fields["Types"] ? x.fields["Types"].indexOf("Secret") < 0 : true
      ); // this is to hide the old school record itself
    const mappedRecords = basicRecords.map((x) => {
      const parentSlug =
        x.fields.Slug ||
        encodeURIComponent(
          x.fields.Title.toLowerCase()
            .trim()
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
            const thisRecord = records.find((x) => x.id === y);
            if (
              thisRecord.fields["Is this a subresource?"] &&
              !Boolean(thisRecord.fields["Doesn't appear in search"])
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
        Location: x.fields.Location || "",
        Resource_URL: x.fields["Resource URL"],
        Short_Description: x.fields["Short Description"],
        Tags: x.fields.Tags,
        Title: x.fields.Title,
        Types: x.fields.Types,
        Subresource:
          typeof x.fields.Subresource === "undefined"
            ? []
            : x.fields.Subresource.map((y) => {
                const thisID = y;
                const thisRecord = records.find((x) => x.id === thisID);
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
    if (addSubresources) {
      console.log("Subresources to send: ", subResourcePages.length);
      return mappedRecords.concat(subResourcePages);
    }
    return mappedRecords;
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
      console.log("Done. Records to send: ", transformed.length);
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
