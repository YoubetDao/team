import type { Metadata } from "next";
import "./globals.css";
import StarsArea from "@/components/StartArea";

export const metadata: Metadata = {
  title: "YouBetDao - Creating a decentralized network for collaboration",
  description:
    "As an award-winning DAO of developers, we specialize in delivering high-quality Web3 products from idea to launch.",
  keywords: "Web3, DAO, blockchain, developers, DApp, AI Agent, decentralized",
  authors: [{ name: "YouBetDao" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1",
  openGraph: {
    title: "YouBetDao",
    description:
      "Creating a decentralized network for collaboration, empowering 1000+ Web3 builders.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@youbetdao",
    creator: "@youbetdao",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark w-full">
      <body className="w-full">
        <StarsArea />
        {children}
      </body>
    </html>
  );
}
