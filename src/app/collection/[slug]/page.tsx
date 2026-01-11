import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { possibleCollections } from "@/utils/airtable";
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
  // console.log(resources);
  // TODO: make sections based on TK language setting
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
          {/* <h3>See also:</h3> */}
          <CardHolder
            resources={resources || []}
            areSubResources={true}
            showType
          />
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
