"use client";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";

const CookieAsker = () => {
  function checkConsented() {
    let decodedCookie: any = decodeURIComponent(document.cookie);
    decodedCookie = decodedCookie.split(";");
    decodedCookie = decodedCookie.find((cookie: any) => {
      return cookie.substring(0, 13) === "CookieConsent";
    });
    if (!decodedCookie) {
      return false;
    }
    if (decodedCookie.substring(14, 18) === "true") {
      return true;
    }
    return false;
  }
  // for subsequent page visits
  useEffect(() => {
    if (checkConsented()) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  }, []);

  function handleAccept() {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      enableDeclineButton
      onAccept={() => {
        handleAccept();
      }}
      declineButtonText="Decline"
      // visible={true}
      buttonStyle={{
        borderRadius: "4px",
        backgroundColor: "var(--orange)",
        color: "var(--white)",
      }}
      declineButtonStyle={{
        borderRadius: "4px",
        backgroundColor: "var(--orange)",
        color: "var(--white)",
      }}
      cookieName="gatsby-gdpr-google-analytics"
    >
      This site uses cookies to track who’s using the site so we can target our
      content better. If you’re not comfortable with that, feel free to decline
      our use of cookies.
    </CookieConsent>
  );
};

export default CookieAsker;
