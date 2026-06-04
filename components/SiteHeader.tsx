import Link from 'next/link';
import { Receipt } from 'lucide-react';

export function SiteHeader() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:5173';
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="h-8 w-8 rounded-md bg-brand flex items-center justify-center">
            <Receipt className="h-4 w-4 text-white" />
          </span>
          EMS
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="text-slate-700 hover:text-slate-900">Product</Link>
          <Link href="/pricing" className="text-slate-700 hover:text-slate-900">Pricing</Link>
          <a
            href={`${appUrl}/login`}
            className="text-slate-700 hover:text-slate-900"
          >
            Sign in
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`${appUrl}/login`}
            className="md:hidden text-sm text-slate-700 hover:text-slate-900"
          >
            Sign in
          </a>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center px-4 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-700 transition"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
