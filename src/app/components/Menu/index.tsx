"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import Search from "./../Search";
import logo from "./../../images/horizontallogo.svg";
import { definedTypes } from "./../../../utils/categories";

// TODO: figure out what's actually in the menu!

const Menu = () => {
  const [submenuShown, setSubmenuShown] = useState(false);
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
              <ul onClick={() => setSubmenuShown(false)}>
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
            <Link href="/hire-us">Hire us</Link>
          </li>
          <li>
            <Link href="/school-supplies">School supplies</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/subscribe">Subscribe</Link>
          </li>
          <li>
            <Link href="/donate">Donate</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
