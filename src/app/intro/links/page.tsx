import * as React from "react";
// import { Link } from "next-view-transitions";
import Image from "next/image";
import styles from "./../page.module.css";
import digdeeper from "./images/dig-deeper.png";
import quicktakes from "./images/quick-takes.png";
import advocate from "./images/advocate.png";
import intersectionality from "./images/intersectionality.png";
import communicate from "./images/communicate.png";
import workplace from "./images/workplace.png";
import health from "./images/health.png";

// TODO: Ageist? Racist? Who, Me? is a Google Drive PDF! so is Stop Tokenizing Youth

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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://youtu.be/Prc9S0W24P4"}
                  >
                    Break Free From Ageism
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.youtube.com/watch?v=Hs28FgRxqt0&feature=youtu.be"
                    }
                  >
                    Imagine a World Without Ageism
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.ted.com/talks/ashton_applewhite_let_s_end_ageism?language=en"
                    }
                  >
                    Let’s End Ageism
                  </a>
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
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://www.diverseelders.org/?s=AGEISM&submit=Search"
                      }
                    >
                      Diverse Elders Coalition
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://podcasts.apple.com/us/podcast/10-age-against-the-machine-the-fatal-intersection/id1441348908?i=1000470442230"
                      }
                    >
                      Intersectionality Matters
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"https://vimeo.com/467612010"}
                    >
                      No Ageism
                    </a>
                  </li>
                </ul>
                <li>LGBTQ people:</li>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://www.knowledgeableaging.com/webinar/health-wellness/age-pride-ageism-and-the-queer-experience/"
                      }
                    >
                      Age Pride: Ageism and the Queer Experience
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://www.lgbtagingcenter.org/resources/resources.cfm?s=1"
                      }
                    >
                      National Resource Center on LGBT Aging
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"https://youtu.be/G7YGiouLI98"}
                    >
                      Ageism in the Black LGBTQ Community
                    </a>
                  </li>
                </ul>
                <li>Women:</li>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "/resource/https://www.refinery29.com/en-us/how-ageism-really-affects-women/"
                      }
                    >
                      How Ageism Really Affects Women
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://drive.google.com/file/d/18GM6d_pAqxq1M1HnAe70urlk-f7JfQdd/view?usp=sharing"
                      }
                    >
                      Ageist? Sexist? Who, Me?
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"http://oloc.org/"}
                    >
                      Old Lesbians Organizing for Change
                    </a>
                  </li>
                </ul>
                <li>Youngers:</li>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"http://www.legacyproject.org/guides/ageism.html"}
                    >
                      Legacy Project, Addressing Ageism
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://www.researchgate.net/publication/274280026_iMAGES_intervention_program_to_prevent_ageism_in_children_and_adolescents"
                      }
                    >
                      iMAGES: intervention program to prevent ageism in children
                      and adolescents
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        "https://drive.google.com/file/d/1EuLNszSqaXJU9dqF96w4EVv4VoIiCL2F/view?usp=sharing"
                      }
                    >
                      Stop Tokenizing Youth
                    </a>
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://www.aworld4allages.org/"}
                  >
                    WHO - Global Report on Ageism
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://celadonbooks.com/book/this-chair-rocks-a-manifesto-against-ageism/"
                    }
                  >
                    This Chair Rocks: A Manifesto Against Ageism
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.penguinrandomhouse.com/books/700435/ageism-unmasked-by-tracey-gendron/"
                    }
                  >
                    Ageism Unmasked: Exploring Age Bias and How to End It
                  </a>
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.frameworksinstitute.org/toolkit/gaining-momentum/"
                    }
                  >
                    Gaining Momentum: A FrameWorks Communications Toolkit
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://view.genial.ly/5fd0e1a9b311230dad31a7b5/horizontal-infographic-review-comunicacion-estereotipada-pmy"
                    }
                  >
                    ¿Cómo comunicar sobre las personas mayores?
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://ageing-better.org.uk/publications/challenging-ageism-guide-talking-about-ageing-and-older-age"
                    }
                  >
                    Challenging Ageism: a Guide to talking about aging and Older
                    Age
                  </a>
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"http://publications.age-platform.eu/"}
                  >
                    The older person’s self-advocacy handbook
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://www.youtube.com/watch?v=ZwrZ3Da6q64"}
                  >
                    Exposing Systemic Ageism
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://changingthenarrativeco.org/"}
                  >
                    Changing the Narrative
                  </a>
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.unece.org/fileadmin/DAM/pau/age/Policy_briefs/ECE_WG1_30.pdf"
                    }
                  >
                    Combating ageism in the world of work
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.aarp.org/content/dam/aarp/research/surveys_statistics/econ/2018/value-of-experience-age-discrimination-highlights.doi.10.26419-2Fres.00177.002.pdf"
                    }
                  >
                    The Value of Experience
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.huffingtonpost.com/entry/a-victim-and-activists-on-the-harmful-effects-of-ageism_us_5aeef847e4b0834e0cdf15b6"
                    }
                  >
                    The Harmful Effects of Ageism
                  </a>
                </li>
              </ul>
              <h4>
                <Image
                  src={health}
                  alt="Ageism and health"
                  width={80}
                  height={80}
                />
                Ageism and health
              </h4>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.harpercollins.com/products/breaking-the-age-code-becca-levy?variant=40615809613858"
                  >
                    Breaking the Age Code: How Your Beliefs About Aging
                    Determine How Long and Well You Live
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://drive.google.com/file/d/1911U7RPM95z9Y2Wbh9gOANtz_oFioO0p/view?usp=sharing"
                    }
                  >
                    Ageism and Health: What Can You Expect at Your Age?
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://deepblue.lib.umich.edu/bitstream/handle/2027.42/156038/0192_NPHA-ageism-report_FINAL-07132020.pdf?sequence=3&isAllowed=y"
                    }
                  >
                    Everyday Ageism and Health
                  </a>
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
