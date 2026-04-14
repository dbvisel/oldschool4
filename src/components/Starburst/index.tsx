import styles from "./page.module.css";

const Starburst = ({
  text,
  subtext,
  link,
}: {
  text: string;
  subtext: string;
  link: string;
}) => {
  return (
    <div className={styles.star}>
      <a href={link}>
        {text}
        <br />
        <span>{subtext}</span>
      </a>
    </div>
  );
};

export default Starburst;
