import PageContent from "@/components/PageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kun·sang | Auspidiam",
  description: "Kun·sang page",
};

export default function KunsangPage() {
  return (
    <PageContent>
      <p className="max-w-4xl text-left">
        <strong className="block text-[1.5rem] font-semibold leading-tight">Kun·sang</strong>
        <em className="block italic text-xl">/ko͞onˌsôNG/</em>
      </p>

      <p className="max-w-4xl text-left">
        Placeholder text for Kun·sang. Replace this with the opening statement when content is ready.
      </p>

      <p className="max-w-4xl text-left">
        Additional placeholder paragraph for Kun·sang. Swap in contextual notes or links later.
      </p>

      <p className="max-w-4xl text-left">
        Use this space for extended description specific to Kun·sang once finalized.
      </p>
    </PageContent>
  );
}
