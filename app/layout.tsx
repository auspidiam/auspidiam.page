// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
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
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/BrownSubmarine.png"
                alt="Brown submarine illustration"
                width={300}
                height={140}
                className="order-1 h-[104px] w-auto -translate-y-1 transform sm:order-2 sm:h-[120px] md:h-[136px]"
                loading="eager"
              />

              <span className="order-2 text-left sm:order-1">© ཀུན་བཟང་རྡོ་རྗེ་ 2026</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
