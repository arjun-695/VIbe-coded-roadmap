import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// For GitHub Pages: set base to '/<repo-name>/' in production
// Change 'cp-mastery-tracker' to your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? "/cp-mastery-tracker/" : "/",
});
