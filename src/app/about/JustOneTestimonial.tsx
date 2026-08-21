"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.css";
import type { QuoteRecord } from "@/types/index";

const randomQuote = (quotes: QuoteRecord[]) =>
  quotes.length ? quotes[Math.floor(Math.random() * quotes.length)] : null;

export const JustOneTestimonial = ({
  quotes,
}: {
  quotes: QuoteRecord[];
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [thisQuote, setThisQuote] = useState<QuoteRecord | null>(() =>
    randomQuote(quotes)
  );
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    // if this slide comes into view, change it.
    if (inView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reshuffles the quote shown each time this slide scrolls into view, driven by the IntersectionObserver
      setThisQuote(randomQuote(quotes));
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
              setThisQuote(randomQuote(quotes));
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
