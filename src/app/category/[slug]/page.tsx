import type { Metadata } from "next";
import getCategoryData from "@/lib/getCategoryData";
import styles from "./page.module.css";
import CardHolder from "@/components/CardHolder";
import { definedTypes } from "@/utils/categories";

const CategoryPage = async ({
  params: { slug },
}: {
  params: { slug: String };
}) => {
  const { resources } = await getCategoryData({ params: { slug } });
  const thisCategory = definedTypes.filter((x) => x.id === slug)[0];
  return (
    <article className={styles.category}>
      <header>
        <h2 className={`pageheader ${styles.categoryHead}`}>
          {thisCategory.name}
        </h2>
        <p className="tagline">{thisCategory.tag}</p>
      </header>
      <CardHolder resources={resources} areSubResources={false} />
    </article>
  );
};

export default CategoryPage;

export const generateStaticParams = async () => {
  const slugs = definedTypes.map((x) => x.id);
  return slugs.map((x) => ({ slug: x }));
};

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: String };
}): Promise<Metadata> {
  const thisCategory = definedTypes.filter((x) => x.id === slug)[0];
  const metaData = {
    title: `Old School: ${thisCategory.name}`,
    description: `${thisCategory.tag}`,
  };

  return {
    ...metaData,
  };
}
