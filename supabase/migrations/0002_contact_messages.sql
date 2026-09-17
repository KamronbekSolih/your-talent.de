-- Contact form submissions: anyone can send one, only an authenticated
-- admin can read or delete them.

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "anyone can send a contact message"
  on public.contact_messages for insert
  with check (true);

create policy "authenticated can view contact messages"
  on public.contact_messages for select
  using (auth.role() = 'authenticated');

create policy "authenticated can delete contact messages"
  on public.contact_messages for delete
  using (auth.role() = 'authenticated');
