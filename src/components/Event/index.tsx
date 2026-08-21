"use client";

import { useState } from "react";
import type { EventRecord } from "@/types";
import { cleanDate } from "@/lib/dates";
import styles from "./index.module.css";

const regex = /a href/gi;

const Event = ({ event }: { event: EventRecord }) => {
  const cleanedDescription: String = event.description.replace(
    regex,
    'a target="_blank" rel="noopener noreferrer" href'
  );
  const cleanedDate = cleanDate(
    event.startTime,
    event.endTime,
    event.isAllDay
  );
  // TODO: check if it's doing screwy things with all-day events?
  const [isAlreadyPassed] = useState(
    () => new Date(event.endTime).getTime() < Date.now()
  );

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
