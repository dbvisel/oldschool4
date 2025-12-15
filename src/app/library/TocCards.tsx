import { Link } from "next-view-transitions";
import styles from "./page.module.css";

export default function TocCards({
  types,
  path,
  reverse = false,
}: {
  types: any;
  path: string;
  reverse?: boolean;
}): React.JSX.Element {
  return (
    <div className={styles.tocCards}>
      {types.map((type: any, index: number) => (
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
