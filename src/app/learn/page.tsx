// import Link from "next/link";
// import { Suspense } from "react";
import { Metadata } from "next";
import TocCards from "./TocCards";
import { definedTypes } from "../../utils/categories";
import styles from "./page.module.css";

const noSupplies = definedTypes
  .filter((x) => x.id !== "supplies")
  .sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

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
        <h2>Learn</h2>
        <div className={styles.learnHolder}>
          <div>
            <h3>Categories</h3>
            <p>Categories are . . .</p>
            <TocCards types={noSupplies} path="category" />
          </div>
          <div>
            <h3>Subjects</h3>
            <p>Subjects are . . .</p>
            <TocCards types={subjectTypes} path="subject" reverse />
          </div>
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
