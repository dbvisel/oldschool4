import Config from "./../config";

// TODO: should this be pulled in from Airtable list or synched in some way?

export const definedTypes = [
  ...(Config.useCovidSection
    ? [
        {
          id: "covid19",
          name: "COVID-related resources",
          sentenceName: "COVID-related resources",
          tag: "COVID-related resources",
          airtableName: "COVID-19",
          banner: "covid19",
          image: null,
        },
      ]
    : []),

  {
    id: "tools",
    name: "Tools",
    sentenceName: "tools",
    tag: "Fun and functional ways to uncover and dismantle ageism",
    airtableName: "Tool",
    image: "toolsImage",
    banner: null,
    width: 326,
    height: 483,
  },
  {
    id: "reports-papers",
    name: "Reports & Papers",
    sentenceName: "reports and papers",
    tag: "Shorter takes by experts across many domains",
    airtableName: "Reports and Papers",
    isSmall: true,
    image: "booksImage",
    banner: null,
    width: 326,
    height: 483,
  },
  {
    id: "books-blogs",
    name: "Books & Blogs",
    sentenceName: "books & blogs",
    tag: "Work by writers who educated us about ageism",
    airtableName: "Books and Blogs",
    isSmall: true,
    image: "blogsImage",
    banner: null,
    width: 326,
    height: 483,
  },
  // {
  //   id: "blogs-papers",
  //   name: "Blogs & Papers",
  //   sentenceName: "blogs & papers",
  //   tag: "More anti-ageism work online and in print",
  //   airtableName: "Blog or Paper",
  //   isSmall: true,
  //   image: "blogsImage",
  // },
  {
    id: "campaigns",
    name: "Campaigns",
    sentenceName: "campaigns",
    tag: "Anti-ageism action plans both large and small",
    airtableName: "Campaign",
    image: "campaignsImage",
    banner: null,
    width: 1024,
    height: 768,
  },
  // {
  //   id: "speakers",
  //   name: "Speakers",
  //   sentenceName: "speakers",
  //   tag: "Speakers, educators, and thought leaders of all ages",
  //   airtableName: "Speaker",
  //   image: "speakersImage",
  // },
  {
    id: "talks",
    name: "Talks",
    sentenceName: "talks",
    tag: "Hear from speakers, educators, and thought leaders of all ages",
    airtableName: "Talk",
    image: "speakersImage",
    banner: null,
    width: 275,
    height: 183,
  },
  {
    id: "videos",
    name: "Videos",
    sentenceName: "videos",
    tag: "Watch, learn, and share",
    airtableName: "Video",
    image: "videosImage",
    banner: null,
    width: 326,
    height: 451,
  },
  {
    id: "organizations",
    name: "Organizations",
    sentenceName: "organizations",
    tag: "Connect to and learn from groups working on age bias",
    airtableName: "Organization",
    isSmall: true,
    image: "organizationsImage",
    banner: null,
    width: 1024,
    height: 768,
  },
  {
    id: "podcasts",
    name: "Podcasts",
    sentenceName: "podcasts",
    tag: "Listen to veteran and emerging voices talk about ageism",
    airtableName: "Podcast",
    image: "podcastsImage",
    banner: null,
    width: 656,
    height: 800,
  },
  {
    id: "supplies",
    airtableName: "supplies",
    name: "School Supplies",
    sentenceName: "School Supplies",
    tag: "There’s merch for that! We know this stuff isn’t free—but it is for a good cause.",
    image: "suppliesImage",
    banner: null,
    width: 656,
    height: 800,
  },
  {
    id: "ospublications",
    name: "OS Publications",
    sentenceName: "OS publications",
    tag: "Resources published by Old School",
    airtableName: "OS publications",
    banner: null,
  },
];

// THIS BECOMES:
/*

BOOKS & BLOGS
Work by writers who educated us about ageism 
REPORTS and PAPERS
Shorter takes by experts across many domains

*/

// why is this separate from definedTypes?

export const allTypes = [
  ...(Config.useCovidSection
    ? []
    : [
        {
          id: "covid19",
          name: "COVID-related resources",
          sentenceName: "COVID-related resources",
          tag: "COVID-related resources",
          airtableName: "COVID-19",
          banner: true,
          image: null,
        },
      ]),
  ...definedTypes,
];

export const getDefinedName = (airtableName) => {
  const result = definedTypes.filter((x) => x.airtableName === airtableName);
  return result.length ? result[0].name : airtableName;
};

export const getAirTableName = (typeId) => {
  const result = definedTypes.filter((x) => x.id === typeId);
  return result.length ? result[0].airtableName : typeId;
};

export const getImageName = (typeId) => {
  const result = definedTypes.filter((x) => x.id === typeId);
  return result.length ? result[0].image : typeId;
};
