"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function slugify(title: string) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createVacancy(formData: FormData) {
  const title = String(formData.get("title") || "");
  const description = String(formData.get("description") || "");
  const requirements = String(formData.get("requirements") || "");
  const location = String(formData.get("location") || "");
  const employmentType = String(formData.get("employment_type") || "");
  const isPublished = formData.get("is_published") === "on";

  const supabase = await createClient();
  await supabase.from("vacancies").insert({
    title,
    slug: `${slugify(title)}-${Date.now().toString(36)}`,
    description,
    requirements: requirements || null,
    location: location || null,
    employment_type: employmentType || null,
    is_published: isPublished,
  });

  revalidatePath("/admin");
  revalidatePath("/vacancies");
}

export async function togglePublish(id: string, currentlyPublished: boolean) {
  const supabase = await createClient();
  await supabase
    .from("vacancies")
    .update({ is_published: !currentlyPublished, updated_at: new Date().toISOString() })
    .eq("id", id);

  revalidatePath("/admin");
  revalidatePath("/vacancies");
}

export async function deleteVacancy(id: string) {
  const supabase = await createClient();
  await supabase.from("vacancies").delete().eq("id", id);

  revalidatePath("/admin");
  revalidatePath("/vacancies");
}
