import Link from "next/link";
import Script from "next/script";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0">
        <img
          src="/img/IMG_2987.JPG"
          alt="Contact background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <Link href="/" className="text-sm text-cyan-300 transition hover:text-white">
          ← Home
        </Link>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white">Contact Cascade Dynamics</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Sign up for one of our newsletters below to stay up to date on the latest news and updates.
        </p>

        <Script
          src="https://js-na2.hsforms.net/forms/embed/247836954.js"
          strategy="afterInteractive"
        />
        <div
          className="hs-form-frame mt-10"
          data-region="na2"
          data-form-id="76c0a241-b68e-4444-83c4-c7c6b25079c5"
          data-portal-id="247836954"
        />
      </div>
    </main>
  );
}
