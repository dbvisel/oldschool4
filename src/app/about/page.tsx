// import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import TheTeam from "@/components/TheTeam";
import {
  LoadingTestimonials,
  TestimonialCarousel,
} from "./TestimonialCarousel";
import styles from "./page.module.css";

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
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <h2>About Old School</h2>
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
          <p
            style={{
              textAlign: "center",
              marginTop: "var(--paddingOutside)",
              fontSize: "125%",
            }}
          >
            Wondering where to begin?{" "}
            <Link href="/intro" style={{ color: "var(--black)" }}>
              Here are some suggestions.
            </Link>
          </p>
        </div>
      </section>
      <section className={styles.theTeam} style={{ scrollSnapAlign: "none" }}>
        <div>
          <TheTeam />
          {/*<p
            style={{
              textAlign: "center",
              marginBottom: "var(--paddingOutside)",
            }}
          >
            A thousand thanks to{" "}
            <a
              href="https://paulbelford.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paul Belford Ltd.
            </a>{" "}
            for new logo & look.
          </p>*/}
        </div>
      </section>
      <section
        className={styles.theStoryBlock}
        style={{ scrollSnapAlign: "none" }}
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
