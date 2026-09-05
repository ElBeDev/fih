import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fallstone International Holdings",
  description:
    "Fallstone International Holdings builds, acquires, and manages businesses with strong potential for long-term growth and value creation across technology, healthcare, manufacturing, financial services, real estate, and energy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--color-paper] text-[--color-ink]">
        {children}
      </body>
    </html>
  );
}
