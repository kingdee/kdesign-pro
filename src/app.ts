import { Message } from '@kdcloudjs/kdesign'
import { history } from 'umi'
import { route } from '@/layouts'
import settings from '../config/settings'
import '@kdcloudjs/kdesign/dist/kdesign.css'
import 'normalize.css'

const { pathname } = window.location
const loginPath = '/login'

interface IState {
  settings?: any
  curRoute?: any
  access?: string
}

// eslint-disable-next-line import/prefer-default-export
export async function getInitialState(): Promise<IState> {
  ;(window as any).routerBase = process.env.REACT_APP_ENV === 'pre' ? '/preview/' : '/'
  const state: IState = {
    settings,
  }

  if (pathname !== loginPath) {
    const { access = undefined } = JSON.parse(sessionStorage.getItem('user') || '{}')
    if (!access) {
      history.push('/login')
    }

    const curRoute = route.routes?.find(({ path }) => path === pathname)
    if (!curRoute && pathname !== '/') {
      Message.error(`页面 ${pathname || ''} 未找到!`)
      history.push('/typical/exception/404')
    }

    state.curRoute = curRoute
    state.access = access || 'guest'
  }

  return state
}
