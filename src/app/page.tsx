import CardHolder from "@/app/components/CardHolder";
import getNewestData from "@/lib/getNewestData";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const { resources } = await getNewestData();
  return (
    <article className={styles.frontpage}>
      <section>
        <h2>Home</h2>
        <p>(above the fold content goes here)</p>
      </section>
      <section>
        <h2>Newest resources</h2>
        <CardHolder resources={resources} />
      </section>
      <section>
        <h2>About section?</h2>
        <p>Short about section goes here, links to about page</p>
      </section>
    </article>
  );
};

export default HomePage;
