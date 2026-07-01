-- Charterportaal Phase 1 auth foundation
-- Full migration from the source zip should be pasted here before production use.
-- This preview repo is Vercel-ready and shows the UI foundation first.

create type if not exists app_role as enum ('super_admin','office','planner','finance','charter');

create table if not exists public.profiles (
  id uuid primary key,
  email text,
  full_name text,
  created_at timestamptz default now()
);

create table if not exists public.roles (
  role app_role primary key,
  label text not null
);

create table if not exists public.user_roles (
  user_id uuid not null,
  role app_role not null,
  created_at timestamptz default now(),
  primary key (user_id, role)
);

alter table public.profiles enable row level security;
alter table public.roles enable row level security;
alter table public.user_roles enable row level security;

insert into public.roles (role, label) values
  ('super_admin','Super Admin'),
  ('office','Office'),
  ('planner','Planner'),
  ('finance','Finance'),
  ('charter','Charter')
on conflict (role) do nothing;
