import Link from 'next/link';
import {
  Bot,
  Building2,
  CheckCircle2,
  Layers,
  Receipt,
  ScrollText,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';

const FEATURES = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: 'Multi-branch by design',
    body: 'One company, many branches. Branch-scoped permissions out of the box.',
  },
  {
    icon: <Receipt className="h-5 w-5" />,
    title: 'Expenses + promotions',
    body: 'Track day-to-day spend and marketing campaigns under the same roof.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Real roles',
    body: 'CEO, Admin, Branch Manager, Data Entry and Finance. Each sees what they should.',
  },
  {
    icon: <ScrollText className="h-5 w-5" />,
    title: 'Append-only audit',
    body: 'Every change is logged at the database level. Tamper-proof for compliance.',
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: 'AI assistant',
    body: '"What did Cairo spend last month?" — natural language reporting, coming soon.',
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Mobile-first',
    body: 'Capture receipts from your phone camera. Works offline. Installable.',
  },
];

export default function LandingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.10),transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1">
              <Sparkles className="h-3 w-3" />
              Built for multi-branch businesses
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Expense management that scales{' '}
              <span className="text-brand">across every branch.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              EMS replaces spreadsheets and ad-hoc receipt apps with a real multi-tenant
              platform. Branches, expenses, promotions, audit, billing — all in one place.
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
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
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
      </section>

      {/* How it works */}
      <section className="border-t border-slate-200 bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
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
              Add admins, branch managers, data-entry and finance roles. Branch-scoped
              permissions are built in.
            </Step>
            <Step n={3} title="Start tracking">
              Record expenses and promotions. Approve, reject, audit. AI assistant
              available soon.
            </Step>
          </ol>
          <div className="mt-10 flex items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex h-11 items-center px-6 rounded-md bg-brand text-white font-medium hover:bg-brand-700 transition shadow-card"
            >
              Get started — it's free
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-brand-700 hover:underline inline-flex items-center gap-1"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

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
