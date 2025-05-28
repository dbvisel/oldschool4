import type { Metadata } from "next";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import getResourceData from "@/lib/getResourceData";
import { possibleSlugs } from "@/utils/airtable";
import { ResourceItem } from "@/types/index";
import CardHolder from "@/components/CardHolder";
import PDFEmbed from "@/components/PDFEmbed";
// import ShareSection from "./ShareSection";
import VideoEmbed, { isEmbeddable } from "./VideoEmbed";
import styles from "./page.module.css";
import PDFList from "@/caches/pdfs/cache.json";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const ContactInformation = ({ resource }: { resource: ResourceItem }) => {
  if (
    resource.contactInfo &&
    (resource.contactInfo.email ||
      resource.contactInfo.phone ||
      resource.contactInfo.location ||
      resource.contactInfo.link)
  ) {
    return (
      <dl className={styles.dataBox}>
        <dt>Contact</dt>
        {resource.contactInfo.email && (
          <dd>
            <strong>Email: </strong>
            <a
              href={`mailto:${resource.contactInfo.email}`}
              target="_blank"
              aria-label={`Email ${resource.contactInfo.email}`}
            >
              {resource.contactInfo.email}
            </a>
          </dd>
        )}
        {resource.contactInfo.phone && (
          <dd>
            <strong>Phone: </strong>
            {resource.contactInfo.phone}
          </dd>
        )}
        {resource.contactInfo.location && (
          <dd>
            <strong>Location: </strong>
            {resource.contactInfo.location}
          </dd>
        )}
        {resource.contactInfo.link && (
          <dd>
            <strong>Link: </strong>
            <a
              href={resource.contactInfo.link}
              target="_blank"
              aria-label={`Link to ${resource.contactInfo.link}`}
            >
              {resource.contactInfo.link}
            </a>
          </dd>
        )}
      </dl>
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
  // console.log(resource);
  const isLandscape = resource?.image?.width > resource?.image?.height;
  const isWide = resource?.image?.width > 1024;
  const isVideoPage = isEmbeddable(String(resource.link));
  const thisIsAPDF = PDFList.indexOf(resource.id) > -1 || false;

  return resource.title ? (
    <article className={styles.resourcePage}>
      <h2>{resource.title}</h2>
      <div
        className={`${styles.resourceData} ${isLandscape ? "horizontal" : "vertical"}`}
      >
        {isVideoPage ? (
          <VideoEmbed url={String(resource.link)} title={resource.title} />
        ) : resource?.image?.path && resource.image.blurPath ? (
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
              width={(resource.image.width / resource.image.height) * 250}
              height={250}
            />
          </div>
        ) : null}
        <div className={styles.dataBoxWrapper}>
          {/* <dl className={styles.dataBox}>
            {resource.types && resource.types.length ? (
              <>
                <dt>Resource Type</dt>
                <dd>{resource.types.map((x: String) => x).join(", ")}</dd>
              </>
            ) : null}
          </dl> */}
          <div className={styles.dataBox}>
            <div
              dangerouslySetInnerHTML={{
                __html: resource.description || resource.shortDescription || "",
              }}
            />
          </div>
          {/*<ContactInformation resource={resource} />*/}
          {/* <dl className={styles.dataBox}>
            <ShareSection
              url={resource.link}
              title={resource.title}
              description={resource.description || ""}
              shortDescription={resource.shortDescription || ""}
            />
          </dl> */}
        </div>
      </div>
      {thisIsAPDF && <PDFEmbed id={resource.id} title={resource.title} />}
      {resource.subresources && resource.subresources.length ? (
        <div className={styles.subresources}>
          {/* <h3>See also:</h3> */}
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
  console.log("Slugs for static params:", slugs);
  return slugs.map((x: any) => ({ slug: x.slug }));
};

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const resource = await getResourceData(slug);
  const metaData = {
    title: `Old School: ${resource.title || ""}`,
    description: `${resource.description || resource.shortDescription || ""}`,
    twitter: {
      title: `Old School: ${resource.title || ""}`,
    },
    openGraph: {
      title: `Old School: ${resource.title || ""}`,
    },
  };

  return {
    ...metaData,
  };
}
