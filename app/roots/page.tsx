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
        <em className="block italic text-xl">/placeholder/</em>
      </p>

      <p className="max-w-4xl text-left">Placeholder text for Roots. Introduce the page focus here.</p>

      <p className="max-w-4xl text-left">
        Supporting placeholder paragraph for Roots. Add references or context later.
      </p>

      <p className="max-w-4xl text-left">
        Further Roots description placeholder. Expand with finalized copy when ready.
      </p>
    </PageContent>
  );
}
