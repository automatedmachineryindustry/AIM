# Supabase setup – all steps

Follow these steps to connect your contact form to Supabase and store submissions.

---

## Step 1: Create a Supabase project (if you don’t have one)

1. Go to **[supabase.com](https://supabase.com)** and sign in (or create an account).
2. Click **“New project”**.
3. Choose your **organization** (or create one).
4. Set:
   - **Name** (e.g. `aim-futureworks`)
   - **Database password** (save it somewhere safe)
   - **Region** (closest to your users)
5. Click **“Create new project”** and wait until it’s ready.

---

## Step 2: Get your API URL and anon key

1. In the Supabase dashboard, open your project.
2. In the left sidebar, click **“Project settings”** (gear icon at the bottom).
3. Click **“API”** in the left menu.
4. Copy and save:
   - **Project URL** → this is your `VITE_SUPABASE_URL`
   - **Project API keys** → **anon public** → this is your `VITE_SUPABASE_ANON_KEY`  
   (Do **not** use the `service_role` key in the frontend.)

Your `.env` in the project root should look like:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Replace with your actual URL and anon key if they’re different.

---

## Step 3: Create the `contacts` table

1. In the left sidebar, click **“SQL Editor”**.
2. Click **“New query”**.
3. Paste the SQL below and click **“Run”** (or press Ctrl+Enter).

```sql
-- Creates the contacts table for the contact form
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table public.contacts enable row level security;

-- Allow the frontend (anon key) to INSERT new rows
create policy "Allow anonymous insert"
  on public.contacts for insert
  to anon
  with check (true);

-- Allow only service role to read (you see data in Dashboard / backend)
create policy "Service role can read all"
  on public.contacts for select
  to service_role
  using (true);
```

4. You should see **“Success. No rows returned”**. The table is created.

---

## Step 4: Check the table

1. In the left sidebar, click **“Table Editor”**.
2. Open the **`contacts`** table.
3. It will be empty until the first form submission. Columns:
   - `id` – auto-generated
   - `name` – from “Your Name”
   - `email` – from “Your Email”
   - `phone` – from “Your Phone”
   - `message` – from “Tell us about your project…”
   - `created_at` – time of submission

---

## Step 5: Set env in your app

1. In your project root, open **`.env`** (create it if it doesn’t exist).
2. Add or update (use your real values from Step 2):

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-key
```

3. Save the file.
4. Restart the dev server so Vite picks up the env:
   - Stop it (Ctrl+C), then run `npm run dev` again.

---

## Step 6: Test the contact form

1. Open your app (e.g. `http://localhost:5173`).
2. Go to the **contact / “Let’s Connect”** section.
3. Fill in:
   - Your Name  
   - Your Email  
   - Your Phone  
   - Tell us about your project…
4. Click **“Send Message”**.
5. In Supabase: **Table Editor** → **`contacts`** → you should see the new row with name, email, phone, and message.

---

## Troubleshooting

| Issue | What to do |
|--------|-------------|
| “Contact form is not configured” | Check `.env` has `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` and restart `npm run dev`. |
| “Failed to send message” / permission error | Run the full SQL from Step 3 again so RLS and policies exist. |
| New rows don’t appear in Table Editor | You’re logged in as the project owner; the table uses `service_role` for SELECT, so refresh the Table Editor or re-open the `contacts` table. |
| CORS or network errors | In Supabase: **Project settings** → **API** → ensure your app’s URL is allowed if you have restrictions. |

---

## Summary

1. Create (or open) a Supabase project.  
2. Copy **Project URL** and **anon** key into `.env`.  
3. Run the SQL in **SQL Editor** to create `contacts` and RLS policies.  
4. Restart dev server and test the form.  
5. View submissions in **Table Editor** → **contacts**.
