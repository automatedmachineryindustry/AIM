-- ============================================================
-- Supabase: Major Project submissions
-- ============================================================
-- The contact form already stores "Major Project" in the domain
-- column of public.contacts when users select it. No schema
-- change is required.
--
-- Use the SQL below to query or analyze Major Project leads.
-- ============================================================

-- 1) View all contact submissions where domain = 'Major Project'
select id, name, email, phone, domain, message, created_at
from public.contacts
where domain = 'Major Project'
order by created_at desc;

-- 2) Optional: create a view for easy access in Supabase Dashboard
create or replace view public.major_project_leads as
select id, name, email, phone, message, created_at
from public.contacts
where domain = 'Major Project'
order by created_at desc;

-- 3) Optional: allow service_role to read the view (RLS)
alter view public.major_project_leads set (security_invoker = false);
