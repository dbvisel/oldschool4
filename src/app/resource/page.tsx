import { Link } from "next-view-transitions";
import styles from "./page.module.css";

export default function GenericResourcePage() {
  return (
    <article>
      <h2 className="pageheader">Generic resource</h2>
      <p>(should this just get a 404?)</p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </article>
  );
}
