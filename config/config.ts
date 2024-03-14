import { defineConfig } from 'umi'

export default defineConfig({
  title: 'KDesign Pro',
  ignoreMomentLocale: true,
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/request',
    '@umijs/plugins/dist/layout',
  ],
  mock: {},
  request: {},
  initialState: {
    loading: '@/loading',
  },
  model: {},
  base: '/',
  publicPath: '/',
  fastRefresh: true,
  hash: true,
  npmClient: 'pnpm',
})
