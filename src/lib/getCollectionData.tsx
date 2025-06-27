import fs from "fs/promises";
import { getPlaiceholder } from "plaiceholder";
import { getCollectionById, getResourceById } from "./../utils/airtable";
import { possibleCollections } from "@/utils/airtable";
import { cleanResource } from "./resource";
import { slugify } from "./../utils/misc";

const getCollectionData = async ({ params }: { params: any }): Promise<any> => {
  const { slug } = params;
  // console.log("getCollectionData params:", params);
  const collectionTypes = await possibleCollections();
  // console.log("collectionTypes:", collectionTypes);
  const thisType = collectionTypes.filter((x: any) => x.slug === slug)[0];
  // console.log("thisType:", thisType);
  const collectionData = await getCollectionById(params.slug);
  // console.log("collectionData: ", collectionData);
  const resourceIds = collectionData.fields.Resources || [];
  // console.log("resources:", resourceIds);
  const resources = await Promise.all(
    resourceIds.map(async (id: string) => {
      const resource = await getResourceById(id);
      // console.log("resource:", resource);
      return resource;
    })
  );
  // console.log("resources after clean:", resources);

  const filteredData = resources.sort((x: any, y: any) => {
    const a = String(x.Alphabetize || x.Title).toUpperCase();
    const b = String(y.Alphabetize || y.Title).toUpperCase();
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  });

  const filteredCorpus = filteredData.map((x: any) =>
    `${x.Title} ${x.Short_Description ? x.Short_Description : ""} ${
      x.Priority_Relevancy_Search && x.Priority_Relevancy_Search.length
        ? x.Priority_Relevancy_Search.join(" ")
        : ""
    } ${
      x.Medium_Relevancy_Search && x.Medium_Relevancy_Search.length
        ? x.Medium_Relevancy_Search.join(" ")
        : ""
    } ${
      x.Low_Relevancy_Search && x.Low_Relevancy_Search.length
        ? x.Low_Relevancy_Search.join(" ")
        : ""
    }`.toLowerCase()
  );

  const blurPathedData = await Promise.all(
    filteredData.map(async (x: any) => {
      if (x.imagePath) {
        x.blurPath = x.imagePath;
        try {
          const theFile = await fs.readFile(`./public${x.imagePath}`);
          const {
            base64,
            metadata: { width, height },
          } = await getPlaiceholder(theFile);
          x.blurPath = base64;
          x.imageWidth = width;
          x.imageHeight = height;
        } catch (error) {
          console.error(
            "Error with blurpath (getCategoryData)!",
            x.Title,
            x.imagePath
          );
        }
      }
      return cleanResource(
        { fields: x, ...x },
        slugify(x.fields.Slug, x.fields.Title),
        []
      );
    })
  );

  return {
    slug: params.slug,
    resources: blurPathedData,
    corpus: filteredCorpus,
    title: collectionData.fields.Collection || "",
    description: collectionData.fields.Description || "",
    // seoTitle:
    //   typeof categoryData !== "undefined"
    //     ? categoryData.fields["SEO Title"] || ""
    //     : "",
    // seoDescription:
    //   typeof categoryData !== "undefined"
    //     ? categoryData.fields["SEO Description"] || ""
    //     : "",
    // description:
    //   typeof categoryData !== "undefined"
    //     ? categoryData.fields.Notes || ""
    //     : "",
  };
};

export default getCollectionData;
