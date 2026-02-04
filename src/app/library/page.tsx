import { Link } from "next-view-transitions";
// import { Suspense } from "react";
import { Metadata } from "next";
import TocCards from "./TocCards";
import { definedTypes } from "../../utils/categories";
import styles from "./page.module.css";
import { getCollections } from "@/utils/airtable";
import SubmitComponent from "@/components/SubmitComponent";

const noSupplies = definedTypes
  .filter((x) => x.id !== "supplies")
  .filter((x) => x.id !== "ospublications")
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
        <h2>Library</h2>
        <p className={styles.introParagraph}>
          <Link href={`/intro`}>We created Old School</Link> so people could
          find all the best resources about ageism in one place. That
          collection—over 300 free, carefully curated, regularly updated
          items—remains central to our mission.
        </p>
        <p>
          Have a contribution? <Link href="#contribute">Scroll down.</Link>
        </p>
        <div className={styles.learnHolder}>
          <div>
            <h3>Types of Resources</h3>
            <TocCards types={noSupplies} path="category" />
          </div>
          <div>
            <h3>Collections</h3>
            <TocCards types={subjectTypes} path="collection" reverse />
          </div>
        </div>
        <div className={styles.contributeBlock}>
          <h3 id="contribute">Contribute to the Library</h3>
          <p className={styles.introParagraph}>
            {/*<!--Submissions are ongoing, and we review and post them on a quarterly
            basis in January, April, July, and October.-->*/}
          </p>
          <p className={styles.introParagraph}>
            Please use this form to describe the resource you’re submitting
          </p>
          <SubmitComponent />
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
