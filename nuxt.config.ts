// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  css: ["~/shared/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo"
  ],

  app: {
    baseURL: '/qtim/',
    buildAssetsDir: '/_nuxt/',
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s | QTIM",
    },
  },

  imports: {
    dirs: [
      "shared/composables/*",
      "shared/types/*",
      "shared/constants/*",
      "shared/utils/*",
    ],
  },

  dir: {
    layouts: "app/layouts",
    pages: "app/routes",
    middleware: "app/middleware",
    modules: "app/modules",
    assets: "shared/assets",
    public: "shared/public",
    static: "shared/static",
  },

  alias: {
    assets: "./shared/assets",
    public: "./shared/public",
  },

  components: [
    {
      path: "~/shared/ui-kit",
      prefix: "QTIM",
      pathPrefix: false,
    },
  ],

  svgo: {
    componentPrefix: "i",
    defaultImport: "component",
    autoImportPath: "~/shared/assets/icons/",
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: undefined,
            },
          },
        },
      ],
    },
  },
})