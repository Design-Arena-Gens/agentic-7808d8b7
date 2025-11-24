import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

const sans = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Design Arena",
  description:
    "A futuristic arena of conversations with AI personas. Enter the Arena. Create your narrative."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
