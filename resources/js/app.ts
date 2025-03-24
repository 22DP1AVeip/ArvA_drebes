import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from 'ziggy-js';
import { initializeTheme } from './composables/useAppearance';
import { DefineComponent } from 'vue';
import { createApp } from 'vue'; // Import only 'createApp' from Vue

// Initialize light/dark mode on page load
initializeTheme();

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Define a custom type for the props
type InertiaAppProps = {
    initialPage: any;
    resolveComponent: (name: string) => Promise<DefineComponent>;
    [key: string]: any; // This allows any extra properties that may come with props
};

// Create Inertia app
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        // Explicitly cast props to InertiaAppProps to allow dynamic properties
        createApp(App, props as InertiaAppProps)
            .use(plugin) // Use Inertia plugin
            .use(ZiggyVue) // Use ZiggyVue for route handling
            .mount(el); // Mount the app
    },
    progress: {
        color: '#4B5563',
    },
});
