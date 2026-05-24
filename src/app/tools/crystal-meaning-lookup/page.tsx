import type { Metadata } from "next";
import CrystalLookupTool from "@/components/CrystalLookupTool";

export const metadata: Metadata = {
  title:
    "Crystal Meaning Lookup — Search Healing Properties & Meanings",
  description:
    "Search hundreds of crystal meanings, healing properties, and uses. Find the perfect crystal for protection, love, abundance, healing, and more.",
  openGraph: {
    title: "Crystal Meaning Lookup — Find Your Crystal's Healing Properties",
    description:
      "Search hundreds of crystal meanings, healing properties, and uses. Find the perfect crystal for your needs.",
    url: "https://mysticcalc.com/tools/crystal-meaning-lookup",
  },
};

export default function CrystalMeaningLookupPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 dark:text-purple-200 mb-4">
          Crystal Meaning Lookup
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Search for any crystal to discover its meaning, healing properties,
          and how to use it. Click a crystal to see full details.
        </p>
      </div>

      <CrystalLookupTool />

      {/* SEO Content */}
      <div className="mt-16 prose prose-purple max-w-3xl mx-auto dark:prose-invert">
        <h2>How to Use This Crystal Guide</h2>
        <p>
          Simply type a crystal name, color, or intention (like
          &quot;protection&quot; or &quot;love&quot;) into the search box above.
          Browse the results and click any crystal card to see its full meaning,
          healing properties, and usage tips.
        </p>

        <h2>What Are Crystal Meanings?</h2>
        <p>
          Every crystal carries a unique energy signature based on its mineral
          composition, color, and formation process. Crystal meanings have been
          studied and documented for thousands of years across cultures — from
          ancient Egypt and Greece to traditional Chinese medicine and Native
          American healing practices.
        </p>
        <p>
          While scientific evidence for crystal healing is limited, many people
          find that working with crystals promotes mindfulness, intentionality,
          and emotional well-being — similar to meditation or journaling
          practices.
        </p>

        <h2>Popular Crystals by Intention</h2>
        <ul>
          <li>
            <strong>Protection:</strong> Black Tourmaline, Obsidian, Hematite,
            Shungite
          </li>
          <li>
            <strong>Love:</strong> Rose Quartz, Rhodonite, Kunzite, Jade
          </li>
          <li>
            <strong>Abundance:</strong> Citrine, Pyrite, Jade, Peridot
          </li>
          <li>
            <strong>Intuition:</strong> Amethyst, Labradorite, Moonstone,
            Fluorite
          </li>
          <li>
            <strong>Calm:</strong> Selenite, Celestite, Howlite, Larimar
          </li>
          <li>
            <strong>Transformation:</strong> Moldavite, Malachite, Labradorite
          </li>
        </ul>

        <p>
          Want to learn more about a specific crystal? Click any result above to
          read its full guide, including detailed healing properties, usage tips,
          and frequently asked questions.
        </p>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a crystal meaning lookup?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A crystal meaning lookup is a tool that lets you search for crystals by name or intention to discover their metaphysical properties, healing uses, and symbolic meanings.",
                },
              },
              {
                "@type": "Question",
                name: "How do I choose the right crystal for me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Choose a crystal based on your intention — what you want to manifest or heal. You can also trust your intuition: the crystal you are most drawn to is often the one you need most.",
                },
              },
              {
                "@type": "Question",
                name: "Do crystals really work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Crystal healing is a practice rooted in thousands of years of tradition across many cultures. While scientific evidence is limited, many people report benefits including reduced stress, improved focus, and emotional well-being when working with crystals as part of a mindfulness practice.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
