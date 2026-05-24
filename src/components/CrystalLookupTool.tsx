"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import crystals from "@/data/crystals.json";

type CrystalEntry = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  meaning: string;
  properties: string[];
  healing: string[];
  faq: { question: string; answer: string }[];
  relatedCrystals: string[];
};

const allCrystals = Object.entries(crystals as Record<string, CrystalEntry>);

export default function CrystalLookupTool() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return allCrystals;
    const q = query.toLowerCase();
    return allCrystals.filter(
      ([key, c]) =>
        key.includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.meaning.toLowerCase().slice(0, 100).includes(q)
    );
  }, [query]);

  const selectedCrystal = selected
    ? (crystals as Record<string, CrystalEntry>)[selected]
    : null;

  return (
    <div className="space-y-8">
      {/* Search Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(null);
          }}
          placeholder="Search for a crystal... (e.g. amethyst, rose quartz, protection)"
          className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white dark:bg-gray-800 dark:border-purple-700 dark:text-white"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setSelected(null);
            }}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {query.trim()
          ? `${filtered.length} crystal${filtered.length !== 1 ? "s" : ""} found`
          : `Showing all ${allCrystals.length} crystals`}
      </p>

      {/* Crystal Grid */}
      {!selected && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(([key, crystal]) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className="text-left p-5 rounded-xl border border-purple-100 hover:border-purple-400 hover:shadow-lg transition-all bg-white dark:bg-gray-800 dark:border-purple-900 dark:hover:border-purple-500 group"
            >
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 group-hover:text-purple-600 transition-colors">
                {crystal.title
                  .split(" — ")[0]
                  .replace("Crystal Meaning", "")
                  .replace("& Healing Properties", "")
                  .replace("Crystal Healing Properties", "")
                  .trim()}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {crystal.meaning.slice(0, 120)}...
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {crystal.properties.slice(0, 3).map((p, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full dark:bg-purple-900/30 dark:text-purple-300"
                  >
                    {p.split(" ").slice(0, 3).join(" ")}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Selected Crystal Detail */}
      {selected && selectedCrystal && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-purple-100 dark:border-purple-900 p-6 sm:p-8">
          <button
            onClick={() => setSelected(null)}
            className="text-sm text-purple-600 hover:text-purple-800 mb-4 inline-flex items-center gap-1"
          >
            ← Back to all crystals
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 dark:text-purple-200 mb-4">
            {selectedCrystal.h1}
          </h2>

          <div className="prose prose-purple max-w-none dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {selectedCrystal.meaning}
            </p>

            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mt-6">
              Properties
            </h3>
            <ul className="space-y-2">
              {selectedCrystal.properties.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-purple-500 mt-1">✦</span>
                  {p}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mt-6">
              How to Use
            </h3>
            <ul className="space-y-2">
              {selectedCrystal.healing.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-purple-500 mt-1">✦</span>
                  {h}
                </li>
              ))}
            </ul>

            {selectedCrystal.faq.length > 0 && (
              <>
                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mt-6">
                  FAQ
                </h3>
                {selectedCrystal.faq.map((f, i) => (
                  <div key={i} className="mb-4">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {f.question}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {f.answer}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-purple-100 dark:border-purple-800">
            <Link
              href={`/crystals/${selectedCrystal.slug}`}
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Read Full Guide →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
