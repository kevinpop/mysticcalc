import Link from "next/link";
import angelNumbers from "@/data/angel-numbers.json";

export const metadata = {
  title: "Angel Numbers — Complete Guide to Angel Number Meanings",
  description:
    "Discover the meaning of every angel number. From 111 to 999, find out what your angels are telling you with our free angel number calculator.",
};

export default function AngelNumbersPage() {
  const entries = Object.values(angelNumbers);
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-900 mb-4">
        Angel Numbers — Complete Guide
      </h1>
      <p className="text-gray-600 mb-8">
        Explore the spiritual meaning of angel numbers. Click any number to
        discover its message for love, career, and spiritual growth.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {entries.map((a) => (
          <Link
            key={a.slug}
            href={`/angel-numbers/${a.slug}`}
            className="rounded-xl border border-purple-100 p-4 text-center hover:border-purple-300 hover:bg-purple-50 transition"
          >
            <span className="text-3xl font-bold text-purple-800">
              {a.number}
            </span>
            <p className="text-xs text-gray-500 mt-1 line-clamp-1">
              {a.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
