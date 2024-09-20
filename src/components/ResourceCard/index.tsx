import Image from "next/image";
import { Link } from "next-view-transitions";
import { ResourceItem } from "@/types/index";
import styles from "./page.module.css";
import calendarIcon from "./images/calendar.svg";

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
  // if (resource.subresources?.length) {
  //   // this isn't coming back with anything!
  //   console.log(resource);
  // }
  // console.log(resource);
  // This is true if the link contains "oldschool.info/resource/" – if that's the case, we're going to the resource page, not an outbound link
  const isResourcePage =
    String(resource.link).indexOf("oldschool.info/resource/") > -1;
  const thisLink = isResourcePage
    ? `/resource/${resource.slug}`
    : isEvent
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
    forceNew ||
    resource.isNew ||
    now.getTime() - useDate.getTime() < 2592000000 * 1.5; //2592000000 is 30 days – the number after it is how many months we want.
  // if (!resource.types) {
  //   console.log(resource);
  // }
  return (
    <div className={styles.card}>
      {showType ? (
        resource.types ? (
          <div className={styles.type}>{resource.types[0]}</div>
        ) : isEvent ? (
          <div className={styles.type}>Event</div>
        ) : null
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
        skipResourcePage && !isEvent && !isResourcePage ? (
          <a
            href={String(resource.link || "")}
            className="imagelink"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Image
              src={resource.image.path}
              alt={resource.image.alt || ""}
              placeholder="blur"
              blurDataURL={resource.image.blurPath}
              width={240}
              height={(240 / resource.image.width) * resource.image.height}
            />
          </a>
        ) : (
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
        )
      ) : (
        <p>No image!</p>
      )}
      <div className={styles.bottomblock}>
        {skipResourcePage && !isEvent && !isResourcePage ? (
          <a href={String(resource.link) || ""} target={"_blank"}>
            {!resource.hideTitle && <h2>{resource.title}</h2>}
            {isEvent ? (
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description || "" }}
              />
            ) : (
              <p className={styles.description}>{description}</p>
            )}
          </a>
        ) : (
          <Link href={thisLink || ""}>
            {isEvent ? <h3 className={styles.eventHead}>EVENT</h3> : null}
            {!resource.hideTitle && <h2>{resource.title}</h2>}
            {isEvent ? (
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description || "" }}
              />
            ) : (
              <p className={styles.description}>{description}</p>
            )}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
