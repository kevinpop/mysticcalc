import Link from "next/link";
import crystals from "@/data/crystals.json";

export const metadata = {
  title: "Crystal Meanings — Healing Properties & Spiritual Guide",
  description:
    "Discover the spiritual meaning and healing properties of crystals. Learn how to use amethyst, rose quartz, clear quartz, and more for energy healing.",
};

export default function CrystalsPage() {
  const entries = Object.values(crystals);
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-900 mb-4">
        Crystal Meanings & Healing Properties
      </h1>
      <p className="text-gray-600 mb-8">
        Explore the spiritual meaning and healing properties of crystals. Each
        entry includes guidance on how to use crystals for energy healing,
        meditation, and daily life.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {entries.map((c) => (
          <Link
            key={c.slug}
            href={`/crystals/${c.slug}`}
            className="rounded-xl border border-purple-100 p-4 hover:border-purple-300 hover:bg-purple-50 transition"
          >
            <span className="text-lg font-bold text-purple-800 capitalize">
              {c.h1?.split("—")[0]?.trim() || c.slug.replace(/-/g, " ")}
            </span>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {c.meaning?.substring(0, 120)}...
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
