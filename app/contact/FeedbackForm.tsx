'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2 } from 'lucide-react';

const schema = z.object({
  type: z.enum(['feedback', 'bug', 'support', 'billing']),
  subject: z.string().trim().min(1, 'Required').max(200),
  body: z.string().trim().min(1, 'Required').max(5000),
  contactInfo: z.string().trim().max(200).optional(),
  // Honeypot — must stay empty.
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export default function FeedbackForm() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { type: 'feedback' } });
  const [done, setDone] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      const res = await fetch(`${apiUrl}/public/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: values.type,
          subject: values.subject,
          body: values.body,
          contactInfo: values.contactInfo || undefined,
          website: values.website || undefined,
          pageUrl: '/contact',
        }),
      });
      if (!res.ok && res.status !== 429) {
        const text = await res.text();
        const parsed = text ? JSON.parse(text) : {};
        setError('root', { message: parsed?.error?.message ?? `HTTP ${res.status}` });
        return;
      }
      if (res.status === 429) {
        setError('root', { message: 'Too many submissions — please try again later.' });
        return;
      }
      setDone(true);
    } catch {
      setError('root', { message: 'Could not reach the server. Check your connection.' });
    }
  };

  if (done) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="h-8 w-8 text-emerald-500 mx-auto" />
        <h3 className="mt-3 font-semibold text-slate-900">Thanks — we got it!</h3>
        <p className="mt-1 text-sm text-slate-500">
          Your message reached our team. If you left contact info, we'll follow up.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-card space-y-5"
    >
      {/* Honeypot: off-screen, not announced to users. */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0"
        {...register('website')}
      />

      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="What's this about?">
          <select
            {...register('type')}
            className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand/20"
          >
            <option value="feedback">Feedback / idea</option>
            <option value="bug">Bug report</option>
            <option value="support">Support question</option>
            <option value="billing">Sales / billing</option>
          </select>
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <Input placeholder="Short summary" {...register('subject')} />
        </Field>
      </div>

      <Field label="Message" error={errors.body?.message}>
        <textarea
          rows={5}
          placeholder="Tell us what's on your mind…"
          {...register('body')}
          className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand/20"
        />
      </Field>

      <Field
        label="Email or WhatsApp/phone (optional)"
        hint="Leave a way to reach you and we'll follow up."
        error={errors.contactInfo?.message}
      >
        <Input placeholder="you@example.com or +20…" {...register('contactInfo')} />
      </Field>

      {errors.root && (
        <div className="rounded-md bg-rose-50 border border-rose-200 px-3 py-2 text-sm text-rose-700">
          {errors.root.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-11 px-6 rounded-md bg-brand text-white font-medium hover:bg-brand-700 shadow-card transition inline-flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Send message
      </button>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      {children}
      {error ? (
        <p className="text-xs text-rose-600">{error}</p>
      ) : hint ? (
        <p className="text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}
