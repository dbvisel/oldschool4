import Image from "next/image";
import { Link } from "next-view-transitions";
import { ResourceItem } from "@/types/index";
import styles from "./page.module.css";
import calendarIcon from "./images/calendar.svg";

// TODO: we haven't actually implemented differential links or the icon in the upper right!

const skipResourcePage = true;

const ResourceCard = ({
  resource,
  isSubResource,
  isEvent = false,
  forceNew = false,
  showType = false,
  // isSearchResult = false,
}: {
  resource: ResourceItem;
  isSubResource: Boolean;
  isEvent?: Boolean;
  forceNew?: Boolean;
  showType?: Boolean;
  // isSearchResult: Boolean;
}) => {
  const thisLink = isEvent
    ? "/events/"
    : isSubResource
      ? resource.link
      : resource.slug === "/"
        ? `/intro` // This is for the case where we have a dummy resource.
        : `/resource/${resource.slug}` || "";
  const description = isEvent
    ? resource.shortDescription
    : resource.shortDescription || resource.description || "";
  // console.log("resource", resource);
  const dateChanged: Date = resource.dateChanged
    ? new Date(resource.dateChanged)
    : new Date(0);
  const dateAdded: Date = resource.dateAdded
    ? new Date(resource.dateAdded)
    : new Date(0);
  const useDate: Date = dateAdded || dateChanged;
  const now: Date = new Date();
  const isNew =
    forceNew || now.getTime() - useDate.getTime() < 2592000000 * 1.5; //2592000000 is 30 days – the number after it is how many months we want.
  // console.log(showType, resource.types);
  return (
    <div className={styles.card}>
      {showType && resource.types ? (
        <div className={styles.type}>{resource.types[0]}</div>
      ) : null}
      {isNew ? <div className={styles.new}>NEW!</div> : null}
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
        <Link
          href={(skipResourcePage ? resource.link : thisLink) || ""}
          className="imagelink"
          target={skipResourcePage ? "_blank" : "_self"}
        >
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
        <Link
          href={(skipResourcePage ? resource.link : thisLink) || ""}
          target={skipResourcePage ? "_blank" : "_self"}
        >
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
