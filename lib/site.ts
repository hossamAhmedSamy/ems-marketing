// Single source of truth for site-wide constants used by metadata, JSON-LD,
// sitemap and the UI.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ems-marketing-rho.vercel.app';

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:5173';

export const SITE_NAME = 'EMS';

export const SITE_TITLE = 'EMS — Expense Management for Multi-Branch Businesses';

// Kept under 160 chars so search engines don't truncate it; still within the
// 80–200 range that reads well as an Open Graph description.
export const SITE_DESCRIPTION =
  'Track expenses, promotions and budgets across every branch. Custom roles, append-only audit and executive dashboards — built mobile-first for retail.';

export const CONTACT_EMAIL = 'hossamahmed107@gmail.com';
