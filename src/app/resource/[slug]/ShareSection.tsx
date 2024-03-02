"use client";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import styles from "./page.module.css";

const ShareSection = ({
  url,
  title = "",
  description = "",
  shortDescription = "",
}: {
  url: URL | undefined;
  title: string;
  description: string;
  shortDescription: string;
}) => {
  const outUrl = String(url) || "https://oldschool.info";
  return (
    <>
      <dt>Share This Resource</dt>
      <dd className={styles.shareButtonHolder}>
        <FacebookShareButton
          url={outUrl}
          // quote={`Check out this anti-ageism resource I found on OldSchool.info…`}
        >
          Share on Facebook
        </FacebookShareButton>
        <EmailShareButton
          url={outUrl}
          subject={`Check out this anti-ageism resource I found on OldSchool.info`}
        >
          Share by email
        </EmailShareButton>
        <LinkedinShareButton
          url={outUrl}
          source={"OldSchool.info"}
          title={`Old School: ${title}`}
          summary={description || shortDescription}
        >
          Share on LinkedIn
        </LinkedinShareButton>
        <TwitterShareButton
          url={outUrl}
          title={`Check out this anti-ageism resource I found on @OldSchool_info…`}
        >
          Share on Twitter
        </TwitterShareButton>
      </dd>
    </>
  );
};

export default ShareSection;
