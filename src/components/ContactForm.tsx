"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { localeHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function ContactForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["contact"];
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const consent = formData.get("consent") === "on";

    if (!consent) {
      setStatus("error");
      setError(dict.errorConsent);
      return;
    }

    const supabase = createClient();
    const { error: insertError } = await supabase
      .from("contact_messages")
      .insert({ name, email, message });

    if (insertError) {
      setStatus("error");
      setError(dict.errorSubmit);
      return;
    }

    setStatus("done");
    form.reset();
  }

  if (status === "done") {
    return (
      <p className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
        {dict.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700">
          {dict.formName}
        </label>
        <input
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700">
          {dict.formEmail}
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700">
          {dict.formMessage}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>
      <label className="flex items-start gap-2 text-sm text-zinc-600">
        <input name="consent" type="checkbox" className="mt-1" />
        <span>
          {dict.consentPrefix}{" "}
          <a
            href={localeHref(locale, "/datenschutz")}
            target="_blank"
            className="underline"
          >
            {dict.consentLink}
          </a>{" "}
          {dict.consentSuffix}
        </span>
      </label>

      {status === "error" && error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600 disabled:opacity-50"
      >
        {status === "submitting" ? dict.submitting : dict.submit}
      </button>
    </form>
  );
}
