import DreamSearchTool from "@/components/DreamSearchTool";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dream Dictionary — Search Dream Meanings Free",
  description:
    "Free dream dictionary search tool. Type any dream symbol and discover its psychological and spiritual meaning instantly.",
};

export default function DreamDictionaryPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">
          Dream Dictionary
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Search for your dream symbol below and discover its meaning. Each
          entry includes psychological and spiritual interpretations.
        </p>
      </section>

      <DreamSearchTool />

      <section className="prose prose-indigo max-w-none">
        <h2>How to Use the Dream Dictionary</h2>
        <p>
          Type a keyword from your dream into the search box above. For example,
          if you dreamed about water, type &quot;water&quot; to find its meaning.
          You can search for animals, objects, people, events, and emotions.
        </p>

        <h2>Understanding Your Dreams</h2>
        <p>
          Dreams are deeply personal. While this dictionary provides
          psychological and spiritual interpretations, the most meaningful
          understanding comes from reflecting on your own emotions, experiences,
          and current life circumstances.
        </p>

        <h2>Common Dream Themes</h2>
        <ul>
          <li>
            <strong>Animals:</strong> Snakes, spiders, dogs, cats, and birds
            often represent instincts, fears, or personal qualities.
          </li>
          <li>
            <strong>Body:</strong> Teeth falling out, hair loss, and pregnancy
            dreams often connect to anxiety, identity, and personal growth.
          </li>
          <li>
            <strong>Events:</strong> Death, falling, flying, and being chased
            are among the most common dream themes worldwide.
          </li>
          <li>
            <strong>People:</strong> Dreams about exes, babies, celebrities, and
            strangers often reflect relationship dynamics and inner parts of
            yourself.
          </li>
        </ul>
      </section>
    </div>
  );
}
