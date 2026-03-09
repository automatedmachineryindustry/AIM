-- Run this in Supabase SQL Editor if you already have the contacts table
-- Adds the domain column for the dropdown (Web Development, AI Automation, Mobile App Development, Major Project)

alter table public.contacts
  add column if not exists domain text;
