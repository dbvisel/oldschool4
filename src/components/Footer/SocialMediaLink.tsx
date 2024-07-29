import Image from "next/image";
import { useState } from "react";

const SocialMediaLink = ({
  icon,
  iconOn,
  name,
  link,
}: {
  name: string;
  link: string;
  icon: any;
  iconOn: any;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      target="__blank"
      rel="noopener noreferrer"
      href={link}
      aria-label={`Old School on ${name}`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {hover ? (
        <Image src={iconOn.src} alt={name} width={57} height={57} />
      ) : (
        <Image src={icon.src} alt={name} width={57} height={57} />
      )}
    </a>
  );
};

export default SocialMediaLink;
