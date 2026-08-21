"use client";

import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.css";
import { definedTypes as categories } from "@/utils/categories";

const categoriesWithoutSupplies = categories.filter((x) => x.id !== "supplies");

const randomCategory = () =>
  categoriesWithoutSupplies[
    Math.floor(Math.random() * categoriesWithoutSupplies.length)
  ];

export const CategorySlide = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [thisCategory, setThisCategory] = useState<any>(randomCategory);

  useEffect(() => {
    // if this slide comes into view, change it.
    if (inView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reshuffles the category shown each time this slide scrolls into view, driven by the IntersectionObserver
      setThisCategory(randomCategory());
    }
  }, [inView]);

  return (
    <div
      className={`${styles.emblaSlide} ${thisCategory.id === "supplies" ? styles.orangeVersion : ""}`}
      ref={ref}
    >
      <div
        className={styles.backdrop}
        style={{
          backgroundImage: `url(images/categories/${thisCategory.image}.png)`,
        }}
      />
      <h2 className={styles.categoryheader}>
        <Link href={`/category/${thisCategory.id}`}>{thisCategory.name}</Link>
      </h2>
      <p className={styles.categorydescription} key={thisCategory.id}>
        {thisCategory.tag}
      </p>
      <p className={styles.cta}>
        <a
          href={`/#`}
          onClick={(e) => {
            e.preventDefault();
            setThisCategory(randomCategory());
          }}
        >
          What other categories are there?
        </a>
      </p>
    </div>
  );
};
