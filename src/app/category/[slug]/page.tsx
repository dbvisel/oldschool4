import { allTypes } from "@/utils/categories";
import getCategoryData from "@/lib/getCategoryData";
import styles from "./page.module.css";

// TODO: does this need to be one level higher?

const CategoryPage = async ({
  params: { slug },
}: {
  params: { slug: String };
}) => {
  const data = await getCategoryData({ params: { slug } });
  // console.log(data);
  return (
    <article className={styles.category}>
      <h2>Category: {slug}</h2>
      <div>{JSON.stringify(data)}</div>
    </article>
  );
};

export default CategoryPage;

export const generateStaticParams = async () => {
  const slugs = allTypes.map((x) => x.id);
  return slugs.map((x) => ({ slug: x }));
};
