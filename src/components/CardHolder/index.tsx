"use client";

import { ResourceItem } from "@/types/index";
import ResourceCard from "@/components/ResourceCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./index.module.css";

const defaultBreakPoints = {
  262: 1,
  544: 2,
  826: 3,
  1108: 4,
  1390: 4,
  1672: 5,
  1954: 6,
  2236: 7,
};

const collectionPageBreakPoints = {
  262: 1,
  544: 2,
  826: 3,
  1108: 4,
  1390: 4,
  1772: 5,
  2054: 6,
  2336: 7,
};

const CardHolder = ({
  resources,
  areSubResources = false,
  forceNew = false,
  showType = false,
  hideNew = false,
  isCollectionPage = false,
}: {
  resources: Array<ResourceItem>;
  areSubResources?: Boolean;
  forceNew?: Boolean;
  showType?: Boolean;
  hideNew?: Boolean;
  isCollectionPage?: Boolean;
}) => {
  // console.log(resources);
  // for (let i = 1; i < 8; i += 1) {
  //   console.log(i * 262 + (i - 1) * 20);
  // }
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={
        isCollectionPage ? collectionPageBreakPoints : defaultBreakPoints
      }
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
            showType={showType}
            hideNew={hideNew}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default CardHolder;
