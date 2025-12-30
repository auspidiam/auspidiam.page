import PageContent from "@/components/PageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprouts | Auspidiam",
  description: "Sprouts page",
};

export default function SproutsPage() {
  return (
    <PageContent
      heading="Sprouts"
      phonetic="/placeholder/"
      paragraphs={[
        "Placeholder text for Sprouts. Add the primary introduction here.",
        "Secondary placeholder paragraph for Sprouts. Include supporting notes or links later.",
        "Use this area for more Sprouts-specific description when available.",
      ]}
    />
  );
}
