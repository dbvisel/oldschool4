import styles from "./page.module.css";

export default function EventsPage() {
  return (
    <article>
      <h2>Events page</h2>
      <p>(bring in event list component)</p>
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
}
