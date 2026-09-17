import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin – your-talent.de",
  description: "Admin-Bereich für your-talent.de",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50">{children}</body>
    </html>
  );
}
