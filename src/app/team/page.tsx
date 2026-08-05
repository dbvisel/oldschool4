import { Metadata } from "next";
import TheTeam from "@/components/TheTeam";
import styles from "./../about/page.module.css";

export default function AboutPage() {
  return (
    <article
      className={styles.about}
      style={{ scrollSnapAlign: "none" }}
      id="top"
    >
      <section className={styles.theTeam} style={{ scrollSnapAlign: "none" }}>
        <div>
          <TheTeam />
          <p
            style={{
              color: "var(--black)",
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Old School Hub&rsquo;s fiscal sponsor is Social and Environmental
            Entrepreneurs (SEE), a registered public charity, which provides
            non-profit status. Your donation is fully tax-deductible.
          </p>
        </div>
      </section>
    </article>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metaData = {
    title: `Old School: The Team`,
  };

  return {
    ...metaData,
  };
}
