import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Genius 360 Bharuch | Bharuch's First Big Scholarship Exam",
  description:
    "Genius 360 Bharuch is a Junior Level Competitive Scholarship Exam for Std 5, 6 and 7 students from CBSE and GSEB, available in Gujarati and English Medium. Exam date: 13 December 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
