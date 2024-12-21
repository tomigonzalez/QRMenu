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
        className={`m-auto min-h-screen overflow-x-clip  ${inter.className}`}
      >
        <Header />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
