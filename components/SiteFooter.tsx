import Link from 'next/link';
import { APP_URL, CONTACT_EMAIL } from '../lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-surface-alt mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="h-7 w-7 rounded-md bg-brand flex items-center justify-center">
              <img src="/ems-mark-white.svg" alt="" className="h-4 w-4" />
            </span>
            EMS
          </div>
          <p className="text-slate-500 mt-2 max-w-sm">
            Expense management for multi-branch and warehouse businesses. Custom roles,
            executive dashboards, and a tamper-proof audit trail — mobile-first.
          </p>
        </div>
        <div>
          <div className="font-medium text-slate-900">Product</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><Link href="/#features" className="hover:text-slate-900">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-slate-900">Pricing</Link></li>
            <li><Link href="/mcp" className="hover:text-slate-900">Connect your AI agent</Link></li>
            <li><Link href="/signup" className="hover:text-slate-900">Start free</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-slate-900">Company</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><Link href="/about" className="hover:text-slate-900">About</Link></li>
            <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-900">
                Email us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-slate-900">Account</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>
              <a href={`${APP_URL}/login`} className="hover:text-slate-900">
                Sign in
              </a>
            </li>
            <li>
              <Link href="/signup" className="hover:text-slate-900">
                Create workspace
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 text-xs text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} EMS</span>
          <span className="inline-flex items-center gap-3">
            <Link href="/about" className="hover:text-slate-700">About</Link>
            <Link href="/contact" className="hover:text-slate-700">Contact</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
