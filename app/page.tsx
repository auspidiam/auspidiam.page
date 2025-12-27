// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col py-12">
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
      <hr className="mt-[-8px] w-full border-t border-solid border-black border-t-[0.5px]" />

      {/* body copy only */}
      <section className="relative mt-10 mb-10 flex-1 w-full min-h-[320px]">
        <p className="max-w-3xl text-left text-lg leading-relaxed">
          Auspidiam is a creative force whose roots span mountains and sprouts
          will the air.
          <br />
          Decentralized outlets serve as the menu of my expressions - of which,
          I am no master, but a puppet to my imagination.
        </p>
      </section>
    </main>
  );
}
