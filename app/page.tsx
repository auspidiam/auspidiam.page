// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-row">
      <main className="rail-offset flex flex-1 flex-col py-12">
        <div className="flex items-end">
          <Image
            src="/AuspidiamCursive.png"
            alt="Auspidiam"
            width={420}
            height={90}
            priority
            className="h-16 w-auto"
          />
        </div>

        {/* header rule: 1px */}
        <hr className="rail-line mt-[-8px] border-t border-solid border-black border-t-[0.5px]" />

        {/* body copy only */}
        <section className="rail-safe relative mt-10 mb-16 flex-1 w-full min-h-[320px] space-y-6 text-lg leading-relaxed">
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
            When words are placed with the same care as brushstrokes, the page becomes a space where form and feeling
            travel together. The rail to the right keeps the stems and roots in view, quietly mirroring the growth in
            the text.
          </p>
          <p className="max-w-4xl text-left">
            Scroll to see how the marks remain anchored; like cairns on a trail, they stay where you left them, guiding
            your eye without pressing on the story.
          </p>
        </section>
      </main>

      <nav className="nav-fixed-rail nav-stack flex flex-col items-center" aria-label="Roots and sprouts logomarks">
        <Image
          src="/KunsangCursive.png"
          alt="Kunsang cursive wordmark"
          width={180}
          height={72}
          className="h-auto w-[84px] sm:w-[96px] md:w-[112px] lg:w-[128px]"
        />
        <Image
          src="/SproutsCursive.png"
          alt="Sprouts cursive wordmark"
          width={180}
          height={72}
          className="h-auto w-[84px] sm:w-[96px] md:w-[112px] lg:w-[128px]"
        />
        <Image
          src="/RootsCursive.png"
          alt="Roots cursive wordmark"
          width={180}
          height={72}
          className="h-auto w-[84px] sm:w-[96px] md:w-[112px] lg:w-[128px]"
        />
        <Image
          src="/Arrow.png"
          alt="Arrow illustration"
          width={187}
          height={779}
          className="h-auto w-[22px] sm:w-[26px] md:w-[30px] lg:w-[34px]"
        />
      </nav>
    </div>
  );
}
