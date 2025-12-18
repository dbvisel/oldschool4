import { Metadata } from "next";
import { Link } from "next-view-transitions";
import dynamic from "next/dynamic";
const Event = dynamic(() => import("@/components/Event"), { ssr: false });
import styles from "./page.module.css";
import getCleanEvents from "@/lib/getEvents";

const EventsPage = async () => {
  const events = await getCleanEvents();
  return (
    <article className="noscroll">
      <h2 className="pageheader">Events</h2>
      <h3 className={`tagline ${styles.taglineMarginTweak}`}>
        Submit events <Link href={`/events/submit`}>here</Link>!
      </h3>
      {events.length ? (
        events.map((event) => <Event event={event} key={event.id} />)
      ) : (
        <p>Loading...</p>
      )}
      <p className={styles.clickhere}>
        Click{" "}
        <a
          href="https://calendar.google.com/calendar/u/1?cid=ZTg0YTk2MjM2YjhjZTRjMmI1MGZmZjcxYTUyZDZlM2JmZjBlZDQ0ZDNhZDc1MDdlY2E3MzgzNDkwZjM0NTE4OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
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

export async function generateMetadata(): Promise<Metadata> {
  const metaData = {
    title: `Old School: Events`,
  };

  return {
    ...metaData,
  };
}
