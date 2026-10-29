import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HubSpot Form Preview | Cascade Dynamics",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HubSpotFormPreviewPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-slate-100 sm:px-10">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Preview
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          HubSpot form
        </h1>
        <p className="mt-4 text-slate-300">
          Standalone preview of the embedded Cascade Dynamics form.
        </p>

        <div className="mt-10 min-h-48 rounded-2xl bg-white p-6 text-slate-900 shadow-xl shadow-black/20 sm:p-8">
          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="76c0a241-b68e-4444-83c4-c7c6b25079c5"
            data-portal-id="247836954"
          />
        </div>
      </section>

      <Script
        src="https://js-na2.hsforms.net/forms/embed/247836954.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
