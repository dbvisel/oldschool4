// "use client";

// import { Metadata } from "next";
import { Link } from "next-view-transitions";
import styles from "./page.module.css";
import Image from "next/image";

export default function OfficeHoursPage() {
  return (
    <article>
      <section className={styles.aboutPage}>
        <h2 className="pageheader">
          {" "}
          Find Your People.
          <br />
          Change the Culture.
        </h2>

        <a
          href="https://us02web.zoom.us/meeting/register/tZAvcOivqzkpG9CtqpP6cnaL64TnxKaY_fAg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/officehours/officehours.jpg"
            placeholder="blur"
            blurDataURL={"/images/officehours/officehours.jpg"}
            alt="Office Hours"
            width={800}
            height={(1042 / 1820) * 800}
          />
        </a>
        <p>
          Tired of the same old stories about aging? Join the movement at Old
          School Office Hours. Every Wednesday, our co-founders and a global
          community of advocates gather for an informal, open-mic style
          conversation about dismantling ageism. Whether you’re a seasoned
          activist or just starting to unlearn your own biases, this is your
          entry point.
        </p>
        <ul style={{ marginTop: "var(--paddingOutside" }}>
          <li>
            <strong>When:</strong> every Wednesday
          </li>
          <li>
            <strong>The vibe:</strong> informal, honest, and welcoming
          </li>
          <li>
            <strong>How to Participate:</strong> listen in, speak up, or just
            see what we’re all about
          </li>
          <li>
            <strong>Where to join:</strong>{" "}
            <a
              href="https://us02web.zoom.us/meeting/register/tZAvcOivqzkpG9CtqpP6cnaL64TnxKaY_fAg"
              target="_blank"
              rel="noopener noreferrer"
            >
              go here!
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

export const metadata = {
  title: `Old School: Office Hours`,
};
