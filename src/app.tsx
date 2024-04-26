import { history, RequestConfig } from 'umi'
import { Message } from '@kdcloudjs/kdesign'
import Loading from '@/loading'
import settings from '../config/settings'
import { baseRoutes } from '../config/routes'
import '@kdcloudjs/kdesign/dist/kdesign.css'
import 'normalize.css'

export const request: RequestConfig = {
  timeout: 3000,
  errorConfig: {},
  requestInterceptors: [
    (url, options) => ({
      url,
      options: {
        ...options,
        ...{ params: { ...options.params, lang: localStorage.getItem('umi_locale') || undefined } },
      },
    }),
  ],
  responseInterceptors: [(response) => response],
}

export const initialStateConfig = {
  loading: <Loading />,
}

export interface IState {
  settings?: any
  curRoute?: any
  access?: string
}

export async function getInitialState(): Promise<IState> {
  ;(window as any).routerBase = process.env.REACT_APP_ENV === 'pre' ? '/preview/' : '/'

  const { pathname } = window.location
  const loginPath = '/login'
  const access = sessionStorage.getItem('access')
  const state: IState = {
    settings,
    access: access || 'guest',
  }
  if (pathname !== loginPath) {
    if (!access) {
      history.push('/login')
    }

    const curRoute = baseRoutes.find(({ path }) => path === pathname)

    if (!curRoute && pathname !== '/') {
      Message.error(`页面 ${pathname || ''} 未找到!`)
      history.push('/typical/exception/404')
    }

    state.curRoute = curRoute
  }

  return state
}
