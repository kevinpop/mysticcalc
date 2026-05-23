import AngelNumberCalculator from "@/components/AngelNumberCalculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angel Number Calculator — Find Your Personal Angel Number",
  description:
    "Enter your birthday and discover your personal angel number. Free online angel number calculator with detailed meanings for love, career, and spiritual growth.",
};

export default function AngelNumberCalculatorPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-purple-900 mb-4">
          Angel Number Calculator
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Enter your birthday below to calculate your personal angel number.
          Discover what message the universe has for you.
        </p>
      </section>

      <AngelNumberCalculator />

      <section className="prose prose-purple max-w-none">
        <h2>How the Angel Number Calculator Works</h2>
        <p>
          The angel number calculator uses numerology digit reduction. Your
          birthday digits are added together repeatedly until they reach a single
          digit or a master number (11, 22, or 33). This resulting number is your
          personal angel number.
        </p>

        <h2>How to Use Your Angel Number</h2>
        <p>
          Once you know your angel number, read its full meaning to understand
          the energy and guidance connected to it. Your angel number can offer
          insight into your love life, career path, spiritual growth, and
          personal purpose.
        </p>

        <h2>What Are Angel Numbers?</h2>
        <p>
          Angel numbers are repeating number sequences that many people believe
          carry spiritual messages. Whether you see 111, 222, 444, or 555, each
          sequence is thought to hold a specific meaning and guidance from the
          universe or your guardian angels.
        </p>
      </section>
    </div>
  );
}
