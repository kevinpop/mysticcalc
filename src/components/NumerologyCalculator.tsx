"use client";

import { useState } from "react";
import numerologyData from "@/data/numerology-numbers.json";

type NumerologyEntry = {
  number: number;
  title: string;
  meaning: string;
  personality: string;
  career: string;
  love: string;
  strengths: string;
  challenges: string;
};

const data: Record<string, NumerologyEntry> = numerologyData;

function calculateLifePath(month: number, day: number, year: number): number {
  const digits = `${month}${day}${year}`.split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  return sum;
}

export default function NumerologyCalculator() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState<NumerologyEntry | null>(null);
  const [showSteps, setShowSteps] = useState(false);

  const handleCalculate = () => {
    const m = parseInt(month, 10);
    const d = parseInt(day, 10);
    const y = parseInt(year, 10);
    if (!m || !d || !y) return;
    const num = calculateLifePath(m, d, y);
    setResult(data[num.toString()] ?? null);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className="rounded-2xl border border-purple-100 bg-purple-50/50 p-6">
      <h2 className="text-xl font-semibold text-purple-900 mb-2">
        🔮 Life Path Number Calculator
      </h2>
      <p className="text-purple-700 mb-4">
        Enter your birth date to discover your Life Path Number — the most
        important number in your numerology chart.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="rounded-lg border border-purple-200 px-4 py-2 text-purple-900 focus:border-purple-500 focus:outline-none"
        >
          <option value="">Month</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString("en", { month: "long" })}
            </option>
          ))}
        </select>

        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="rounded-lg border border-purple-200 px-4 py-2 text-purple-900 focus:border-purple-500 focus:outline-none"
        >
          <option value="">Day</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="rounded-lg border border-purple-200 px-4 py-2 text-purple-900 focus:border-purple-500 focus:outline-none"
        >
          <option value="">Year</option>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={currentYear - i} value={currentYear - i}>
              {currentYear - i}
            </option>
          ))}
        </select>

        <button
          onClick={handleCalculate}
          className="rounded-lg bg-purple-700 text-white px-6 py-2 font-medium hover:bg-purple-800 transition"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="mt-4 space-y-4">
          <div className="rounded-xl bg-white border border-purple-100 p-4 text-center">
            <p className="text-purple-600 text-sm">Your Life Path Number is</p>
            <p className="text-5xl font-bold text-purple-900 my-2">
              {result.number}
            </p>
            <p className="text-lg font-semibold text-purple-800">
              {result.title}
            </p>
          </div>

          <div className="rounded-xl bg-white border border-purple-100 p-4">
            <h3 className="font-semibold text-purple-900 mb-2">
              ✨ Meaning
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {result.meaning}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white border border-purple-100 p-4">
              <h3 className="font-semibold text-purple-900 mb-2">
                🧠 Personality
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {result.personality}
              </p>
            </div>
            <div className="rounded-xl bg-white border border-purple-100 p-4">
              <h3 className="font-semibold text-purple-900 mb-2">
                💼 Career
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {result.career}
              </p>
            </div>
            <div className="rounded-xl bg-white border border-purple-100 p-4">
              <h3 className="font-semibold text-purple-900 mb-2">❤️ Love</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {result.love}
              </p>
            </div>
            <div className="rounded-xl bg-white border border-purple-100 p-4">
              <h3 className="font-semibold text-purple-900 mb-2">
                💪 Strengths
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {result.strengths}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white border border-purple-100 p-4">
            <h3 className="font-semibold text-purple-900 mb-2">
              ⚡ Challenges
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {result.challenges}
            </p>
          </div>

          <div className="text-center space-y-3 pt-2">
            <p className="text-sm text-purple-600">
              Share this tool with friends and family!
            </p>
            <a
              href="/tools/angel-number-calculator"
              className="inline-block text-purple-700 underline hover:text-purple-900 text-sm"
            >
              Also try: Angel Number Calculator →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
