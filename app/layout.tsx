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
            <div className="flex flex-row items-end justify-between gap-4 sm:gap-6">
              <span className="text-left text-[11px] sm:text-sm whitespace-nowrap translate-y-3 sm:translate-y-[7px] transform">
                © ཀུན་བཟང་རྡོ་རྗེ་ 2026
              </span>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/BrownSubmarine.png"
                alt="Brown submarine illustration"
                width={300}
                height={140}
                className="h-[56px] w-auto shrink-0 -translate-y-10 sm:h-[130px] sm:-translate-y-13 md:h-[150px] md:-translate-y-14"
                loading="eager"
              />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
