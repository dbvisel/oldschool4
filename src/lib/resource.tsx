import { ResourceItem } from "@/types/index";

export const cleanResource = (
  resource: any,
  slug: string,
  subresources: any
): ResourceItem => {
  // console.log("original:", resource);
  if (!resource.id) {
    console.error(
      "No id found for resource, generating random UUID: ",
      resource.fields.Title
    );
  }
  const newResource = {
    id: resource.id, // This should be the Airtable ID.
    title: resource.fields.Title,
    tags: resource.fields.Tags,
    link: resource.fields["Resource URL"],
    image: {
      path: resource.imagePath,
      height: resource.imageHeight,
      width: resource.imageWidth,
      alt: resource.fields["Image text"] || resource.fields.Title,
      blurPath: resource.blurPath,
    },
    description: resource.fields.Description,
    shortDescription: resource.fields["Short Description"],
    subresources: subresources.length ? subresources : [],
    types: resource.fields.Types,
    slug: slug,
    contactInfo: {
      email: resource.fields["Contact info email"],
    },
  };
  // console.log("cleaned:", newResource);
  return newResource;
};
