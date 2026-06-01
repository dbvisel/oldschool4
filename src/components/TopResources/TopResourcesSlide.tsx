"use client";

import CardHolder from "@/components/CardHolder";
import styles from "./styles.module.css";
import { ResourceItem } from "@/types/index";

export const TopResourcesSlide = ({
  resources,
}: {
  resources: ResourceItem[];
}) => {
  // console.log(resources.length, resources);
  return resources.length ? (
    <div className={styles.slide}>
      <h2 className="pageheader">
        <span>Just added to </span>Old School:
      </h2>
      <CardHolder resources={resources} forceNew />
    </div>
  ) : null;
};
