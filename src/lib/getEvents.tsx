import { getEvents } from "@/utils/airtable";
import type { AirtableRecord, EventRecord } from "../types";
import { cleanDate } from "./dates";
import { cleanDescriptionText } from "../utils/text";

const cleanEvent = (data: AirtableRecord): EventRecord => {
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
    events.map((event: AirtableRecord) => cleanEvent(event))
  );
  return cleanedEvents;
};
