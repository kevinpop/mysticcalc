import { notFound } from "next/navigation";
import Link from "next/link";
import crystals from "@/data/crystals.json";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";
import type { Metadata } from "next";

type CrystalEntry = (typeof crystals)[keyof typeof crystals];

function findBySlug(slug: string): CrystalEntry | undefined {
  return Object.values(crystals).find((c) => c.slug === slug);
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.values(crystals).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = findBySlug(slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.metaDescription,
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url: `https://mysticcalc.com/crystals/${data.slug}`,
    },
  };
}

export default async function CrystalPage({ params }: PageProps) {
  const { slug } = await params;
  const data = findBySlug(slug);
  if (!data) notFound();

  const relatedLinks = data.relatedCrystals.map((key) => {
    const crystal = (crystals as Record<string, CrystalEntry>)[key];
    if (crystal) {
      return {
        label: crystal.title.split(" — ")[0],
        href: `/crystals/${crystal.slug}`,
      };
    }
    return {
      label: key
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      href: `/crystals/${key}-meaning`,
    };
  });

  const crystalName = data.title
    .split(" — ")[0]
    .replace("Crystal Meaning", "")
    .replace("Crystal Healing Properties", "Crystal Healing")
    .replace("& Healing Properties", "")
    .replace(/&$/, "")
    .trim() || "This Crystal";

  return (
    <article className="prose prose-purple max-w-none">
      <ArticleSchema
        title={data.title}
        description={data.metaDescription}
        datePublished="2026-05-24"
        dateModified="2026-05-24"
        url={`https://mysticcalc.com/crystals/${data.slug}`}
      />
      <FAQSchema faq={data.faq} />

      <h1>{data.h1}</h1>

      <h2>What Is {crystalName}?</h2>
      <p>{data.meaning}</p>

      <h2>Healing Properties</h2>
      <ul>
        {data.properties.map((prop, i) => (
          <li key={i}>{prop}</li>
        ))}
      </ul>

      <h2>How to Use {crystalName}</h2>
      <ul>
        {data.healing.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>

      <h2>Frequently Asked Questions</h2>
      {data.faq.map((item, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-base font-semibold">{item.question}</h3>
          <p className="text-sm text-gray-700">{item.answer}</p>
        </div>
      ))}

      <div className="mt-8 rounded-lg bg-purple-50 p-4 text-sm text-purple-800 not-prose">
        <strong>Disclaimer:</strong> Crystal healing is a complementary practice and
        is not a substitute for professional medical advice. MysticCalc does not
        provide medical, legal, or financial advice.
      </div>

      <RelatedLinks links={relatedLinks} />

      <div className="mt-6 not-prose">
        <Link
          href="/"
          className="text-purple-700 hover:underline text-sm"
        >
          ← Back to MysticCalc
        </Link>
      </div>
    </article>
  );
}
