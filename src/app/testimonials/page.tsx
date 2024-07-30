import { Suspense } from "react";
import {
  TestimonialCarousel,
  LoadingTestimonials,
} from "./TestimonialCarousel";
import styles from "./page.module.css";

export default function TestimonialsPage() {
  return (
    <article className={styles.wrapper}>
      <h2>Here’s what people are saying about Old School:</h2>
      <Suspense fallback={<LoadingTestimonials />}>
        <TestimonialCarousel />
      </Suspense>
    </article>
  );
}
