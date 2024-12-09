/* eslint-disable prettier/prettier */
import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Restaurancy",
};
const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] overflow-x-clip  ${inter.className}`}
      >
        <span className="absolute bottom-5 right-[-35rem] h-[90rem] w-[80rem] rounded-full bg-[#60B059]" />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
