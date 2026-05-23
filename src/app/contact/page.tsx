export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the MysticCalc team. We welcome your feedback, questions, and suggestions.",
};

export default function ContactPage() {
  return (
    <div className="prose prose-purple max-w-none">
      <h1>Contact Us</h1>
      <p>
        Have a question, suggestion, or feedback? We would love to hear from
        you.
      </p>
      <h2>Email</h2>
      <p>
        You can reach us at{" "}
        <a href="mailto:hello@mysticcalc.com">hello@mysticcalc.com</a>.
      </p>
      <h2>Response Time</h2>
      <p>
        We aim to respond to all inquiries within 2-3 business days. Thank you
        for your patience.
      </p>
    </div>
  );
}
