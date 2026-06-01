import { Link } from "next-view-transitions";
import styles from "./page.module.css";
import type { CategoryType } from "@/types/index";

export default function TocCards({
  types,
  path,
  reverse = false,
}: {
  types: CategoryType[];
  path: string;
  reverse?: boolean;
}): React.JSX.Element {
  return (
    <div className={styles.tocCards}>
      {types.map((type: CategoryType, index: number) => (
        <div
          key={index}
          className={`${styles.tocCard} ${reverse && styles.reverse}`}
        >
          <h3>
            <Link href={`/${path}/${type.id}`}>{type.name}</Link>
          </h3>
          {/*<p>{type.tag}</p>*/}
        </div>
      ))}
    </div>
  );
}
