"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/types";

export const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookieConsent({ dict }: { dict: Dictionary["cookieConsent"] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) setVisible(true);

    function handleOpenPreferences() {
      setVisible(true);
    }
    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () =>
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  function choose(status: "accepted" | "declined") {
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
    window.dispatchEvent(
      new CustomEvent("cookie-consent-changed", { detail: { status } })
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white px-6 py-4 shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-600">{dict.message}</p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => choose("declined")}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            {dict.decline}
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
          >
            {dict.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
