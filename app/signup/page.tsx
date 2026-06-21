'use client';

import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const schema = z.object({
  companyName: z.string().trim().min(1, 'Required').max(200),
  slug: z
    .string()
    .trim()
    .toLowerCase()
    .min(2, 'At least 2 characters')
    .max(80)
    .regex(/^[a-z0-9-]+$/, 'Lowercase letters, numbers, hyphens only')
    .optional()
    .or(z.literal('')),
  fullName: z.string().trim().min(1, 'Required'),
  username: z.string().trim().min(3, 'At least 3 characters').max(80),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'At least 8 characters').max(200),
});

type FormValues = z.infer<typeof schema>;

interface SignupResponse {
  companyId: string;
  slug: string;
  ceoUserId: string;
  handoffToken: string;
  handoffExpiresAt: string;
}

interface ErrorResponse {
  error: { code: string; message: string };
}

export default function SignupPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:5173';

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const [done, setDone] = useState(false);

  // Live workspace-slug availability against the backend, debounced.
  const slug = watch('slug');
  const [slugStatus, setSlugStatus] = useState<
    { state: 'idle' | 'checking' | 'available' } | { state: 'unavailable'; reason: string }
  >({ state: 'idle' });

  useEffect(() => {
    const s = (slug ?? '').trim().toLowerCase();
    if (!s) {
      setSlugStatus({ state: 'idle' });
      return;
    }
    if (s.length < 2 || !/^[a-z0-9-]+$/.test(s)) {
      setSlugStatus({ state: 'unavailable', reason: 'invalid_format' });
      return;
    }
    setSlugStatus({ state: 'checking' });
    const ctrl = new AbortController();
    const id = setTimeout(async () => {
      try {
        const res = await fetch(`${apiUrl}/public/slug/check?slug=${encodeURIComponent(s)}`, {
          signal: ctrl.signal,
        });
        const data = (await res.json()) as { available: boolean; reason?: string };
        setSlugStatus(
          data.available
            ? { state: 'available' }
            : { state: 'unavailable', reason: data.reason ?? 'taken' },
        );
      } catch {
        // aborted (newer keystroke) or offline — leave the last state.
      }
    }, 400);
    return () => {
      clearTimeout(id);
      ctrl.abort();
    };
  }, [slug, apiUrl]);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    const body = {
      companyName: values.companyName,
      ...(values.slug ? { slug: values.slug } : {}),
      ceo: {
        fullName: values.fullName,
        username: values.username,
        email: values.email,
        password: values.password,
      },
    };
    try {
      const res = await fetch(`${apiUrl}/public/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const text = await res.text();
      const parsed = text ? JSON.parse(text) : {};
      if (!res.ok) {
        const message = (parsed as ErrorResponse).error?.message ?? `HTTP ${res.status}`;
        setError('root', { message });
        return;
      }
      const data = parsed as SignupResponse;
      setDone(true);
      window.location.href = `${appUrl}/auth/handoff?token=${encodeURIComponent(data.handoffToken)}`;
    } catch {
      setError('root', { message: 'Could not reach the server. Check your connection.' });
    }
  };

  if (done) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="rounded-xl border border-slate-200 bg-white p-8 max-w-md w-full text-center shadow-card">
          <Loader2 className="h-6 w-6 animate-spin text-brand mx-auto" />
          <h2 className="mt-4 font-semibold text-slate-900">Creating your workspace…</h2>
          <p className="mt-1 text-sm text-slate-500">Redirecting to your new EMS workspace.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Create your workspace</h1>
        <p className="mt-2 text-slate-600">
          Free tier with a 14-day Pro trial. You'll be your company's CEO account.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-card space-y-6"
      >
        <Section title="Company">
          <Field label="Company name" error={errors.companyName?.message}>
            <Input placeholder="Acme Co" autoFocus {...register('companyName')} />
          </Field>
          <Field label="Workspace slug (optional)" error={errors.slug?.message}>
            <Input placeholder="acme" {...register('slug')} />
            {slugStatus.state === 'idle' && (
              <p className="text-xs text-slate-500">
                We'll auto-generate one from your company name if you leave this blank.
              </p>
            )}
            {slugStatus.state === 'checking' && (
              <p className="text-xs text-slate-400">Checking availability…</p>
            )}
            {slugStatus.state === 'available' && (
              <p className="text-xs text-emerald-600">
                “{(slug ?? '').trim().toLowerCase()}” is available.
              </p>
            )}
            {slugStatus.state === 'unavailable' && (
              <p className="text-xs text-amber-600">{slugReason(slugStatus.reason)}</p>
            )}
          </Field>
        </Section>

        <Section title="Your CEO account">
          <Field label="Full name" error={errors.fullName?.message}>
            <Input autoComplete="name" {...register('fullName')} />
          </Field>
          <Field label="Username" error={errors.username?.message}>
            <Input autoComplete="username" {...register('username')} />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <Input type="email" autoComplete="email" {...register('email')} />
          </Field>
          <Field label="Password" error={errors.password?.message}>
            <Input type="password" autoComplete="new-password" {...register('password')} />
          </Field>
        </Section>

        {errors.root && (
          <div className="rounded-md bg-rose-50 border border-rose-200 px-3 py-2 text-sm text-rose-700">
            {errors.root.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 rounded-md bg-brand text-white font-medium hover:bg-brand-700 shadow-card transition flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          Create my workspace
        </button>

        <p className="text-xs text-slate-500 text-center">
          By signing up you agree to our terms and acknowledge our privacy notice. Already have an
          account?{' '}
          <a href={`${appUrl}/login`} className="text-brand-700 hover:underline">
            Sign in
          </a>
          .
        </p>

        <p className="text-[11px] text-center text-slate-400">
          Want to compare plans first?{' '}
          <Link href="/pricing" className="hover:underline">
            See pricing
          </Link>
        </p>
      </form>
    </main>
  );
}

function slugReason(reason: string): string {
  if (reason === 'invalid_format')
    return 'Use lowercase letters, numbers and hyphens (2+ characters).';
  if (reason === 'reserved') return 'That workspace name is reserved — pick another.';
  return 'That workspace name is already taken — pick another.';
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
        {title}
      </legend>
      <div className="grid sm:grid-cols-2 gap-3">{children}</div>
    </fieldset>
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
