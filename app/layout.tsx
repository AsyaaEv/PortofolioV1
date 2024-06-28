import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/components/darkmode/DarkModeContext";
import QueryProvider from "@/components/query-provider";
import { Analytics } from '@vercel/analytics/react';

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reasya",
  description: "Portofolio v1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className={`dark:bg-black transition-all duration-500`}>
          <QueryProvider>
            {children}
            <Analytics />
          </QueryProvider>
        </body>
      </DarkModeProvider>
    </html>
  );
}
