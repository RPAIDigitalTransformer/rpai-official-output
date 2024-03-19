import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "E:/desktop-temp/sources/rpai/rpai-official/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}