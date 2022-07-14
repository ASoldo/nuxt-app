import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        },
    },
    css: [
        "~/assets/css/tailwind.css"
    ],
    components: true,
    pwa: {
        icon: false, // disables the icon module
        manifest: {
            name: 'nuxt-project',
            lang: 'en',
            useWebmanifestExtension: false
        }
    },
    buildModules: ['@pinia/nuxt',  '@nuxt/content'],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    plugins: [
    // {src: '~/plugins/pinia-persisted.client.ts', mode: 'client'},
    // {src: '~/plugins/pinia-persisted2.universal.ts'}
    ]
    
})
