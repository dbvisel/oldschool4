import type { Metadata } from "next";
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Old School",
  description: "Old School is a clearinghouse of free and carefully vetted resources to educate people about ageism and help dismantle it.",
	manifest: "/manifest.webmanifest",
	icons: {
		icon: '/favicon.svg',
		apple: '/favicon180x180.png',
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/favicon180x180.png',
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
      <body className={inter.className}>
				<Menu />
				<main>
					{children}
				</main>
				<Footer />
	</body>
    </html>
  );
}
