import Link from "next/link";
import styles from "./index.module.css";
import { EventRecord } from "@/types";

const Event = ({ event }: { event: EventRecord }) => {
  // console.log(event);
  return (
    <div className={styles.event}>
      <header>
        <h3>{event.title}</h3>
        <Link href={event.googleCalendarLink}>Add to Google Calendar</Link>
      </header>
      <div className={styles.eventbody}>
        <p
          dangerouslySetInnerHTML={{ __html: event.description }}
          className={styles.description}
        />
        <p>
          <strong>Date:</strong> {event.time}
        </p>
        <p className={styles.link}>
          <strong>Location:</strong>{" "}
          <Link href={event.location}>{event.location}</Link>
        </p>
      </div>
    </div>
  );
};

export default Event;