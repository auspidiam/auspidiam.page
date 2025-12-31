import PageContent from "@/components/PageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roots | Auspidiam",
  description: "Roots page",
};

export default function RootsPage() {
  return (
    <PageContent>
      <p className="max-w-4xl text-left">
        <strong className="block text-[1.5rem] font-semibold leading-tight">Roots</strong>
        <em className="block italic text-xl">/ro͞ots/</em>
      </p>

      <p className="max-w-4xl text-left">
        Not to be confused with{" "}
        <a href="https://en.wikipedia.org/wiki/The_Roots" target="_blank" rel="noopener noreferrer">
           the band
        </a>{" "}
        . My roots comrpise the nomadic pastoralists of{" "}
        <a href="https://en.wikipedia.org/wiki/Changtang" target="_blank" rel="noopener noreferrer">
           Changthang 
        </a>{" "}
        and the tax paying nobility of{" "}
        <a href="https://en.wikipedia.org/wiki/Gyirong_County" target="_blank" rel="noopener noreferrer">
           Kyirong.
        </a>{" "}
      </p>

      <p className="max-w-4xl text-left">
        For millienia, they they were entrenched within the cultural heartland of the world&apos;s roof.
      </p>

      <p className="max-w-4xl text-left">
        They&apos;ve since propagated to Kiratadese and, more recently, to the Northeastern Coastal Forests of America.
      </p>
    </PageContent>
  );
}
