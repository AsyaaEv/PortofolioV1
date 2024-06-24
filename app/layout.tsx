import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/components/darkmode/DarkModeContext";

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
          {children}
        </body>
      </DarkModeProvider>
    </html>
  );
}
