import { useEffect, useState } from "react";
import { getQuotes } from "@/utils/airtable";
import FrontCarousel from "@/components/FrontCarousel";
import styles from "./page.module.css";

export const LoadingTestimonials = () => (
  <section>
    <h2>Loading testimonials...</h2>
  </section>
);

export const TestimonialCarousel = async () => {
  const quotes = await getQuotes();

  return quotes.length ? (
    <FrontCarousel>
      {quotes.map((quote: any) => (
        <div
          className={styles.emblaSlide}
          style={{ backgroundColor: "var(--white" }}
          key={quote.id}
        >
          <blockquote className={styles.quote}>{quote.fields.Quote}</blockquote>
          <p className={styles.quoter}>
            &mdash;<strong>{quote.fields.Quoter}</strong>
          </p>
          {quote.fields.Credential && (
            <p className={styles.credential}>{quote.fields.Credential}</p>
          )}
        </div>
      ))}
    </FrontCarousel>
  ) : (
    <LoadingTestimonials />
  );
};
