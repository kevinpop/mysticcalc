import { notFound } from "next/navigation";
import Link from "next/link";
import angelNumbers from "@/data/angel-numbers.json";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSchema from "@/components/FAQSchema";
import AngelNumberCalculator from "@/components/AngelNumberCalculator";
import RelatedLinks from "@/components/RelatedLinks";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ number: string }> };

export async function generateStaticParams() {
  return Object.keys(angelNumbers).map((number) => ({ number }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { number } = await params;
  const data = angelNumbers[number as keyof typeof angelNumbers];
  if (!data) return {};
  return {
    title: `${data.number} Angel Number Meaning — Love, Career & Spiritual`,
    description: `Discover what ${data.number} angel number means for love, career, and spiritual growth. Learn why you keep seeing ${data.number} and what your angels are telling you.`,
    keywords: data.faq.map((f) => f.question),
    openGraph: {
      title: `${data.number} Angel Number Meaning`,
      description: data.coreMeaning,
      url: `https://mysticcalc.com/angel-numbers/${data.slug}`,
    },
  };
}

export default async function AngelNumberPage({ params }: PageProps) {
  const { number } = await params;
  const data = angelNumbers[number as keyof typeof angelNumbers];
  if (!data) notFound();

  const relatedLinks = data.relatedNumbers.map((n) => ({
    label: `${n} Angel Number`,
    href: `/angel-numbers/${n}-meaning`,
  }));

  return (
    <article className="prose prose-purple max-w-none">
      <ArticleSchema
        title={`${data.number} Angel Number Meaning — Love, Career & Spiritual`}
        description={data.coreMeaning}
        datePublished="2026-05-23"
        dateModified="2026-05-23"
        url={`https://mysticcalc.com/angel-numbers/${data.slug}`}
      />
      <FAQSchema faq={data.faq} />

      <h1>
        {data.number} Angel Number Meaning — Love, Career &amp; Spiritual
      </h1>

      <h2>What Does {data.number} Angel Number Mean?</h2>
      <p>{data.coreMeaning}</p>

      <h2>{data.number} in Love &amp; Relationships</h2>
      <p>{data.love}</p>

      <h2>{data.number} in Career &amp; Money</h2>
      <p>{data.career}</p>

      <h2>{data.number} Twin Flame Meaning</h2>
      <p>{data.twinFlame}</p>

      <h2>{data.number} in Numerology</h2>
      <p>{data.numerology}</p>

      <h2>Why Do I Keep Seeing {data.number}?</h2>
      <p>{data.whySeeing}</p>

      <h2>What To Do When You See {data.number}</h2>
      <p>{data.whatToDo}</p>

      <AngelNumberCalculator />

      <h2>Frequently Asked Questions</h2>
      {data.faq.map((item, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-base font-semibold">{item.question}</h3>
          <p className="text-sm text-gray-700">{item.answer}</p>
        </div>
      ))}

      <div className="mt-8 rounded-lg bg-purple-50 p-4 text-sm text-purple-800 not-prose">
        <strong>Disclaimer:</strong> This content is for entertainment purposes
        only. MysticCalc does not provide medical, legal, or financial advice.
      </div>

      <RelatedLinks links={relatedLinks} />

      <div className="mt-6 not-prose">
        <Link
          href="/angel-numbers"
          className="text-purple-700 hover:underline text-sm"
        >
          ← Back to all angel numbers
        </Link>
      </div>
    </article>
  );
}
