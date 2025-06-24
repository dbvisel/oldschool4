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
          <p>
            There are no open positions at Old School at this point in time.
          </p>
          {/*<p className={styles.outdent}>
            <strong>Reports to:</strong> The Old School Team (Co-founders
            Ashton&nbsp;Applewhite and Ryan&nbsp;Backer, and Facilitator
            David&nbsp;Wilson)
          </p>
          <p className={styles.outdent}>
            <strong>Location:</strong> Virtual
          </p>
          <p className={styles.outdent}>
            <strong>Compensation:</strong>&nbsp;$80,000–$100,000 for a one-year
            contract
          </p>
          <h4>About the Old School Hub:</h4>
          <p>
            The Old School Hub for Age Equity and Ageism Awareness is a dynamic,
            grassroots organization dedicated to dismantling ageism and
            fostering a world where aging is a universally respected human
            right. Conceived of by internationally recognized ageism expert
            Ashton Applewhite and founded with Kyrie Carpenter and Ryan Backer,
            Old School began as the Old School Clearinghouse in 2018, a vital
            resource bank for the growing anti-ageism movement. Today, we
            empower individuals and advocates through:
          </p>
          <ul>
            <li>
              <strong>Office Hours:</strong> A popular weekly virtual gathering
              for open discussions about ageism (now in its fourth year)
            </li>
            <li>
              <strong>Hubsters:</strong> Bi-weekly virtual meetings of our
              working group, which evaluates and shapes projects for the Hub
            </li>
            <li>
              <strong>Learn:</strong> Our regularly updated and carefully
              curated resource bank
            </li>
            <li>
              <strong>Resource Creation:</strong> Developing conversation guides
              and other materials to promote age equity
            </li>
            <li>
              <strong>Community Building:</strong> Both virtual and in-person
              convenings,including our inaugural Summer School gathering
              (Montréal, August 2024) and projects like the Aging is Living
              artwork (launched March 2025)
            </li>
          </ul>
          <p>
            The Old School team is actively involved in trainings, workshops,
            academic collaborations, and supporting other pro-aging initiatives.
            While we’ve got a lot covered, we welcome the Executive Director’s
            insights and participation across all areas.
          </p>
          <h4>The Opportunity:</h4>
          <p>
            Old School Hub is seeking a transformative Executive Director to
            capitalize on our unique position and significantly expand our
            impact on the anti-ageism movement. This is an exciting chance to
            shape the future of a vital organization.
          </p>
          <h4>Key Responsibilities:</h4>
          <ul>
            <li>
              <strong>Visionary Leadership:</strong> Serve as a passionate
              ambassador for Old School, building relationships with funders,
              supporters, other social justice organizations, and the public.
            </li>
            <li>
              <strong>Collaborative Management:</strong> Provide strong
              leadership while fostering a collaborative environment. The
              contract will clearly define the Executive Director’s independent
              responsibilities and those requiring consultation with the Old
              School team.
            </li>
            <li>
              <strong>Financial Sustainability:</strong> Determine the best path
              to financial stability (e.g., securing nonprofit status or finding
              a new fiscal sponsor) and lead the implementation. Drive
              fundraising efforts to ensure long-term financial health within
              three years.
            </li>
            <li>
              <strong>Strategic Growth:</strong> Collaborate on staffing/hiring
              decisions and help initiate, execute, and evaluate future Old
              School initiatives, including laying the groundwork for a
              collective impact strategy.
            </li>
            <li>
              <strong>Organizational Stewardship:</strong> Attend one annual
              in-person meeting for program and budget review, strategic
              planning, and goal setting, as well as one convening of age
              advocates every two years (next in summer 2026).
            </li>
          </ul>
          <h4>About You:</h4>
          <ul>
            <li>
              <strong>Values Alignment:</strong> You prioritize
              consensus-building, transparency, and team well-being.
            </li>
            <li>
              <strong>Social Justice Commitment:</strong> You’re dedicated to
              supporting other social justice movements and advancing a world
              where everyone can age well.
            </li>
            <li>
              <strong>Collaborative Style:</strong> You thrive in
              consensus-driven environments.
            </li>
            <li>
              <strong>Proven Leadership:</strong> You have a successful track
              record of leading organizations through startup, growth, and
              beyond.
            </li>
            <li>
              <strong>Financial Acumen:</strong> You possess strong budget
              management and financial oversight skills.
            </li>
            <li>
              <strong>Strategic Thinking:</strong> You have experience
              developing and implementing effective strategic plans.
            </li>
            <li>
              <strong>Relationship Building:</strong> You excel at building
              relationships, fundraising, and networking.
            </li>
            <li>
              <strong>Best Practices:</strong> You are knowledgeable in and
              utilize best practices in organizational management.
            </li>
          </ul>
          <h4>Why Join Old School?</h4>
          <ul>
            <li>
              <strong>Meaningful Impact:</strong> You’ll be part of a movement
              that truly matters, working to advance equity across the lifespan
              in the world of longer lives. This work is deeply rewarding.
            </li>
            <li>
              <strong>Exceptional Opportunity:</strong> This role offers a
              unique chance to collaborate with a global thought leader and a
              skilled project manager, building on a strong foundation to
              elevate Old School to the next level.
            </li>
            <li>
              <strong>Supportive Team:</strong> You’ll join a dedicated,
              skilled, and collaborative team that values mutual respect.
            </li>
            <li>
              <strong>Transformative Vision:</strong> You’re inspired by the
              pivotal role Old School has played in raising awareness of ageism
              and how to end it. You have a vision for how to expand the reach
              and impact and are eager to lead the way.
            </li>
          </ul>
          <h4>Compensation and Details:</h4>
          <p>
            This is currently a 1099 contract position offering a salary of
            $80,000–$100,000 for a one-year term.
          </p>
          <p>
            Send the following to{" "}
            <a href="mailto:jobs@oldschool.info">jobs@oldschool.info</a>. Please
            include Executive Director in the subject line:
          </p>
          <ul>
            <li>
              A cover letter that includes how you learned about the position,
              how you meet these requirements, and why Old School’s mission
              excites you
            </li>
            <li>Your resume</li>
            <li>Three professional references</li>
            <li>A relevant writing sample</li>
          </ul>
          <p>
            Applications will be reviewed and considered as submitted; absolute
            closing date is May 15, 2025.
          </p>
          <p className={styles.small}>
            It is the policy of OS to prohibit discrimination against any person
            or organization based on age, race, sex, color, creed, religion,
            national origin, sexual orientation, gender, transgender status,
            gender identity, gender expression, ancestry, marital status,
            veteran status, political service or affiliation, or disability.
          </p>*/}
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
