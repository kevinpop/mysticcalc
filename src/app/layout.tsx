import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mysticcalc.com"),
  title: {
    default: "MysticCalc — Angel Numbers, Dream Meanings & Spiritual Tools",
    template: "%s | MysticCalc",
  },
  description:
    "Free angel number calculator, dream dictionary, and spiritual tools. Discover the meaning of 444, 555, 777, and more. Decode your dreams and find your path.",
  verification: {
    google: "4iB5jWO1Sy1iwiy-grj-0v7yvDOZnpSz19kD5_PqILg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mysticcalc.com",
    siteName: "MysticCalc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1DYLB5N2SZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1DYLB5N2SZ');
        `}
      </Script>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <header className="border-b border-gray-100">
          <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-purple-800">
              MysticCalc
            </a>
            <nav className="flex gap-4 text-sm text-gray-600">
              <a href="/angel-numbers" className="hover:text-purple-700">
                Angel Numbers
              </a>
              <a href="/dreams" className="hover:text-purple-700">
                Dreams
              </a>
              <a href="/crystals" className="hover:text-purple-700">
                Crystals
              </a>
              <a href="/tools/numerology-calculator" className="hover:text-purple-700">
                Numerology
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
        <footer className="border-t border-gray-100 mt-16">
          <div className="mx-auto max-w-4xl px-4 py-8 text-sm text-gray-500">
            <p className="mb-2">
              <strong>Disclaimer:</strong> This content is for entertainment
              purposes only. MysticCalc does not provide medical, legal, or
              financial advice.
            </p>
            <div className="flex gap-4">
              <a href="/about" className="hover:text-purple-700">
                About
              </a>
              <a href="/contact" className="hover:text-purple-700">
                Contact
              </a>
              <a href="/privacy-policy" className="hover:text-purple-700">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-purple-700">
                Terms of Service
              </a>
            </div>
            <p className="mt-4">
              © {new Date().getFullYear()} MysticCalc. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
