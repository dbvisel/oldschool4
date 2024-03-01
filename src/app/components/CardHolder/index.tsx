import { ResourceItem } from "@/types/index";
import ResourceCard from "@/app/components/ResourceCard";
import styles from "./index.module.css";

const CardHolder = ({
  resources,
  areSubResources = false,
}: {
  resources: Array<ResourceItem>;
  areSubResources: Boolean;
}) => {
  // console.log(resources);
  return (
    <div className={styles.cardHolder}>
      {resources.map((resource: ResourceItem) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          isSubResource={areSubResources}
        />
      ))}
    </div>
  );
};

export default CardHolder;
