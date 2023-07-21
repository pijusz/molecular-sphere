import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
  redirects: {
    "/2[...slug]": "/1[...slug]",
  },
});
