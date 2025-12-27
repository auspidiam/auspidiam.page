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
        className="relative mt-10 mb-10 flex-1 w-full min-h-[620px]"
      >
        {/* Internal grid strokes only: two verticals + two horizontals */}
        <div
          className="pointer-events-none absolute inset-x-2 inset-y-0 z-10"
          aria-hidden
        >
          <div className="absolute inset-y-6 left-1/3 w-px bg-neutral-500" />
          <div className="absolute inset-y-6 left-2/3 w-px bg-neutral-500" />
          <div className="absolute inset-x-0 top-1/3 h-px bg-neutral-500" />
          <div className="absolute inset-x-0 top-2/3 h-px bg-neutral-500" />
        </div>

        <div className="grid h-full min-h-[520px] grid-cols-3 grid-rows-3">
          {Array.from({ length: 9 }).map((_, index) => (
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
