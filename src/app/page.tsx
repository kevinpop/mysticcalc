import Link from "next/link";
import angelNumbers from "@/data/angel-numbers.json";
import dreamSymbols from "@/data/dream-symbols.json";

export default function HomePage() {
  const topAngel = Object.values(angelNumbers).slice(0, 6);
  const topDreams = Object.values(dreamSymbols).slice(0, 6);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
          Discover the Meaning Behind the Numbers &amp; Dreams
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Free angel number calculator, dream dictionary, and spiritual tools.
          Understand what the universe is telling you.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">
          Popular Angel Numbers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {topAngel.map((a) => (
            <Link
              key={a.slug}
              href={`/angel-numbers/${a.slug}`}
              className="rounded-xl border border-purple-100 p-4 hover:border-purple-300 hover:bg-purple-50 transition"
            >
              <span className="text-2xl font-bold text-purple-800">
                {a.number}
              </span>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {a.coreMeaning}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/angel-numbers"
          className="mt-4 inline-block text-purple-700 hover:underline"
        >
          View all angel numbers →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
          Popular Dream Meanings
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {topDreams.map((d) => (
            <Link
              key={d.slug}
              href={`/dreams/${d.slug}`}
              className="rounded-xl border border-indigo-100 p-4 hover:border-indigo-300 hover:bg-indigo-50 transition"
            >
              <span className="text-lg font-bold text-indigo-800 capitalize">
                {d.symbol}
              </span>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {d.coreMeaning}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/dreams"
          className="mt-4 inline-block text-indigo-700 hover:underline"
        >
          View all dream meanings →
        </Link>
      </section>

      <section className="bg-purple-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-semibold text-purple-900 mb-2">
          Free Angel Number Calculator
        </h2>
        <p className="text-purple-700 mb-4">
          Enter your birthday and discover your personal angel number.
        </p>
        <Link
          href="/tools/angel-number-calculator"
          className="inline-block rounded-lg bg-purple-700 text-white px-6 py-2 font-medium hover:bg-purple-800 transition"
        >
          Try the Calculator
        </Link>
      </section>
    </div>
  );
}
