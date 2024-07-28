"use client";

import ResourceCard from "../ResourceCard";
import styles from "./styles.module.css";

interface ResourceRecord {
  title: string;
  slug: string;
}

const Hit = ({ hit }: { hit: any }) => {
  const cleanedHit = {
    title: hit["Title"],
    id: hit.id,
    slug: hit.slug,
    image: {
      path: `/images/resources/${hit.image?.id}.${hit.image?.extension}`,
      blurPath: `/Images/resources/${hit.image?.id}.${hit.image?.extension}`,
      width: hit.image?.width,
      height: hit.image?.height,
      alt: hit["Short_Description"] || hit.title || "",
    },
    shortDescription: hit["Short_Description"],
    link: hit["Resource_URL"],
  };

  return (
    <div className={styles.hit}>
      <ResourceCard
        resource={cleanedHit}
        isSubResource={false}
        // isSearchResult={true}
      />
    </div>
  );
};

export default Hit;
