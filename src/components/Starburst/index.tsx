import styles from "./page.module.css";

const Starburst = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className={styles.star}>
      <a href={link}>{text}</a>
    </div>
  );
};

export default Starburst;
