import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  base: "/centripetal",
  plugins: [
    react(),
    babel({
      plugins: [["babel-plugin-react-compiler"]],
    }),
  ],
});
