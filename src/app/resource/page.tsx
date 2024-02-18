import styles from "./../page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Resource page</h2>
			<p>(should this just get a 404?)</p>
			<p><a href="/">Home</a></p>
    </main>
  );
}
