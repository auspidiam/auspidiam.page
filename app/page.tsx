// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-1 flex-col py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Auspidiam</h1>

      {/* header rule: 1px */}
      <hr className="mt-0.5 w-full border-t border-solid border-black" />

      {/* box area: spaced so it doesn't touch header/footer rules */}
      <section
        aria-label="Homepage boxes"
        className="relative mt-10 mb-10 flex-1 w-full min-h-[640px]"
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
              insetBlock: "1.5rem",
              insetInlineStart: "50%",
              width: "2px",
              backgroundColor: "rgba(64,64,64,0.8)",
              transform: "translateX(-50%)",
            }}
          />

          {/* Left column horizontals */}
          {["35%", "68%"].map((top) => (
            <div
              key={`left-${top}`}
              style={{
                position: "absolute",
                top,
                left: "4%",
                width: "40%",
                height: "2px",
                backgroundColor: "rgba(64,64,64,0.8)",
              }}
            />
          ))}

          {/* Right column horizontals */}
          {["35%", "68%"].map((top) => (
            <div
              key={`right-${top}`}
              style={{
                position: "absolute",
                top,
                left: "56%",
                width: "40%",
                height: "2px",
                backgroundColor: "rgba(64,64,64,0.8)",
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
