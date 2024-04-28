"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import styles from "./styles.module.css";
import Search from "../Search";
import logo from "./horizontallogo.svg";
import { definedTypes } from "../../utils/categories";

// TODO: figure out what's actually in the menu!

type RefObject = {
  current: HTMLUListElement | null;
};

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
      <Link href="/">
        <Image src={logo} alt="old school" height={100} priority />
      </Link>
      <div className={styles.rightSide}>
        <Search />
        <ul className={styles.menu}>
          <li>
            <Link
              href="/#"
              // onMouseEnter={()=>setSubmenuShown(true)}
              // onMouseLeave={()=>setSubmenuShown(false)}
              onClick={(e) => {
                e.preventDefault();
                setSubmenuShown(!submenuShown);
              }}
              className={submenuShown ? styles.active : ""}
            >
              Learn
            </Link>
            {submenuShown && (
              <ul ref={wrapperRef} onClick={() => setSubmenuShown(false)}>
                {definedTypes.map((type, index) => (
                  <li key={`menu-${index}`} onClick={(e) => e.preventDefault()}>
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
            <Link href="/school-supplies">School supplies</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/hire-us">Hire us</Link>
          </li>
          <li>
            <Link href="/subscribe">Subscribe</Link>
          </li>
          <li>
            <Link
              href="https://old-school-clearinghouse.raisely.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
