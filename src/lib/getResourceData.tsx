import fs from "fs/promises";
import { getPlaiceholder } from "plaiceholder";
import { possibleSlugs, getResourceById } from "@/utils/airtable";
import { ResourceItem } from "@/types/index";

const cleanData = (resource: any, slug: string): ResourceItem => {
  // console.log("original:", resource);
  const newResource = {
    id: resource.id,
    title: resource.fields.Title,
    tags: resource.fields.Tags,
    imagePath: resource.imagePath,
    blurPath: resource.blurPath,
    shortDescription: resource.fields["Short Description"],
    subresources: resource.fields.Subresouce
      ? resource.fields.Subresource.map((x: any) => ({ id: x }))
      : [],
    types: resource.fields.Types,
    slug: slug,
    contactInfoEmail: resource.fields["Contact info email"],
  };
  // console.log("cleaned:", newResource);
  return newResource;
};

const getResourceData = async (slug: string) => {
  const slugs = await possibleSlugs();
  const record = slugs.find((x: any) => x.slug === slug);
  if (!record) {
    console.error("Invalid slug:", slug);
    // Is this the best way to do this?
    return {
      title: "",
    };
  }
  const id = record.id;
  const data: any = await getResourceById(id);
  const resource = cleanData(data, slug);
  if (resource.subresources && resource.subresources.length > 0) {
    for (let i = 0; i < resource.subresources.length; i++) {
      const subresource: any = await getResourceById(
        resource.subresources[i].id
      );
      resource.subresources[i] = cleanData(
        subresource,
        subresource.fields.Slug // TODO: slugify this!
      );
    }
  }
  if (resource.imagePath) {
    resource.blurPath = resource.imagePath;
    try {
      // why is this failing?
      const theFile = await fs.readFile(`./public${resource.imagePath}`);
      const { base64 } = await getPlaiceholder(theFile);
      resource.blurPath = base64;
    } catch (error) {
      console.error("Error with blurpath!", resource.title, resource.imagePath);
    }
  } else {
    console.error("No imagePath found for image: ", resource.title);
    resource.blurPath = "";
  }

  return resource;
};

export default getResourceData;
