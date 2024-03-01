import Image from "next/image";
import Link from "next/link";
import { ResourceItem } from "@/types/index";
import styles from "./page.module.css";

const ResourceCard = ({
  resource,
  isSubResource,
}: {
  resource: ResourceItem;
  isSubResource: Boolean;
}) => {
  // console.log(resource);
  const thisLink = isSubResource
    ? resource.link
    : `/resource/${resource.slug}` || "";
  return (
    <div className={styles.card}>
      {resource?.image?.path &&
      resource.image.width &&
      resource.image.height ? (
        <Link href={thisLink || ""}>
          <Image
            src={resource.image.path}
            alt={resource.image.alt || ""}
            placeholder="blur"
            blurDataURL={resource.image.blurPath}
            width={240}
            height={(240 / resource.image.width) * resource.image.height}
          />
        </Link>
      ) : (
        <p>No image!</p>
      )}
      <h2>
        <Link href={thisLink || ""}>{resource.title}</Link>
      </h2>
    </div>
  );
};

export default ResourceCard;
