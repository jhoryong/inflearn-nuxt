// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseURL: 'http://localhost:3000'
        }
    },
    css: ['@/assets/css/reset.css'],
    modules: [
        '@pinia/nuxt'
    ],
    pinia: {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
        ],
      },
    imports: {
        dirs: [
            'stores'
        ]
    }
})
    