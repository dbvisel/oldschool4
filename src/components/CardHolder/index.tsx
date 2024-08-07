"use client";

import { ResourceItem } from "@/types/index";
import ResourceCard from "@/components/ResourceCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./index.module.css";

const CardHolder = ({
  resources,
  areSubResources = false,
  forceNew = false,
}: {
  resources: Array<ResourceItem>;
  areSubResources?: Boolean;
  forceNew?: Boolean;
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
      <Masonry gutter={"var(--paddingOutside)"}>
        {resources.map((resource: ResourceItem) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            isSubResource={areSubResources}
            isEvent={false}
            forceNew={forceNew}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default CardHolder;
