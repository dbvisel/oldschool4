// import { Metadata } from "next";
import aboutStyles from "./../about/page.module.css";
import styles from "./page.module.css";
import Project from "./Project";
import aeaImage from "./images/Age-Equity-Alliance_blue-navy-BG-e1588618146243.jpg";
import fufaImage from "./images/F.U.F.A-(1).png";
import eaaImage from "./images/vcugerontology.jpg";
import ailaImage from "./images/Aging+Is+Living+sign_card+hi-res+artwork (1).jpg";
import ProjectLead from "./ProjectLead";

const projectData = [
  {
    title: "Aging is Living Artwork",
    description:
      "Rainbow flags. Peace symbols. Ribbons on lapels. Every movement has its signs, and now the age equity movement has one too! Download it, print it, display it, wear it, hand it out, get it out there — and move us all closer to a world without ageism.",
    link: "https://www.linkedin.com/in/margaretmcdonald/",
    contact: "Margaret McDonald",
    image: ailaImage,
  },
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

  // {
  //   title: "FUFA - Francophones Unis Face a l’Ageisme",
  //   description:
  //     "This coalition of French-speaking anti-ageism advocates around the world began as a collaboration between Old School and the Pass It On Network.",
  //   link: "https://www.linkedin.com/in/moiraallan/",
  //   contact: "Moira Allen",
  //   image: fufaImage,
  // },
];

export default function ProjectsPage() {
  return (
    <article className={aboutStyles.about}>
      <ProjectLead />
      <section className={styles.projectSection}>
        <h2 className="pageheader">Some projects:</h2>
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
          Does your project focus explicitly on ageism? When you describe it,
          can you answer “yes” to most or all of these{" "}
          <strong>Ten Guiding Questions</strong>:
        </p>
        <ul>
          <li>Is your project necessary for some and good for all?</li>
          <li>Does it tap into the joy and power of coming together?</li>
          <li>Do all ages have a voice in it?</li>
          <li>Does it acknowledge and address internalized ageism?</li>
          <li>
            Does it reflect the fact that words matter, and that language is a
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
        <p>
          As you review and return to these questions, keep one more in mind:{" "}
          <strong>Who is missing?</strong> The anti-ageism movement is
          predominantly made up of white, non-disabled, middle-class olders. To
          help change that, Old School will prioritize projects from communities
          that are under-represented in age advocacy and/or address issues that
          matter to them.
        </p>
        <p style={{ textIndent: "1em" }}>
          If you answered “yes” to most or all of these questions, we’d love to
          learn about your project!{" "}
          <strong>Please use this form to tell us more:</strong>
        </p>
      </section>
      <section className={styles.projectSection}>
        {/* <h2 className="pageheader">Please use this form to tell us more:</h2> */}
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/appPRDpl6oe7xsRYg/paggkrte2K3lKcCiH/form"
          frameBorder="0"
          width="100%"
          height="1200"
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
  title: `Old School: Projects`,
};
