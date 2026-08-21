import { Link } from "next-view-transitions";

export default function GenericCollectionPage() {
  return (
    <article>
      <h2 className="pageheader">Generic collection</h2>
      <p>(should this just get a 404?)</p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </article>
  );
}
