import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <PageContent>
      <p className="max-w-4xl text-left">
        <strong className="block text-[1.5rem] font-semibold leading-tight">Aus·pi·diam</strong>
        <em className="block italic text-xl">/ôˈspiˈdēˌem/</em>
      </p>

      <p className="max-w-4xl text-left">
        Auspidiam is the creative force whose roots span{" "}
        <a href="https://en.wikipedia.org/wiki/Himalayas" target="_blank" rel="noopener noreferrer">
          mountains
        </a>{" "}
        and sprouts{" "}
        <a href="https://plato.stanford.edu/entries/determinism-causal/" target="_blank" rel="noopener noreferrer">
          will
        </a>{" "}
        the air.
      </p>

      <p className="max-w-4xl text-left">
        When words are placed with the same care as brushstrokes, the page becomes a space where form and feeling travel together. The rail to the right keeps the stems and roots in view, quietly mirroring the growth in the text.
      </p>

      <p className="max-w-4xl text-left">
        Scroll to see how the marks remain anchored; like cairns on a trail, they stay where you left them, guiding your eye without pressing on the story.
      </p>
    </PageContent>
  );
}
