// import type { Metadata } from "next";
// import Image from "next/image";
// import { Link } from "next-view-transitions";
import { possibleCollections } from "@/utils/airtable";
// import { ResourceItem } from "@/types/index";
import { ResourceItem } from "@/types/index";
import CardHolder from "@/components/CardHolder";
import styles from "./page.module.css";
import getCollectionData from "@/lib/getCollectionData";

const CollectionPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { resources, title, description } = await getCollectionData({
    params: { slug },
  });
  let sortedLanguageCount: any = [];
  if (title === "Other Languages") {
    const languageData = resources.map(
      (x: ResourceItem) => x.language,
    ) as string[];
    const uniqueLanguages = new Set(languageData);
    const languageCount = new Map(
      [...uniqueLanguages].map((x) => [
        x,
        languageData.filter((y) => y === x).length,
      ]),
    );
    sortedLanguageCount = [
      ...new Map([...languageCount.entries()].sort((a, b) => b[1] - a[1])),
    ].map(([language, count]) => ({
      language,
      count,
      resources: resources.filter((x: ResourceItem) => x.language === language),
    }));
    console.log(sortedLanguageCount);
  }
  return title ? (
    <article className={styles.subjectPage}>
      <div>
        <h2>{title}</h2>
        <div className={`${styles.resourceData}`}>
          <div className={styles.dataBoxWrapper}>
            <div className={styles.dataBox}>
              <p
                className={styles.collectionDescription}
                dangerouslySetInnerHTML={{
                  __html: description || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {resources && resources.length ? (
        <div className={styles.resources}>
          {sortedLanguageCount.length ? (
            sortedLanguageCount.map((x: any) => (
              <div key={x.language} className={styles.languageSection}>
                <h3 className={styles.languageTitle}>{x.language}</h3>
                <CardHolder
                  resources={x.resources}
                  areSubResources
                  isCollectionPage
                  showType
                />
              </div>
            ))
          ) : (
            <CardHolder
              resources={resources || []}
              areSubResources
              isCollectionPage
              showType
            />
          )}
        </div>
      ) : null}
    </article>
  ) : (
    <div>
      <p>Collection not found!</p>
    </div>
  );
};

export default CollectionPage;

export const generateStaticParams = async () => {
  const slugs = await possibleCollections();
  // console.log("Slugs for static params:", slugs);
  return slugs.map((x: any) => ({ slug: x.slug }));
};

// export async function generateMetadata({
//   params: { slug },
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const resource = await getResourceData(slug);
//   const metaData = {
//     title: `Old School: ${resource.title || ""}`,
//     description: `${resource.description || resource.shortDescription || ""}`,
//     twitter: {
//       title: `Old School: ${resource.title || ""}`,
//     },
//     openGraph: {
//       title: `Old School: ${resource.title || ""}`,
//     },
//   };

//   return {
//     ...metaData,
//   };
// }
