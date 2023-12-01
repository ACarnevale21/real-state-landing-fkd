import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FacebookPixel } from "./components/FacebookPixel";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright Future",
  description: "Home buying experts in the US.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <FacebookPixel />
        </Providers>
      </body>
    </html>
  );
}
