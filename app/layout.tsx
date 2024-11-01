import type { Metadata } from "next";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import { Overpass } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const overpass = Overpass({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drift Sandbox",
  description: "Sandbox for the Drift SDK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${overpass.className} antialiased`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
