import * as React from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { Fukidashi } from "react-fukidashi";
import "react-fukidashi/style.css";
import Layout from "../components/Layout";
import { AboutBox } from "../components/About/elements";
import Resource from "../components/Resource";
import {
  // getTopResources,
  // getResources,
  getResourceById,
} from "../utils/airtable";
import useWindowDimensions from "./../hooks/useWindowSize";
import { MagnifyingGlass as SearchIcon } from "@styled-icons/fa-solid";
import digdeeper from "./../images/dig-deeper.png";
import quicktakes from "./../images/quick-takes.png";
import advocate from "./../images/advocate.png";
import intersectionality from "./../images/intersectionality.png";
import communicate from "./../images/communicate.png";
import workplace from "./../images/workplace.png";

/*

        <Image src="/images/19.png" alt="points" width={1600} height={900} />

dig-deeper.png
quick-takes.png
advocate.png
intersectionality.png
communicate.png
workplace.png

*/

const IntroArticle = styled(AboutBox)`
  --headerFontSize: 48px;
  max-width: 100%;
  padding: 0;
  & > h2 {
    padding: var(--outsidePadding);
    font-size: var(--headerFontSize);
    max-width: 800px;
    margin: 0 auto;
  }
  /* & > div {
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
  } */
  & > div {
    padding: var(--outsidePadding);
  }
  & h2 {
    text-transform: initial;
    letter-spacing: 0;
    line-height: 1.25;
  }
  & h3 {
    text-transform: initial;
    letter-spacing: 0;
  }
  @media (max-width: 767px) {
    --headerFontSize: 36px;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  & hr {
    margin-bottom: var(--outsidePadding);
    border-width: 0;
  }
  & h4 {
    color: var(--green);
    font-weight: bold;
    font-size: var(--fontSize);
    margin: calc(2 * var(--lineHeight)) 0 var(--lineHeight) 0 !important;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: var(--green) solid 4px;
    &:first-of-type {
      margin-top: 0 !important;
    }
    & > img {
      min-width: 80px;
      margin-right: var(--lineHeight) !important;
      // filter: brightness(0) saturate(100%) invert(11%) sepia(7%) saturate(4910%)
      //   hue-rotate(133deg) brightness(106%) contrast(87%);
      filter: brightness(0) saturate(100%) invert(56%) sepia(54%) saturate(296%)
        hue-rotate(328deg) brightness(88%) contrast(89%);
    }
  }
  & ul + h4 {
    margin-top: calc(3 * var(--lineHeight)) !important;
  }
  & a {
    font-weight: normal;
  }
  & ul {
    margin: 0;
    padding: 0;
    margin-top: calc(var(--insidePadding) / 2);
    & > ul {
      margin-bottom: var(--insidePadding);
      margin-left: var(--insidePadding);
      & + li {
        margin-top: calc(2 * var(--insidePadding));
      }
    }
  }
  & li {
    color: var(--green);
    font-style: italic;
    font-weight: bold;
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-left: var(--lineHeight);
    text-indent: calc(0px - var(--lineHeight));
    & > a {
      font-style: normal;
      font-weight: normal;
      color: var(--darkBrown);
    }
  }
  & > div + div {
    margin-left: var(--lineHeight);
  }
  & > p {
    margin: 0;
    text-align: center;
    & + p {
      margin: 0;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    & > p + p {
      margin-top: 1em;
    }
    & > div + div {
      margin-left: 0;
      margin-top: calc(3 * var(--lineHeight)) !important;
    }
  }
`;

const arrowAnimation = keyframes`
	0% { transform: scale(1);opacity: 0; }
	50% { transform: scale(1.5); opacity: 1; }
	100% { transform: scale(1); opacity: 0;}`;

const TopDiv = styled.div`
  background-color: var(--green);
  color: var(--white);
  display: flex;
  justify-content: center;
  padding: var(--outsidePadding);
  & > div > h2,
  & > div > h3 {
    color: var(--white);
    margin-top: 0;
  }
  & > div {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  & a {
    color: white;
  }
`;

const DemoDiv = styled.div`
  background-color: var(--green);
  display: flex;
  justify-content: center;
  padding: ${(props) => (props.vertical ? "200px" : "var(--outsidePadding)")} 0 !important;
  & > div {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  & h3 {
    letter-spacing: 0;
  }
  & a {
    border: none;
    font-weight: normal;
  }
  & a:after {
    opacity: 1 !important;
    animation-name: ${arrowAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  & a:hover {
    border: none;
  }
  & p {
    font-size: 16px;
    line-height: 22px;
  }

  @media (min-width: 840px) {
    & .fukidashiwrapper {
      & > div > div + div {
        --box-top: 78% !important; /* left fukidashi */
        --box-right: calc(100% + 40px) !important;
        &:before {
          display: none;
        }
        &:after {
          height: 40px;
        }
      }
      & > div > div > .resourcedemo + div {
        --box-top: 25% !important; /* right fukidashi */
        --box-left: calc(100% + 40px) !important;
        &:before {
          display: none;
        }
        &:after {
          height: 40px;
        }
      }
    }
  }
`;

const IntroPage = ({ oldSchool }) => {
  const myResource = oldSchool; // || topResources[Math.floor(Math.random() * topResources.length)];
  const { width } = useWindowDimensions();
  return (
    <Layout title="Intro">
      <article>
        <IntroArticle>
          <h2>
            Wondering where to begin when it comes to confronting ageism?
            <br />
            <span style={{ fontWeight: "normal" }}>
              You’re in the right place.
            </span>
          </h2>
          <TopDiv>
            <div>
              <h2 style={{ color: "white" }}>Some navigational tips:</h2>
              <LinkDiv>
                <p>
                  <strong>To see all resources,</strong> click on each category
                  on the{" "}
                  <Link href="/">
                    <a>Home</a>
                  </Link>{" "}
                  page.
                </p>
                <p>
                  Use <strong>Search</strong> (
                  <SearchIcon
                    style={{ position: "relative", width: "24px", top: "-2px" }}
                  />
                  ) to pursue a topic or find a specific title or creator.
                </p>
              </LinkDiv>
            </div>
          </TopDiv>
          <DemoDiv
            vertical={width < 840}
            style={{ backgroundColor: "var(--darkBrown)" }}
          >
            <div className="fukidashiwrapper">
              <Fukidashi
                placement={width > 839 ? "left" : "bottom"}
                width={250}
                gap={20}
                delay={0}
                text="Each resource has its own page (often with the creator’s contact
							info and related resources). To see it, click here."
              >
                <Fukidashi
                  placement={width > 839 ? "right" : "top"}
                  width={250}
                  gap={20}
                  delay={0}
                  text="Most resources have a link to an external site. To go there,
                click on the resource card's picture or on the
                arrow-within-a-circle icon."
                >
                  <Resource data={myResource} className="resourcedemo" />
                </Fukidashi>
              </Fukidashi>
            </div>
          </DemoDiv>
          <TopDiv style={{ backgroundColor: "var(--backdrop)" }}>
            <div>
              <h2 style={{ color: "var(--green)" }}>Some entry points:</h2>
              <LinkDiv>
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
                        <a>Break Free From Ageism</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/imagine-a-world-without-ageism/"}>
                        <a>Imagine a World Without Ageism</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/lets-end-ageism/"}>
                        <a>Let’s End Ageism</a>
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
                          <a>Diverse Elders Coalition</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/resource/intersectionality-matters/"}>
                          <a>Intersectionality Matters</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/resource/no-ageism-/"}>
                          <a>No Ageism</a>
                        </Link>
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
                          <a>Age Pride: Ageism and the Queer Experience</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "/resource/national-resource-center-on-lgbt-aging/"
                          }
                        >
                          <a>National Resource Center on LGBT Aging</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "/resource/ageism-in-the-black-lgbtq-community/"
                          }
                        >
                          <a>Ageism in the Black LGBTQ Community</a>
                        </Link>
                      </li>
                    </ul>
                    <li>Women:</li>
                    <ul>
                      <li>
                        <Link
                          href={"/resource/how-ageism-really-affects-women/"}
                        >
                          <a>How Ageism Really Affects Women</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/resource/ageist-racist-who-me/"}>
                          <a>Ageist? Sexist? Who, Me?</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/resource/old-lesbians-organizing-for-change/"}
                        >
                          <a>Old Lesbians Organizing for Change</a>
                        </Link>
                      </li>
                    </ul>
                    <li>Youngers:</li>
                    <ul>
                      <li>
                        <Link href={"/resource/legacy-project-ageism-guide/"}>
                          <a>Legacy Project, Addressing Ageism</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "/resource/images-intervention-program-to-prevent-ageism-in-children-and-adolescents/"
                          }
                        >
                          <a>
                            iMAGES: intervention program to prevent ageism in
                            children and adolescents
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/resource/stop-tokenizing-youth/"}>
                          <a>Stop Tokenizing Youth</a>
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
                        <a>WHO - Global Report on Ageism</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          "/resource/this-chair-rocks-a-manifesto-against-ageism-by-ashton-applewhite/"
                        }
                      >
                        <a>This Chair Rocks: A Manifesto Against Ageism</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          "/resource/ageism-unmasked-by-tracey-gendron-phd/"
                        }
                      >
                        <a>
                          Ageism Unmasked: Exploring Age Bias and How to End It
                        </a>
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
                        <a>
                          Gaining Momentum: A FrameWorks Communications Toolkit
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          "/resource/como-comunicar-sobre-las-personas-mayores/"
                        }
                      >
                        <a>¿Cómo comunicar sobre las personas mayores?</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          "/resource/challenging-ageism-a-guide-to-talking-about-ageing-and-older-age/"
                        }
                      >
                        <a>
                          Challenging Ageism: a Guide to talking about aging and
                          Older Age
                        </a>
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
                        <a>The older person’s self-advocacy handbook</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/exposing-systemic-ageism/"}>
                        <a>Exposing Systemic Ageism</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/changing-the-narrative-colorado/"}>
                        <a>Changing the Narrative - Colorado</a>
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
                        href={
                          "/resource/combating-ageism-in-the-world-of-work/"
                        }
                      >
                        <a>Combating ageism in the world of work</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          "/resource/the-value-of-experience-age-discrimination-against-older-workers-persists/"
                        }
                      >
                        <a>The Value of Experience</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          "/resource/a-victim-and-activists-on-the-harmful-effects-of-ageism/"
                        }
                      >
                        <a>The Harmful Effects of Ageism</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/what-can-you-expect-at-your-age/"}>
                        <a>
                          Ageism and health: What Can You expect at your age?
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/everyday-ageism-health/"}>
                        <a>Everyday Ageism and Health</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/resource/yale-school-of-public-health/"}>
                        <a>Research of Becca Levy</a>
                      </Link>
                    </li>
                  </ul>
                  <hr />
                </div>
              </LinkDiv>
            </div>
          </TopDiv>
        </IntroArticle>
      </article>
    </Layout>
  );
};

export default IntroPage;

export async function getStaticProps() {
  const oldSchool = await getResourceById("recxScXOQzvRSE3yK");
  return {
    props: {
      oldSchool: { imagePath: oldSchool.imagePath, ...oldSchool.fields },
    },
  };
}
