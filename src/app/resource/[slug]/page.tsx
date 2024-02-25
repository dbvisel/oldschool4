import Image from "next/image";
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
    <article>
      <h2>My Resource: {resource.title}</h2>
      <p>{JSON.stringify(resource)}</p>
      {resource.imagePath && resource.blurPath && (
        <Image
          src={resource.imagePath}
          alt="image"
          placeholder="blur"
          blurDataURL={resource.blurPath}
          width={400}
          height={400}
        />
      )}
    </article>
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
