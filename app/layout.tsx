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
        <div className="mx-auto flex min-h-screen w-full max-w-[1100px] flex-col px-6 sm:px-8 md:px-12">
          {children}

          {/* footer separator (thinner than the top rule) */}
          <hr className="mt-auto border-black/10 border-t-[0.5px]" />

          <footer className="py-10 text-sm">
            <div className="flex items-center gap-4">
              <div className="h-6 w-px bg-black/30" aria-hidden="true" />
              <span>ཀུན་བཟང་རྡོ་རྗེ་</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
