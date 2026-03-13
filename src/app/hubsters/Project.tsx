import styles from "./page.module.css";
import Image, { StaticImageData } from "next/image";

const Project = ({
  description,
  link,
  contactLink,
  title,
  contact,
  image,
  isLeft = false,
}: {
  description: string;
  link: string;
  contactLink?: string;
  title: string;
  contact: string;
  image: StaticImageData;
  isLeft?: boolean;
}) => {
  return (
    <div className={`${styles.projectBox} ${isLeft ? styles.isLeft : ""}`}>
      <div className={styles.projectText}>
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p>{description}</p>
        <p className={styles.contactLine}>
          (Contact:{" "}
          <a
            href={contactLink || link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact}
          </a>
          )
        </p>
      </div>
      <div className={styles.projectImage}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image src={image} alt={title} width={200} />
        </a>
      </div>
    </div>
  );
};

export default Project;
