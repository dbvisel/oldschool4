// import Link from "next/link";
// import { Suspense } from "react";
import { Metadata } from "next";
import TocCards from "./TocCards";
import { definedTypes } from "../../utils/categories";
import styles from "./page.module.css";

const noSupplies = definedTypes.filter((x) => x.id !== "supplies");

const subjectTypes = [
  { id: "women", name: "Women", tag: "Resources about women" },
];

export default function LearnPage() {
  return (
    <article
      className={styles.about}
      style={{ scrollSnapAlign: "none" }}
      id="top"
    >
      <section className={styles.learnBlock}>
        <div>
          <h2>Categories</h2>
          <p>Categories are . . .</p>
          <TocCards types={noSupplies} path="category" />
        </div>
      </section>
      <section className={styles.learnBlock}>
        <div>
          <h2>Subjects</h2>
          <p>Subjects are . . .</p>
          <TocCards types={subjectTypes} path="subject" />
        </div>
      </section>
    </article>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metaData = {
    title: `Old School: Learn`,
  };

  return {
    ...metaData,
  };
}
