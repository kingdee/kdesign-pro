import { history, RequestConfig } from 'umi'
import { Message } from '@kdcloudjs/kdesign'
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
  if (pathname.indexOf(loginPath) === -1) {
    if (!access) {
      history.push(loginPath)
    }

    const curRoute = baseRoutes.find(({ path }) => pathname.indexOf(path) > -1)

    if (!curRoute && !['/preview', '/preview/', '/'].includes(pathname)) {
      Message.error(`页面 ${pathname || ''} 未找到!`)
      history.push('/typical/exception/404')
    }

    state.curRoute = curRoute
  }

  return state
}
