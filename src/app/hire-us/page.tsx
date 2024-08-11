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
        <h2>
          Hire us{" "}
          <span style={{ fontWeight: "normal" }}>
            to consult, speak, or give a workshop.
          </span>
        </h2>
        <div className={styles.topDiv}>
          <div>
            <p>
              People want to learn about ageism and age advocacy in very
              different ways, so we shape our offerings accordingly. We’ve
              worked with all kinds of audiences, from aging service providers
              and faith groups to students of all ages. Describe your needs and
              goals in an email to{" "}
              <a href="mailto:hello@oldschool.info">hello@oldschool.info</a> and
              we’ll figure out how to accommodate them.
            </p>
          </div>
        </div>
      </section>
      <section>
        <p>
          <strong>
            <Link href={`/hire-us/workshops/`}>Workshop descriptions.</Link>
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
          income enables Old School to create and disseminate free resources. We
          thank you in advance for your support!
        </p>
      </section>
      <section className={styles.testimonialWrapper}>
        <Suspense fallback={<LoadingTestimonials />}>
          <TestimonialCarousel justWorkshops />
        </Suspense>
      </section>
    </article>
  );
}
