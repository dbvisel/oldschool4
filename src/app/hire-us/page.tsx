"use client";
import { Link } from "next-view-transitions";

import styles from "./page.module.css";

export default function HireUsPage() {
  return (
    <article className={styles.hireUs}>
      <section>
        <h2 className="pageHeader">Hire us</h2>
        <h3>Hire us to consult, speak, or give a workshop.</h3>
        <p>
          People want to learn about ageism and age advocacy in very different
          ways, so we shape our offerings accordingly. We’ve worked with all
          kinds of audiences, from aging service providers and faith groups to
          students of all ages. Describe your needs and goals in an email to
          <a href="mailto:hello@oldschool.info">hello@oldschool.info</a> and
          we’ll figure out how to accommodate them.
        </p>
      </section>
      <section>
        <h3>Workshop descriptions.</h3>
        <p>
          <Link href={`/hire-us/lets-dismantle-ageism/`}>
            <strong>Let’s Dismantle Ageism</strong>
          </Link>{" "}
          Designed for people of all ages and in all walks of life, this
          workshop raises awareness of what ageism is, how it appears in our
          lives, and what each of us can do to dismantle it. During our time
          together, you’ll see what it’s like to take or teach a workshop, and
          come away with all the tools you need to host your own. Also available
          as a DIY workshop kit.
        </p>
        <p>
          <strong>Still Kicking:</strong> Investigating the Intersection of
          Ageism and Ableism Worried about how your mind or body might change
          over time? That’s actually ableism, not ageism. Why does it matter?
          Because we age well not by denying those changes but by adapting to
          them. Still Kicking delves into the nature of ageism and ableism,
          where they differ, how they intersect and reinforce each other, and
          why it’s so important to dismantle the dread and dual stigma. Also
          available as a DIY workshop kit.
        </p>

        <p>
          <strong>Age Pride: Ageism and the Queer Experience</strong>
          Ageism (discrimination on the basis of age) is easy to overlook and
          difficult to untangle. It is compounded by other forms of prejudice,
          and LGBTQIA2S+ communities are especially susceptible to generational
          silos. Thanks to their unique life courses, though, queer people
          happen to be very well-suited to dismantle ageism and dispel any
          notions of intergenerational conflict. In this workshop, we will be
          exploring the intersection of ageism and queerphobia and how they
          combine and cause more harm together. We will learn to combat them,
          along with other forms of prejudice, to make the world a better place
          for everyone.
        </p>

        <hr />
        <p>
          <strong>Duration:</strong> Sessions range from one-hour workshops to
          multi-day immersive experiences. They can be abbreviated, extended,
          and/or paired with other sessions.
        </p>
        <p>
          <strong>Cost:</strong> Our clients have ranged from non-profits to
          Fortune 500 companies. We’ll modify our fees and offerings to fit your
          budget. For more information, contact us at hello@oldschool.info. This
          income enables Old School to create and disseminate free resources. We
          thank you in advance for your support!
        </p>
      </section>
      <section>
        <p>
          {" "}
          Testimonials: [we have about a dozen quotes categorized under Workshop
          in Airtable. Possible to make carousel?]
        </p>
      </section>
    </article>
  );
}
