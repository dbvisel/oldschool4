import type { Metadata } from "next";
import getCategoryData from "@/lib/getCategoryData";
import { getResourcesOfType } from "../../utils/airtable";
import styles from "./../category/[slug]/page.module.css";
import CardHolder from "@/components/CardHolder";

const PublicationsPage = async () => {
  const { resources } = await getCategoryData({
    params: { slug: "ospublications" },
  });
  return (
    <article className={styles.category}>
      <header>
        <h2 className={`pageheader ${styles.categoryHead}`}>Publications</h2>
        <p className="tagline">Resources published by Old School</p>
      </header>
      <CardHolder resources={resources} areSubResources={false} />
    </article>
  );
};

export default PublicationsPage;

// export const generateStaticParams = async () => {
//   const slugs = definedTypes.map((x) => x.id);
//   return slugs.map((x) => ({ slug: x }));
// };

// export async function generateMetadata({
//   params: { slug },
// }: {
//   params: { slug: String };
// }): Promise<Metadata> {
//   const thisCategory = definedTypes.filter((x) => x.id === slug)[0];
//   const metaData = {
//     title: `Old School: ${thisCategory.name}`,
//     description: `${thisCategory.tag}`,
//   };

//   return {
//     ...metaData,
//   };
// }
