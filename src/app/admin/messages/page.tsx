import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { ContactMessage } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  const supabase = await createClient();
  const { data: messages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })
    .returns<ContactMessage[]>();

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
      <Link href="/admin" className="text-sm text-zinc-500 hover:text-zinc-900">
        ← Zurück zum Admin-Bereich
      </Link>
      <h1 className="mt-2 mb-8 text-2xl font-semibold text-zinc-900">
        Kontaktnachrichten
      </h1>

      {!messages || messages.length === 0 ? (
        <p className="text-zinc-600">Noch keine Nachrichten eingegangen.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {messages.map((message) => (
            <li
              key={message.id}
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-zinc-900">{message.name}</p>
                <p className="text-xs text-zinc-500">
                  {new Date(message.created_at).toLocaleString("de-DE")}
                </p>
              </div>
              <p className="text-sm text-zinc-600">{message.email}</p>
              <p className="mt-2 whitespace-pre-wrap text-sm text-zinc-700">
                {message.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
