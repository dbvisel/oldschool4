"use client";

import CardHolder from "@/components/CardHolder";
import styles from "./styles.module.css";
// import { LoadingTopResources } from "@/components/TopResources";

export const TopResourcesSlide = ({ resources }: any) => {
  // console.log(resources.length, resources);
  return resources.length ? (
    <div className={styles.slide}>
      <h2 className="pageheader">
        <span>Just added to </span>Old School:
      </h2>
      <CardHolder resources={resources} />
    </div>
  ) : null;
};
