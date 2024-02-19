import getResourceData from "@/lib/getResourceData";
import { possibleSlugs } from "@/utils/airtable";

const ResourcePage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  // console.log("slug:", slug);
  const resource = await getResourceData(slug);
  // console.log(resource);
  return resource.title ? (
    <div>
      <h1>My Resource: {resource.title}</h1>
      <p>{JSON.stringify(resource)}</p>
    </div>
  ) : (
    <div>
      <p>Resource not found!</p>
    </div>
  );
};

export default ResourcePage;

export const generateStaticParams = async () => {
  const slugs = await possibleSlugs();
  return slugs.map((x: any) => ({ slug: x.slug }));
};
