#!/usr/bin/env python3
"""Generate page.tsx files for new feng shui pages."""
import os

BASE = "/Users/kevin/.local/openclaw/agents/ceo/workspace/projects/seo-tool-sites/mysticcalc/src/app/feng-shui"

slugs = ["kitchen", "front-door", "office", "plants", "mirror"]

TEMPLATE = '''import Link from "next/link";
import fengShuiData from "@/data/feng-shui.json";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";
import type {{ Metadata }} from "next";

const data = fengShuiData.{key};

export const metadata: Metadata = {{
  title: data.title,
  description: data.metaDescription,
  keywords: data.faq.map((f) => f.question),
  openGraph: {{
    title: data.title,
    description: data.metaDescription,
    url: "https://mysticcalc.com/feng-shui/{slug}",
  }},
}};

export default function FengShui{funcName}Page() {{
  return (
    <article className="prose prose-purple max-w-none">
      <ArticleSchema
        title={{data.title}}
        description={{data.metaDescription}}
        datePublished="2026-05-24"
        dateModified="2026-05-24"
        url="https://mysticcalc.com/feng-shui/{slug}"
      />
      <FAQSchema faq={{data.faq}} />

      <h1>{{data.h1}}</h1>
      <p>{{data.content}}</p>

      <h2>Key Tips</h2>
      <ul>
        {{data.tips.map((tip, i) => (
          <li key={{i}}>{{tip}}</li>
        ))}}
      </ul>

      <h2>Best Colors</h2>
      <div className="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 my-6">
        {{data.colors.map((color) => (
          <div key={{color.hex}} className="text-center">
            <div
              className="w-16 h-16 rounded-full mx-auto border border-gray-200"
              style={{{{ backgroundColor: color.hex }}}}
            />
            <p className="text-sm font-semibold mt-2">{{color.name}}</p>
            <p className="text-xs text-gray-500">{{color.hex}}</p>
            <p className="text-xs text-gray-600 mt-1">{{color.meaning}}</p>
          </div>
        ))}}
      </div>

      <h2>Frequently Asked Questions</h2>
      {{data.faq.map((item, i) => (
        <div key={{i}} className="mb-4">
          <h3 className="text-base font-semibold">{{item.question}}</h3>
          <p className="text-sm text-gray-700">{{item.answer}}</p>
        </div>
      ))}}

      <div className="mt-8 rounded-lg bg-purple-50 p-4 text-sm text-purple-800 not-prose">
        <strong>Disclaimer:</strong> This content is for entertainment purposes
        only. MysticCalc does not provide medical, legal, or financial advice.
      </div>

      <RelatedLinks links={{data.relatedPages}} />

      <div className="mt-6 not-prose">
        <Link
          href="/feng-shui"
          className="text-purple-700 hover:underline text-sm"
        >
          ← Back to Feng Shui
        </Link>
      </div>
    </article>
  );
}}
'''

for slug in slugs:
    # Derive key and function name
    key = slug.replace("-", "_") if slug == "front-door" else slug
    if slug == "front-door":
        key = "front-door"  # JSON key uses hyphen
    func_name = slug.replace("-", " ").title().replace(" ", "")
    
    page_dir = os.path.join(BASE, slug)
    os.makedirs(page_dir, exist_ok=True)
    
    content = TEMPLATE.format(
        key=key,
        slug=slug,
        func_name=func_name,
    )
    
    page_file = os.path.join(page_dir, "page.tsx")
    with open(page_file, 'w') as f:
        f.write(content)
    print(f"  Created {slug}/page.tsx")

print(f"\nDone. Created {len(slugs)} page.tsx files.")
