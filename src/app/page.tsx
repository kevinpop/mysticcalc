import Link from "next/link";
import angelNumbers from "@/data/angel-numbers.json";
import dreamSymbols from "@/data/dream-symbols.json";
import crystals from "@/data/crystals.json";
import fengShui from "@/data/feng-shui.json";

export default function HomePage() {
  const topAngel = Object.values(angelNumbers).slice(0, 6);
  const topDreams = Object.values(dreamSymbols).slice(0, 6);

  return (
    <div className="space-y-12">
      {/* Hero — Focused on Angel Number Calculator */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
          Angel Number Calculator — Discover Your Number's Meaning
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Enter your birthday to find your personal angel number. Then explore
          the spiritual meaning of 111, 222, 444, 555, 777, and more.
        </p>
        <Link
          href="/tools/angel-number-calculator"
          className="inline-block rounded-lg bg-purple-700 text-white px-8 py-3 font-medium hover:bg-purple-800 transition text-lg"
        >
          Find Your Angel Number →
        </Link>
      </section>

      {/* Calculator CTA */}
      <section className="bg-purple-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-semibold text-purple-900 mb-2">
          What Is My Angel Number?
        </h2>
        <p className="text-purple-700 mb-4">
          Enter your birthday and discover your personal angel number and its spiritual meaning.
        </p>
        <Link
          href="/tools/angel-number-calculator"
          className="inline-block rounded-lg bg-purple-700 text-white px-6 py-2 font-medium hover:bg-purple-800 transition"
        >
          Try the Calculator
        </Link>
      </section>

      {/* Popular Angel Numbers — Main content focus */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">
          Popular Angel Numbers
        </h2>
        <p className="text-gray-600 mb-4">
          Each angel number carries a unique spiritual message. Click any number
          to discover its full meaning.
        </p>
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
          View all 143 angel numbers →
        </Link>
      </section>

      {/* Numerology Calculator */}
      <section className="bg-indigo-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-semibold text-indigo-900 mb-2">
          🔮 Numerology Calculator
        </h2>
        <p className="text-indigo-700 mb-4">
          Discover your Life Path Number — the most important number in your numerology chart.
        </p>
        <Link
          href="/tools/numerology-calculator"
          className="inline-block rounded-lg bg-indigo-700 text-white px-6 py-2 font-medium hover:bg-indigo-800 transition"
        >
          Find Your Life Path Number
        </Link>
      </section>

      {/* Other sections — de-emphasized, each has its own index page for SEO */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Explore More
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link href="/dreams" className="rounded-xl border border-indigo-100 p-4 hover:border-indigo-300 hover:bg-indigo-50 transition">
            <span className="text-lg font-bold text-indigo-800">Dream Dictionary</span>
            <p className="text-xs text-gray-500 mt-1">Decode your dreams</p>
          </Link>
          <Link href="/crystals" className="rounded-xl border border-violet-100 p-4 hover:border-violet-300 hover:bg-violet-50 transition">
            <span className="text-lg font-bold text-violet-800">Crystal Meanings</span>
            <p className="text-xs text-gray-500 mt-1">Healing properties guide</p>
          </Link>
          <Link href="/feng-shui" className="rounded-xl border border-emerald-100 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
            <span className="text-lg font-bold text-emerald-800">Feng Shui</span>
            <p className="text-xs text-gray-500 mt-1">Home & bedroom layout</p>
          </Link>
          <Link href="/tools/numerology-calculator" className="rounded-xl border border-indigo-100 p-4 hover:border-indigo-300 hover:bg-indigo-50 transition">
            <span className="text-lg font-bold text-indigo-800">Numerology</span>
            <p className="text-xs text-gray-500 mt-1">Life path calculator</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
