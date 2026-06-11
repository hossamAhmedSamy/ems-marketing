import { Quote } from 'lucide-react';

// PLACEHOLDER CONTENT — these are illustrative quotes from the early-access
// program, deliberately without names or company logos. Replace with real,
// attributed testimonials (with permission) before using this section as a
// trust signal in ads or sales conversations.
const TESTIMONIALS = [
  {
    quote:
      'I used to wait for end-of-month Excel sheets from every branch. Now I open the dashboard and see today’s numbers across all six locations.',
    who: 'Owner, retail chain',
    detail: 'Early access program',
  },
  {
    quote:
      'The audit log ended the "who changed this number?" conversations. Everything has a name and a timestamp on it.',
    who: 'Finance lead, distribution company',
    detail: 'Early access program',
  },
  {
    quote:
      'Branch managers record expenses from their phones the moment they happen — we stopped losing receipts entirely.',
    who: 'Operations director, warehouse group',
    detail: 'Early access program',
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-slate-200 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-xl">
          <div className="text-xs font-semibold text-brand uppercase tracking-wide">
            Early access
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            What multi-branch teams say.
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.who}
              className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col"
            >
              <Quote className="h-5 w-5 text-brand-300" />
              <blockquote className="mt-3 text-sm text-slate-700 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <div className="text-sm font-medium text-slate-900">{t.who}</div>
                <div className="text-xs text-slate-500">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
