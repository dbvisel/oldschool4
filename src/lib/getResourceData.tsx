import { possibleSlugs, getResourceById } from "@/utils/airtable";
import { getPlaiceholder } from "plaiceholder";

const getResourceData = async ({ params }: { params: any }) => {
  const slugs = await possibleSlugs();
  const id = slugs.find((x: any) => x.slug === params.slug).id;
  const data: any = await getResourceById(id);
  if (data.fields.Subresource && data.fields.Subresource.length > 0) {
    for (let i = 0; i < data.fields.Subresource.length; i++) {
      const subresource: any = await getResourceById(
        data.fields.Subresource[i]
      );
      data.fields.Subresource[i] = {
        imagePath: subresource.imagePath,
        ...subresource.fields,
      };
    }
  }
  if (data.imagePath) {
    data.blurPath = data.imagePath;
    try {
      const { base64 } = await getPlaiceholder(data.imagePath);
      data.blurPath = base64;
    } catch (error) {
      console.error("Error with blurpath!", data.Title, data.imagePath);
    }
  } else {
    console.log("No imagePath found for image: ", data.fields.Title);
    data.blurPath = "";
  }

  return {
    props: {
      id: id || "",
      slug: params.slug,
      imagePath: data.imagePath,
      blurPath: data.blurPath,
      resource: data.fields,
    },
  };
};

export default getResourceData;
