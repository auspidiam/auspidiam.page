// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-1 flex-col py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Auspidiam</h1>

      {/* header rule (thin + close) */}
      <hr className="mt-0.5 border-0 border-t-[0.5px] border-black" />

      {/* grid area: does NOT touch header/footer rules */}
      <section
        aria-label="Homepage grid"
        className="mt-8 mb-8 flex-1"
      >
        <div
          className="
            grid h-full min-h-[420px] grid-cols-3 grid-rows-2
            border border-black
            divide-x divide-y divide-black
          "
        >
          <div id="box-1" data-box="1" aria-label="Box 1" />
          <div id="box-2" data-box="2" aria-label="Box 2" />
          <div id="box-3" data-box="3" aria-label="Box 3" />
          <div id="box-4" data-box="4" aria-label="Box 4" />
          <div id="box-5" data-box="5" aria-label="Box 5" />
          <div id="box-6" data-box="6" aria-label="Box 6" />
        </div>
      </section>
    </main>
  );
}
