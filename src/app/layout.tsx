import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const metadata: Metadata = {
  title: "Tatame PRO",
  description: "O Mundo da luta em um só lugar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${inter.className} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 dark`}>
          <Toaster />
          {children}
        </body>
      </html>
  );
}
