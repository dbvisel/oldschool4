import styles from "./styles.module.css";
import { Link } from "next-view-transitions";
import { JustOneTestimonial } from "@/app/about/JustOneTestimonial";
import { CategorySlide } from "./CategorySlide/";
import { TopResourcesSlide } from "@/components/TopResources/TopResourcesSlide";

export const SlideList = {
  whatIsOldSchool: (
    <div
      className={styles.emblaSlide}
      style={{ backgroundColor: "var(--white)" }}
    >
      <div className={styles.whatIsSlide}>
        <div>
          <h2 className={styles.bigHeader}>What Is Old School?</h2>
          <p className={styles.description}>
            Old School is a small-but-mighty grassroots organization created to
            educate people about ageism and to connect people who are working to
            end it.{" "}
            <strong>
              <Link href={"/about"}>Learn&nbsp;more.</Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  ),
  whereToBegin: (
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
  ),
  categorySlide: <CategorySlide />,
  officeHours: (
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
  ),
  centurySummit: (
    <div
      className={`${styles.emblaSlide} ${styles.hideText}`}
      style={{
        backgroundColor: "var(--white)",
        backgroundImage: `url(images/carousel/centurysummitv.jpg)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <a
        href="https://www.longevity-project.com/century-summit-2025-official-videos"
        className={styles.fullLink}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  ),
  yoda: (
    <div
      className={`${styles.emblaSlide} ${styles.hideText}`}
      style={{
        backgroundColor: "var(--white)",
        backgroundImage: `url(images/carousel/YODA-BG.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`${styles.hideText} ${styles.interior}`}
        style={{
          backgroundImage: `url(images/carousel/YODA.png)`,
        }}
      >
        <a
          href="https://www.nextavenue.org/lets-come-together-for-yoda/"
          className={styles.fullLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block" }}
        />
      </div>
    </div>
  ),
  ageismAwarenessDay: (
    <div
      className={`${styles.emblaSlide} ${styles.gridSlide}`}
      style={{
        backgroundColor: "var(--white)",
        // backgroundImage: `url(images/carousel/2025-Ageism-awareness-day-white-bkg-1.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`${styles.hideText} ${styles.interior}`}
        style={{
          backgroundImage: `url(images/carousel/2025-Ageism-awareness-day-white-bkg-1.png)`,
          aspectRatio: 1,
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <a
          href="https://asaging.org/ageism-awareness/"
          className={styles.fullLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block" }}
        />
      </div>
      <div>
        <p className="text">
          Ageism Awareness Day is coming right up! Find out how to support it on
          the{" "}
          <a href="https://asaging.org/ageism-awareness/" target="_blank">
            American Society on Aging’s 2025 campaign page
          </a>
          .
        </p>
      </div>
    </div>
  ),
  raisely: (
    <div
      className={`${styles.emblaSlide} ${styles.hideText}`}
      style={{
        backgroundColor: "var(--white)",
        backgroundImage: `url(images/carousel/Newsletter.png)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <a
        href="https://old-school-hub.raisely.com"
        className={styles.fullLink}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  ),
  jobSlide: (
    <div
      className={`${styles.emblaSlide} ${styles.jobLink}`}
      style={{
        backgroundImage: `url(images/carousel/jobimage.png)`,
      }}
    >
      <h2>
        <Link href="/jobs">
          <strong>Old School is hiring!</strong>
          <br />
          <span style={{ fontWeight: "normal", fontSize: "75%" }}>
            We’re looking for a visionary Executive Director to expand our reach
            and impact. Click here for the full job description and how to
            apply.
          </span>
        </Link>
      </h2>
    </div>
  ),
  justOneTestimonal: (quotes: any /* TODO: FIX THIS!*/) =>
    quotes.length && (
      <JustOneTestimonial
        quotes={quotes?.length ? quotes : []}
        key={quotes.length}
      />
    ),
};

export const oldSlides = {
  postSummerSchool: (
    <div
      className={`${styles.emblaSlide} ${styles.hideText}`}
      style={{
        backgroundColor: "var(--black)",
        backgroundImage: `url(images/carousel/PostSummerSchool2.png)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <a
        href="https://mailchi.mp/oldschool/what-is-new-on-old-school-february-10574864?e=a5356d4cea"
        className={styles.fullLink}
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      <h2 className={styles.bigHeader}>
        <Link href={"/events"}>Summer School</Link>
      </h2>
      <p className={styles.description}>
        This just happened! It was great! Takeaways coming soon.
      </p>
    </div>
  ),
  origins: (
    <div
      className={styles.emblaSlide}
      style={{
        backgroundColor: "var(--white)",
        backgroundImage: `url(images/carousel/March-of-Intellect-1828-William-H.e1dfd90c.fill-1200x675.jpg)`,
      }}
    >
      <h2>
        <Link href="/origins">The Surprising History of Old School</Link>
      </h2>
    </div>
  ),
  ageismAwarenessDay: (
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
  ),
  oldWelcome: (
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
  ),
  oldWhatIsOldSchool: (
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
            Old School is a small but mighty grassroots organization created to
            raise awareness of ageism and how to undo it.{" "}
            <strong>
              <Link href={"/about"}>Learn more.</Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  ),
  newResources: (newResources: any) =>
    newResources.length && (
      <div
        className={styles.emblaSlide}
        style={{ backgroundColor: "var(--white)" }}
      >
        <TopResourcesSlide resources={newResources} />
      </div>
    ),
};
