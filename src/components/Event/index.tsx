"use client";

import { useState, useLayoutEffect } from "react";
import styles from "./index.module.css";
import { EventRecord } from "@/types";
import { cleanDate } from "@/lib/dates";

const regex = /a href/gi;

const Event = ({ event }: { event: EventRecord }) => {
  const cleanedDescription: String = event.description.replace(
    regex,
    'a target="_blank" rel="noopener noreferrer" href'
  );
  const [cleanedDate, setCleanedDate] = useState("");
  useLayoutEffect(() => {
    const date = cleanDate(event.startTime, event.endTime, event.isAllDay);
    setCleanedDate(date);
  }, [event.startTime, event.endTime, event.isAllDay]);
  return (
    <div className={styles.event}>
      <header>
        <h3>{event.title}</h3>
        <a
          href={String(event.googleCalendarLink)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Add to Google Calendar
        </a>
      </header>
      <div className={styles.eventbody}>
        <p
          dangerouslySetInnerHTML={{ __html: cleanedDescription }}
          className={styles.description}
        />
        <p>
          <strong>Date:</strong> {cleanedDate}
        </p>
        {event.location ? (
          <p className={styles.link}>
            <strong>Location:</strong>{" "}
            <a href={event.location} target="_blank" rel="noopener noreferrer">
              {event.location}
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Event;
