import Link from "next/link";
import dreamSymbols from "@/data/dream-symbols.json";

export const metadata = {
  title: "Dream Dictionary — Find the Meaning of Your Dreams",
  description:
    "Free dream dictionary. Search for your dream symbol and discover its psychological and spiritual meaning.",
};

export default function DreamsPage() {
  const entries = Object.values(dreamSymbols);
  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-900 mb-4">
        Dream Dictionary
      </h1>
      <p className="text-gray-600 mb-8">
        Search for your dream symbol and discover its meaning. Each entry
        includes psychological and spiritual interpretations.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {entries.map((d) => (
          <Link
            key={d.slug}
            href={`/dreams/${d.slug}`}
            className="rounded-xl border border-indigo-100 p-4 hover:border-indigo-300 hover:bg-indigo-50 transition"
          >
            <span className="text-lg font-bold text-indigo-800 capitalize">
              {d.symbol}
            </span>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {d.coreMeaning}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
