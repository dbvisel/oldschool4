import getCategoryData from "@/lib/getCategoryData";
import styles from "./page.module.css";
import CardHolder from "@/components/CardHolder";
import { definedTypes } from "@/utils/categories";

// TODO: does this need to be one level higher?

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
        <h2 className={styles.categoryHeader}>
          <span>Category:</span> {thisCategory.name}
        </h2>
        <p className={styles.tagline}>{thisCategory.tag}</p>
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
