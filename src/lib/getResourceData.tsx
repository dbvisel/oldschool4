import fs from "fs/promises";
import { getPlaiceholder } from "plaiceholder";
import { possibleSlugs, getResourceById } from "@/utils/airtable";
import { ResourceItem } from "@/types/index";
import { slugify } from "@/utils/misc";
import { randomUUID } from "crypto";

export const cleanResource = (
  resource: any,
  slug: string,
  subresources: any
): ResourceItem => {
  // console.log("original:", resource);
  const newResource = {
    id: resource.id || randomUUID(),
    title: resource.fields.Title,
    tags: resource.fields.Tags,
    link: resource.fields["Resource URL"],
    imagePath: resource.imagePath,
    imageHeight: resource.imageHeight,
    imageWidth: resource.imageWidth,
    imageAlt: resource.fields["Image text"] || resource.fields.Title,
    blurPath: resource.blurPath,
    description: resource.fields.Description,
    shortDescription: resource.fields["Short Description"],
    subresources: subresources.length ? subresources : [],
    types: resource.fields.Types,
    slug: slug,
    contactInfoEmail: resource.fields["Contact info email"],
  };
  // console.log("cleaned:", newResource);
  return newResource;
};

const getSubresource = async (id: string): Promise<ResourceItem> => {
  const subresource: any = await getResourceById(id);
  const cleanSubresource = cleanResource(
    subresource,
    slugify(subresource.fields.Slug, subresource.fields.Title),
    []
  );
  return cleanSubresource;
};

const getImage = async (resource: ResourceItem): Promise<ResourceItem> => {
  if (resource.imagePath) {
    // console.log("Looking for subresource image: ", resource.imagePath);
    resource.blurPath = resource.imagePath;
    try {
      // why is this failing?
      const theFile = await fs.readFile(`./public${resource.imagePath}`);
      const {
        base64,
        metadata: { height, width },
      } = await getPlaiceholder(theFile);
      resource.blurPath = base64;
      resource.imageHeight = height;
      resource.imageWidth = width;
    } catch (error) {
      console.error("Error with blurpath!", resource.title, resource.imagePath);
    }
  } else {
    console.error("No imagePath found for image: ", resource.title);
    resource.blurPath = "";
  }
  return resource;
};

const getResourceData = async (slug: string): Promise<ResourceItem> => {
  const slugs = await possibleSlugs();
  const record = slugs.find((x: any) => x.slug === slug);
  if (!record) {
    console.error("Invalid slug:", slug);
    // Is this the best way to do this?
    return {
      slug: "",
      title: "",
      imagePath: "",
      blurPath: "",
      id: "",
    };
  }
  const id = record.id;
  const data: any = await getResourceById(id);

  // First, clean up the subresources
  // console.log(data);
  const subresources: Array<ResourceItem> = [];
  if (data.fields.Subresource && data.fields.Subresource.length > 0) {
    for (let i = 0; i < data.fields.Subresource.length; i++) {
      subresources[i] = await getSubresource(data.fields.Subresource[i]);
      if (subresources[i].imagePath) {
        subresources[i] = await getImage(subresources[i]);
      }
    }
  }

  // console.log("Subresources: ", subresources);
  let resource = cleanResource(data, slug, subresources);
  // resource.subresources = subresources;
  // console.log("Subresources: ", resource.subresources);
  resource = await getImage(resource);
  // if (resource.imagePath) {
  //   resource.blurPath = resource.imagePath;
  //   try {
  //     // why is this failing?
  //     const theFile = await fs.readFile(`./public${resource.imagePath}`);
  //     const {
  //       base64,
  //       metadata: { height, width },
  //     } = await getPlaiceholder(theFile);
  //     resource.blurPath = base64;
  //     resource.imageHeight = height;
  //     resource.imageWidth = width;
  //   } catch (error) {
  //     console.error("Error with blurpath!", resource.title, resource.imagePath);
  //   }
  // } else {
  //   console.error("No imagePath found for image: ", resource.title);
  //   resource.blurPath = "";
  // }
  // console.log("\n\n output: ", resource, `\n\n`);
  return resource;
};

export default getResourceData;
