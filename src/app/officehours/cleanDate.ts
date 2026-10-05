import { cleanDate } from "@/lib/dates";

const cleanedDate = cleanDate(
  "2026-10-21T17:30:00.000Z",
  "2026-10-21T18:30:00.000Z",
  false,
  true,
);

export default cleanedDate;
