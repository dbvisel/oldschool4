import Event from "@/components/Event";
import styles from "./page.module.css";
import getCleanEvents from "@/lib/getEvents";

// TODO: maybe we should be filtering by the time at the moment the viewer sees it? If so, we'd need to have startdate and enddate in the data.

const EventsPage = async () => {
  const events = await getCleanEvents();
  return (
    <article className="noscroll">
      <h2 className="pageheader">Events</h2>
      <h3 className={`tagline ${styles.taglineMarginTweak}`}>
        POWERED BY STEVEN FRAMPTON
      </h3>
      {events.length ? (
        events.map((event) => <Event event={event} key={event.id} />)
      ) : (
        <p>Loading...</p>
      )}
      <p className={styles.clickhere}>
        Click{" "}
        <a
          href="https://calendar.google.com/calendar/u/0?cid=ODVhYjBkZTI5ZTdhYjg3YTllNzFmNjM1MWRjZWViNDRkMGVjYmJkMDA0ZWEyMjU5YWEzMWNkYzllMGYyMTU3ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        to subscribe to our
        <br /> shared calendar of upcoming events.
      </p>
    </article>
  );
};

export default EventsPage;
