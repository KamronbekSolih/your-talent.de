"use client";

export function CookiePreferencesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
      className="hover:text-zinc-900"
    >
      {label}
    </button>
  );
}
