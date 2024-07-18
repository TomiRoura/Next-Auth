import { defineConfig } from "drizzle-kit";
import { DATABASE_PREFIX } from "@/lib/constants";

export default defineConfig({
  dialect: "postgresql",  // "postgresql" para PostgreSQL
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  tablesFilter: [`${DATABASE_PREFIX}_*`],
});
