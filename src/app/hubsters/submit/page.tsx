// import { Metadata } from "next";
import aboutStyles from "./../../about/page.module.css";
import styles from "./../page.module.css";

export default function HubstersSubmitPage() {
  return (
    <article
      className={aboutStyles.about}
      style={{ backgroundColor: "var(--colorBackground) !important" }}
    >
      <section
        className={styles.projectSection}
        style={{ backgroundColor: "var(--colorBackground) !important" }}
      >
        <h2 className="pageheader">&nbsp;</h2>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/appPRDpl6oe7xsRYg/paggkrte2K3lKcCiH/form"
          frameBorder="0"
          width="100%"
          height="1400"
          // onMouseWheel=""
          style={{ background: "transparent", border: "none" }}
        ></iframe>
        {/*
				
Does your project have a name? [box]
What type of project is it (e.g. tool, campaign, event)?  [box]
What stage is it at? (Is it just an idea, already out in the world, or somewhere in between? [box]
What do you hope to give and to get from joining the Hub? [box]
What else would you like us to know about the project? [box]
name
Email
If you have a file to share with us please include it here:


				*/}
      </section>
    </article>
  );
}

export const metadata = {
  title: `Old School: Hubsters: Submit your project`,
};
