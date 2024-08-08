import SubmitComponent from "@/components/SubmitComponent";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <article className={styles.wrapper}>
      <section className={styles.contactUs}>
        <h2 className={"pageheader"}>Contact Us</h2>
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:hello@oldschool.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              hello@oldschool.info
            </a>
          </li>
          <li>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/oldschool.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://&shy;www.facebook&shy;.com/&shy;oldschool.info/
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/company/43359894"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://&shy;www.linkedin.com/&shy;company/43359894
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/OldSchool_Info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://&shy;www.instagram.com/&shy;OldSchool_Info/
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a
              href="https://twitter.com/OldSchool_Info"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://&shy;twitter.com/&shy;OldSchool_Info
            </a>
          </li>
        </ul>
        <p>
          Want to talk to us live? You can find us ‘in the office’ at{" "}
          <strong>Office Hours</strong> every Wednesday from 1:30–2:30 ET. Ask
          one or all three of the co-founders of Old School any ageism-related
          question—in private, or include the group. Here’s the{" "}
          <a href="https://thischairrocks.us6.list-manage.com/track/click?u=b7e45e0548&id=da0374d50c&e=72512ca6b8">
            link
          </a>
          .
        </p>
      </section>
      <SubmitComponent />
    </article>
  );
}
