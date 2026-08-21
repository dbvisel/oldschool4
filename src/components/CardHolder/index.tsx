"use client";

import type { ResourceItem } from "@/types/index";
import ResourceCard from "@/components/ResourceCard";
import { Masonry } from "react-plock";
import styles from "./index.module.css";

// react-plock types `gap` as a number, but it only ever forwards this value
// straight into a CSS gap/rowGap style with no arithmetic, so a CSS custom
// property string works fine at runtime. It must be an array matching
// `columns`' length though — a bare value gets wrapped into a 1-element
// array internally, so indexing past the first breakpoint returns undefined
// and the gap style silently gets dropped.
const GAP = "var(--paddingInside, 12.5px)" as unknown as number;
const GAPS = new Array(8).fill(GAP);

const defaultConfig = {
  columns: [1, 2, 3, 4, 4, 5, 6, 7],
  gap: GAPS,
  media: [544, 826, 1108, 1390, 1672, 1954, 2236],
  useBalancedLayout: true,
};

const collectionPageConfig = {
  columns: [1, 2, 3, 4, 4, 5, 6, 7],
  gap: GAPS,
  media: [544, 826, 1108, 1390, 1772, 2054, 2336],
  useBalancedLayout: true,
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
  return (
    <Masonry
      items={resources}
      config={isCollectionPage ? collectionPageConfig : defaultConfig}
      className={styles.cardHolder}
      render={(resource: ResourceItem) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          isSubResource={areSubResources}
          isEvent={false}
          forceNew={forceNew}
          showType={showType}
          hideNew={hideNew}
        />
      )}
    />
  );
};

export default CardHolder;
