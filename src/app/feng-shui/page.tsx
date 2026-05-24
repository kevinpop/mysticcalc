import Link from "next/link";
import fengShuiData from "@/data/feng-shui.json";

export const metadata = {
  title: "Feng Shui — Complete Guide to Home Energy & Layout",
  description:
    "Learn feng shui for your home. Bedroom layout, color meanings, and beginner tips to improve energy flow, attract wealth, and create harmony.",
};

export default function FengShuiPage() {
  const entries = Object.values(fengShuiData);
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-900 mb-4">
        Feng Shui — Complete Guide
      </h1>
      <p className="text-gray-600 mb-8">
        Discover how to arrange your home for positive energy. From bedroom
        layout to color meanings, learn the principles of feng shui to create
        harmony and attract abundance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/feng-shui/${entry.slug}`}
            className="rounded-xl border border-purple-100 p-6 hover:border-purple-300 hover:bg-purple-50 transition"
          >
            <h2 className="text-xl font-bold text-purple-800 mb-2">
              {entry.h1}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {entry.metaDescription}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
