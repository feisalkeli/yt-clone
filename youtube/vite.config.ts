import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const RAPIDAPI_KEY = "dd30d66e75mshe5360ccc1e9e3eep115689jsn294aa3d65567";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.RAPIDAPI_KEY": JSON.stringify(RAPIDAPI_KEY),
  },
});
