import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "~/components/navbar";
import { Footer } from "~/components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CleeFocus",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={"font-[Helvetica]"}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
