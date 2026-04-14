import { Metadata } from "next";

import styles from "./page.module.css";

export default function WinterSchoolPage() {
  return (
    <article className={styles.hireUs}>
      <section>
        <h2
          style={{
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.1 !important",
          }}
        >
          Save the date—
          <br />
          <span style={{ fontStyle: "normal" }}>January 15-17, 2027</span>
          <br />
          —for Winter School.
        </h2>
        <h3
          style={{
            textAlign: "center",
            fontSize: "1.5em",
            lineHeight: "1.55",
            marginBottom: "2em",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: "normal",
          }}
        >
          It’s going to be hot.
          <br />
          Not just because it’s in Guadalajara, Mexico.
        </h3>
        <div className={styles.topDiv}>
          <div>
            <p>
              In August, 2024, Old School hosted its first in-person convening,
              in Montréal, Canada. Forty age advocates came together for
              two-and-a-half days to envision a world without ageism. We called
              it{" "}
              <a
                href="https://drive.google.com/file/d/1K6QtHkWWVdL0Ln2xJ5ZMDT9x09Iz0KxR/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: "bold" }}
              >
                Summer School
              </a>
              , and it was transformative.
            </p>
            <p style={{ textIndent: "2em" }}>
              This winter we’ll be hosting our second in-person gathering, in
              Guadalajara, Mexico—home to Alessandro Negrete, Old School’s
              Executive Director. It’ll be like Summer School in some important
              ways: familiar faces, same attendee-led “unconference” format,
              great food, exhilarating discussions. Winter School will differ in
              other important ways: unfamiliar faces, emerging roles for
              participants, and an ambitious set of ageism-busting initiatives
              to explore and inform. Come hungry. Come curious. Come!
            </p>
            <p style={{ textIndent: "2em" }}>
              For updates, scroll down and sign up for the Old School
              newsletter. And save the date. There was a waiting list in 2024,
              just sayin’, and we’ve come a long way since then.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metaData = {
    title: `Old School: Winter School`,
  };

  return {
    ...metaData,
  };
}
