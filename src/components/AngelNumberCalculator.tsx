"use client";

import { useState } from "react";

export default function AngelNumberCalculator() {
  const [birthday, setBirthday] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateAngelNumber = (dateStr: string) => {
    const digits = dateStr.replace(/-/g, "");
    let sum = digits.split("").reduce((acc, d) => acc + parseInt(d, 10), 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum
        .toString()
        .split("")
        .reduce((acc, d) => acc + parseInt(d, 10), 0);
    }
    return sum.toString();
  };

  const handleCalculate = () => {
    if (!birthday) return;
    const num = calculateAngelNumber(birthday);
    setResult(num);
  };

  return (
    <section className="rounded-2xl border border-purple-100 bg-purple-50/50 p-6">
      <h2 className="text-xl font-semibold text-purple-900 mb-2">
        Angel Number Calculator
      </h2>
      <p className="text-purple-700 mb-4">
        Enter your birthday to discover your personal angel number.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="rounded-lg border border-purple-200 px-4 py-2 text-purple-900 focus:border-purple-500 focus:outline-none"
        />
        <button
          onClick={handleCalculate}
          className="rounded-lg bg-purple-700 text-white px-6 py-2 font-medium hover:bg-purple-800 transition"
        >
          Calculate
        </button>
      </div>
      {result && (
        <div className="mt-4 rounded-xl bg-white border border-purple-100 p-4">
          <p className="text-purple-600 text-sm">Your angel number is</p>
          <p className="text-4xl font-bold text-purple-900">{result}</p>
          <a
            href={`/angel-numbers/${result}-meaning`}
            className="mt-2 inline-block text-purple-700 underline hover:text-purple-900"
          >
            Read full meaning →
          </a>
        </div>
      )}
    </section>
  );
}
