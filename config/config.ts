import { defineConfig } from 'umi'
import routes from './routes'

const basePath = process.env.NODE_ENV === 'production' ? '/preview/' : '/'

export default defineConfig({
  title: 'KDesign Pro',
  targets: {
    ie: 11,
  },
  ignoreMomentLocale: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  base: basePath,
  publicPath: basePath,
  fastRefresh: {},
  dynamicImport: {
    loading: '@/loading',
  },
  hash: true,
  dynamicImportSyntax: {},
  favicon: basePath + 'favicon.ico',
})
