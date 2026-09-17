-- Vacancies + applications schema, with row-level security so the
-- public can browse published vacancies and submit applications, while
-- only an authenticated admin can manage vacancies or read applications.

create extension if not exists pgcrypto;

create table public.vacancies (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  requirements text,
  location text,
  employment_type text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.applications (
  id uuid primary key default gen_random_uuid(),
  vacancy_id uuid not null references public.vacancies(id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  message text,
  cv_path text,
  consent_given boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.vacancies enable row level security;
alter table public.applications enable row level security;

create policy "public can view published vacancies"
  on public.vacancies for select
  using (is_published = true);

create policy "authenticated can manage vacancies"
  on public.vacancies for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "anyone can submit an application"
  on public.applications for insert
  with check (true);

create policy "authenticated can view applications"
  on public.applications for select
  using (auth.role() = 'authenticated');

create policy "authenticated can manage applications"
  on public.applications for update using (auth.role() = 'authenticated');

create policy "authenticated can delete applications"
  on public.applications for delete using (auth.role() = 'authenticated');

insert into storage.buckets (id, name, public)
values ('cvs', 'cvs', false)
on conflict (id) do nothing;

create policy "anyone can upload a cv"
  on storage.objects for insert
  with check (bucket_id = 'cvs');

create policy "authenticated can read cvs"
  on storage.objects for select
  using (bucket_id = 'cvs' and auth.role() = 'authenticated');
