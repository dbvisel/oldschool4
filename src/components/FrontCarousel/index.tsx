"use client";

import { Link } from "next-view-transitions";
import Carousel from "@/components/Carousel";
import styles from "./styles.module.css";
import { JustOneTestimonial } from "@/app/about/JustOneTestimonial";
import { CategorySlide } from "./CategorySlide/";
// import { TopResourcesSlide } from "@/components/TopResources/TopResourcesSlide";

// Ashton order 8 August 2024:
// • temporary starter/welcome slide
// • What is Old School? • New here? [intro page] • Testimonials • Office Hours • Category descriptions • Summer School

const FrontCarousel = ({
  quotes,
  // newResources,
}: {
  quotes: any;
  // newResources: any;
}) => {
  return (
    <Carousel>
      <div
        className={`${styles.emblaSlide} ${styles.bookSlide} ${styles.welcomeSlide}`}
        style={{ backgroundImage: `url(/images/carousel/backdrop.jpeg)` }}
      >
        <h2 className={styles.bigHeader} style={{ alignSelf: "center" }}>
          Welcome to the new Old School!
        </h2>
        <p
          className={styles.description}
          style={{
            textShadow: " 0 0 10px var(--black)",
            fontSize: "calc(var(--fontSize) * 1.5)",
          }}
        >
          New name, new look, new logo. Same great resource bank, more&nbsp;ways
          to come together to&nbsp;end&nbsp;ageism.
        </p>
      </div>
      {/* <div
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
              Old School is a small but mighty grassroots organization created
              to raise awareness of ageism and how to undo it.{" "}
              <strong>
                <Link href={"/about"}>Learn more.</Link>
              </strong>
            </p>
          </div>
        </div>
      </div> */}
      <div
        className={styles.emblaSlide}
        style={{ backgroundColor: "var(--white)" }}
      >
        <div className={styles.whatIsSlide}>
          <div>
            <h2 className={styles.bigHeader}>What Is Old School?</h2>
            <p className={styles.description}>
              Old School is a small-but-mighty grassroots organization created
              to educate people about ageism and to connect people who are
              working to end it.{" "}
              <strong>
                <Link href={"/about"}>Learn&nbsp;more.</Link>
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.emblaSlide} ${styles.bookSlide} ${styles.beginSlide}`}
        style={{
          backgroundImage: `url(images/carousel/backdrop.jpeg)`,
        }}
      >
        <h2
          style={{
            maxWidth: "var(--narrowBlockWidth)",
            fontSize: "calc(var(--fontSize) * 3.5)",
          }}
        >
          <Link href="/intro">
            <strong>
              Wondering where to begin when it comes to confronting ageism?
            </strong>{" "}
            <span style={{ fontWeight: "normal" }}>
              You’re in the right place.
              {/* Find tips on navigating our resource
              bank, entry points, and more.--> */}
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
        className={`${styles.emblaSlide} ${styles.officeHoursSlide}`}
        style={{
          backgroundImage: `url(images/carousel/officeHoursBW.jpg)`,
        }}
      >
        <h2 className={styles.bigHeader}>
          <Link href={"/events"} style={{ color: "var(--black) !important" }}>
            Office Hours
          </Link>
        </h2>
        <p
          className={styles.description}
          style={{ paddingBottom: "calc(4 * var(--paddingOutside)" }}
        >
          Join Old School’s co-founders at <strong>Office Hours</strong>, an
          informal open forum to talk about anything ageism-related. Everyone is
          welcome, to participate or just to listen. It takes place every
          Wednesday from 1:30–2:30PM EST.
        </p>
        <p className={styles.cta}>
          <a
            href="https://us02web.zoom.us/meeting/register/tZAvcOivqzkpG9CtqpP6cnaL64TnxKaY_fAg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register here.
          </a>
        </p>
      </div>
      <div
        className={`${styles.emblaSlide} ${styles.hideText}`}
        style={{
          backgroundColor: "var(--black)",
          backgroundImage: `url(images/carousel/PostSummerSchool2.png)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <a
          href="https://mailchi.mp/oldschool/what-is-new-on-old-school-february-10574864?e=a5356d4cea"
          className={styles.fullLink}
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        {/*<h2 className={styles.bigHeader}>
          <Link href={"/events"}>Summer School</Link>
        </h2>
        <p className={styles.description}>
          This just happened! It was great! Takeaways coming soon.
        </p>*/}
      </div>
      <div
        className={`${styles.emblaSlide} ${styles.hideText}`}
        style={{
          backgroundImage: `url(images/carousel/ageismAwarenessDay.png)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <a
          href="https://www.asaging.org/ageism-awareness"
          className={styles.fullLink}
          target="_blank"
          rel="noopener noreferrer"
        ></a>
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
