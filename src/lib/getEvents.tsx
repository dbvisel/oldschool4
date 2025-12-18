import striptags from "striptags";
import { getEvents } from "@/utils/airtable";
import { EventRecord } from "../types";
import { cleanDate } from "./dates";

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
    time: cleanDate(
      data.fields.Start,
      data.fields.End,
      Boolean(data.fields["All Day"])
    ),
    startTime: data.fields.Start,
    endTime: data.fields.End,
    isAllDay: Boolean(data.fields["All Day"]),
    location: data.fields.Location,
    description: cleanDescriptionText(data.fields.Description || ""),
    link: data.fields["Event Link"],
    googleCalendarLink: data.fields["Open in Google Calendar"].url,
  };
};

export const getCleanEvents = async (): Promise<EventRecord[]> => {
  const events = await getEvents();
  const cleanedEvents = await Promise.all(
    events.map((event: any) => cleanEvent(event))
  );
  return cleanedEvents;
};
