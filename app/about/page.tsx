import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Eye, ShieldCheck, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why EMS exists: multi-branch businesses deserve to know where their money goes without chasing spreadsheets.',
  alternates: { canonical: '/about' },
};

const PRINCIPLES = [
  {
    icon: <Eye className="h-5 w-5" />,
    title: 'Visibility first',
    body: 'The owner of a six-branch business should know today’s numbers today — not after someone consolidates spreadsheets at month end.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Accountability by default',
    body: 'Every change carries a name and a timestamp, forever. Trust between owners, finance and branches is built on records nobody can quietly edit.',
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: 'Branches are real boundaries',
    body: 'Branch managers run their world without seeing everyone else’s. Permissions follow how the business actually works.',
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'The phone is the office',
    body: 'Expenses happen on the shop floor, in the warehouse, on the road. EMS is built mobile-first because that’s where the spending is.',
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20">
      <div className="text-xs font-semibold text-brand uppercase tracking-wide">About</div>
      <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
        Built for businesses that outgrew the spreadsheet.
      </h1>
      <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
        <p>
          EMS started with a simple observation: the moment a business opens its second
          branch, expense tracking breaks. Receipts pile up in WhatsApp photos, every
          location keeps its own Excel sheet, and the owner finds out about overspending
          weeks after it happened.
        </p>
        <p>
          We&apos;re building the tool we wished those businesses had — one place where every
          branch records its spending, every role sees exactly what it should, and every
          change leaves a permanent trail. Not an accounting suite that needs a consultant
          to set up; a focused operations tool a team can adopt in an afternoon.
        </p>
        <p>
          The long-term vision goes beyond expense tracking: a business operations and
          financial visibility platform that tells owners where money goes, which branches
          perform, and what next month will probably look like.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="h-9 w-9 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center">
              {p.icon}
            </div>
            <div className="mt-3 font-semibold text-slate-900">{p.title}</div>
            <p className="mt-1 text-sm text-slate-600">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-surface-alt p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-slate-900">Want to talk?</div>
          <p className="text-sm text-slate-600 mt-1">
            We work closely with early customers — feedback shapes the roadmap directly.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-10 items-center px-5 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-700 transition flex-shrink-0"
        >
          Contact us
        </Link>
      </div>
    </main>
  );
}
