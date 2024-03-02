import TopResources from "./components/TopResources";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const HomePage = () => {
  return (
    <article className={styles.frontpage}>
      <section>
        <h2>Home</h2>
        <p>(above the fold content goes here)</p>
      </section>
      <TopResources />
      <section>
        <h2>About section?</h2>
        <p>Short about section goes here, links to about page</p>
      </section>
    </article>
  );
};

export default HomePage;
