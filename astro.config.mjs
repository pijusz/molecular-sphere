import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

if (!process.env.VERCEL_ANALYTICS_ID) {
  process.env.VERCEL_ANALYTICS_ID = process.env.PUBLIC_VERCEL_ANALYTICS_ID;
}

export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
});
