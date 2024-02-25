import type { Metadata } from "next";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={figtree.className}>
        <Menu />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
