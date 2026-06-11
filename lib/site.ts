// Single source of truth for site-wide constants used by metadata, JSON-LD,
// sitemap and the UI.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ems-marketing-rho.vercel.app';

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:5173';

export const SITE_NAME = 'EMS';

export const SITE_TITLE = 'EMS — Expense Management for Multi-Branch Businesses';

export const SITE_DESCRIPTION =
  'Track expenses, promotions and budgets across all your branches. Custom roles, append-only audit, executive dashboards. Built mobile-first for warehouse and retail businesses.';

export const CONTACT_EMAIL = 'hossamahmed107@gmail.com';
