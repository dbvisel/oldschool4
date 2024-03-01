import Image from "next/image";
import Link from "next/link";
import CardHolder from "@/app/components/CardHolder";
import getResourceData from "@/lib/getResourceData";
import { possibleSlugs } from "@/utils/airtable";
import styles from "./page.module.css";
import { ResourceItem } from "@/types/index";

const ContactInformation = ({ resource }: { resource: ResourceItem }) => {
  if (resource.contactInfo) {
    return (
      <>
        <dt>Contact</dt>
        {resource.contactInfo.email && (
          <dd>
            <a href={`mailto:${resource.contactInfo.email}`}>
              {resource.contactInfo.email}
            </a>
          </dd>
        )}
      </>
    );
  } else {
    return null;
  }
};

const ResourcePage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  // console.log("slug:", slug);
  const resource = await getResourceData(slug);
  const isLandscape = resource?.image?.width > resource?.image?.height;
  return resource.title ? (
    <article className={styles.resourcePage}>
      <h2>
        <span>Resource:</span>{" "}
        <Link href={resource.link || ""}>{resource.title}</Link>
      </h2>
      <div
        className={`${styles.resourceData} ${isLandscape ? "horizontal" : "vertical"}`}
      >
        {resource?.image?.path && resource.image.blurPath && (
          <div className={styles.imageWrapper}>
            <Image
              src={resource.image.path}
              alt={
                resource.image.alt ||
                resource.description ||
                resource.shortDescription ||
                ""
              }
              placeholder="blur"
              blurDataURL={resource.image.blurPath}
              width={isLandscape ? resource.image.width : 400}
              height={
                isLandscape
                  ? resource.image.height
                  : (400 / resource.image.width) * resource.image.height
              }
            />
          </div>
        )}
        <dl className={styles.dataBox}>
          {resource.types && resource.types.length ? (
            <>
              <dt>Resource Type</dt>
              <dd>{resource.types.map((x: String) => x).join(", ")}</dd>
              <dt>About This Resource</dt>
            </>
          ) : null}
          <dd
            dangerouslySetInnerHTML={{
              __html: resource.description || resource.shortDescription || "",
            }}
          />
          <ContactInformation resource={resource} />
          <dt>Share This Resource</dt>
          <dd></dd>
        </dl>
      </div>
      {resource.subresources && resource.subresources.length ? (
        <div className={styles.subresources}>
          <h2>See also:</h2>
          <CardHolder
            resources={resource.subresources || []}
            areSubResources={true}
          />
        </div>
      ) : null}
    </article>
  ) : (
    <div>
      <p>Resource not found!</p>
    </div>
  );
};

export default ResourcePage;

export const generateStaticParams = async () => {
  const slugs = await possibleSlugs();
  return slugs.map((x: any) => ({ slug: x.slug }));
};
