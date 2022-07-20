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
    colorMode: {
        classSuffix: ""
    },
    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "~/tailwind.config.js",
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true
    },
    components: true,

    publicRuntimeConfig:{
        apiToken: process.env.STORYBLOK_API_KEY
    },
    modules: ['@pinia/nuxt', '@nuxt/content', '@nuxtjs/color-mode',
        ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_KEY,
        bridge: true,
        useApiClient: true }]
        // ...
      ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
})
