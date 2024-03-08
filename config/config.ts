import { defineConfig } from 'umi'
import routes from './routes'

const { NODE_ENV, REACT_APP_ENV, UMI_ENV } = process.env

export const basePath = REACT_APP_ENV === 'pre' ? '/preview/' : '/'

export default defineConfig({
  title: 'KDesign Pro',
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/locale',
    '@umijs/plugins/dist/request',
    '@umijs/plugins/dist/access',
    '@umijs/plugins/dist/layout',
  ],
  locale: {
    antd: false,
    baseNavigator: true,
    baseSeparator: '-',
    default: 'zh-CN',
    title: false,
    useLocalStorage: true,
  },
  ignoreMomentLocale: true,
  access: {},
  mock: {},
  request: {},
  initialState: {
    loading: '@/loading',
  },
  model: {},
  routes,
  base: basePath,
  publicPath: basePath,
  fastRefresh: true,
  hash: true,
  // dynamicImportSyntax: {},
  // favicons: [`${basePath}favicon.ico`],
  define: {
    'process.env': { NODE_ENV, REACT_APP_ENV, UMI_ENV },
  },
  npmClient: 'pnpm',
})
