import Event from "@/app/components/Event";
import styles from "./page.module.css";
import getCleanEvents from "@/lib/getEvents";

// TODO: maybe we should be filtering by the time at the moment the viewer sees it? If so, we'd need to have startdate and enddate in the data.

const EventsPage = async () => {
  const events = await getCleanEvents();
  return (
    <article>
      <h2>Events page</h2>
      <h3>POWERED BY STEVEN FRAMPTON</h3>
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
      <p>
        <a href="/">Home</a>
      </p>
    </article>
  );
};

export default EventsPage;
