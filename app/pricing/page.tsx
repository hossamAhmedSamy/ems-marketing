import Link from 'next/link';
import { Check } from 'lucide-react';

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

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    description: 'For testing the platform with a single branch.',
    features: [
      '1 branch',
      'Up to 3 users',
      '100 expenses / month',
      'Audit log',
      'Mobile-friendly web app',
    ],
    cta: { label: 'Start free', href: '/signup' },
  },
  {
    name: 'Pro',
    price: '$29',
    cadence: '/ month',
    description: 'For growing businesses with multiple branches.',
    features: [
      'Unlimited branches',
      'Unlimited users',
      'Unlimited expenses',
      'Promotions module',
      'AI categorization (beta)',
      'Email + Slack alerts (soon)',
      'Priority support',
    ],
    cta: { label: 'Start 14-day trial', href: '/signup?tier=Pro' },
    highlighted: true,
    note: '14-day free trial. Cancel anytime.',
  },
  {
    name: 'Ultimate',
    price: '$99',
    cadence: '/ month',
    description: 'For larger operations that need the AI assistant.',
    features: [
      'Everything in Pro',
      'AI assistant (chatbot + insights)',
      'Anomaly detection',
      'Custom reports',
      'SSO (coming soon)',
      'Dedicated onboarding',
    ],
    cta: { label: 'Talk to sales', href: '/signup?tier=Ultimate' },
  },
];

export const metadata = {
  title: 'Pricing',
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
          Start free. Upgrade when you grow. Cancel any time.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 flex flex-col ${
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

      <p className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
        Paid plan checkout via Stripe is wired in an upcoming release. For now, every signup
        provisions a Free-tier workspace with a 14-day Pro trial enabled by default.
      </p>
    </main>
  );
}
