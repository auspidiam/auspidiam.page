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
        className="relative mt-10 mb-10 flex-1 min-h-[360px] w-full"
      >
        {/* Internal grid strokes only: two verticals + one horizontal */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          aria-hidden
        >
          <div className="absolute inset-y-0 left-[33.333%] w-px bg-black" />
          <div className="absolute inset-y-0 left-[66.666%] w-px bg-black" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-black" />
        </div>

        <div className="grid h-full min-h-[320px] grid-cols-3 grid-rows-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              id={`box-${index + 1}`}
              data-box={index + 1}
              aria-label={`Box ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
