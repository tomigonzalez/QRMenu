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
        className={`m-auto min-h-screen  overflow-x-clip  ${inter.className}`}
      >
        <span className="absolute flex z-10 bottom-5 right-[-35rem] 2xl:h-[80rem] 2xl:w-[80rem] xl:h-[65rem] xl:w-[65rem] lg:h-[60rem] lg:w-[60rem] md:h-[60rem] md:w-[60rem]   rounded-full bg-[#60B059]" />
        <Header />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
