import striptags from "striptags";

const ALLOWED_TAGS = ["br", "p", "a", "em", "strong", "i", "b"];

export const cleanDescriptionText = (text: string): string =>
  striptags(text.replace(/(?:\r\n|\r|\n)/g, "<br />"), ALLOWED_TAGS)
    .replace("Program:", "<strong>Program:</strong>")
    .replace("Event By:", "<strong>Event By:</strong>");
