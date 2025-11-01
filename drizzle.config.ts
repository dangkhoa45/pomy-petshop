// Explicitly load environment variables for CLI runs (drizzle-kit doesn't read Next.js .env.local by default)
import { config as loadEnv } from "dotenv";
// Load base .env if present, then override with .env.local to match Next.js local dev behavior
loadEnv({ path: ".env" });
loadEnv({ path: ".env.local", override: true });

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    // Use DIRECT_URL for migrations to avoid pgbouncer issues
    url: process.env.DIRECT_URL || process.env.DATABASE_URL || "",
  },
  verbose: true,
  strict: true,
});
