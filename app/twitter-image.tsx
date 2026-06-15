import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '../lib/og-image';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'EMS — Expense Management for Multi-Branch Businesses';

export default function TwitterImage() {
  return renderOgImage();
}
