-- Emails the admin whenever a new application or contact message comes
-- in, via a Postgres trigger calling the Resend API directly (no
-- separate Edge Function needed). The API key and notification address
-- are never stored in this file or in git — they live in Supabase
-- Vault, referenced here only by name. See README "Email notifications"
-- for the two `vault.create_secret` calls that activate this.
--
-- Until those secrets exist, the trigger fires on every insert but
-- exits immediately as a no-op.

create extension if not exists pg_net with schema extensions;

create or replace function public.notify_new_submission()
returns trigger
language plpgsql
security definer
set search_path = public, vault, extensions
as $$
declare
  api_key text;
  notify_email text;
  subject text;
  html_body text;
  vacancy_title text;
begin
  select decrypted_secret into api_key
    from vault.decrypted_secrets where name = 'resend_api_key'
    order by created_at desc limit 1;
  select decrypted_secret into notify_email
    from vault.decrypted_secrets where name = 'notification_email'
    order by created_at desc limit 1;

  if api_key is null or notify_email is null then
    return new;
  end if;

  if tg_table_name = 'applications' then
    select title into vacancy_title from public.vacancies where id = new.vacancy_id;
    subject := 'Neue Bewerbung: ' || coalesce(new.full_name, '') || ' (' || coalesce(vacancy_title, 'Unbekannte Stelle') || ')';
    html_body := format(
      '<h2>Neue Bewerbung</h2><p><strong>Stelle:</strong> %s</p><p><strong>Name:</strong> %s</p><p><strong>E-Mail:</strong> %s</p><p><strong>Telefon:</strong> %s</p><p><strong>Nachricht:</strong> %s</p>',
      coalesce(vacancy_title, '-'), coalesce(new.full_name, ''), coalesce(new.email, ''), coalesce(new.phone, '-'), coalesce(new.message, '-')
    );
  elsif tg_table_name = 'contact_messages' then
    subject := 'Neue Kontaktanfrage: ' || coalesce(new.name, '');
    html_body := format(
      '<h2>Neue Kontaktanfrage</h2><p><strong>Name:</strong> %s</p><p><strong>E-Mail:</strong> %s</p><p><strong>Nachricht:</strong> %s</p>',
      coalesce(new.name, ''), coalesce(new.email, ''), coalesce(new.message, '-')
    );
  else
    return new;
  end if;

  perform net.http_post(
    url := 'https://api.resend.com/emails',
    headers := jsonb_build_object('Authorization', 'Bearer ' || api_key, 'Content-Type', 'application/json'),
    body := jsonb_build_object(
      'from', 'your-talent.de <onboarding@resend.dev>',
      'to', jsonb_build_array(notify_email),
      'subject', subject,
      'html', html_body
    )
  );

  return new;
end;
$$;

-- Not directly callable via the public API (PostgREST RPC) — only fires
-- as a trigger, which doesn't require function-level EXECUTE grants.
revoke execute on function public.notify_new_submission() from public, anon, authenticated;

drop trigger if exists notify_on_application_insert on public.applications;
create trigger notify_on_application_insert
  after insert on public.applications
  for each row execute function public.notify_new_submission();

drop trigger if exists notify_on_contact_message_insert on public.contact_messages;
create trigger notify_on_contact_message_insert
  after insert on public.contact_messages
  for each row execute function public.notify_new_submission();
