// this adds https:// to any link without a protocol in front of it.

export const fixLink = (url) => {
  if (url && url.length && url.indexOf("http") < 0) {
    return "https://" + url;
  }
  return url;
};
