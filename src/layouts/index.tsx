import { history, Outlet, useLocation, useModel } from 'umi'

import '@kdcloudjs/kdesign/dist/kdesign.min.css'

export default () => {
  const { initialState } = useModel('@@initialState')
  const { pathname } = useLocation()

  console.log('initialState', initialState)

  if (pathname !== '/login' && !sessionStorage.getItem('user')) {
    history.push('/login')
  }

  return <Outlet />
}
