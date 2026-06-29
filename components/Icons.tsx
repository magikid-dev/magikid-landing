import type { ReactNode } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const line: Record<string, ReactNode> = {
  heritage: (
    <svg {...base}>
      <path d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M14 3v5h5" />
      <path d="M8 13h8M8 17h6" />
    </svg>
  ),
  script: (
    <svg {...base}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  illustration: (
    <svg {...base}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="1.6" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  ),
  voice: (
    <svg {...base}>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M12 17v4" />
    </svg>
  ),
  montage: (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8h18M7 4v16M17 4v16" />
    </svg>
  ),
  publish: (
    <svg {...base}>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
  globe: (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
  book: (
    <svg {...base}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </svg>
  ),
  cap: (
    <svg {...base}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
    </svg>
  ),
  broadcast: (
    <svg {...base}>
      <circle cx="12" cy="12" r="2" />
      <path d="M5 12a7 7 0 0 1 14 0" />
      <path d="M2 12a10 10 0 0 1 20 0" />
    </svg>
  ),
  building: (
    <svg {...base}>
      <path d="M3 21h18M5 21V7l7-4 7 4v14" />
      <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M10 21v-4h4v4" />
    </svg>
  ),
  handshake: (
    <svg {...base}>
      <path d="m11 17 2 2a1 1 0 0 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 0 0 3-3l-3.9-3.9a2 2 0 0 0-2.8 0l-1.6 1.6a1 1 0 0 1-1.4 0l-2.4-2.4a1 1 0 0 0-1.4 0L3 9" />
    </svg>
  ),
  tag: (
    <svg {...base}>
      <path d="M20 12 12 20l-8-8V4h8Z" />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  ),
  growth: (
    <svg {...base}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 7h4v4" />
    </svg>
  ),
  coins: (
    <svg {...base}>
      <circle cx="8" cy="8" r="5" />
      <path d="M18.1 6.6a5 5 0 0 1 0 10.7M14 18.5a5 5 0 0 1-6 0" />
    </svg>
  ),
  shield: (
    <svg {...base}>
      <path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  key: (
    <svg {...base}>
      <circle cx="7.5" cy="15.5" r="3.5" />
      <path d="m10 13 8-8M15 5l3 3M13 7l2 2" />
    </svg>
  ),
  copyright: (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5a3 3 0 1 0 0 5" />
    </svg>
  ),
};

const brand: Record<string, ReactNode> = {
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3.3v13.1a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12V10.3a6 6 0 0 0-.78-.05A5.95 5.95 0 1 0 15.7 16.2V9.3a7.5 7.5 0 0 0 4.4 1.4V7.4a4.3 4.3 0 0 1-3.5-1.6z" />
    </svg>
  ),
};

export function Icon({ name }: { name: string }) {
  return <>{line[name] ?? null}</>;
}

export function BrandIcon({ name }: { name: "youtube" | "tiktok" }) {
  return <>{brand[name]}</>;
}
