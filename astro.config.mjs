import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    syntaxHighlight: false,
  },
  site: "https://yoursite.com",
  integrations: [sitemap()],
});
