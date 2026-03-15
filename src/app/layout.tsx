import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Clean, readable body font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Editorial, premium headline font
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Superior | The calm of efficient, secure Roblox management",
  description: "A premium management suite for Roblox organizations that want structure, automation, consistency, and scale.",
  metadataBase: new URL('https://superior.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-superior-mist-light text-superior-blue dark:bg-[#0f1721] dark:text-superior-mist-light min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}