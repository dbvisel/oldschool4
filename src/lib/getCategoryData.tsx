import fs from "fs/promises";
import { getPlaiceholder } from "plaiceholder";
import { getCategoryById, getResourcesOfType } from "./../utils/airtable";
import { allTypes } from "./../utils/categories";
import { cleanResource } from "./resource";
import { slugify } from "./../utils/misc";

const getCategoryData = async ({ params }: { params: any }): Promise<any> => {
  const thisType = allTypes.filter((x) => x.id === params.slug)[0];
  const categoryData = await getCategoryById(params.slug);
  const data = await getResourcesOfType(thisType.airtableName);

  // const data = await getResourceById(id);
  // if (data.fields.Subresource && data.fields.Subresource.length > 0) {
  //   for (let i = 0; i < data.fields.Subresource.length; i++) {
  //     const subresource = await getResourceById(data.fields.Subresource[i]);
  //     data.fields.Subresource[i] = subresource.fields;
  //   }
  // }
  const filteredData = data.sort((x: any, y: any) => {
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
    }`.toLowerCase(),
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
            x.imagePath,
          );
        }
      }
      return cleanResource({ fields: x, ...x }, slugify(x.Slug, x.Title), []);
    }),
  );

  return {
    slug: params.slug,
    resources: blurPathedData,
    corpus: filteredCorpus,
    seoTitle:
      typeof categoryData !== "undefined"
        ? categoryData.fields["SEO Title"] || ""
        : "",
    seoDescription:
      typeof categoryData !== "undefined"
        ? categoryData.fields["SEO Description"] || ""
        : "",
    description:
      typeof categoryData !== "undefined"
        ? categoryData.fields.Notes || ""
        : "",
  };
};

export default getCategoryData;
