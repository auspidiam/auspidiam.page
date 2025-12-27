// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-1 flex-col py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Auspidiam</h1>

      {/* header rule: 1px */}
      <hr className="mt-0.5 border-0 border-t border-black" />

      {/* box area: spaced so it doesn't touch header/footer rules */}
      <section aria-label="Homepage boxes" className="mt-10 mb-10 flex-1">
        {/* Two horizontals (top + bottom) */}
        <div className="grid grid-cols-3 border-y border-black">
          {/* Vertical strokes: left edge + two dividers + right edge */}
          <div
            id="box-1"
            data-box="1"
            aria-label="Box 1"
            className="min-h-[260px] border-l border-black"
          />
          <div
            id="box-2"
            data-box="2"
            aria-label="Box 2"
            className="min-h-[260px] border-l border-black"
          />
          <div
            id="box-3"
            data-box="3"
            aria-label="Box 3"
            className="min-h-[260px] border-l border-r border-black"
          />
        </div>

        {/* Boxes 4–6 will be the second row later. */}
      </section>
    </main>
  );
}
