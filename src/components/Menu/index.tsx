"use client";
import dynamic from "next/dynamic";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import styles from "./styles.module.css";
// import Search from "../Search";
const Search = dynamic(() => import("@/components/Search"), { ssr: false });
import logo from "./images/horizontallogo-threeline.svg";
import { definedTypes } from "../../utils/categories";

// TODO: figure out what's actually in the menu!

type RefObject = {
  current: HTMLUListElement | null;
};

const noSupplies = definedTypes.filter((x) => x.id !== "supplies");

const Menu = () => {
  const [submenuShown, setSubmenuShown] = useState(false);
  const wrapperRef = useRef(null);

  const useOutsideAlerter = (ref: RefObject) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
          setSubmenuShown(false);
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
              <Link href="/about#top">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <a
                href="#"
                // onMouseEnter={()=>setSubmenuShown(!submenuShown)}
                // onMouseLeave={()=>setSubmenuShown(!submenuShown)}
                onClick={(e) => {
                  e.preventDefault();
                  setSubmenuShown(!submenuShown);
                }}
                className={submenuShown ? styles.active : ""}
              >
                Learn
              </a>
              {submenuShown && (
                <ul ref={wrapperRef} onClick={() => setSubmenuShown(false)}>
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
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/category/supplies">School supplies</Link>
            </li>
            <li>
              <Link href="/hire-us">Hire us</Link>
            </li>
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
