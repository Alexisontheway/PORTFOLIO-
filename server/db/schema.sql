-- Portfolio Database Schema
-- Run this against your PostgreSQL database (Neon, Supabase, or local)

CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fetching recent messages
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
