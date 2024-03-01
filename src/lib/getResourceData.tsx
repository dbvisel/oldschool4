import fs from "fs/promises";
import { getPlaiceholder } from "plaiceholder";
import { possibleSlugs, getResourceById } from "@/utils/airtable";
import { ResourceItem } from "@/types/index";
import { slugify } from "@/utils/misc";
import { cleanResource } from "./resource";

const getSubresource = async (id: string): Promise<ResourceItem | null> => {
  const subresource: any = await getResourceById(id);
  // console.log(subresource);
  if (
    !subresource.fields["Status"] ||
    (subresource.fields["Status"] &&
      subresource.fields["Status"] !== "publish") ||
    (subresource.fields["Hide?"] && subresource.fields["Hide?"] !== "yes") ||
    (subresource.fields["Status"] &&
      subresource.fields["Status"] === "taken down")
  ) {
    // console.log("Subresource is not published or is hidden.");
    return null;
  }
  const cleanSubresource = cleanResource(
    subresource,
    slugify(subresource.fields.Slug, subresource.fields.Title),
    []
  );
  return cleanSubresource;
};

const getImage = async (resource: ResourceItem): Promise<ResourceItem> => {
  if (resource.image.path) {
    // console.log("Looking for subresource image: ", resource.imagePath);
    resource.image.blurPath = resource.image.path;
    try {
      // why is this failing?
      const theFile = await fs.readFile(`./public${resource.image.path}`);
      const {
        base64,
        metadata: { height, width },
      } = await getPlaiceholder(theFile);
      resource.image.blurPath = base64;
      resource.image.height = height;
      resource.image.width = width;
    } catch (error) {
      console.error(
        "Error with blurpath (getResourceData)!",
        resource.title,
        resource.image
      );
    }
  } else {
    console.error("No imagePath found for image: ", resource.title);
    resource.image.blurPath = "";
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
      image: { path: "", blurPath: "", width: 0, height: 0, alt: "" },
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
      let possibleSubresource = await getSubresource(
        data.fields.Subresource[i]
      );
      if (possibleSubresource !== null) {
        // It's possible that a subresource ID is something that should be hidden.
        if (possibleSubresource.image.path) {
          possibleSubresource = await getImage(possibleSubresource);
        }
        subresources[subresources.length] = possibleSubresource;
      }
    }
  }

  let resource = cleanResource(data, slug, subresources);
  resource = await getImage(resource);
  // console.log("\n\n output: ", resource, `\n\n`);
  return resource;
};

export default getResourceData;
