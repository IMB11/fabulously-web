// https://nuxt.com/docs/api/configuration/nuxt-config
import { redirects } from "./redirects";

let redirectMap: any = {};
for (const redirect of redirects) {
  redirectMap[redirect[0]] = { redirect: redirect[1] };
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n'],
  nitro: {
    preset: 'github-pages',
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    componentName: 'ColorScheme',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  routeRules: {
    ...redirectMap
  },
})
