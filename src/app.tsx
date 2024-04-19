import { history, RequestConfig } from 'umi'
import Loading from '@/loading'
import settings from '../config/settings'

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

interface IState {
  settings?: Record<string, any>
  access?: string
}

export async function getInitialState(): Promise<IState> {
  const state: IState = {
    settings,
  }

  if (history.location.pathname !== '/login') {
    const { access } = JSON.parse(sessionStorage.getItem('user') || '{}')
    state.access = access || 'guest'
  }

  return state
}
