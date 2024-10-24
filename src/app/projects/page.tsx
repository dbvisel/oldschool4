// "use client";
// import { Metadata } from "next";
import aboutStyles from "./../about/page.module.css";
import styles from "./page.module.css";
import Project from "./Project";
import aeaImage from "./images/Age-Equity-Alliance_blue-navy-BG-e1588618146243.jpg";
import fufaImage from "./images/F.U.F.A-(1).png";
import eaaImage from "./images/vcugerontology.jpg";

const projectData = [
  {
    title: "“Expanding Age Advocacy”",
    description:
      "Old School and Virginia Commonwealth University are using focus groups to investigate how people working on other social justice issues perceive aging, age bias, and age advocacy.",
    link: "https://www.linkedin.com/in/tracey-gendron/",
    contact: "Tracey Gendron",
    image: eaaImage,
  },

  {
    title: "Age Equity Alliance",
    description:
      "This think-tank partners with organizations and businesses to build an innovative, age-positive workplace. It was incubated at Old School.",
    link: "https://www.linkedin.com/company/ageequityalliance/",
    contact: "Sheila Callaham",
    image: aeaImage,
  },
  {
    title: "FUFA - Francophones Unis Face a l’Ageisme",
    description:
      "This coalition of French-speaking anti-ageism advocates around the world began as a collaboration between Old School and the Pass It On Network.",
    link: "https://www.linkedin.com/in/moiraallan/",
    contact: "Moira Allen",
    image: fufaImage,
  },
];

export default function ProjectsPage() {
  return (
    <article className={aboutStyles.about}>
      <section className={aboutStyles.aboutBlock}>
        <div>
          <h2>
            Are you working to raise awareness of ageism and how to undo it?
          </h2>
          <p className={styles.projectIntroParagraph}>
            Would you like input? Collaborators? Co-conspirators? If so, we’d
            love to hear from you! Scroll down for Guiding Questions and the Old
            School Hub submission form.
          </p>
          <p className={styles.projectIntroParagraph}>
            The Old School Hub is a platform for people and organizations doing
            anti-ageism work to showcase their projects, making it easier for
            others to find, join, and share their efforts. Our working group can
            be involved in whatever ways make sense to the people behind each
            project. We welcome projects of all scales, from local to global,
            whether they be underway or still in the ideation phase. They must
            focus <strong>explicitly on ageism</strong>.
          </p>
          <p className={styles.projectIntroParagraph}>
            Contact us to learn more about this new venture and/or if you are
            interested in joining our working group. And please spread the word:
            the Hub will only reach its potential with the support of pro-age
            advocates around the world.
          </p>
        </div>
      </section>
      <section className={styles.projectSection}>
        <h2 className="pageheader">Some sample projects:</h2>
        <div className={styles.projectWrapper}>
          {projectData.map((project, index) => (
            <Project key={index} {...project} isLeft={index % 2 === 0} />
          ))}
        </div>
      </section>
      <section className={styles.projectSection}>
        <h2
          className="pageheader"
          style={{ marginBottom: "var(--paddingOutside)" }}
        >
          Have something for the Hub?
        </h2>
        <p>
          Does your plan or project focus explicitly on ageism? When you
          describe it, can you answer “yes” to these{" "}
          <strong>Ten Guiding Questions</strong>:
        </p>
        <ul>
          <li>Is it necessary for some and good for all?</li>
          <li>Does it tap the joy and power of coming together?</li>
          <li>Do all ages have a voice?</li>
          <li>Does it acknowledge and address internalized ageism?</li>
          <li>
            Does it reflect the fact that words matter and that language is a
            moving target?
          </li>
          <li>
            Are your strategies fluid and diverse enough to tackle the complex
            nature of ageism?
          </li>
          <li>Does it honor our minds, bodies, and spirits?</li>
          <li>Does it account for the relationship between age and power?</li>
          <li>Are death and end-of-life part of the conversation?</li>
          <li>
            Does it involve the soft skills—around allyship, persistence,
            courage, vulnerability, and generative conflict—that a sustainable
            movement requires?
          </li>
        </ul>
        <p>If so, we’re eager to hear about it.</p>
      </section>
      <section className={styles.projectSection}>
        {/* <h2 className="pageheader">Please use this form to tell us more:</h2> */}
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/appPRDpl6oe7xsRYg/paggkrte2K3lKcCiH/form"
          frameBorder="0"
          width="100%"
          height="1200"
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
  title: `Old School: Projects`,
};
