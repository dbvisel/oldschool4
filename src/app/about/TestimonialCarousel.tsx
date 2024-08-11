import { getQuotes } from "@/utils/airtable";
import Carousel from "@/components/Carousel";
import styles from "./page.module.css";

// const getQuoteType = (quote: any) => {
//   if (quote.fields.Offering && quote.fields.Offering.length) {
//     return quote.fields.Offering[0];
//   }
// };

export const LoadingTestimonials = () => (
  <section>
    <h2>Loading&nbsp;testimonials...</h2>
  </section>
);

export const TestimonialCarousel = async ({ justWorkshops = false }) => {
  const quotes = await getQuotes(justWorkshops ? "Workshop" : "Website ");
  return quotes.length ? (
    <Carousel>
      {quotes.map((quote: any) => (
        <div
          className={styles.emblaSlide}
          style={{ backgroundColor: "var(--white" }}
          key={quote.id}
        >
          <h2 className={styles.quoteHeader}>What people are saying:</h2>
          <blockquote className={styles.quote}>{quote.fields.Quote}</blockquote>
          <p className={styles.quoter}>
            &mdash;<strong>{quote.fields.Quoter}</strong>
          </p>
          {quote.fields.Credential && (
            <p className={styles.credential}>{quote.fields.Credential}</p>
          )}
        </div>
      ))}
    </Carousel>
  ) : (
    <LoadingTestimonials />
  );
};
