"use client";

import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import Config from "@/config";

const Footer = () => {
  const pathname = usePathname();
  const noSnapScroll = Config.pathsWithoutSnapScrolling.includes(pathname);
  return (
    <footer className={`${styles.footer} ${noSnapScroll ? "noscroll" : ""}`}>
      <h3>Footer</h3>
      <p>(subscribe goes here)</p>
      <p>(socials links go here)</p>
      <p>(category links go here)</p>
    </footer>
  );
};

export default Footer;
