import { cleanDate } from "./dates";

// Fixed UTC timestamps. Tests run with TZ=UTC (set in the npm test script)
// so these represent exactly the dates/times shown in output.
const JUN_15_2PM = "2024-06-15T14:00:00Z";
const JUN_15_4PM = "2024-06-15T16:00:00Z";
const JUN_16_4PM = "2024-06-16T16:00:00Z";

describe("cleanDate", () => {
  describe("same-day timed event", () => {
    it("includes the date", () => {
      const result = cleanDate(JUN_15_2PM, JUN_15_4PM, false);
      expect(result).toContain("June 15");
      expect(result).toContain("2024");
    });

    it('uses "from … to" format', () => {
      const result = cleanDate(JUN_15_2PM, JUN_15_4PM, false);
      expect(result).toContain("from");
    });

    it("does not mention the end date separately", () => {
      const result = cleanDate(JUN_15_2PM, JUN_15_4PM, false);
      expect(result).not.toContain("June 16");
    });
  });

  describe("multi-day timed event", () => {
    it("includes both start and end dates", () => {
      const result = cleanDate(JUN_15_2PM, JUN_16_4PM, false);
      expect(result).toContain("June 15");
      expect(result).toContain("June 16");
    });

    it('does not use "from" (reserved for same-day events)', () => {
      const result = cleanDate(JUN_15_2PM, JUN_16_4PM, false);
      expect(result).not.toContain("from");
    });
  });

  describe("all-day event", () => {
    it("returns only the date with no time component", () => {
      const result = cleanDate(JUN_15_2PM, JUN_15_4PM, true);
      expect(result).toContain("June 15");
      expect(result).not.toMatch(/\d:\d\d/);
    });

    it("does not show a time range", () => {
      const result = cleanDate(JUN_15_2PM, JUN_15_4PM, true);
      expect(result).not.toContain("from");
    });
  });

  describe("event with no end time", () => {
    it("includes the start date", () => {
      const result = cleanDate(JUN_15_2PM, "", false);
      expect(result).toContain("June 15");
    });

    it("does not show a range", () => {
      const result = cleanDate(JUN_15_2PM, "", false);
      expect(result).not.toContain("from");
      expect(result).not.toContain("June 16");
    });
  });
});
