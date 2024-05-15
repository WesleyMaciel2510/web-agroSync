import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "json-resolver",
      resolveId(id) {
        if (id.endsWith(".json")) {
          return id;
        }
      },
    },
  ],
});
