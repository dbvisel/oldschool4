import styles from "./page.module.css";
import Image, { StaticImageData } from "next/image";

const Project = ({
  description,
  link,
  title,
  contact,
  image,
  isLeft = false,
}: {
  description: string;
  link: string;
  title: string;
  contact: string;
  image: StaticImageData;
  isLeft?: boolean;
}) => {
  return (
    <div className={`${styles.projectBox} ${isLeft ? styles.isLeft : ""}`}>
      <div className={styles.projectText}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className={styles.contactLine}>
          (Contact: <a href={link}>{contact}</a>)
        </p>
      </div>
      <div className={styles.projectImage}>
        <a href={link}>
          <Image src={image} alt={title} width={200} />
        </a>
      </div>
    </div>
  );
};

export default Project;
