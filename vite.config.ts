import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// one HTML file per page: / and /journeys/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                journeys: "journeys/index.html",
            },
        },
    },
});
