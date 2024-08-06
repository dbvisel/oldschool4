"use client";

import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.css";
import { definedTypes as categories } from "@/utils/categories";

export const CategorySlide = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [thisCategory, setThisCategory] = useState<any>(
    categories[Math.floor(Math.random() * categories.length)]
  );

  useEffect(() => {
    // if this slide comes into view, change it.
    if (inView) {
      setThisCategory(
        categories[Math.floor(Math.random() * categories.length)]
      );
    }
  }, [inView]);

  return (
    <div
      className={styles.emblaSlide}
      style={{
        backgroundColor: "var(--white)",
        backgroundImage: `url(images/categories/${thisCategory.image}.png)`,
      }}
      ref={ref}
    >
      <h2 className={styles.categoryheader}>
        <Link href={`/category/${thisCategory.id}`}>{thisCategory.name}</Link>
      </h2>
      <p className={styles.categorydescription}>{thisCategory.tag}</p>
      <p className={styles.cta}>
        <Link href={`/category/${thisCategory.id}`}>Learn more . . .</Link>
      </p>
    </div>
  );
};
