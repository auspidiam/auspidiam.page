// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Auspidiam",
  description: "ennui renaissance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white text-black">
        <div className="mx-auto flex min-h-screen w-full max-w-[900px] flex-col px-6 sm:px-8 md:px-10">
          {children}

          <footer className="mt-auto pt-14 pb-10 text-sm">
            <div className="flex items-center justify-start">
              <span className="text-left">© ཀུན་བཟང་རྡོ་རྗེ་ 2026</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
