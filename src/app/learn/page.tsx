// import Link from "next/link";
// import { Suspense } from "react";
import { Metadata } from "next";
import TocCards from "./TocCards";
import { definedTypes } from "../../utils/categories";
import styles from "./page.module.css";
import { getCollections } from "@/utils/airtable";

const noSupplies = definedTypes
  .filter((x) => x.id !== "supplies")
  .sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

export default async function LearnPage() {
  const rawSubjectTypes = await getCollections();
  const subjectTypes = rawSubjectTypes
    .map((x: any) => ({
      name: x.fields.Collection,
      id: x.fields.slug,
      tag: x.fields.Description || "",
    }))
    .sort((a: any, b: any) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
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
            <h3>Types</h3>
            {/*<p>Types are . . .</p>*/}
            <TocCards types={noSupplies} path="category" />
          </div>
          <div>
            <h3>Collections</h3>
            {/*<p>Collections are . . .</p>*/}
            <TocCards types={subjectTypes} path="collection" reverse />
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
