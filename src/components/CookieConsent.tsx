"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import { useCookieConsent, setCookieConsent } from "@/lib/cookieConsent";

export function CookieConsent({ dict }: { dict: Dictionary["cookieConsent"] }) {
  const consent = useCookieConsent();
  const [forceOpen, setForceOpen] = useState(false);

  useEffect(() => {
    function handleOpenPreferences() {
      setForceOpen(true);
    }
    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () =>
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  const visible = forceOpen || consent === null;
  if (!visible) return null;

  function choose(status: "accepted" | "declined") {
    setCookieConsent(status);
    setForceOpen(false);
  }

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
