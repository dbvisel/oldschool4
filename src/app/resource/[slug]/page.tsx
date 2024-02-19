import getResourceData from "@/lib/getResourceData";
import { possibleSlugs } from "@/utils/airtable";

const ResourcePage = async ({
  params: { slug },
}: {
  params: { slug: String };
}) => {
  const data = await getResourceData({ params: { slug } });
  // console.log(data);
  return (
    <div>
      <h1>My Resource: {slug}</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default ResourcePage;

export const generateStaticParams = async () => {
  const slugs = await possibleSlugs();
  return slugs.map((x: any) => ({ slug: x.slug }));
};
