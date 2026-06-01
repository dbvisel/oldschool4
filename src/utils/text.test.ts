import { cleanDescriptionText } from "./text";

describe("cleanDescriptionText", () => {
  describe("tag stripping", () => {
    it("strips disallowed tags while keeping their text content", () => {
      expect(cleanDescriptionText("<div>Hello</div>")).toBe("Hello");
      expect(cleanDescriptionText("<span>Hello</span>")).toBe("Hello");
      expect(cleanDescriptionText("<h2>Title</h2>")).toBe("Title");
    });

    it("preserves allowed block and inline tags", () => {
      expect(cleanDescriptionText("<p>Hello</p>")).toBe("<p>Hello</p>");
      expect(cleanDescriptionText("<strong>bold</strong>")).toBe(
        "<strong>bold</strong>"
      );
      expect(cleanDescriptionText("<em>emphasis</em>")).toBe(
        "<em>emphasis</em>"
      );
      expect(cleanDescriptionText("<i>italic</i>")).toBe("<i>italic</i>");
      expect(cleanDescriptionText("<b>bold</b>")).toBe("<b>bold</b>");
    });

    it("preserves anchor tags including their attributes", () => {
      const link = '<a href="https://example.com">click here</a>';
      expect(cleanDescriptionText(link)).toBe(link);
    });

    it("preserves <br /> self-closing tags", () => {
      expect(cleanDescriptionText("line<br />break")).toBe("line<br />break");
    });
  });

  describe("newline conversion", () => {
    it("converts Unix newlines (\\n) to <br />", () => {
      expect(cleanDescriptionText("line1\nline2")).toBe("line1<br />line2");
    });

    it("converts Windows newlines (\\r\\n) to <br />", () => {
      expect(cleanDescriptionText("line1\r\nline2")).toBe("line1<br />line2");
    });

    it("converts carriage returns (\\r) to <br />", () => {
      expect(cleanDescriptionText("line1\rline2")).toBe("line1<br />line2");
    });
  });

  describe("text replacements", () => {
    it('wraps "Program:" in a <strong> tag', () => {
      expect(cleanDescriptionText("Program: details here")).toBe(
        "<strong>Program:</strong> details here"
      );
    });

    it('wraps "Event By:" in a <strong> tag', () => {
      expect(cleanDescriptionText("Event By: organizer name")).toBe(
        "<strong>Event By:</strong> organizer name"
      );
    });
  });

  describe("combined behavior", () => {
    it("strips outer tags, converts newlines, and applies replacements", () => {
      const input =
        "<div>Program: intro\nEvent By: org\n<span>extra</span></div>";
      const result = cleanDescriptionText(input);
      expect(result).toContain("<strong>Program:</strong>");
      expect(result).toContain("<strong>Event By:</strong>");
      expect(result).toContain("<br />");
      expect(result).not.toContain("<div>");
      expect(result).not.toContain("<span>");
    });
  });
});
