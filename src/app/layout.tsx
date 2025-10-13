import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";
import { Analytics } from "@vercel/analytics/next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forum Programmer Kaputama",
  description:
    "Forum Programmer Kaputama (FPK) adalah organisasi atau komunitas programmer dari kampus Kaputama yang didedikasikan untuk membangun masa depan teknologi. Kami menawarkan pelatihan dalam web development dan desain UI/UX, dengan fokus pada pengembangan keterampilan praktis dan kolaborasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/abdigunasetiawan/css-layout-helper/index.css"
        />
        <script
          src="https://cdn.jsdelivr.net/gh/abdigunasetiawan/css-layout-helper/index.js"
          defer
        ></script> */}
        <meta
          name="google-site-verification"
          content="lp0j-kJDrPDEHKehxKcbNIPWXLkVJUyU4bSLHDrUOCw"
        />
      </head>
      <body
        className={`${inter.variable} font-inter relative flex min-h-screen flex-col overflow-x-hidden antialiased`}
      >
        <Navbar />
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
