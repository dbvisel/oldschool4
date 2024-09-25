import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { GoogleAnalytics } from "@next/third-parties/google";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import CookieAsker from "@/components/CookieAsker";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://oldschool.info"),
    title: "Old School Hub",
    description:
      "Old School educates people about ageism and connects people who are working to end it.",

    authors: [
      {
        name: "Ashton Applewhite",
        url: "https://thischairrocks.com",
      },
    ],
    twitter: {
      card: "summary_large_image",
      creator: "@OldSchool.Info",
      images: "some-image",
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://oldschool.info`,
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      url: "https://oldschool.info",
      title: "Old School Hub",
      description:
        "Old School educates people about ageism and connects people who are working to end it.",
      siteName: "Old School Hub",
      images: [
        {
          url: "some-image",
        },
      ],
    },
    assets: "some-image",
    keywords: ["ageism"],
    manifest: "/manifest.webmanifest",
    icons: {
      icon: "/favicon.svg",
      apple: "/favicon180x180.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon180x180.png",
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head></head>
        <body className={figtree.className}>
          <Menu />
          <main id="mainWrapper">
            {children}
            <Footer />
          </main>

          <GoogleAnalytics
            gaId={String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)}
          />
          <CookieAsker />
        </body>
      </html>
    </ViewTransitions>
  );
}
