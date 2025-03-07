import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head prefix="og:http://ogp.me/ns#">
        <title key="title">IrorI Homepage</title>
        <meta property="og:url" content="/irori-166.github.io/page.tsx" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IrorI Homepage" />
        <meta property="og:description" content="This is IrorI's portfolio" />
        <meta property="og:site_name" content="IrorI Home" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
