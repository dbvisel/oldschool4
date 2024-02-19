import { allTypes } from "@/utils/categories";
import getCategoryData from "@/lib/getCategoryData";

// TODO: does this need to be one level higher?

const CategoryPage = async ({
  params: { slug },
}: {
  params: { slug: String };
}) => {
  const data = await getCategoryData({ params: { slug } });
  // console.log(data);
  return (
    <div>
      <h1>Category: {slug}</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default CategoryPage;

export const generateStaticParams = async () => {
  const slugs = allTypes.map((x) => x.id);
  return slugs.map((x) => ({ slug: x }));
};
