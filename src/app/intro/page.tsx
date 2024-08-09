import * as React from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import styles from "./page.module.css";
import { getResourceById } from "@/utils/airtable";
import { cleanResource } from "@/lib/resource";
import DemoComponent from "./DemoComponent";
import digdeeper from "./images/dig-deeper.png";
import quicktakes from "./images/quick-takes.png";
import advocate from "./images/advocate.png";
import intersectionality from "./images/intersectionality.png";
import communicate from "./images/communicate.png";
import workplace from "./images/workplace.png";

const SearchIcon = () => (
  <svg
    className="ais-SearchBox-submitIcon"
    width="18"
    height="18"
    viewBox="0 0 40 40"
    aria-hidden="true"
    style={{ position: "relative", margin: "0 2px" }}
  >
    <path
      fill="var(--white)"
      d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
    ></path>
  </svg>
);

// TODO: color of those pngs

const IntroPage = async () => {
  const oldSchool = await getResourceById("recxScXOQzvRSE3yK");

  let myResource = cleanResource(oldSchool, "/", []); // || topResources[Math.floor(Math.random() * topResources.length)];
  myResource.image.height = oldSchool.fields.Image[0].height;
  myResource.image.width = oldSchool.fields.Image[0].width;
  myResource.image.blurPath = myResource.image.path;

  return (
    <article>
      <div className={styles.introArticle}>
        <h2>
          Wondering where to begin when it comes to confronting ageism?
          <br />
          <span style={{ fontWeight: "normal" }}>
            You’re in the right place.
          </span>
        </h2>
        <div className={styles.topDiv}>
          <div>
            <h2 style={{ color: "white" }}>Some navigational tips:</h2>
            <div className={styles.linkDiv}>
              <p>
                <strong>To see all resources,</strong> click on each category on
                the <Link href="/">Home</Link> page.
              </p>
              <p>
                Use <strong>Search</strong> (
                <SearchIcon />) to pursue a topic or find a specific title or
                creator.
              </p>
            </div>
          </div>
        </div>
        <DemoComponent resource={myResource} />
        <div
          className={styles.topDiv}
          style={{ backgroundColor: "var(--backdrop)" }}
        >
          <div>
            <h2 style={{ color: "var(--green)" }}>Some entry points:</h2>
            <div className={styles.linkDiv}>
              <div>
                <h4>
                  <Image
                    src={quicktakes}
                    alt="Quick takes"
                    width={80}
                    height={80}
                  />
                  Quick takes:
                </h4>
                <ul>
                  <li>
                    <Link href={"/resource/break-free-from-ageism/"}>
                      Break Free From Ageism
                    </Link>
                  </li>
                  <li>
                    <Link href={"/resource/imagine-a-world-without-ageism/"}>
                      Imagine a World Without Ageism
                    </Link>
                  </li>
                  <li>
                    <Link href={"/resource/lets-end-ageism/"}>
                      Let’s End Ageism
                    </Link>
                  </li>
                </ul>
                <h4>
                  <Image
                    src={intersectionality}
                    alt="How ageism affects different groups/identities"
                    width={80}
                    height={80}
                  />
                  How ageism affects different groups/identities:
                </h4>
                <ul>
                  <li>POC/BIPOC:</li>
                  <ul>
                    <li>
                      <Link href={"/resource/diverse-elders-coalition/"}>
                        Diverse Elders Coalition
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/intersectionality-matters/"}>
                        Intersectionality Matters
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/no-ageism-/"}>No Ageism</Link>
                    </li>
                  </ul>
                  <li>LGBTQ people:</li>
                  <ul>
                    <li>
                      <Link
                        href={
                          "/resource/age-pride-ageism-and-the-queer-experience/"
                        }
                      >
                        Age Pride: Ageism and the Queer Experience
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          "/resource/national-resource-center-on-lgbt-aging/"
                        }
                      >
                        National Resource Center on LGBT Aging
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/resource/ageism-in-the-black-lgbtq-community/"}
                      >
                        Ageism in the Black LGBTQ Community
                      </Link>
                    </li>
                  </ul>
                  <li>Women:</li>
                  <ul>
                    <li>
                      <Link href={"/resource/how-ageism-really-affects-women/"}>
                        How Ageism Really Affects Women
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/ageist-racist-who-me/"}>
                        Ageist? Sexist? Who, Me?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/resource/old-lesbians-organizing-for-change/"}
                      >
                        Old Lesbians Organizing for Change
                      </Link>
                    </li>
                  </ul>
                  <li>Youngers:</li>
                  <ul>
                    <li>
                      <Link href={"/resource/legacy-project-ageism-guide/"}>
                        Legacy Project, Addressing Ageism
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          "/resource/images-intervention-program-to-prevent-ageism-in-children-and-adolescents/"
                        }
                      >
                        iMAGES: intervention program to prevent ageism in
                        children and adolescents
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/stop-tokenizing-youth/"}>
                        Stop Tokenizing Youth
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div>
                <h4>
                  <Image
                    src={digdeeper}
                    alt="To dig deeper"
                    width={80}
                    height={80}
                  />
                  To dig deeper:
                </h4>
                <ul>
                  <li>
                    <Link href={"/resource/who-global-report-on-ageism/"}>
                      WHO - Global Report on Ageism
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "/resource/this-chair-rocks-a-manifesto-against-ageism-by-ashton-applewhite/"
                      }
                    >
                      This Chair Rocks: A Manifesto Against Ageism
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/resource/ageism-unmasked-by-tracey-gendron-phd/"}
                    >
                      Ageism Unmasked: Exploring Age Bias and How to End It
                    </Link>
                  </li>
                </ul>
                <h4>
                  <Image
                    src={communicate}
                    alt="How to communicate about aging & ageism"
                    width={80}
                    height={80}
                  />
                  How to communicate about aging & ageism:
                </h4>
                <ul>
                  <li>
                    <Link
                      href={
                        "/resource/gaining-momentum-communications-toolkit/"
                      }
                    >
                      Gaining Momentum: A FrameWorks Communications Toolkit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "/resource/como-comunicar-sobre-las-personas-mayores/"
                      }
                    >
                      ¿Cómo comunicar sobre las personas mayores?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "/resource/challenging-ageism-a-guide-to-talking-about-ageing-and-older-age/"
                      }
                    >
                      Challenging Ageism: a Guide to talking about aging and
                      Older Age
                    </Link>
                  </li>
                </ul>
                <h4>
                  <Image
                    src={advocate}
                    alt="How to advocate effectively"
                    width={80}
                    height={80}
                  />
                  How to advocate effectively:
                </h4>
                <ul>
                  <li>
                    <Link
                      href={
                        "/resource/the-older-persons-self-advocacy-handbook/"
                      }
                    >
                      The older person’s self-advocacy handbook
                    </Link>
                  </li>
                  <li>
                    <Link href={"/resource/exposing-systemic-ageism/"}>
                      Exposing Systemic Ageism
                    </Link>
                  </li>
                  <li>
                    <Link href={"/resource/changing-the-narrative-colorado/"}>
                      Changing the Narrative - Colorado
                    </Link>
                  </li>
                </ul>
                <h4>
                  <Image
                    src={workplace}
                    alt="Ageism in the workplace"
                    width={80}
                    height={80}
                  />
                  Ageism in the workplace:
                </h4>
                <ul>
                  <li>
                    <Link
                      href={"/resource/combating-ageism-in-the-world-of-work/"}
                    >
                      Combating ageism in the world of work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "/resource/the-value-of-experience-age-discrimination-against-older-workers-persists/"
                      }
                    >
                      The Value of Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "/resource/a-victim-and-activists-on-the-harmful-effects-of-ageism/"
                      }
                    >
                      The Harmful Effects of Ageism
                    </Link>
                  </li>
                  <li>
                    <Link href={"/resource/what-can-you-expect-at-your-age/"}>
                      Ageism and health: What Can You expect at your age?
                    </Link>
                  </li>
                  <li>
                    <Link href={"/resource/everyday-ageism-health/"}>
                      Everyday Ageism and Health
                    </Link>
                  </li>
                  <li>
                    <Link href={"/resource/yale-school-of-public-health/"}>
                      Research of Becca Levy
                    </Link>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default IntroPage;

// export async function getStaticProps() {
//   const oldSchool = await getResourceById("recxScXOQzvRSE3yK");
//   return {
//     props: {
//       oldSchool: { imagePath: oldSchool.imagePath, ...oldSchool.fields },
//     },
//   };
// }
