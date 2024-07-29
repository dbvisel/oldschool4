import Link from "next/link";
import styles from "./styles.module.css";
import { definedTypes } from "@/utils/categories";

const LinkFooter = () => (
  <footer className={styles.linkFooter}>
    <ul>
      {definedTypes.map((section, index) => (
        <li key={index}>
          <Link href={`/${section.id}/`}>{section.name}</Link>
        </li>
      ))}
      <li>
        <Link href={`/events/`} aria-label="Events">
          Events
        </Link>
      </li>
    </ul>
  </footer>
);

export default LinkFooter;
