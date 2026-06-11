import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageSquare, Rocket } from 'lucide-react';
import { CONTACT_EMAIL } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the EMS team — questions, feedback, or a guided walkthrough.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20">
      <div className="text-xs font-semibold text-brand uppercase tracking-wide">Contact</div>
      <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
        Talk to a human.
      </h1>
      <p className="mt-4 text-slate-600 max-w-2xl">
        Questions about plans, a feature you need, or just want a walkthrough before
        inviting your team? Email us — we read everything and usually reply within a
        business day.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-5">
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=EMS%20question`}
          className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-card transition block"
        >
          <div className="h-9 w-9 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center">
            <Mail className="h-5 w-5" />
          </div>
          <div className="mt-3 font-semibold text-slate-900">General questions</div>
          <p className="mt-1 text-sm text-slate-600">
            Plans, billing, security — anything.
          </p>
          <div className="mt-3 text-sm text-brand-700 break-all">{CONTACT_EMAIL}</div>
        </a>

        <a
          href={`mailto:${CONTACT_EMAIL}?subject=EMS%20feedback`}
          className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-card transition block"
        >
          <div className="h-9 w-9 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div className="mt-3 font-semibold text-slate-900">Feedback</div>
          <p className="mt-1 text-sm text-slate-600">
            Found something rough? A feature you miss? Early feedback shapes the roadmap.
          </p>
        </a>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="h-9 w-9 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="mt-3 font-semibold text-slate-900">Just want to try it?</div>
          <p className="mt-1 text-sm text-slate-600">
            No call needed — the Free tier takes a minute to set up.
          </p>
          <Link
            href="/signup"
            className="mt-3 inline-flex h-9 items-center px-4 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-700 transition"
          >
            Create workspace
          </Link>
        </div>
      </div>
    </main>
  );
}
