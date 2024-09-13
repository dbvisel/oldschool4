import * as React from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import styles from "./../page.module.css";
import digdeeper from "./images/dig-deeper.png";
import quicktakes from "./images/quick-takes.png";
import advocate from "./images/advocate.png";
import intersectionality from "./images/intersectionality.png";
import communicate from "./images/communicate.png";
import workplace from "./images/workplace.png";

// TODO: color of those pngs
// TODO: image for ageism and health

const IntroPageLinks = async () => {
  return (
    <article>
      <div
        className={styles.topDiv}
        style={{ backgroundColor: "var(--white)" }}
      >
        <div>
          <h2
            style={{
              color: "var(--orange)",
              fontSize: "calc(var(--fontSize) * 2)",
            }}
          >
            Some entry points:
          </h2>
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
                      href={"/resource/national-resource-center-on-lgbt-aging/"}
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
                    <a
                      href={
                        "https://oldschool.info/resource/ageist-racist-who-me"
                      }
                    >
                      Ageist? Sexist? Who, Me?
                    </a>
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
                      iMAGES: intervention program to prevent ageism in children
                      and adolescents
                    </Link>
                  </li>
                  <li>
                    <Link href={"/resource/stop-tokenizing-youth/"}>
                      Stop Tokenizing Youth
                    </Link>
                  </li>
                </ul>
              </ul>
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
                  <a href={"https://www.aworld4allages.org/"}>
                    WHO - Global Report on Ageism
                  </a>
                </li>
                <li>
                  <a
                    href={
                      "https://celadonbooks.com/book/this-chair-rocks-a-manifesto-against-ageism/"
                    }
                  >
                    This Chair Rocks: A Manifesto Against Ageism
                  </a>
                </li>
                <li>
                  <Link
                    href={"/resource/ageism-unmasked-by-tracey-gendron-phd/"}
                  >
                    Ageism Unmasked: Exploring Age Bias and How to End It
                  </Link>
                </li>
              </ul>
            </div>
            <div>
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
                    href={"/resource/gaining-momentum-communications-toolkit/"}
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
                    Challenging Ageism: a Guide to talking about aging and Older
                    Age
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
                    href={"/resource/the-older-persons-self-advocacy-handbook/"}
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
                    Changing the Narrative
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
              </ul>
              <h4>
                <Image
                  src={workplace}
                  alt="Ageism in the workplace"
                  width={80}
                  height={80}
                />
                Ageism and Health
              </h4>
              <ul>
                <li>
                  <a href="https://www.harpercollins.com/products/breaking-the-age-code-becca-levy?variant=40615809613858">
                    Breaking the Age Code: How Your Beliefs About Aging
                    Determine How Long and Well You Live
                  </a>
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
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default IntroPageLinks;
