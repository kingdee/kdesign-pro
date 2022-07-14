import { history } from 'umi'
import Loading from '@/loading'
import { getAccess } from '@/services/user'
import settings from '../config/settings'

const loginPath = '/login'

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <Loading />,
}

interface IState {
  settings?: Record<string, any>
  access?: string
  fetchAccess?: () => Promise<string>
}

export async function getInitialState(): Promise<IState> {
  const fetchAccess = async () => {
    try {
      const msg = await getAccess()
      return msg.data.access
    } catch (error) {
      history.push(loginPath)
    }
    return undefined
  }

  const state: IState = {
    settings,
    fetchAccess,
  }

  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const access = await fetchAccess()
    state.access = access
  }

  return state
}
