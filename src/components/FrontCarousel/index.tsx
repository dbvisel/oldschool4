import Link from "next/link";
import Carousel from "@/components/Carousel";
import styles from "./styles.module.css";
// import image1 from "images/carousel/crescendo-1200px_web.jpg.webp";
// import image2 from "images/carousel/happy-holi-color-splash-generative-ai-free-png.webp";
// import image3 from "images/carousel/photo-1518837695005-2083093ee35b.jpeg";

const FrontCarousel = () => {
  return (
    <Carousel>
      <div
        className={styles.emblaSlide}
        style={{
          backgroundColor: "var(--orange)",
          backgroundImage: `url(images/carousel/crescendo-1200px_web.jpg.webp)`,
        }}
      >
        <h2>
          <Link href="/about">
            If you click on this link, it goes somewhere!
          </Link>
        </h2>
      </div>
      <div
        className={styles.emblaSlide}
        style={{
          backgroundColor: "var(--white)",
          backgroundImage: `url(images/carousel/happy-holi-color-splash-generative-ai-free-png.webp)`,
        }}
      >
        <h2>
          <Link href={"/events"}>Office Hours: An Explosion of Colors</Link>
        </h2>
      </div>
      <div
        className={styles.emblaSlide}
        style={{
          backgroundColor: "var(--white)",
          backgroundImage: `url(images/carousel/GettyImages-999271266-e1565731893458.jpg)`,
        }}
      >
        <h2>
          <Link href={"/school-supplies"}>School Supplies</Link>
        </h2>
        <p>(This image may be misleading.)</p>
      </div>
      <div
        className={styles.emblaSlide}
        style={{
          backgroundColor: "var(--white)",
          backgroundImage: `url(images/carousel/photo-1518837695005-2083093ee35b.jpeg)`,
        }}
      >
        <h2>
          <Link href={"/testimonials"}>Testimonials like Mighty Waves</Link>
        </h2>
      </div>
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
      <div
        className={styles.emblaSlide}
        style={{ backgroundColor: "var(--white)" }}
      >
        <div className={styles.whatIsSlide}>
          <div>
            <h2>What Is Old School?</h2>
            <p>
              Old School curates, creates, commissions and disseminates free
              resources to educate people about ageism and how to end it; hosts
              and facilitates spaces where age advocates around the world can
              connect; collaborates with other pro-aging organizations; and
              shows up for other social-justice movements.
            </p>
            <p>
              Old School is working towards a world where everyone has the
              opportunity to live long and to live well. We are advancing the
              movement to dismantle ageism, and we are leveraging the fact that
              everyone ages (and experiences age bias) in order to address the
              intersectional nature of all oppression—and of all activism.{" "}
              <strong>
                <Link href={"/about"}>Learn more.</Link>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default FrontCarousel;
