import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-surface-alt mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2">
          <div className="font-semibold text-slate-900">EMS</div>
          <p className="text-slate-500 mt-2 max-w-sm">
            Expense management for multi-branch and warehouse businesses. Built mobile-first
            with an AI assistant for natural-language reporting.
          </p>
        </div>
        <div>
          <div className="font-medium text-slate-900">Product</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><Link href="/" className="hover:text-slate-900">Overview</Link></li>
            <li><Link href="/pricing" className="hover:text-slate-900">Pricing</Link></li>
            <li><Link href="/signup" className="hover:text-slate-900">Start free</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-slate-900">Account</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:5173'}/login`}
                className="hover:text-slate-900"
              >
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 text-xs text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} EMS</span>
          <span>v0.2.0</span>
        </div>
      </div>
    </footer>
  );
}
