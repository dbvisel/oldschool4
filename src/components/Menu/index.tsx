"use client";
import dynamic from "next/dynamic";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import styles from "./styles.module.css";
const Search = dynamic(() => import("@/components/Search"), { ssr: false });
import logo from "./images/horizontallogo-threeline.svg";
import { definedTypes } from "../../utils/categories";

type RefObject = {
  current: HTMLUListElement | null;
};

const noSupplies = definedTypes.filter((x) => x.id !== "supplies");

const Menu = () => {
  // const [learnSubmenuShown, setLearnSubmenuShown] = useState(false);
  const [projectSubmenuShown, setProjectSubmenuShown] = useState(false);
  const [aboutSubmenuShown, setAboutSubmenuShown] = useState(false);
  const wrapperRef = useRef(null);

  const useOutsideAlerter = (ref: RefObject) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
          setProjectSubmenuShown(false);
          setAboutSubmenuShown(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="old school" height={100} priority />
        </Link>
        <div className={styles.rightSide}>
          <Search />
          <ul className={styles.menu}>
            <li>
              <a
                href="#"
                // onMouseEnter={()=>setProjectSubmenuShown(!submenuShown)}
                // onMouseLeave={()=>setProjectSubmenuShown(!submenuShown)}
                onClick={(e) => {
                  e.preventDefault();
                  setAboutSubmenuShown(!aboutSubmenuShown);
                  // setLearnSubmenuShown(false);
                  setProjectSubmenuShown;
                }}
                className={aboutSubmenuShown ? styles.active : ""}
              >
                About
              </a>
              {aboutSubmenuShown && (
                <ul
                  ref={wrapperRef}
                  onClick={() => setAboutSubmenuShown(false)}
                >
                  <li>
                    <Link href="/about">Our Story</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/category/ospublications">Publications</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                // onMouseEnter={()=>setProjectSubmenuShown(!submenuShown)}
                // onMouseLeave={()=>setProjectSubmenuShown(!submenuShown)}
                onClick={(e) => {
                  e.preventDefault();
                  setProjectSubmenuShown(!projectSubmenuShown);
                  // setLearnSubmenuShown(false);
                  setAboutSubmenuShown;
                }}
                className={projectSubmenuShown ? styles.active : ""}
              >
                Programs
              </a>
              {projectSubmenuShown && (
                <ul
                  ref={wrapperRef}
                  onClick={() => setProjectSubmenuShown(false)}
                >
                  <li>
                    <Link href="/library">Library</Link>
                  </li>
                  <li>
                    <a
                      href="https://us02web.zoom.us/meeting/register/tZAvcOivqzkpG9CtqpP6cnaL64TnxKaY_fAg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Office Hours
                    </a>
                  </li>
                  <li>
                    <Link href="/hubsters">Hubsters</Link>
                  </li>
                </ul>
              )}
            </li>
            {/*<li>
              <a
                href="#"
                // onMouseEnter={()=>setLearnSubmenuShown(!submenuShown)}
                // onMouseLeave={()=>setLearnSubmenuShown(!submenuShown)}
                onClick={(e) => {
                  e.preventDefault();
                  setLearnSubmenuShown(!learnSubmenuShown);
                  setProjectSubmenuShown(false);
                }}
                className={learnSubmenuShown ? styles.active : ""}
              >
                Learn
              </a>
              {learnSubmenuShown && (
                <ul
                  ref={wrapperRef}
                  onClick={() => setLearnSubmenuShown(false)}
                >
                  {noSupplies.map((type, index) => (
                    <li
                      key={`menu-${index}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Link href={`/category/${type.id}`}>{type.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>*/}
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/category/supplies">School supplies</Link>
            </li>
            {/* <li>
              <Link href="/contact-us">Contact us</Link>
            </li> */}
            {/*<li>
              <Link
                href={`#subscribe`}
                target={"_bottom"}
                // onClick={(e) => {
                //   e.preventDefault();
                //   // window.scrollTo({
                //   //   top: document.body.scrollHeight,
                //   //   behavior: "smooth",
                //   // });
                // }}
              >
                Subscribe
              </Link>
            </li>*/}
            <li>
              <a
                href="https://old-school-hub.raisely.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Menu;
