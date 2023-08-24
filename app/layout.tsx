"use client";
import Head from "./components/head";
import "./global.css";
import { Montserrat, NTR } from "next/font/google";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
// #TODO Ajout d&apos;une animation smooth pour la changement de theme
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <Head />
      <body className={`${montserrat.className} `}>
        {mounted && (
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            <div className="px-14 md:px-32">{children}</div>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
