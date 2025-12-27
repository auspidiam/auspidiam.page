// app/page.tsx
export default function Home() {
  return (
    <main className="flex-1 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Auspidiam</h1>

      {/* top rule: closer to title */}
      <div className="mt-1.5 h-px w-full bg-black/20" />
    </main>
  );
}
