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
        <Image src={logo} alt="old school" height={100} />
      </Link>
      <div className={styles.rightSide}>
        <Search />
        <ul className={styles.menu}>
          <li>
            <Link href="/">Learn</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/resource">Hire us</Link>
          </li>
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
              School supplies
            </Link>
            {submenuShown && (
              <ul onClick={() => setSubmenuShown(false)}>
                {definedTypes.map((type, index) => (
                  <li key={`menu-${index}`}>
                    <Link href={`/category/${type.id}`}>{type.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/submit">About</Link>
          </li>
          <li>
            <Link href="/submit">Subscribe</Link>
          </li>
          <li>
            <Link href="/submit">Donate</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
