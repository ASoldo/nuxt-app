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
        "~/assets/css/tailwind.css",
        "vue3-lottie/dist/style.css"
    ],
    components: true,
    // pwa: {
    //     icon: false, // disables the icon module
    //     manifest: {
    //         name: 'nuxt-project',
    //         lang: 'en',
    //         useWebmanifestExtension: false
    //     }
    // },
    publicRuntimeConfig:{
        apiToken: process.env.STORYBLOK_API_KEY
    },
    modules: ['@pinia/nuxt', '@nuxt/content',
        ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_KEY,
        bridge: true,
        useApiClient: true }]
        // ...
      ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
})
