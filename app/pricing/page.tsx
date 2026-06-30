import Link from 'next/link';
import { Bot, Check, MessageSquareText, Sparkles } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  note?: string;
}

// Mirrors the backend's canonical PLAN_CATALOG (core/billing/plans.ts). Keep the
// caps and feature lists in sync with that file — it is the source of truth that
// the app actually enforces.
const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    description: 'Run EMS free — and connect your own AI agent over MCP.',
    features: [
      '2 branches',
      'Up to 5 users',
      '250 expenses / month',
      'Promotions & append-only audit log',
      'Connect your own AI agent (MCP)',
      'Import from Excel / CSV',
    ],
    cta: { label: 'Start free', href: '/signup' },
    note: 'No credit card. Free forever.',
  },
  {
    name: 'Pro',
    price: '$10',
    cadence: '/ month',
    description: 'Unlock the built-in AI assistant and unlimited everything.',
    features: [
      'Everything in Free',
      'AI assistant chatbot (chat + insights)',
      'Unlimited branches, users & expenses',
      'AI auto-categorization',
      'Custom roles & dashboards',
      'Export to Excel / CSV',
      'Priority support',
    ],
    cta: { label: 'Start free trial', href: '/signup' },
    highlighted: true,
    note: '3-day trial of the AI assistant. Free to explore during launch.',
  },
  {
    name: 'Ultimate',
    price: 'Custom',
    description: 'Tailored to your business — custom modules, your own database, dedicated support.',
    features: [
      'Everything in Pro',
      'Tailored to your workflow & database',
      'Custom features built for you',
      'Anomaly detection & custom reports',
      'Dedicated onboarding & support',
    ],
    cta: { label: 'Contact us', href: '/contact' },
    note: "We scope it together. No fixed price.",
  },
];

export const metadata = {
  title: 'Pricing',
  description:
    'Start free with your own AI agent over MCP. Upgrade to Pro for the built-in AI assistant, or contact us for a tailored Ultimate plan.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs font-semibold text-brand uppercase tracking-wide">Pricing</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Simple plans for businesses of every size.
        </h1>
        <p className="mt-3 text-slate-600">
          Start free and bring your own AI agent over MCP. Upgrade for the built-in assistant —
          cancel any time.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 items-start">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 flex flex-col h-full ${
              plan.highlighted
                ? 'border-brand-300 bg-brand-50/30 shadow-elevated relative ring-1 ring-brand-200'
                : 'border-slate-200 bg-white'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-6 inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand text-white text-xs font-medium">
                Most popular
              </div>
            )}
            <div className="font-semibold text-slate-900">{plan.name}</div>
            <div className="mt-3 flex items-baseline gap-1">
              <div className="text-3xl font-bold text-slate-900">{plan.price}</div>
              {plan.cadence && (
                <div className="text-sm text-slate-500">{plan.cadence}</div>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-brand-700 flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href={plan.cta.href}
              className={`mt-6 inline-flex h-10 items-center justify-center px-5 rounded-md font-medium text-sm transition ${
                plan.highlighted
                  ? 'bg-brand text-white hover:bg-brand-700'
                  : 'border border-slate-200 bg-white text-slate-900 hover:bg-surface-muted'
              }`}
            >
              {plan.cta.label}
            </Link>
            {plan.note && (
              <p className="mt-2 text-xs text-slate-500 text-center">{plan.note}</p>
            )}
          </div>
        ))}
      </div>

      {/* The Free hook: bring your own AI agent over MCP. */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-surface-alt p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
        <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center flex-shrink-0">
          <Bot className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-slate-900">Free includes your own AI agent</div>
          <p className="mt-1 text-sm text-slate-600 max-w-2xl">
            Connect EMS to Claude, ChatGPT or any MCP-compatible assistant and ask about your
            expenses in plain language — no extra cost. Prefer our built-in assistant? That's Pro.
          </p>
        </div>
        <Link
          href="/mcp"
          className="inline-flex h-10 items-center px-5 rounded-md border border-slate-200 bg-white text-slate-900 text-sm font-medium hover:bg-surface-muted transition flex-shrink-0"
        >
          <MessageSquareText className="h-4 w-4" /> How MCP works
        </Link>
      </div>

      {/* Custom / Enterprise — the "contact for a customized system" call-to-action. */}
      <div className="mt-6 rounded-2xl bg-sidebar text-white p-6 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.30),transparent_60%)] pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-brand-300 text-xs font-medium">
              <Sparkles className="h-4 w-4" /> Custom &amp; enterprise
            </div>
            <h2 className="mt-2 text-xl md:text-2xl font-bold">Need a customized system?</h2>
            <p className="mt-1 text-slate-300 max-w-2xl text-sm">
              We tailor EMS to your workflow, build the features you need, and can run it on your
              own database. Tell us what you're after and we'll scope it with you.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center px-6 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition flex-shrink-0"
          >
            Contact us
          </Link>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-slate-500 max-w-xl mx-auto">
        We're in launch week — every signup starts on Free instantly, and paid plans are free to
        explore while we finalize billing. No surprise charges.
      </p>
    </main>
  );
}
