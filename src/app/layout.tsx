import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import { NavBar } from "~/components/navbar";
import { Footer } from "~/components/footer";
import { Lenis } from 'lenis/react'
import "./globals.css";
import 'react-photo-view/dist/react-photo-view.css';

const cabin = Cabin({ subsets: ["latin"] });

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
      <head>
        <link rel="icon" href="https://cleefocus.com/wp-content/uploads/2023/07/cropped-logo-2-32x32.png" sizes="32x32" />
        <link rel="icon" href="https://cleefocus.com/wp-content/uploads/2023/07/cropped-logo-2-192x192.png" sizes="192x192" />
      </head>
      <body className={cabin.className}>
        <NavBar />
        <Lenis root>
          {children}
        </Lenis>
        <Footer />
      </body>
    </html>
  );
}
