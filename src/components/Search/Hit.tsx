"use client";

import ResourceCard from "../ResourceCard";
import styles from "./styles.module.css";
import { AlgoliaHit } from "@/types/index";

const Hit = ({ hit }: { hit: AlgoliaHit }) => {
  // console.log("hit", hit);
  if (hit.resultType === "event") {
    const cleanedHit = {
      title: hit.title ?? "",
      id: hit.id ?? hit.objectID,
      shortDescription: hit.description,
      slug: `/events/`,
      image: {
        id: hit.id ?? hit.objectID,
        extension: "",
        width: 0,
        height: 0,
        alt: hit.title ?? "",
        path: "",
        blurPath: "",
      },
    };
    return (
      <div className={styles.hit}>
        <ResourceCard
          resource={cleanedHit}
          isSubResource={false}
          isEvent
          showType
        />
      </div>
    );
  }
  const cleanedHit = {
    title: hit["Title"] ?? "",
    id: hit.id ?? hit.objectID,
    slug: hit.slug ?? "",
    types: hit["Types"],
    isNew: Boolean(hit.ShowOnFrontPage),
    hideTitle: Boolean(hit["hideTitle"]),
    image: {
      path: `/images/resources/${hit.image?.id}.${hit.image?.extension}`,
      blurPath: `/Images/resources/${hit.image?.id}.${hit.image?.extension}`,
      width: hit.image?.width ?? 0,
      height: hit.image?.height ?? 0,
      alt: hit["Short_Description"] || hit.title || "",
    },
    shortDescription: hit["Short_Description"],
    link: hit["Resource_URL"],
  };
  // console.log("cleanedHit", cleanedHit, hit.hideTitle);

  return (
    <div className={styles.hit}>
      <ResourceCard
        resource={cleanedHit}
        isSubResource={false}
        showType

        // isSearchResult={true}
      />
    </div>
  );
};

export default Hit;
