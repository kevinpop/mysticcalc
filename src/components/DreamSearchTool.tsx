"use client";

import { useState, useMemo } from "react";
import dreamSymbols from "@/data/dream-symbols.json";

type DreamEntry = (typeof dreamSymbols)[keyof typeof dreamSymbols];

export default function DreamSearchTool() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return Object.values(dreamSymbols)
      .filter(
        (d: DreamEntry) =>
          d.symbol.toLowerCase().includes(q) ||
          d.title.toLowerCase().includes(q) ||
          d.coreMeaning.toLowerCase().includes(q)
      )
      .slice(0, 5);
  }, [query]);

  return (
    <section className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6">
      <h2 className="text-xl font-semibold text-indigo-900 mb-2">
        Dream Dictionary
      </h2>
      <p className="text-indigo-700 mb-4">
        Search for your dream symbol to discover its meaning.
      </p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. snakes, water, flying..."
        className="w-full rounded-lg border border-indigo-200 px-4 py-2 text-indigo-900 placeholder-indigo-400 focus:border-indigo-500 focus:outline-none"
      />
      {results.length > 0 && (
        <ul className="mt-4 space-y-3">
          {results.map((d: DreamEntry) => (
            <li
              key={d.slug}
              className="rounded-xl bg-white border border-indigo-100 p-4"
            >
              <a
                href={`/dreams/${d.slug}`}
                className="text-indigo-800 font-semibold hover:underline"
              >
                {d.title}
              </a>
              <p className="text-indigo-600 text-sm mt-1 line-clamp-2">
                {d.coreMeaning}
              </p>
            </li>
          ))}
        </ul>
      )}
      {query.length >= 2 && results.length === 0 && (
        <p className="mt-4 text-indigo-500 text-sm">
          No results found. Try another symbol.
        </p>
      )}
    </section>
  );
}
