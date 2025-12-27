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
      <hr className="mt-[-8px] w-full border-t border-solid border-black/100 border-t-[0.5px]" />

      {/* body with central line and two columns */}
      <section className="relative mt-10 mb-10 flex-1 w-full min-h-[520px]">
        {/* vertical divider */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            left: "50%",
            width: "1px",
            backgroundColor: "#000",
            transform: "translateX(-50%)",
            insetBlock: "0.75rem",
          }}
        />

        {/* two text columns */}
        <div className="relative z-10 grid h-full grid-cols-2 gap-x-20">
          <div className="flex items-start justify-start">
            <p className="mt-8 max-w-xl pr-8 text-left text-lg leading-relaxed">
              Auspidiam is a creative force whose roots span mountains and
              sprouts will the air.
            </p>
          </div>
          <div className="flex items-start justify-start">
            <p className="mt-8 max-w-xl pl-8 text-left text-lg leading-relaxed">
              Decentralized outlets serve as the menu of my expressions - of
              which, I am no master, but a puppet to my imagination.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
