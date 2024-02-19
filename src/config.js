const Config = {
  noLazyLoading: true,
  useCovidSection: false, // false,
  useEventsSection: true,
  submitFormURL: `https://airtable.com/embed/shrfiHCYq00KUJoOY?backgroundColor=green`,
  turnOffSearch: false,
  siteURL:
    process.env.NODE_ENV === "production"
      ? "https://oldschool.info"
      : "https://oldschool4.netlify.app",
  //	submitFormURL: 'https://airtable.com/embed/shrfiHCYq00KUJoOY?backgroundColor=green'
};

export default Config;
