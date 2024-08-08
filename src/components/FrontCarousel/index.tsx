"use client";

import { Link } from "next-view-transitions";
import Carousel from "@/components/Carousel";
import styles from "./styles.module.css";
import { JustOneTestimonial } from "@/app/about/JustOneTestimonial";
import { CategorySlide } from "@/components/CategorySlide";
import { TopResourcesSlide } from "@/components/TopResources/TopResourcesSlide";

// Ashton order 8 August 2024:
// • temporary starter/welcome slide
// • What is Old School? • New here? [intro page] • Testimonials • Office Hours • Category descriptions • Summer School

const FrontCarousel = ({
  quotes,
  newResources,
}: {
  quotes: any;
  newResources: any;
}) => {
  return (
    <Carousel>
      <div
        className={styles.emblaSlide}
        style={{
          backgroundColor: "var(--orange)",
          backgroundImage: `url(images/carousel/backdrop.jpeg)`,
          padding: "0 15vh",
        }}
      >
        <h2 className={styles.bigHeader} style={{ alignSelf: "start" }}>
          Welcome to the new Old School!
        </h2>
        <p
          className={styles.description}
          style={{
            textShadow: " 0 0 10px var(--black)",
            fontSize: "calc(var(--fontSize) * 1.5)",
          }}
        >
          New name, new look, new logo — thank you, Paul Belford, Ltd! Same
          great resource bank, more ways to come together to end ageism
        </p>
      </div>
      <div
        className={styles.emblaSlide}
        style={{
          backgroundColor: "var(--white)",
          backgroundImage: `url(images/about/team.jpg)`,
        }}
      >
        <div className={styles.whatIsSlide}>
          <div>
            <h2
              className={styles.bigHeader}
              style={{
                color: "var(--white) !important",
                textShadow: " 0 0 10px var(--black)",
              }}
            >
              What Is Old School?
            </h2>
            <p
              className={styles.description}
              style={{
                color: "var(--white) !important",
                textShadow: " 0 0 10px var(--black)",
              }}
            >
              Old School is a small but mighty grass roots organization created
              to raise awareness of ageism and how to undo it.{" "}
              <strong>
                <Link href={"/about"}>Learn more.</Link>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div
        className={styles.emblaSlide}
        style={{ backgroundColor: "var(--white)" }}
      >
        <div className={styles.whatIsSlide}>
          <div>
            <h2 className={styles.bigHeader}>What Is Old School?</h2>
            <p className={styles.description}>
              Old School is a small but mighty grass roots organization created
              to raise awareness of ageism and how to undo it.{" "}
              <strong>
                <Link href={"/about"}>Learn more.</Link>
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.emblaSlide}
        style={{
          backgroundColor: "var(--white)",
          backgroundImage: `url(images/carousel/backdrop.jpeg)`,
        }}
      >
        <h2 style={{ margin: "0 15vh" }}>
          <Link href="/intro">
            <strong>
              Wondering where to begin when it comes to confronting ageism?
            </strong>{" "}
            <span style={{ fontWeight: "normal" }}>
              You’re in the right place. Find tips on navigating our resource
              bank, entry points, and more.
            </span>
          </Link>
        </h2>
      </div>
      {/* {newResources.length && (
        <div
          className={styles.emblaSlide}
          style={{ backgroundColor: "var(--white)" }}
        >
          <TopResourcesSlide resources={newResources} />
        </div>
      )} */}
      {quotes.length && (
        <JustOneTestimonial
          quotes={quotes?.length ? quotes : []}
          key={quotes.length}
        />
      )}
      <CategorySlide />
      <div
        className={styles.emblaSlide}
        style={{
          backgroundColor: "var(--white)",
          backgroundImage: `url(images/carousel/happy-holi-color-splash-generative-ai-free-png.webp)`,
        }}
      >
        <h2 className={styles.bigHeader}>
          <Link href={"/events"}>Office Hours</Link>
        </h2>
        <p
          className={styles.description}
          style={{
            textShadow: " 0 0 10px var(--black)",
            fontSize: "calc(var(--fontSize) * 1.2)",
            margin: "0 10vw",
          }}
        >
          Join Old School’s co-founders at <strong>Office Hours</strong>, an
          informal open forum to talk about anything ageism-related. Everyone is
          welcome, to participate or just to listen. It takes place every
          Wednesday from 1:30–2:30PM EST.
        </p>
        <p
          className={styles.cta}
          style={{ textShadow: " 0 0 10px var(--white)" }}
        >
          <Link href="/events">Register here.</Link>
        </p>
      </div>
      <div
        className={`${styles.emblaSlide} ${styles.hideText}`}
        style={{
          backgroundColor: "var(--black)",
          backgroundImage: `url(images/carousel/Summer_School-Newsletter.png)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className={styles.bigHeader}>
          <Link href={"/events"}>Summer School</Link>
        </h2>
        <p className={styles.description}>
          This just happened! It was great! Takeaways coming soon.
        </p>
      </div>
      {/* <div
        className={styles.emblaSlide}
        style={{
          backgroundColor: "var(--white)",
          backgroundImage: `url(images/carousel/March-of-Intellect-1828-William-H.e1dfd90c.fill-1200x675.jpg)`,
        }}
      >
        <h2>
          <Link href="/origins">The Surprising History of Old School</Link>
        </h2>
      </div> */}
    </Carousel>
  );
};

export default FrontCarousel;
