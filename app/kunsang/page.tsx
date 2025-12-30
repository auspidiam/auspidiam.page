import PageContent from "@/components/PageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kun·sang | Auspidiam",
  description: "Kun·sang page",
};

export default function KunsangPage() {
  return (
    <PageContent
      heading="Kun·sang"
      phonetic="/ko͞onˌsôNG/"
      paragraphs={[
        "Placeholder text for Kun·sang. Replace this with the opening statement when content is ready.",
        "Additional placeholder paragraph for Kun·sang. Swap in contextual notes or links later.",
        "Use this space for extended description specific to Kun·sang once finalized.",
      ]}
    />
  );
}
