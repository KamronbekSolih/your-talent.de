"use client";

import { useSyncExternalStore } from "react";

export const COOKIE_CONSENT_KEY = "cookie-consent";
const CONSENT_CHANGED_EVENT = "cookie-consent-changed";

export type ConsentStatus = "accepted" | "declined" | null;

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_CHANGED_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): ConsentStatus {
  return localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
}

function getServerSnapshot(): ConsentStatus {
  return null;
}

export function useCookieConsent(): ConsentStatus {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setCookieConsent(status: "accepted" | "declined") {
  localStorage.setItem(COOKIE_CONSENT_KEY, status);
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
}
