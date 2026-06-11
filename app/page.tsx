import Link from 'next/link';
import {
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  Factory,
  HeartPulse,
  Layers,
  Pill,
  Receipt,
  ScrollText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';
import { AppPreview } from '../components/AppPreview';
import { FaqSection } from '../components/FaqSection';
import { Testimonials } from '../components/Testimonials';

const FEATURES = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: 'Multi-branch by design',
    body: 'One company, many branches. Branch-scoped visibility out of the box — managers see their branches, owners see everything.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Executive dashboards',
    body: 'Monthly trends, category and branch breakdowns, month-over-month change, end-of-month projections and anomaly alerts.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Custom roles',
    body: 'Five built-in roles plus your own — assemble a view-only CEO or an approve-everything CFO from granular permissions.',
  },
  {
    icon: <ScrollText className="h-5 w-5" />,
    title: 'Append-only audit',
    body: 'Every change is logged at the database level and can never be edited. Deleted expenses stay traceable.',
  },
  {
    icon: <Receipt className="h-5 w-5" />,
    title: 'Expenses + promotions',
    body: 'Track day-to-day spend and marketing campaigns under the same roof, tagged and categorized.',
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Mobile-first',
    body: 'Designed for the shop floor, not just the back office. Record an expense in seconds from any phone.',
  },
];

const INDUSTRIES = [
  { icon: <Store className="h-5 w-5" />, name: 'Retail chains', body: 'Compare stores side by side and catch the branch that quietly overspends.' },
  { icon: <Factory className="h-5 w-5" />, name: 'Warehouses', body: 'Logistics, maintenance and utilities tracked per site, approved centrally.' },
  { icon: <Truck className="h-5 w-5" />, name: 'Distribution', body: 'Fleet and route costs by depot, with an audit trail for every payment.' },
  { icon: <UtensilsCrossed className="h-5 w-5" />, name: 'Restaurant groups', body: 'Per-location food cost and supplies, rolled up to one dashboard.' },
  { icon: <Pill className="h-5 w-5" />, name: 'Pharmacies', body: 'Multi-location spend with the accountability regulators expect.' },
  { icon: <HeartPulse className="h-5 w-5" />, name: 'Clinics', body: 'Supplies and operating costs per clinic, visible to the people who should see them.' },
];

const STATS = [
  { value: 'Unlimited', label: 'custom roles per workspace' },
  { value: '25', label: 'granular permissions to combine' },
  { value: '100%', label: 'of changes in the audit trail' },
  { value: '12 mo', label: 'of trend analytics built in' },
];

export default function LandingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.10),transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1">
              <Sparkles className="h-3 w-3" />
              Built for multi-branch businesses
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Know where every branch spends —{' '}
              <span className="text-brand">without chasing spreadsheets.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              EMS gives owners live dashboards, managers branch-scoped tools, and finance a
              tamper-proof audit trail. Expenses, promotions, roles and approvals in one
              mobile-first platform.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/signup"
                className="inline-flex h-11 items-center px-6 rounded-md bg-brand text-white font-medium hover:bg-brand-700 shadow-card transition"
              >
                Start your free trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center px-5 rounded-md border border-slate-200 bg-white text-slate-900 font-medium hover:bg-surface-muted transition"
              >
                See pricing
              </Link>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              No credit card required for the Free tier. 14-day trial of Pro on signup.
            </p>
          </div>
          <div className="lg:pl-4">
            <AppPreview />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-2xl font-bold text-slate-900">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-xl">
          <div className="text-xs font-semibold text-brand uppercase tracking-wide">
            Features
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            Everything a multi-branch business needs to keep finances tight.
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-card transition"
            >
              <div className="h-9 w-9 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center">
                {f.icon}
              </div>
              <div className="mt-3 font-semibold text-slate-900">{f.title}</div>
              <p className="mt-1 text-sm text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500 inline-flex items-center gap-2">
          <Bot className="h-4 w-4 text-brand" />
          Coming soon: ask the AI assistant &ldquo;what did Cairo spend last month?&rdquo; and get an answer.
        </p>
      </section>

      {/* Industries */}
      <section id="industries" className="border-t border-slate-200 bg-surface-alt scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-xl">
            <div className="text-xs font-semibold text-brand uppercase tracking-wide">
              Industries
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              If money leaves more than one location, EMS fits.
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((i) => (
              <div key={i.name} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center">
                    {i.icon}
                  </div>
                  <div className="font-semibold text-slate-900">{i.name}</div>
                </div>
                <p className="mt-2 text-sm text-slate-600">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-xl">
          <div className="text-xs font-semibold text-brand uppercase tracking-wide">
            How it works
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            From signup to first expense in under a minute.
          </h2>
        </div>
        <ol className="mt-10 grid md:grid-cols-3 gap-5">
          <Step n={1} title="Create your workspace">
            Pick a company name. We provision your tenant with a 14-day Pro trial.
          </Step>
          <Step n={2} title="Invite your team">
            Use the built-in roles or create your own. Assign managers to their branches —
            everyone sees exactly what they should.
          </Step>
          <Step n={3} title="Start tracking">
            Record expenses and promotions from any phone. Dashboards and the audit trail
            update instantly.
          </Step>
        </ol>
        <div className="mt-10 flex items-center gap-3">
          <Link
            href="/signup"
            className="inline-flex h-11 items-center px-6 rounded-md bg-brand text-white font-medium hover:bg-brand-700 transition shadow-card"
          >
            Get started — it&apos;s free
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-brand-700 hover:underline inline-flex items-center gap-1"
          >
            Compare plans
          </Link>
        </div>
      </section>

      <Testimonials />

      <FaqSection />

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="rounded-2xl bg-sidebar text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.35),transparent_60%)] pointer-events-none" />
          <div className="relative max-w-2xl">
            <Layers className="h-8 w-8 text-brand-400" />
            <h3 className="mt-3 text-2xl md:text-3xl font-bold">
              Stop juggling spreadsheets across branches.
            </h3>
            <p className="mt-2 text-slate-300">
              EMS gives every branch its own scope, every role its own permissions, and every
              spend its own paper trail.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/signup"
                className="inline-flex h-11 items-center px-6 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
              >
                Create your workspace
              </Link>
              <span className="text-xs text-slate-400 inline-flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Free tier. No credit card.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="relative">
      <div className="h-8 w-8 rounded-full bg-brand text-white flex items-center justify-center font-semibold text-sm">
        {n}
      </div>
      <div className="mt-3 font-semibold text-slate-900">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{children}</p>
    </li>
  );
}
