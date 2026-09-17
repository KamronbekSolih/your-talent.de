"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function ApplicationForm({ vacancyId }: { vacancyId: string }) {
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
    const fullName = String(formData.get("full_name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");
    const consent = formData.get("consent") === "on";
    const file = formData.get("cv") as File | null;

    if (!consent) {
      setStatus("error");
      setError("Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.");
      return;
    }

    const supabase = createClient();
    let cvPath: string | null = null;

    if (file && file.size > 0) {
      if (file.size > 10 * 1024 * 1024) {
        setStatus("error");
        setError("Die Datei darf maximal 10 MB groß sein.");
        return;
      }
      const path = `${vacancyId}/${crypto.randomUUID()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("cvs")
        .upload(path, file);
      if (uploadError) {
        setStatus("error");
        setError("Der Lebenslauf konnte nicht hochgeladen werden.");
        return;
      }
      cvPath = path;
    }

    const { error: insertError } = await supabase.from("applications").insert({
      vacancy_id: vacancyId,
      full_name: fullName,
      email,
      phone: phone || null,
      message: message || null,
      cv_path: cvPath,
      consent_given: consent,
    });

    if (insertError) {
      setStatus("error");
      setError("Die Bewerbung konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
      return;
    }

    setStatus("done");
    form.reset();
  }

  if (status === "done") {
    return (
      <p className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
        Vielen Dank für Ihre Bewerbung! Wir melden uns bei Ihnen.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700">
          Name *
        </label>
        <input
          name="full_name"
          type="text"
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700">
          E-Mail *
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
          Telefon
        </label>
        <input
          name="phone"
          type="tel"
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700">
          Nachricht
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700">
          Lebenslauf (PDF, max. 10 MB)
        </label>
        <input
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full text-sm"
        />
      </div>
      <label className="flex items-start gap-2 text-sm text-zinc-600">
        <input name="consent" type="checkbox" className="mt-1" />
        <span>
          Ich stimme zu, dass meine Angaben gemäß der{" "}
          <a href="/datenschutz" target="_blank" className="underline">
            Datenschutzerklärung
          </a>{" "}
          zur Bearbeitung meiner Bewerbung gespeichert und verarbeitet
          werden. *
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
        {status === "submitting" ? "Wird gesendet…" : "Bewerbung senden"}
      </button>
    </form>
  );
}
