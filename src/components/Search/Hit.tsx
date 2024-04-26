"use client";

// import Link from "next/link";
import { Link } from "next-view-transitions";
import ResourceCard from "../ResourceCard";
import styles from "./styles.module.css";

interface ResourceRecord {
  title: string;
  slug: string;
}

const Hit = ({ hit }: { hit: any }) => {
  // Need to get this into the right shape.
  const cleanedHit = {
    title: hit.title,
    id: hit.id,
    slug: hit.slug,
    image: hit.image,
    shortDescription: hit["Short_Description"],
    link: hit["Resource_URL"],
  };
  // console.log(hit);
  return (
    <div className={styles.hit}>
      <ResourceCard resource={cleanedHit} isSubResource={false} />
    </div>
  );
};

export default Hit;
