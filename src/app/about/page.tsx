export const metadata = {
  title: "About MysticCalc",
  description:
    "Learn about MysticCalc — your free resource for angel number meanings, dream interpretation, and spiritual tools.",
};

export default function AboutPage() {
  return (
    <div className="prose prose-purple max-w-none">
      <h1>About MysticCalc</h1>
      <p>
        MysticCalc is a free online resource for anyone curious about angel
        numbers, dream meanings, numerology, and spiritual growth. We believe
        that self-reflection and curiosity are powerful tools for personal
        development.
      </p>
      <h2>What We Offer</h2>
      <ul>
        <li>
          <strong>Angel Number Calculator</strong> — Discover your personal angel
          number based on your birthday.
        </li>
        <li>
          <strong>Angel Number Meanings</strong> — Detailed guides for every
          angel number, covering love, career, and spiritual growth.
        </li>
        <li>
          <strong>Dream Dictionary</strong> — Search for dream symbols and
          explore their psychological and spiritual interpretations.
        </li>
      </ul>
      <h2>Our Approach</h2>
      <p>
        We combine insights from psychology, numerology, and spiritual
        traditions to provide balanced, thoughtful interpretations. Our content
        is designed for reflection and entertainment — not as a substitute for
        professional advice.
      </p>
      <h2>Disclaimer</h2>
      <p>
        All content on MysticCalc is for entertainment purposes only. We do not
        provide medical, legal, or financial advice. Always consult a qualified
        professional for important life decisions.
      </p>
    </div>
  );
}
