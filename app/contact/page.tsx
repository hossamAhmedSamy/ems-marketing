import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageSquare, Rocket, Sparkles } from 'lucide-react';
import { CONTACT_EMAIL } from '../../lib/site';
import FeedbackForm from './FeedbackForm';

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

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="h-9 w-9 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div className="mt-3 font-semibold text-slate-900">Feedback</div>
          <p className="mt-1 text-sm text-slate-600">
            Found something rough? A feature you miss? Use the form below — early feedback
            shapes the roadmap.
          </p>
        </div>

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

      {/* Custom / enterprise — tailored systems built to fit. */}
      <div className="mt-10 rounded-2xl bg-sidebar text-white p-6 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.30),transparent_60%)] pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-brand-300 text-xs font-medium">
              <Sparkles className="h-4 w-4" /> Custom &amp; enterprise
            </div>
            <h2 className="mt-2 text-xl md:text-2xl font-bold">Want a customized system?</h2>
            <p className="mt-1 text-slate-300 max-w-2xl text-sm">
              We tailor EMS to your workflow, build the features you need, and can run it on your
              own database — with dedicated onboarding and support. Tell us what you're after and
              we'll scope it with you.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=EMS%20custom%20system`}
            className="inline-flex h-11 items-center px-6 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition flex-shrink-0"
          >
            Email us about a custom build
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
        <p className="mt-1 text-sm text-slate-600 max-w-2xl">
          Prefer a form? Drop it here and it lands straight in our inbox — no account needed.
        </p>
        <div className="mt-5 max-w-2xl">
          <FeedbackForm />
        </div>
      </div>
    </main>
  );
}
