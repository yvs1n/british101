import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "British Curriculum 101 | The Senior Roadmap",
  description: "A charity-first, non-profit digital hub built to demystify the British International Curriculum (IGCSE, AS, and A-Level) for families in the MENA region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark text-white min-h-screen antialiased`}>
        <NavBar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
