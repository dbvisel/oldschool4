import { Link } from "next-view-transitions";
import styles from "./styles.module.css";
import { definedTypes } from "@/utils/categories";

const LinkFooter = () => (
  <footer className={styles.linkFooter}>
    <ul>
      {definedTypes.map((section, index) => (
        <li key={index}>
          <Link href={`/category/${section.id}/`}>{section.name}</Link>
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
