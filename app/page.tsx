import { CardRedHeaven } from "./components/CardRedHeaven";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="w-full max-w-3xl px-16">
        <CardRedHeaven />
      </main>
    </div>
  );
}
