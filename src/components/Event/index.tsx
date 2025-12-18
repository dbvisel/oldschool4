"use client";

import { useState, useLayoutEffect } from "react";
import { EventRecord } from "@/types";
import { cleanDate } from "@/lib/dates";
import styles from "./index.module.css";

const regex = /a href/gi;

const Event = ({ event }: { event: EventRecord }) => {
  const cleanedDescription: String = event.description.replace(
    regex,
    'a target="_blank" rel="noopener noreferrer" href'
  );
  const [cleanedDate, setCleanedDate] = useState("...");
  const [isAlreadyPassed, setIsAlreadyPassed] = useState(false);

  useLayoutEffect(() => {
    setCleanedDate(cleanDate(event.startTime, event.endTime, event.isAllDay));
    // Now that we're using useLayoutEffect, we could check if the event has already happened, and if so, not return anything.
    // TODO: check if it's doing screwy things with all-day events?
    const endPoint = new Date(event.endTime).getTime();
    const now = new Date().getTime();
    if (endPoint < now) {
      setIsAlreadyPassed(true);
    }
  }, [event.startTime, event.endTime, event.isAllDay]);

  return isAlreadyPassed ? null : (
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
