import Image from "next/image";
import Link from "next/link";
import CardHolder from "@/app/components/CardHolder";
import getResourceData from "@/lib/getResourceData";
import { possibleSlugs } from "@/utils/airtable";
import styles from "./page.module.css";
import { ResourceItem } from "@/types/index";

const ContactInformation = ({ resource }: { resource: ResourceItem }) => {
  if (!resource.contactInfoEmail) return null;
  return (
    <>
      <dt>Contact</dt>
      {resource.contactInfoEmail && (
        <dd>
          <a href={`mailto:${resource.contactInfoEmail}`}>
            {resource.contactInfoEmail}
          </a>
        </dd>
      )}
    </>
  );
};

const ResourcePage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  // console.log("slug:", slug);
  const resource = await getResourceData(slug);
  return resource.title ? (
    <article className={styles.resourcePage}>
      <h2>
        <span>Resource:</span>{" "}
        <Link href={resource.link || ""}>{resource.title}</Link>
      </h2>
      <div className={styles.resourceData}>
        {resource.imagePath && resource.blurPath && (
          <div className={styles.imageWrapper}>
            <Image
              src={resource.imagePath}
              alt={
                resource.imageAlt ||
                resource.description ||
                resource.shortDescription ||
                ""
              }
              placeholder="blur"
              blurDataURL={resource.blurPath}
              width={resource.imageWidth}
              height={resource.imageHeight}
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
          {<ContactInformation resource={resource} />}
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
