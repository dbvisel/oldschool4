"use client";

import { ResourceItem } from "@/types/index";
import ResourceCard from "@/app/components/ResourceCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./index.module.css";

const CardHolder = ({
  resources,
  areSubResources = false,
}: {
  resources: Array<ResourceItem>;
  areSubResources?: Boolean;
}) => {
  // console.log(resources);
  // for (let i = 1; i < 8; i += 1) {
  //   console.log(i * 262 + (i - 1) * 20);
  // }
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        262: 1,
        544: 2,
        826: 3,
        1108: 4,
        1390: 4,
        1672: 5,
        1954: 6,
        2236: 7,
      }}
      className={styles.cardHolder}
    >
      <Masonry gutter={"var(--outside-padding)"}>
        {resources.map((resource: ResourceItem) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            isSubResource={areSubResources}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default CardHolder;