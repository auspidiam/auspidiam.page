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
            <div className="flex flex-wrap items-end justify-between gap-6">
              <span className="text-left">© ཀུན་བཟང་རྡོ་རྗེ་ 2026</span>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/YellowSubmarine.png"
                alt="Yellow submarine illustration"
                width={300}
                height={140}
                className="h-[104px] w-auto -translate-y-1 transform sm:h-[120px] md:h-[136px]"
                loading="eager"
              />
            </div>
          </footer>
        </div>

        <div className="fixed bottom-8 right-4 z-10 sm:bottom-10 sm:right-8 md:right-10">
          <Image
            src="/BrownSubmarine.png"
            alt="Brown submarine illustration"
            width={128}
            height={80}
            className="h-16 w-auto sm:h-20"
            priority
          />
        </div>
      </body>
    </html>
  );
}
