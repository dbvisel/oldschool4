// this adds https:// to any link without a protocol in front of it.

export const fixLink = (url: string): string => {
  if (url && url.length && url.indexOf("http") < 0) {
    return "https://" + url;
  }
  return url;
};

export const slugify = (slug: string, title: string): string =>
  slug ||
  encodeURIComponent(
    title
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[?|.,/#!$%^&*;¿:{}'"“”‘’––=\-_`~()æœ]/g, "")
      .replace(/\s+/g, "-")
  );
