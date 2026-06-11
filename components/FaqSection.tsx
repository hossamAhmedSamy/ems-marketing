import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Is there really a free plan?',
    a: 'Yes. The Free tier needs no credit card and doesn’t expire. New workspaces also get a 14-day trial of Pro so you can see the full feature set before deciding.',
  },
  {
    q: 'How do branch permissions work?',
    a: 'Every user gets a role (built-in or custom) that controls what they can do, and a branch assignment that controls what they can see. A branch manager assigned to two branches sees expenses, promotions and dashboards for those two branches only.',
  },
  {
    q: 'Can I create my own roles?',
    a: 'Yes. Besides the five built-in roles you can assemble custom ones from granular permissions — for example a view-only CEO, or a CFO who can approve and delete expenses but not manage branches. Changes apply to signed-in users immediately.',
  },
  {
    q: 'Can expenses be deleted without a trace?',
    a: 'No. Deletes are soft — the record disappears from totals but stays in the audit log, which is append-only and enforced at the database level. You always know who changed what, and when.',
  },
  {
    q: 'Does it work on phones?',
    a: 'EMS is designed mobile-first. Recording an expense from the shop floor is the primary use case, not an afterthought.',
  },
  {
    q: 'What currency does it use?',
    a: 'Each company picks one display currency (USD by default) when the workspace is created.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export function FaqSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="max-w-xl">
        <div className="text-xs font-semibold text-brand uppercase tracking-wide">FAQ</div>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          Questions owners ask us.
        </h2>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-4 items-start">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-card"
          >
            <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-medium text-slate-900">
              {f.q}
              <ChevronDown className="h-4 w-4 text-slate-400 transition group-open:rotate-180 flex-shrink-0" />
            </summary>
            <p className="mt-2 text-sm text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
