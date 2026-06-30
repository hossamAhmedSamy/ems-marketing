import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TITLE } from './site';

// Shared 1200x630 social share card, reused by the Open Graph and Twitter
// file-based conventions so every route gets a branded preview image.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const BRAND = '#4F46E5'; // Indigo 600
const SLATE_900 = '#0F172A'; // Sidebar slate

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: SLATE_900,
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '16px',
              background: BRAND,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* EMS brand mark — circle with a rising chart arrow. */}
            <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
              <g
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="24" cy="24" r="18.4" />
                <path d="M12.6 29 L19.4 21.6 L25.8 25.9 L33.4 16.2" />
                <path d="M27.8 16.2 L33.4 16.2 L33.4 21.8" />
              </g>
            </svg>
          </div>
          <div style={{ color: 'white', fontSize: '34px', fontWeight: 600 }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              color: 'white',
              fontSize: '64px',
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            {SITE_TITLE}
          </div>
          <div style={{ color: '#94A3B8', fontSize: '30px', maxWidth: '880px' }}>
            Custom roles · append-only audit · executive dashboards
          </div>
        </div>

        <div style={{ display: 'flex', height: '12px', width: '100%' }}>
          <div style={{ flex: 1, background: BRAND }} />
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
