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
