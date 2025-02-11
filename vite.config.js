import {defineConfig} from "vite";
import {createHtmlPlugin} from "vite-plugin-html";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    mode: "production",
    assetsInclude: [],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: "assets/[name].[ext]",
                entryFileNames: "assets/[name].js",
                chunkFileNames: "assets/[name].js",
            },
        },
        minify: true
    },
    plugins: [
        createHtmlPlugin({
            entry: "src/main.ts",
            minify: true,
        }),
        tailwindcss(),
    ],
});
