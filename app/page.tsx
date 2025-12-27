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

      {/* body with central line and copy */}
      <section className="relative mt-10 mb-10 flex-1 w-full min-h-[520px]">
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
        <div className="flex h-full items-center">
          <p className="max-w-xl text-lg leading-relaxed">
            Auspidiam is a creative force whose roots span mountains and sprouts
            will the air.
          </p>
        </div>
      </section>
    </main>
  );
}
