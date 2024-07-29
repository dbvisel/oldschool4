"use client";

import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Config from "@/config";
import EmailListForm from "./EmailListForm";
import SocialMediaLink from "./SocialMediaLink";
import LinkFooter from "./LinkFooter";
import FacebookIcon from "./images/icon_facebook.svg";
import TwitterIcon from "./images/icon_twitter.svg";
import LinkedInIcon from "./images/icon_linkedin.svg";
import InstagramIcon from "./images/icon_instagram.svg";
import FacebookIconOn from "./images/icon_facebook_on.svg";
import TwitterIconOn from "./images/icon_twitter_on.svg";
import InstagramIconOn from "./images/icon_instagram_on.svg";
import LinkedInIconOn from "./images/icon_linkedin_on.svg";

const Footer = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || "";
  const pathname = usePathname();
  const noSnapScroll = Config.pathsWithoutSnapScrolling.includes(pathname);
  return (
    <footer className={`${styles.footer} ${noSnapScroll ? "noscroll" : ""}`}>
      <div className={styles.subscribediv} id="subscribe">
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={(props: any) => {
            const { subscribe, status, message } = props || {};
            return (
              <EmailListForm
                status={status}
                message={message}
                onValidated={(formData: any) => subscribe(formData)}
              />
            );
          }}
        />
      </div>
      <ul className={styles.socialList}>
        <li>
          <SocialMediaLink
            name="Facebook"
            link="https://www.facebook.com/Old-School-a-clearinghouse-for-all-things-anti-ageism-271798766759230/"
            icon={FacebookIcon}
            iconOn={FacebookIconOn}
          />
        </li>
        <li>
          <SocialMediaLink
            name="Twitter"
            link="https://twitter.com/OldSchool_Info"
            icon={TwitterIcon}
            iconOn={TwitterIconOn}
          />
        </li>
        <li>
          <SocialMediaLink
            name="Instagram"
            link="https://www.instagram.com/OldSchool_Info/"
            icon={InstagramIcon}
            iconOn={InstagramIconOn}
          />
        </li>
        <li>
          <SocialMediaLink
            name="LinkedIn"
            link="https://www.linkedin.com/company/old-school-anti-ageism-clearinghouse"
            icon={LinkedInIcon}
            iconOn={LinkedInIconOn}
          />
        </li>
      </ul>
      <LinkFooter />
    </footer>
  );
};

export default Footer;
