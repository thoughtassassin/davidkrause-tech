import type { Metadata } from "next";
import { inter } from "@/app/fonts";
import Nav from "@/app/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "davidkrause.tech",
  description: "A developer's journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background: 'black'}}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
