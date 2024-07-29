import getCategoryData from "@/lib/getCategoryData";
import CardHolder from "@/components/CardHolder";
import styles from "./page.module.css";

export default async function SchoolSuppliesPage() {
  const { resources } = await getCategoryData({ params: { slug: "supplies" } });
  return (
    <article className={styles.category}>
      <header>
        <h2 className="pageheader" style={{ textAlign: "center" }}>
          School Supplies
        </h2>
        <p className="tagline">
          There’s merch for that. We know this stuff isn’t free—but it is for a
          good cause.
        </p>
      </header>
      <CardHolder resources={resources} areSubResources={false} />
    </article>
  );
}
