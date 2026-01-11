import { Metadata } from "next";
import { Link } from "next-view-transitions";
// import Image from "next/image";
import styles from "./page.module.css";

const IntroPage = () => {
  return (
    <article>
      <div className={styles.introArticle}>
        <h2>
          Interested in learning more about age bias? Meeting other age
          advocates? Joining the movement?
          <br />
          <span style={{ fontWeight: "normal" }}>
            Here are some ways to get started:
          </span>
        </h2>
        <div className={styles.topDiv}>
          <div>
            <ul>
              <li>
                explore hundreds of curated resources by clicking on Learn in
                the menu bar. Suggested entry points{" "}
                <Link href={`/intro/links/`}>here</Link>.
              </li>
              <li>
                find friends and allies by joining us{" "}
                <a
                  href="https://us02web.zoom.us/meeting/register/tZAvcOivqzkpG9CtqpP6cnaL64TnxKaY_fAg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live at Office Hours
                </a>{" "}
                any Wednesday or by attending free{" "}
                <Link href={`/events/`}>events</Link>.
              </li>
              <li>
                <Link href={"/contact-us"}>Contact us</Link> to present, speak,
                or consult.
              </li>
              <li>
                flaunt some{" "}
                <Link href={`/category/supplies/`}>anti-ageist merch</Link> on
                your bod, your desk, your lawn . . .
              </li>
              <li>
                download Old School’s guides on{" "}
                <a
                  href="https://thischairrocks.com/wp-content/uploads/2016/02/ConsciousnessRaisingBooklet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ageism
                </a>
                , its intersection with{" "}
                <a
                  href="https://drive.google.com/file/d/1oWnxC3_s7McsVvXck19c79A7Ppf2LKv8/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sexism
                </a>
                , and its intersection with{" "}
                <a
                  href="https://drive.google.com/file/d/18GM6d_pAqxq1M1HnAe70urlk-f7JfQdd/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  racism
                </a>
                . Start a consciousness-raising group, or just a conversation.
              </li>
              <li>
                track the global movement by subscribing to our newsletter and
                following Old School on{" "}
                <Link href={`/contact/`}>social media</Link>. Follow{" "}
                <a
                  href="https://thischairrocks.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ashton Applewhite
                </a>{" "}
                too.
              </li>
              <li>
                Make a{" "}
                <a
                  href="https://old-school-hub.raisely.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tax-deductible donation
                </a>{" "}
                to Old School to help us keep going and growing,
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.bottomPara}>
          Remember, social change is incremental. You can’t start too small, you
          can’t start too late, and the only way to fail is not to start at all.
        </p>
      </div>
    </article>
  );
};

export default IntroPage;

export async function generateMetadata(): Promise<Metadata> {
  const metaData = {
    title: `Old School: An Introduction`,
  };

  return {
    ...metaData,
  };
}
