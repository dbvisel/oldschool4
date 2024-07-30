import Image from "next/image";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import { ResourceItem } from "@/types/index";
import styles from "./page.module.css";
import calendarIcon from "./images/calendar.svg";

const ResourceCard = ({
  resource,
  isSubResource,
  isEvent = false,
  // isSearchResult = false,
}: {
  resource: ResourceItem;
  isSubResource: Boolean;
  isEvent: Boolean;
  // isSearchResult: Boolean;
}) => {
  const thisLink = isEvent
    ? "/events/"
    : isSubResource
      ? resource.link
      : `/resource/${resource.slug}` || "";
  const description = isEvent
    ? resource.shortDescription
    : resource.shortDescription || resource.description || "";
  return (
    <div className={styles.card}>
      {isEvent ? (
        <Image
          src={calendarIcon}
          alt={resource.title || "Event"}
          width={57}
          height={57}
        />
      ) : resource?.image?.path &&
        resource.image.width &&
        resource.image.height ? (
        <Link href={thisLink || ""} className="imagelink">
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
      <div className={styles.bottomblock}>
        <Link href={thisLink || ""}>
          {isEvent ? <h3 className={styles.eventHead}>EVENT</h3> : null}
          <h2>{resource.title}</h2>
          {isEvent ? (
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: description || "" }}
            />
          ) : (
            <p className={styles.description}>{description}</p>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
