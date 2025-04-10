// import Link from "next/link";
// import { Suspense } from "react";
// import { Metadata } from "next";
// import { Link } from "next-view-transitions";
import styles from "./page.module.css";

export default function JobsPage() {
  return (
    <article
      className={styles.about}
      style={{ scrollSnapAlign: "none" }}
      id="top"
    >
      <section
        className={styles.jobBlock}
        // style={{ scrollSnapAlign: "none" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <h2>Jobs</h2>
          <h3>Contract Executive Director</h3>
          <p className="subhead">
            Join the Old School Hub and Be a Leading Voice in the Age Equity
            Movement!
          </p>
          <h4>About Old School:</h4>
          <p>
            Old School Hub for Age Equity and Ageism Awareness, conceived by
            Ashton Applewhite, is a dynamic organization dedicated to
            dismantling ageism and promoting a world where aging is a human
            right. We educate people about ageism and connect people working to
            end it. Initiatives include:
          </p>
          <ul>
            <li>
              <strong>Office Hours:</strong> Weekly virtual discussions on
              ageism
            </li>
            <li>
              <strong>Hubsters:</strong> Bi-weekly working group meetings
            </li>
            <li>
              <strong>Learn:</strong> An extensive resource bank
            </li>
            <li>
              <strong>Resource Creation:</strong> Develop educational materials
              and trainings
            </li>
            <li>
              <strong>Community Building:</strong> Virtual and in-person
              convenings and collaborations
            </li>
          </ul>
          <p>
            We seek a visionary Executive Director with an entrepreneurial
            spirit to expand our impact and lead our growth.
          </p>
          <h4>Opportunity:</h4>
          <p>
            This is a contract role to significantly advance Old School’s
            mission and impact.
          </p>
          <h4>Key Responsibilities:</h4>
          <ul>
            <li>
              <strong>Leadership:</strong> Serve as the public face of Old
              School, building relationships with funders and partners
            </li>
            <li>
              <strong>Management:</strong> Lead and foster a{" "}
              <strong>collaborative</strong> team environment
            </li>
            <li>
              <strong>Financial Sustainability:</strong> Secure financial
              stability through fundraising and strategic planning
            </li>
            <li>
              <strong>Strategic Growth:</strong> Develop and implement strategic
              initiatives
            </li>
            <li>
              <strong>Organizational Stewardship:</strong> Participate in annual
              meetings for planning and review
            </li>
          </ul>
          <h4>Qualifications:</h4>
          <ul>
            <li>Alignment with social justice values</li>
            <li>Proven leadership in organizational growth</li>
            <li>Strong financial management skills</li>
            <li>Experience in strategic planning and implementation</li>
            <li>Excellent relationship-building and fundraising abilities</li>
            <li>Knowledge of best practices in organizational management</li>
            <li>Thrives in consensus-driven environments</li>
          </ul>
          <h4>Compensation and Details:</h4>
          <ul>
            <li>1-year contract (1099).</li>
            <li>Salary: $80,000 - $100,000 yearly</li>
          </ul>
          <h4>To Apply:</h4>
          <p>
            Send the following to{" "}
            <a href="mailto:jobs@oldschoolhub.com">jobs@oldschoolhub.com</a>{" "}
            (subject: Executive Director):
          </p>
          <ul>
            <li>
              Cover letter detailing your qualifications, including
              running/participating in a consensus-driven organization and your
              passion for Old School’s mission
            </li>
            <li>Resume</li>
            <li>Three professional references</li>
            <li>A relevant writing sample</li>
          </ul>
          <p>
            <strong>Application Deadline:</strong> May 15, 2025.{" "}
            <a href="/">Click here to apply.</a>.
          </p>
          <p className={styles.small}>
            It is the policy of OS to prohibit discrimination against any person
            or organization based on age, race, sex, color, creed, religion,
            national origin, sexual orientation, gender, transgender status,
            gender identity, gender expression, ancestry, marital status,
            veteran status, political service or affiliation, or disability.
          </p>
        </div>
      </section>
    </article>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const metaData = {
//     title: `Old School: Jobs`,
//   };

//   return {
//     ...metaData,
//   };
// }
