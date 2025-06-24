import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";
import getResourceData from "@/lib/getResourceData";
// import { possibleSlugs } from "@/utils/airtable";
import { ResourceItem } from "@/types/index";
import CardHolder from "@/components/CardHolder";
import styles from "./page.module.css";

const subjectData = {
  title: "Women",
  description: "Sample page of resources for women",
  resources: [
    {
      id: "recRIbuN9UuSiXDV4",
      title: "Age Pride – Ageism and the Queer Experience",
      tags: [
        "ageism",
        "LGBTQ",
        "queer",
        "language",
        "microaggressions",
        "age pride",
        "age discrimination",
        "Age stereotypes",
        "age prejudice",
      ],
      link: "https://www.knowledgeableaging.com/webinar/health-wellness/age-pride-ageism-and-the-queer-experience/",
      isNew: false,
      dateAdded: "2021-07-27",
      hideTitle: true,
      dateChanged: undefined,
      image: {
        path: "/images/resources/recRIbuN9UuSiXDV4.png",
        height: 2224,
        width: 4594,
        alt: "Age Pride – Ageism and the Queer Experience Workshop Created By: Ryan Backer & Kyrié Carpenter for Oldschool.info",
        blurPath:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALUlEQVR4nAEiAN3/ABgTDv+VmIn/u7mp/0dcVv8ACAID///55P/Hwa//HCkj/yojEoZ95FKaAAAAAElFTkSuQmCC",
      },
      description:
        "Ageism (discrimination on the basis of age) is easy to overlook and difficult to untangle. It is compounded by other forms of prejudice and LGBTQIA2S+ communities are especially susceptible to generational silos. Thanks to their unique life courses, though, queer people happen to be very well-suited to dismantle ageism and dispel any notions of intergenerational conflict. In this workshop we will be exploring the intersection of ageism and queerphobia and how they combine and cause more harm together. We will learn to combat them both, along with other forms of prejudice, in order to make the world a better place for everyone.",
      shortDescription:
        "This 30-minute workshop led by queer age activist Ryan Backer investigates how ageism & queerphobia intersect & how to dismantle them both. ",
      subresources: [],
      types: ["Talk"],
      slug: "age-pride-ageism-and-the-queer-experience",
      contactInfo: {
        email: undefined,
        link: undefined,
        location: undefined,
        phone: undefined,
      },
    },
    {
      id: "recwnRoG7Bj9fs3Vt",
      title: "Ageism & Ableism: A Roundtable Discussion",
      tags: [
        "Ashton Applewhite",
        "kim sawchuck",
        "Evelyn Torton Beck",
        "Kimberly Sawchuck",
        "ableism",
        "gender",
        "gender studies",
        "intersectional",
        "intersectionality",
        "somatics",
        "art",
        "Trent University",
        "NANAS",
        "North American Network of Age Studies",
        "dance",
        "dancing",
        "sacred circle dance",
        "creativity",
        "individuation",
        "activism",
        "organizing",
        "North American Network in Aging Studies",
      ],
      link: "https://www.youtube.com/watch?v=FIWU3PFmQLA",
      isNew: false,
      dateAdded: "2021-03-19",
      hideTitle: true,
      dateChanged: undefined,
      image: {
        path: "/images/resources/recwnRoG7Bj9fs3Vt.png",
        height: 520,
        width: 968,
        alt: "North American Network in Aging Studies Ageism & Ableism: A Roundtable Discussion Nov 5 2020",
        blurPath:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAEiAN3/AEJFUf+Zm6X/9vb1/8TExP8ACAwW/wACB/8eHh7/JiYm/0PvENbxp9YSAAAAAElFTkSuQmCC",
      },
      description: undefined,
      shortDescription:
        "Dr. Evelyn Torton Beck & Ashton Applewhite discuss the potential of late life & how internalized ageism gets in our way",
      subresources: [],
      types: ["Talk"],
      slug: "ageism-ableism-a-roundtable-discussion",
      contactInfo: {
        email: undefined,
        link: undefined,
        location: undefined,
        phone: undefined,
      },
    },
    {
      id: "recYGwzokbceSffNP",
      title: "Ageism as a Cause of Loneliness: A Proposed Solution",
      tags: [
        "report",
        "presentation",
        "loneliness",
        "social media",
        "negative",
        "stereotypes",
      ],
      link: "https://youtu.be/EzZQUzBvT50",
      isNew: false,
      dateAdded: "2022-01-28",
      hideTitle: false,
      dateChanged: undefined,
      image: {
        path: "/images/resources/recYGwzokbceSffNP.png",
        height: 974,
        width: 1856,
        alt: "The 2021 Age Boom Academy BIG BUT BRIEF Becca Levy",
        blurPath:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAK0lEQVR4nGPQrlz4Xzh/5n+z5pX/7/z//5+BQdbuP4O09X8GQaP/DBqe/wEnKg/6p2JLfQAAAABJRU5ErkJggg==",
      },
      description:
        "Becca Levy’s “Big but Brief” argues that ageism is a cause of loneliness, and she proposes that a solution for addressing loneliness is to reduce ageism. She shares her research that demonstrates how ageism can impact older persons' health and what we know about solutions to ageism. Becca Levy’s “Big but Brief” argues that ageism is a cause of loneliness, and she proposes that a solution for addressing loneliness is to reduce ageism. She shares her research that demonstrates how ageism can impact older persons' health and what we know about solutions to ageism.",
      shortDescription:
        "A preeminent researcher explains how targeting internalized & structural ageism reduces loneliness ",
      subresources: [],
      types: ["Talk"],
      slug: "ageism-as-a-cause-of-loneliness-a-proposed-solution",
      contactInfo: {
        email: "becca.levy@yale.edu",
        link: undefined,
        location: undefined,
        phone: undefined,
      },
    },
    {
      id: "recaSsT7B5pml8iqo",
      title: "Ageism in Opera",
      tags: [
        "Anastasia Nikolov",
        "Alaysha Fox",
        "Carol Mastrodomenico",
        "​Francesca Mondanaro",
        "Andrea Nwoke",
        "Jeremy Osborne",
        "Rosalind Plowright",
        "Stephen Reineke",
        "Tichina Vaughn",
        "Opera Programs Berlin",
        "opera",
        "performance",
        "performing",
        "show",
        "panel",
        "discussion",
        "conversation",
        "berlin",
        "arts",
        "art",
        "artist",
        "music",
        "musician",
      ],
      link: "https://youtu.be/jYK0Vl_r0xo",
      isNew: false,
      dateAdded: "2021-06-21",
      hideTitle: false,
      dateChanged: undefined,
      image: {
        path: "/images/resources/recaSsT7B5pml8iqo.jpeg",
        height: 480,
        width: 640,
        alt: "opb Opera Programs Berlin",
        blurPath:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGOwMjKQFxaUZGSIZWBg2L901tltm1d1lP5/tZhBVU6Mk41RgZ21trICANi7C8HnI/4UAAAAAElFTkSuQmCC",
      },
      description:
        "From Opera Programs Berlin \n" +
        "Ageism’s seed is based in white supremacy and paternalism. What sprouts from that seed is exclusion and discrimination based on socio-economic disadvantages, race and gender. Our panel discusses how ageism affects all corners of the industry as well as how to level the playing field. With: Anastasia Nikolov (host), Alaysha Fox, Carol Mastrodomenico, Francesca Mondanaro, Andrea Nwoke, ​Jeremy Osborne, Rosalind Plowright, Stephen Reineke, and Tichina Vaughn",
      shortDescription:
        "A panel of artists around the world discusses age bias in the industry & how to level the playing field",
      subresources: [],
      types: ["Talk"],
      slug: "ageism-in-opera",
      contactInfo: {
        email: undefined,
        link: undefined,
        location: undefined,
        phone: undefined,
      },
    },
    {
      id: "reczSE4dTxOG4X3Sx",
      title: "Ageism Is a Bully...Stand Up to It!",
      tags: [
        "culture change",
        "TED",
        "TED talk",
        "woman",
        "women",
        "gender",
        "attitude",
        "media",
        "identity",
        "diversity",
        "cultural expectations",
      ],
      link: "https://www.ted.com/talks/mariann_aalda_ageism_is_a_bully_stand_up_to_it",
      isNew: false,
      dateAdded: "2020-05-05",
      hideTitle: false,
      dateChanged: undefined,
      image: {
        path: "/images/resources/reczSE4dTxOG4X3Sx.png",
        height: 450,
        width: 801,
        alt: "Mariann Aalda TEDx Oak Park Women",
        blurPath:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAEiAN3/AP+Rmf+ogYD/nH17///m5/8A64eV/zMjJf8jDg//jHR4/3hOFGWZSxv3AAAAAElFTkSuQmCC",
      },
      description: undefined,
      shortDescription:
        "Comedian Marian Aalda on beating back the narrative that we lose value as we age & finding your path",
      subresources: [],
      types: ["Talk"],
      slug: "ageism-is-a-bullystand-up-to-it",
      contactInfo: {
        email: "mariannaalda@aol.com",
        link: undefined,
        location: undefined,
        phone: "(718) 564-4401",
      },
    },
  ] as any[],
};

const SubjectPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  // console.log("slug:", slug);
  const subject = subjectData;
  // const resource = await getResourceData(slug);
  // console.log(subject);

  return subject.title ? (
    <article className={styles.subjectPage}>
      <div>
        <h2>{subject.title}</h2>
        <div className={`${styles.resourceData}`}>
          <div className={styles.dataBoxWrapper}>
            <div className={styles.dataBox}>
              <div
                dangerouslySetInnerHTML={{
                  __html: subject.description || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {subject.resources && subject.resources.length ? (
        <div className={styles.resources}>
          {/* <h3>See also:</h3> */}
          <CardHolder
            resources={subject.resources || []}
            areSubResources={true}
            showType
          />
        </div>
      ) : null}
    </article>
  ) : (
    <div>
      <p>Subject not found!</p>
    </div>
  );
};

export default SubjectPage;

// export const generateStaticParams = async () => {
//   const slugs = await possibleSlugs();
//   // console.log("Slugs for static params:", slugs);
//   return slugs.map((x: any) => ({ slug: x.slug }));
// };

// export async function generateMetadata({
//   params: { slug },
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const resource = await getResourceData(slug);
//   const metaData = {
//     title: `Old School: ${resource.title || ""}`,
//     description: `${resource.description || resource.shortDescription || ""}`,
//     twitter: {
//       title: `Old School: ${resource.title || ""}`,
//     },
//     openGraph: {
//       title: `Old School: ${resource.title || ""}`,
//     },
//   };

//   return {
//     ...metaData,
//   };
// }
