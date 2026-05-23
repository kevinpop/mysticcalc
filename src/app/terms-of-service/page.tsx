export const metadata = {
  title: "Terms of Service",
  description: "MysticCalc terms of service — the rules and guidelines for using our website.",
};

export default function TermsOfServicePage() {
  return (
    <div className="prose prose-purple max-w-none">
      <h1>Terms of Service</h1>
      <p>
        <strong>Effective Date:</strong> May 23, 2026
      </p>
      <p>
        By accessing or using mysticcalc.com, you agree to these Terms of
        Service. If you do not agree, please do not use the site.
      </p>

      <h2>Use of Content</h2>
      <p>
        All content on MysticCalc is for entertainment and informational purposes
        only. It does not constitute medical, legal, financial, or professional
        advice.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, design, and branding on this site are the property of
        MysticCalc unless otherwise noted. You may not reproduce or distribute
        our content without permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        MysticCalc is provided &quot;as is&quot; without warranties of any kind.
        We are not liable for any damages arising from your use of the site.
      </p>

      <h2>External Links</h2>
      <p>
        Our site may contain links to third-party websites. We are not
        responsible for the content or practices of those sites.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to modify these terms at any time. Continued use of
        the site constitutes acceptance of any changes.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about these terms, contact us at{" "}
        <a href="mailto:hello@mysticcalc.com">hello@mysticcalc.com</a>.
      </p>
    </div>
  );
}
