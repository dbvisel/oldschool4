const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const resourcesBase = base("oldschool");
const quotesBase = base("quotes");
const teamBase = base("The Team/Collaborators");
const eventsBase = base("EVENTS");
const categoriesBase = base("Categories");

const slugify = (record) =>
  record.fields.Slug ||
  encodeURIComponent(
    (record.fields.Title || "")
      .toLowerCase()
      .trim() // adding this just in case
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[?|.,/#!$%^&*;¿:{}'"“”‘’––=\-_`~()æœ]/g, "")
      .replace(/\s+/g, "-")
  );

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = async (records) => {
  return records.map((record) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record) => {
  if (!record) {
    console.error("record is undefined!");
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};

const getQuotes = async () => {
  const records = await quotesBase.select({ view: "Grid view" }).all();
  const minifiedRecords = await getMinifiedRecords(records);
  const filteredRecords = minifiedRecords.filter(
    (x) => x.fields.Offering && x.fields.Offering.indexOf("Website ") > -1 // note that it is "Website " and not "Website"
  );

  // console.log(minifiedRecords);

  return filteredRecords;
};

const getCategories = async () => {
  const records = await categoriesBase.select({ view: "Grid view" }).all();
  const minifiedRecords = await getMinifiedRecords(records);

  // console.log(minifiedRecords);

  return minifiedRecords;
};

const getResources = async () => {
  const records = await resourcesBase.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);
  const imagedRecords = minifiedRecords
    .filter((x) => x.fields.Title) // they left in a blank row
    .map((x) => {
      if (x.fields.Image) {
        const thePath = `/images/resources/${
          x.id
        }.${x.fields.Image[0].filename.split(".").pop()}`;

        return { imagePath: thePath, ...x };
      }
      return x;
    });
  return imagedRecords;
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

  const sortedRecords = currentRecords.sort((a, b) => {
    const x1 = new Date(a.fields.Start);
    const x = x1.getTime() || 0;
    const y1 = new Date(b.fields.Start);
    const y = y1.getTime() || 0;
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  });

  const memo = {};

  const filteredRecords = sortedRecords.filter((x) => {
    // This is trying to filter out repeateting events
    // It's assuming that the Event ID coming from Google has the same content before the "_"
    // Not 100% sure if that's true?
    const maxRepetitions = 3; // the number of times something repeated should be featured
    const theId = x.fields["Event ID"].split("_")[0];
    if (memo[theId] && memo[theId] > maxRepetitions - 1) {
      return false;
    }
    if (!memo[theId]) {
      memo[theId] = 1;
    } else {
      memo[theId] += 1;
    }
    return true;
  });
  return filteredRecords;
};

const getResourcesOfType = async (type) => {
  const records = await getResources();
  const typedResources = records
    .map((x) => {
      return { imagePath: x.imagePath, ...x.fields, id: x.id };
    })
    .filter((x) => x.Types && x.Types.length && x.Types.indexOf(type) > -1)
    .filter((x) => x.Status === "publish")
    .filter((x) => x["Hide?"] !== "yes")
    .filter((x) => x["Is this a subresource?"] !== true)
    .sort((a, b) => {
      const x1 = new Date(a["Date added"]);
      const x = x1.getTime() || 0;
      const y1 = new Date(b["Date added"]);
      const y = y1.getTime() || 0;
      if (x > y) return -1;
      if (y > x) return 1;
      return 0;
    });
  return typedResources;
};

const getTopResources = async () => {
  const records = await getResources();
  const slicedRecords = records
    .map((x) => {
      return { imagePath: x.imagePath, id: x.id, ...x.fields };
    })
    .filter((x) => x.Status === "publish")
    .filter((x) => x["Hide?"] !== "yes")
    .filter((x) => x["Is this a subresource?"] !== true)
    .sort((a, b) => {
      const x1 = new Date(a["Date added"]);
      const x = x1.getTime() || 0;
      const y1 = new Date(b["Date added"]);
      const y = y1.getTime() || 0;
      if (x > y) return -1;
      if (y > x) return 1;
      return 0;
    })
    .slice(0, 12);
  return slicedRecords;
};

const getNewResources = async () => {
  const records = await getResources();
  const slicedRecords = records
    .map((x) => {
      return { imagePath: x.imagePath, id: x.id, ...x.fields };
    })
    .filter((x) => x.Status === "publish")
    .filter((x) => x["Hide?"] !== "yes")
    .filter((x) => x["Is this a subresource?"] !== true)
    .filter((x) => x["Show on Front Page"] === true)
    .sort((a, b) => {
      const x1 = new Date(a["Date added"]);
      const x = x1.getTime() || 0;
      const y1 = new Date(b["Date added"]);
      const y = y1.getTime() || 0;
      if (x > y) return -1;
      if (y > x) return 1;
      return 0;
    })
    .slice(0, 12);
  // as a fallback, if there's nothing in this, send back the top resources
  return slicedRecords.length ? slicedRecords : getTopResources();
};

const getTeam = async () => {
  const records = await teamBase.select({ view: "For site" }).all();
  const minifiedRecords = await getMinifiedRecords(records);
  const imagedRecords = minifiedRecords.map((x) => {
    const thePath = `/images/team/${
      x.id
    }.${x.fields.Attachments[0].filename.split(".").pop()}`;
    const output = {
      imagePath: thePath,
      ...x,
    };
    return output;
  });
  return imagedRecords;
};

const getResourceById = async (id) => {
  const thisRecord = await resourcesBase.find(id);
  const record = minifyRecord(thisRecord);
  if (record.fields.Image) {
    const thePath = `/images/resources/${
      record.id
    }.${record.fields.Image[0].filename.split(".").pop()}`;
    record.imagePath = thePath;
  } else {
    // console.error("Error! ", record);
    record.imagePath = "";
  }

  return record;
};

const getCategoryById = async (id) => {
  const categories = await getCategories(id);
  const thisRecord = categories.filter(
    (x) => x.fields && x.fields.ID && x.fields.ID === id
  )[0];
  const record = minifyRecord(thisRecord);
  return record;
};

const possibleSlugs = async () => {
  // could probably improve this code by caching the results somewhere? This function is being run for every possible page.
  const records = await getResources();
  const preSlugs = records
    .filter((x) => x.fields.Status === "publish") // is this not always working? Other ones pop up on build
    .filter((x) => x.fields["Hide?"] !== "yes")
    .filter((x) => x.fields["Is this a subresource?"] !== true)
    .map((x) => {
      // console.log(slugify(x), x.fields.Status);
      return {
        id: x.id,
        slug: slugify(x),
      };
    });
  return preSlugs;
};

const possibleCategories = async () => {
  // this is not actually being used!
  const records = await getCategories();
  const preSlugs = records.map((x) => {
    // console.log(slugify(x), x.fields.Status);
    return {
      id: x.id,
      slug: slugify(x),
    };
  });
  return preSlugs;
};

const getRecordsForAlgolia = async () => {
  const records = await getResources();
  const basicRecords = records
    .map((x) => x.fields)
    .filter((x) => x.Status === "publish")
    .filter((x) => x["Hide?"] !== "yes")
    .filter((x) => x["Is this a subresource?"] !== true);
  return basicRecords;
};

export {
  getRecordsForAlgolia,
  possibleSlugs,
  possibleCategories,
  getQuotes,
  getResourceById,
  getCategoryById,
  getTopResources,
  getNewResources,
  getResourcesOfType,
  getResources,
  getTeam,
  getEvents,
};
