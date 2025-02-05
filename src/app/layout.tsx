import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stefan's Portfolio",
  description: "Welcome to Stefan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen antialiased flex flex-col min-h-screen`} // Key changes here
      >
        {/* Include the Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">{children}</main> {/* Key change here */}

        {/* Include the Footer */}
        <Footer /> {/* Add the Footer here */}
      </body>
    </html>
  );
}