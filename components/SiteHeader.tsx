'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Receipt, X } from 'lucide-react';
import { APP_URL } from '../lib/site';

const NAV = [
  { href: '/#features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/mcp', label: 'AI agent' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
          <a href={`${APP_URL}/login`} className="text-slate-700 hover:text-slate-900">
            Sign in
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/signup"
            className="inline-flex h-9 items-center px-4 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-700 transition"
          >
            Start free
          </Link>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-surface-muted"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-2 py-2 rounded-md text-sm text-slate-700 hover:bg-surface-muted"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`${APP_URL}/login`}
            className="block px-2 py-2 rounded-md text-sm text-slate-700 hover:bg-surface-muted"
          >
            Sign in
          </a>
        </nav>
      )}
    </header>
  );
}
