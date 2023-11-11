// https://nuxt.com/docs/api/configuration/nuxt-config
import { redirects } from "./redirects";

let redirectMap: any = {};
for (const redirect of redirects) {
  redirectMap[redirect[0]] = { redirect: redirect[1] };
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n', "@nuxt/image"],
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
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en_us.json'
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en'
  },
})