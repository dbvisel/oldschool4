import { allTypes } from "@/utils/categories";
import getCategoryData from "@/lib/getCategoryData";
import styles from "./page.module.css";
import CardHolder from "@/app/components/CardHolder";
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
        <h2>Category: {thisCategory.name}</h2>
        <p>{thisCategory.tag}</p>
      </header>
      <CardHolder resources={resources} areSubResources={false} />
    </article>
  );
};

export default CategoryPage;

export const generateStaticParams = async () => {
  const slugs = allTypes.map((x) => x.id);
  return slugs.map((x) => ({ slug: x }));
};
