import { history } from 'umi'
import Loading from '@/loading'
import settings from '../config/settings'

const loginPath = '/login'

/** 获取用户信息比较慢的时候会展示一个 loading */
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

  if (history.location.pathname !== loginPath) {
    const { access } = JSON.parse(sessionStorage.getItem('user') || '{}')
    state.access = access || 'guest'
  }

  return state
}
