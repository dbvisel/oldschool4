"use client";

import { Fukidashi } from "react-fukidashi";
import "react-fukidashi/style.css";
import ResourceCard from "@/components/ResourceCard";
import styles from "./page.module.css";
import { ResourceItem } from "@/types/index";

import useWidth from "@/hooks/useWidth";

const DemoComponent = ({ resource }: { resource: ResourceItem }) => {
  const width = useWidth();
  return (
    <div
      className={`${styles.demoDiv} ${(width || 0) < 840 ? "vertical" : ""}`}
      style={{ backgroundColor: "var(--orange)" }}
    >
      <div className={styles.fukidashiwrapper}>
        <Fukidashi
          placement={(width || 0) > 839 ? "left" : "bottom"}
          width={230}
          gap={20}
          delay={0}
          text="Each resource has its own page (often with the creator’s contact
				info and related resources). To see it, click here."
        >
          <Fukidashi
            placement={(width || 0) > 839 ? "right" : "top"}
            width={230}
            gap={20}
            delay={0}
            text="Most resources have a link to an external site. To go there,
					click on the resource card's picture or on the
					arrow-within-a-circle icon."
          >
            <div className={styles.resourcedemo}>
              <ResourceCard resource={resource} isSubResource={false} />
            </div>
          </Fukidashi>
        </Fukidashi>
      </div>
    </div>
  );
};

export default DemoComponent;
