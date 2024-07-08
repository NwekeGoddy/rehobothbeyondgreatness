import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rehoboth 24 | Beyond Greatness",
  description:
    "The Most Colourful Thing",
  keywords: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/R24.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
