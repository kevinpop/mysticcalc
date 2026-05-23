import Link from "next/link";

export default function RelatedLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  if (!links.length) return null;
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Related Pages
      </h2>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm text-purple-800 hover:bg-purple-100 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
