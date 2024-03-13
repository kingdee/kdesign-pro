import { Outlet, useModel, useLocation, history } from 'umi'

import './index.less'

export default () => {
  const { initialState } = useModel('@@initialState')
  const { pathname } = useLocation()

  console.log('initialState', initialState)

  if (pathname !== '/login' && !sessionStorage.getItem('user')) {
    history.push('/login')
  }

  return <Outlet />
}
