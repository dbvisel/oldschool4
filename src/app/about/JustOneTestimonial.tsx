"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.css";

export const JustOneTestimonial = ({ quotes }: any) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [thisQuote, setThisQuote] = useState<any>({});
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    if (quotes.length) {
      setThisQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  }, [quotes]);

  useEffect(() => {
    // if this slide comes into view, change it.
    if (inView) {
      setThisQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  }, [inView, quotes]);

  return thisQuote && thisQuote.fields ? (
    <div
      className={styles.emblaSlide}
      style={{ backgroundColor: "var(--white" }}
      ref={ref}
    >
      <h2 className={styles.quoteHeader}>What people are saying:</h2>
      <blockquote
        className={`${styles.quote} ${flipped ? styles.quoteAnimation : ""}`}
      >
        {thisQuote.fields.Quote}
      </blockquote>
      <p className={styles.quoter}>
        &mdash;<strong>{thisQuote.fields.Quoter}</strong>
      </p>
      {thisQuote.fields.Credential && (
        <p className={styles.credential}>{thisQuote.fields.Credential}</p>
      )}
      <p className={styles.cta}>
        <a
          href={`/about/#testimonials`}
          onClick={(e) => {
            e.preventDefault();
            setFlipped(false);
            setTimeout(() => {
              setThisQuote(quotes[Math.floor(Math.random() * quotes.length)]);
              setFlipped(true);
            }, 50);
          }}
        >
          What else are people saying?
        </a>
      </p>
    </div>
  ) : null;
};
