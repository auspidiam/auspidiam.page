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

      {/* box area: spaced so it doesn't touch header/footer rules */}
      <section
        aria-label="Homepage boxes"
        className="relative mt-10 mb-10 flex-1 w-full min-h-[680px]"
      >
        {/* Overlay lines drawn with explicit coordinates to avoid class purging */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ insetInline: "1%", insetBlock: "0" }}
        >
          {/* Center spine */}
          <div
            style={{
              position: "absolute",
              insetBlock: "1.75rem",
              insetInlineStart: "50%",
              width: "0.5px",
              backgroundColor: "#000",
              transform: "translateX(-50%)",
              top: "1.75rem",
              bottom: "1.75rem",
            }}
          />

          {/* Left column horizontals */}
          {["38%", "70%"].map((top) => (
            <div
              key={`left-${top}`}
              style={{
                position: "absolute",
                top,
                left: "4%",
                width: "40%",
                height: "0.5px",
                backgroundColor: "#000",
              }}
            />
          ))}

          {/* Right column horizontals */}
          {["38%", "70%"].map((top) => (
            <div
              key={`right-${top}`}
              style={{
                position: "absolute",
                top,
                left: "56%",
                width: "40%",
                height: "0.5px",
                backgroundColor: "#000",
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
