// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col py-12">
      <div className="flex w-full flex-col items-center sm:items-start">
        <div className="flex w-full justify-center sm:justify-start">
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
        <hr className="mt-2 w-full max-w-[420px] border-t border-solid border-black" />
      </div>

      {/* body copy only */}
      <section className="relative mt-10 mb-10 flex-1 w-full min-h-[320px]">
        <p className="max-w-4xl text-left text-lg leading-relaxed">
          <strong>Auspidiam</strong> is the creative force whose roots span{" "}
          <a href="https://en.wikipedia.org/wiki/Himalayas" target="_blank" rel="noopener noreferrer">
            mountains
          </a>{" "}
          and sprouts{" "}
          <a href="https://plato.stanford.edu/entries/determinism-causal/" target="_blank" rel="noopener noreferrer">
            will
          </a>{" "}
          the air.
        </p>
      </section>
    </main>
  );
}
