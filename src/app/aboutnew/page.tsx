import { Suspense } from "react";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import {
  LoadingTestimonials,
  TestimonialCarousel,
} from "./../about/TestimonialCarousel";
import styles from "./../about/page.module.css";

export default function AboutPage() {
  return (
    <article
      className={styles.about}
      style={{ scrollSnapAlign: "none" }}
      id="top"
    >
      <section
        className={styles.aboutBlock}
        style={{ scrollSnapAlign: "none" }}
      >
        <div className={styles.aboutContent}>
          <h2>Our Story</h2>
          <p>
            In 2018, Kyrié Carpenter, Ryan Backer, and Ashton Applewhite met for
            the first time in a back yard in Berkeley. We’d searched the web for
            ageism-related material, figured out how to share the best of it,
            and came together to launch the Old School Clearinghouse. We thought
            we were setting up a small side hustle: updating a website once or
            twice a year. We weren’t sure anyone else would notice its debut. We
            were so wrong. It was immediately obvious that we’d embarked on a
            major undertaking, and that Old School was meeting an important need
            for the emerging age-equity movement. Eight years later this remains
            very much the case. But we couldn’t have envisioned how the need
            would grow, nor how Old School’s role would evolve to meet it,
            becoming the Old School Hub for Age Equity and Ageism Awareness. The
            three of us did a lot with a little. Four of us are now doing more
            with more, as you’ll see from this Impact Report. Crucially, last
            year the organization hired its first Executive Director, Alessandro
            “Ale” Negrete, who brings grassroots organizing experience,
            fundraising skills, and a bold vision to the table. Stay tuned for
            the strategic plan we just co-created in Mexico City. You’ll see why
            we couldn’t be more excited about Old School’s future.
          </p>
          <h3>Mission</h3>
          <p>
            Old School works to end ageism by convening people of all ages,
            backgrounds, and identities who share this goal. We are particularly
            committed to fostering an inclusive space for historically
            marginalized groups, and supporting their paths to age advocacy. We
            create, curate, and widely disseminate free educational material
            about ageism and how to undo it. Through community dialogue and
            innovative collaborations, we raise individual awareness of ageism
            and inspire collective action to dismantle it in every sphere of
            life.
          </p>
          <h3>Vision</h3>
          <p>
            Old School is advancing a world where aging is no longer a
            privilege, and everyone has the opportunity to move through life
            with purpose and dignity. We believe in the power of the collective,
            and show up for other social justice movements, ensuring our
            advocacy centers the lived experience of Black, Indigenous, and
            People of Color (BIPOC), immigrants, and other marginalized groups.
            Our work is grounded in powerful truths that demand elevation:
            everyone is aging, and everyone experiences being treated unfairly
            because of their age. This makes ageism a gateway to understanding
            the intersectional nature of all oppression, and of all activism.
            This paves the way for genuine equity and collective liberation.
          </p>
          <h3>Values</h3>
          <p>
            We believe kindness is essential. We prioritize care-centered
            practice grounded not in compliance but in reflection and true
            consent. We know dismantling ageism means confronting sexism (aging
            is gendered), ableism (disability is stigmatized), and racism (which
            denies multitudes the chance to age at all). We understand trust
            takes time. We reject proprietary mindsets and think an open-source
            mentality is essential to movement-building. We recognize lived
            experience as a critical form of knowledge, and design programs that
            elevate community leadership and collective decision-making. We
            support initiatives that are necessary for some and good for all. We
            think addressing the relation between age and power is essential. We
            prioritize free or low-cost offerings so access is not gated by
            institutions, price, or credentials. We reject hierarchy, and
            operate by consensus. We are transparent: what we say is what you
            get.
          </p>
          <p className={styles.aboutBegin}>
            Wondering where to begin?{" "}
            <Link href="/intro" style={{ color: "var(--black)" }}>
              Here are some suggestions.
            </Link>
          </p>
        </div>
      </section>
      <section
        className={styles.theStoryBlock}
        style={{
          scrollSnapAlign: "none",
        }}
      >
        <div>
          <h2>
            <Link href={"/origins"}>Old School’s Origin Story</Link>
          </h2>
        </div>
      </section>
      <section style={{ scrollSnapAlign: "none" }} id={"testimonials"}>
        {/*<h2>Here’s what people are saying about Old School:</h2>*/}
        <Suspense fallback={<LoadingTestimonials />}>
          <TestimonialCarousel />
        </Suspense>
      </section>
    </article>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metaData = {
    title: `Old School: About Old School`,
  };

  return {
    ...metaData,
  };
}
