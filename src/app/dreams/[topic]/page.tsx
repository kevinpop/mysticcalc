import { notFound } from "next/navigation";
import Link from "next/link";
import dreamSymbols from "@/data/dream-symbols.json";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSchema from "@/components/FAQSchema";
import DreamSearchTool from "@/components/DreamSearchTool";
import RelatedLinks from "@/components/RelatedLinks";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ topic: string }> };

export async function generateStaticParams() {
  return Object.keys(dreamSymbols).map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { topic } = await params;
  const data = dreamSymbols[topic as keyof typeof dreamSymbols];
  if (!data) return {};
  return {
    title: `${data.title} — What Does It Mean?`,
    description: data.coreMeaning,
    keywords: data.faq.map((f) => f.question),
    openGraph: {
      title: data.title,
      description: data.coreMeaning,
      url: `https://mysticcalc.com/dreams/${data.slug}`,
    },
  };
}

export default async function DreamPage({ params }: PageProps) {
  const { topic } = await params;
  const data = dreamSymbols[topic as keyof typeof dreamSymbols];
  if (!data) notFound();

  const relatedLinks = data.relatedDreams.map((d) => ({
    label: `Dream about ${d}`,
    href: `/dreams/dream-about-${d}-meaning`,
  }));

  return (
    <article className="prose prose-indigo max-w-none">
      <ArticleSchema
        title={data.title}
        description={data.coreMeaning}
        datePublished="2026-05-23"
        dateModified="2026-05-23"
        url={`https://mysticcalc.com/dreams/${data.slug}`}
      />
      <FAQSchema faq={data.faq} />

      <h1>{data.title}</h1>

      <h2>What Does It Mean to Dream About {data.symbol}?</h2>
      <p>{data.coreMeaning}</p>

      <h2>Psychological Interpretation</h2>
      <p>{data.psychological}</p>

      <h2>Spiritual &amp; Cultural Meanings</h2>
      <p>{data.spiritual}</p>

      <h2>Common Scenarios</h2>
      <ul>
        {data.scenarios.map((s, i) => (
          <li key={i}>
            <strong>{s.name}:</strong> {s.meaning}
          </li>
        ))}
      </ul>

      <h2>What Should You Do?</h2>
      <p>{data.action}</p>

      <DreamSearchTool />

      <h2>Frequently Asked Questions</h2>
      {data.faq.map((item, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-base font-semibold">{item.question}</h3>
          <p className="text-sm text-gray-700">{item.answer}</p>
        </div>
      ))}

      <div className="mt-8 rounded-lg bg-indigo-50 p-4 text-sm text-indigo-800 not-prose">
        <strong>Disclaimer:</strong> This content is for entertainment purposes
        only. MysticCalc does not provide medical, legal, or financial advice.
      </div>

      <RelatedLinks links={relatedLinks} />

      <div className="mt-6 not-prose">
        <Link
          href="/dreams"
          className="text-indigo-700 hover:underline text-sm"
        >
          ← Back to all dream meanings
        </Link>
      </div>
    </article>
  );
}
