import { allTypes } from "@/utils/categories";
import getCategoryData from "@/lib/getCategoryData";
import styles from "./page.module.css";
import CardHolder from "@/app/components/CardHolder";

// TODO: does this need to be one level higher?

const CategoryPage = async ({
  params: { slug },
}: {
  params: { slug: String };
}) => {
  const { resources } = await getCategoryData({ params: { slug } });
  return (
    <article className={styles.category}>
      <h2>Category: {slug}</h2>
      <CardHolder resources={resources} areSubResources={false} />
    </article>
  );
};

export default CategoryPage;

export const generateStaticParams = async () => {
  const slugs = allTypes.map((x) => x.id);
  return slugs.map((x) => ({ slug: x }));
};
