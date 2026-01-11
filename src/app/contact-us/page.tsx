import { Metadata } from "next";
import { Suspense } from "react";
import { Link } from "next-view-transitions";
import {
  LoadingTestimonials,
  TestimonialCarousel,
} from "./../about/TestimonialCarousel";

import styles from "./page.module.css";

export default function HireUsPage() {
  return (
    <article className={styles.hireUs}>
      <section>
        <h2>Contact us</h2>
        <div className={styles.topDiv}>
          <div>
            <p>
              We’re always eager to connect with people who want to help us
              dismantle ageism, learn more about our mission, or send ideas or
              suggestions our way. We’ve worked with a broad range of people and
              groups, from educators and public health officials to journalists
              and aging service providers. We also appreciate hearing from the
              general public. Let’s start a conversation.
            </p>
          </div>
        </div>
      </section>
      <section>
        <iframe
          src="https://airtable.com/app9HY99VAiVzX4uB/pagfUBvZIirzz6mcU/form"
          frameBorder="0"
          // onmousewheel=""
          width="100%"
          height="1500"
          style={{ background: "transparent", border: "none" }}
        ></iframe>
      </section>
      {/*<section>
        <p>
          <strong>
            <Link href={`/contact-us/workshops/`}>Workshop descriptions.</Link>
          </strong>
        </p>

        <p>
          <strong>Duration:</strong> Sessions range from one-hour workshops to
          multi-day immersive experiences. They can be abbreviated, extended,
          and/or paired with other sessions.
        </p>
        <p>
          <strong>Cost:</strong> Our clients have ranged from non-profits to
          Fortune 500 companies. We’ll modify our fees and offerings to fit your
          budget. For more information, contact us at{" "}
          <a href="mailto:hello@oldschool.info">hello@oldschool.info</a>. This
          income helps keep Old School going. We thank you in advance for your
          support!
        </p>
      </section>
      <section className={styles.testimonialWrapper}>
        <Suspense fallback={<LoadingTestimonials />}>
          <TestimonialCarousel justWorkshops />
        </Suspense>
      </section>*/}
    </article>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metaData = {
    title: `Old School: Contact Us`,
  };

  return {
    ...metaData,
  };
}
