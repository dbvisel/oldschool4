import styles from "./page.module.css";

const Starburst = ({
  text,
  subtext,
  link,
  backgroundColor = "var(--orange)",
  color = "var(--white)",
}: {
  text: string;
  subtext: string;
  link: string;
  color?: string;
  backgroundColor?: string;
}) => {
  const colorStyle = {
    "--starColor": backgroundColor,
    "--textColor": color,
  } as React.CSSProperties;
  return (
    <div className={styles.star} style={colorStyle}>
      <a href={link}>
        {text}
        <br />
        <span>{subtext}</span>
      </a>
    </div>
  );
};

export default Starburst;
