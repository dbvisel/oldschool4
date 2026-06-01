import { slugify, fixLink } from "./misc";

describe("slugify", () => {
  it("converts a title to a slug when no slug is provided", () => {
    expect(slugify("", "Hello World")).toBe("hello-world");
  });

  it("uses the provided slug instead of the title", () => {
    expect(slugify("custom-slug", "Hello World")).toBe("custom-slug");
  });

  it("lowercases a provided slug", () => {
    expect(slugify("My-Slug", "Hello World")).toBe("my-slug");
  });

  it("strips accented characters from titles", () => {
    expect(slugify("", "Café")).toBe("cafe");
    expect(slugify("", "naïve")).toBe("naive");
  });

  it("removes punctuation from titles", () => {
    expect(slugify("", "What Is Ageism?")).toBe("what-is-ageism");
    expect(slugify("", "Ready, Set, Go!")).toBe("ready-set-go");
  });

  it("replaces spaces with hyphens", () => {
    expect(slugify("", "hello world")).toBe("hello-world");
  });

  it("collapses multiple spaces into a single hyphen", () => {
    expect(slugify("", "hello  world")).toBe("hello-world");
  });

  it("returns an empty string when both slug and title are empty", () => {
    expect(slugify("", "")).toBe("");
  });
});

describe("fixLink", () => {
  it("adds https:// to a bare URL", () => {
    expect(fixLink("example.com")).toBe("https://example.com");
    expect(fixLink("example.com/path/to/page")).toBe(
      "https://example.com/path/to/page"
    );
  });

  it("does not modify an https:// URL", () => {
    expect(fixLink("https://example.com")).toBe("https://example.com");
  });

  it("does not modify an http:// URL", () => {
    expect(fixLink("http://example.com")).toBe("http://example.com");
  });

  it("returns an empty string unchanged", () => {
    expect(fixLink("")).toBe("");
  });
});
