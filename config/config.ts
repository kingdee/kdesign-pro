import { defineConfig } from 'umi'
import routes from './routes'

const basePath = '/'

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
  dynamicImportSyntax: {},
  favicon: basePath + 'favicon.ico',
})