import NumerologyCalculator from "@/components/NumerologyCalculator";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Numerology Calculator — Find Your Life Path Number",
  description:
    "Discover your Life Path Number with our free numerology calculator. Enter your birth date to reveal your personality, career strengths, love compatibility, and life purpose based on numerology.",
  keywords: [
    "numerology calculator",
    "life path number",
    "free numerology",
    "birth date numerology",
    "life path number calculator",
    "numerology meaning",
    "master number 11 22 33",
  ],
};

const faq = [
  {
    question: "What is a Life Path Number?",
    answer:
      "Your Life Path Number is the most important number in numerology. It is calculated by reducing all the digits of your birth date to a single digit (1-9) or a master number (11, 22, 33). This number reveals your core personality traits, natural talents, life purpose, and the challenges you are here to overcome.",
  },
  {
    question: "How do you calculate a Life Path Number?",
    answer:
      "To calculate your Life Path Number, add together all the digits of your birth date (month, day, and year) and reduce them to a single digit. For example, July 14, 1990: 7+1+4+1+9+9+0 = 31, then 3+1 = 4. The only exceptions are master numbers 11, 22, and 33, which are never reduced further.",
  },
  {
    question: "What are master numbers in numerology?",
    answer:
      "Master numbers are 11, 22, and 33. These numbers carry a higher spiritual vibration and greater potential than other numbers. If your calculation results in one of these numbers, it is not reduced to a single digit. Master numbers indicate heightened intuition (11), masterful building ability (22), or supreme compassion and teaching (33).",
  },
  {
    question: "Is numerology the same as angel numbers?",
    answer:
      "Numerology and angel numbers are related but distinct. Numerology is an ancient system that analyzes your birth date and name to reveal personality and life purpose. Angel numbers are repeating number sequences (like 111, 222, 444) believed to carry spiritual messages. Both use numbers as symbols, but numerology focuses on your birth chart while angel numbers appear as signs in daily life.",
  },
  {
    question: "Can my Life Path Number change?",
    answer:
      "No, your Life Path Number never changes because it is based on your birth date, which is fixed. However, different numbers influence different periods of your life through cycles like Personal Years, Pinnacles, and Challenges. Your Life Path Number remains your core identity throughout your entire life.",
  },
];

const relatedLinks = [
  { href: "/tools/angel-number-calculator", label: "Angel Number Calculator" },
  { href: "/tools/dream-dictionary", label: "Dream Dictionary" },
  { href: "/angel-numbers", label: "Angel Number Meanings" },
  { href: "/dreams", label: "Dream Interpretations" },
];

export default function NumerologyCalculatorPage() {
  return (
    <div className="space-y-8">
      <ArticleSchema
        title="Free Numerology Calculator — Find Your Life Path Number"
        description="Discover your Life Path Number with our free numerology calculator. Enter your birth date to reveal your personality, career strengths, and life purpose."
        url="https://mysticcalc.com/tools/numerology-calculator"
        datePublished="2025-05-23"
        dateModified="2025-05-23"
      />
      <FAQSchema faq={faq} />

      <section className="text-center">
        <h1 className="text-3xl font-bold text-purple-900 mb-4">
          Free Numerology Calculator
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Enter your birth date below to calculate your Life Path Number — the
          single most important number in your numerology chart. Discover what
          it reveals about your personality, purpose, and destiny.
        </p>
      </section>

      <NumerologyCalculator />

      <section className="prose prose-purple max-w-none">
        <h2>What Is a Life Path Number?</h2>
        <p>
          In numerology, your Life Path Number is derived from your birth date
          and is considered the most significant number in your chart. It
          represents the core of who you are — your natural strengths, the
          challenges you will face, and the overall direction of your life
          journey. Think of it as the numerological equivalent of your sun sign
          in astrology, but calculated from the exact date you were born.
        </p>
        <p>
          The Life Path Number is found by adding together every digit in your
          birth date and reducing the sum to a single digit between 1 and 9, or
          to one of the three master numbers: 11, 22, or 33. Master numbers
          carry a higher vibration and are never reduced further because they
          represent exceptional spiritual potential and heightened abilities.
        </p>

        <h2>How Does the Life Path Number Calculator Work?</h2>
        <p>
          Our free numerology calculator uses the standard Pythagorean method.
          Simply select your birth month, day, and year from the dropdowns
          above and click Calculate. The tool will add all the digits of your
          birth date together, reduce them following numerology rules, and
          reveal your Life Path Number along with its full meaning — including
          personality traits, career guidance, love compatibility, strengths,
          and challenges.
        </p>

        <h2>The Nine Life Path Numbers and Master Numbers</h2>
        <p>
          Each Life Path Number from 1 to 9 carries distinct energy and meaning.
          Number 1 is the leader and pioneer. Number 2 is the peacemaker and
          diplomat. Number 3 is the creative communicator. Number 4 is the
          builder and organizer. Number 5 is the freedom-seeking adventurer.
          Number 6 is the nurturing caregiver. Number 7 is the spiritual
          seeker. Number 8 is the ambitious achiever. Number 9 is the
          compassionate humanitarian.
        </p>
        <p>
          Beyond these nine numbers, numerology recognizes three master numbers:
          11 (The Intuitive Messenger), 22 (The Master Builder), and 33 (The
          Master Teacher). These rare numbers carry amplified energy and
          indicate souls with extraordinary potential and spiritual missions.
        </p>

        <h2>Numerology vs. Angel Numbers</h2>
        <p>
          While numerology analyzes your birth date to reveal your life path,
          angel numbers are repeating sequences like 111, 222, or 444 that
          appear as spiritual signs in your daily life. Both systems use the
          symbolic power of numbers, but they serve different purposes. Your
          Life Path Number is fixed and defines your core nature, while angel
          numbers are dynamic messages offering guidance for specific moments
          and decisions.
        </p>
        <p>
          Curious about angel numbers too? Try our{" "}
          <a href="/tools/angel-number-calculator">Angel Number Calculator</a>{" "}
          or explore our complete{" "}
          <a href="/angel-numbers">angel number meanings guide</a> to deepen
          your understanding of the numbers that surround you every day.
        </p>
      </section>

      <RelatedLinks links={relatedLinks} />
    </div>
  );
}
