import striptags from "striptags";
import { getEvents } from "@/utils/airtable";
import { EventRecord } from "../types";

const cleanDate = (start: string, end: string): string => {
  const startDate = new Date(start).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  });
  const startTime = new Date(start).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York",
    timeZoneName: "short",
  });
  const endDate = new Date(end).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  });
  const endTime = new Date(end).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York",
    timeZoneName: "short",
  });

  if (end) {
    if (startDate === endDate) {
      return `${startDate} from ${startTime} to ${endTime}`;
    }
    return `${startDate} at ${startTime} to ${endDate} at ${endTime}`;
  }
  return `${startDate} at ${startTime}`;
};

const cleanDescriptionText = (text: string): string =>
  striptags(text.replace(/(?:\r\n|\r|\n)/g, "<br />"), [
    "br",
    "p",
    "a",
    "em",
    "strong",
    "i",
    "b",
  ])
    .replace("Program:", "<strong>Program:</strong>")
    .replace("Event By:", "<strong>Event By:</strong>");

const cleanEvent = (data: any): EventRecord => {
  return {
    id: data.id,
    title: data.fields.Title,
    time: cleanDate(data.fields.Start, data.fields.End),
    location: data.fields.Location,
    description: cleanDescriptionText(data.fields.Description || ""),
    link: data.fields["Event Link"],
    googleCalendarLink: data.fields["Open in Google Calendar"].url,
  };
};

const getCleanEvents = async (): Promise<EventRecord[]> => {
  const events = await getEvents();
  const cleanedEvents = await Promise.all(
    events.map((event: any) => cleanEvent(event))
  );
  return cleanedEvents;
};

export default getCleanEvents;
