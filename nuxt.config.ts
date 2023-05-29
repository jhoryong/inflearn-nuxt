// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServer: {
        port: 3001
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.NODE_ENV == 'production' 
            ? 'https://my-json-server.typicode.com/jhoryong/nuxt-shopping-api'
            : 'http://localhost:3000'
            // baseURL: 'http://localhost:3000'
        },
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
    