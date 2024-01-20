// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from "node:fs";
import { redirects } from "./redirects";

let redirectMap: any = {};
for (const redirect of redirects) {
  redirectMap[redirect[0]] = { redirect: redirect[1] };
}

const languages = fs.readdirSync('./lang').map((file) => file.split('.')[0]);

function capitalize(string: any) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
    vueI18n: 'old.i18n.config.ts',
    locales: languages.map((lang) => ({
      code: lang, name: capitalize(new Intl.DisplayNames([lang], {
        type: 'language'
      }).of(lang)), file: `${lang}.json`
    })),
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: {
      // If enabled, a cookie is set once a user has been redirected to his
      // preferred language to prevent subsequent redirections
      // Set to false to redirect every time
      useCookie: true,
      // Cookie name
      cookieKey: 'i18n_redirected',
      // Set to always redirect to value stored in the cookie, not just once
      alwaysRedirect: false,
      // If no locale for the browsers locale is a match, use this one as a fallback
      fallbackLocale: 'en',
    },
    lazy: true,
    strategy: 'no_prefix',
    langDir: 'lang',
    defaultLocale: 'en'
  },
})
