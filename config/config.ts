import { defineConfig } from 'umi'
import routes from './routes'

const { NODE_ENV, REACT_APP_ENV, UMI_ENV } = process.env;

const basePath = REACT_APP_ENV === 'pre' ? '/preview/' : '/'

export default defineConfig({
  title: 'KDesign Pro',
  targets: {
    ie: 11,
  },
  locale: {},
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
  define: {
    "process.env": { NODE_ENV, REACT_APP_ENV, UMI_ENV }
  }
})
