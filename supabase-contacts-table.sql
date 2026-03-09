-- Run this in your Supabase project: SQL Editor
-- Creates the contacts table for the contact form submissions

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  domain text,
  message text not null,
  created_at timestamptz default now()
);

-- Allow anonymous inserts (so the frontend can submit)
alter table public.contacts enable row level security;

create policy "Allow anonymous insert"
  on public.contacts for insert
  to anon
  with check (true);

-- Optional: only allow service role to read (you view submissions in dashboard or via API)
create policy "Service role can read all"
  on public.contacts for select
  to service_role
  using (true);
