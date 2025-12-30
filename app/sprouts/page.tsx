import PageContent from "@/components/PageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprouts | Auspidiam",
  description: "Sprouts page",
};

export default function SproutsPage() {
  return (
    <PageContent>
      <p className="max-w-4xl text-left">
        <strong className="block text-[1.5rem] font-semibold leading-tight">Sprouts</strong>
        <em className="block italic text-xl">/placeholder/</em>
      </p>

      <p className="max-w-4xl text-left">Placeholder text for Sprouts. Add the primary introduction here.</p>

      <p className="max-w-4xl text-left">
        Secondary placeholder paragraph for Sprouts. Include supporting notes or links later.
      </p>

      <p className="max-w-4xl text-left">
        Use this area for more Sprouts-specific description when available.
      </p>
    </PageContent>
  );
}
