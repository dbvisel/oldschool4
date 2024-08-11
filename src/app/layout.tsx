import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Old School",
  description:
    "Old School is a clearinghouse of free and carefully vetted resources to educate people about ageism and help dismantle it.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={figtree.className}>
          <Menu />
          <main id="mainWrapper">
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
