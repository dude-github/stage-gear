import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stage Gear ",
  description: "Developed by Sagar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <main>
          {/* <LayoutWrapper> */}
          <Navbar />
          {children}
          <Footer />
          {/* </LayoutWrapper> */}
        </main>
      </body>
    </html>
  );
}
