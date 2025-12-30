import PageContent from "@/components/PageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roots | Auspidiam",
  description: "Roots page",
};

export default function RootsPage() {
  return (
    <PageContent
      heading="Roots"
      phonetic="/placeholder/"
      paragraphs={[
        "Placeholder text for Roots. Introduce the page focus here.",
        "Supporting placeholder paragraph for Roots. Add references or context later.",
        "Further Roots description placeholder. Expand with finalized copy when ready.",
      ]}
    />
  );
}
