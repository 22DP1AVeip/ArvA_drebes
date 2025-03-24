import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import tailwindcss from 'tailwindcss';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        // Laravel Vite Plugin: Handles asset compilation and refresh
        laravel({
            input: ['resources/js/app.ts'], // Entry point for JS
            ssr: 'resources/js/ssr.ts',     // Entry point for server-side rendering (if needed)
            refresh: true,                  // Enable auto-refresh when files change
        }),

        // Vue Plugin: Required for handling Vue files
        vue({
            template: {
                transformAssetUrls: {
                    base: null,        // Don't transform base URLs
                    includeAbsolute: false, // Don't include absolute URLs in assets
                },
            },
        }),
    ],

    // Alias configuration for module resolution
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'), // '@' points to the resources/js folder
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'), // Path for Ziggy routes
        },
    },

    // CSS Configuration
    css: {
        postcss: {
            plugins: [
                tailwindcss,    // Add TailwindCSS support
                autoprefixer,   // Add autoprefixer support for cross-browser compatibility
            ],
        },
    },

    // Define build and server configurations
    server: {
        proxy: {
            '/app': 'http://127.0.0.1', // You can configure proxy for Laravel API routes if needed
        },
    },
});
