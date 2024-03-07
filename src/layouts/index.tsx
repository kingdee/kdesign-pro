import { useContext, useEffect, useState } from 'react'
import { Redirect, useLocation, useAccess, history } from 'umi'
import classnames from 'classnames'
import { Layout, Empty, Message } from '@kdcloudjs/kdesign'
import SettingsContext from '@/layouts/custom-bar/context'
import originMenus from '../../config/menus'
import Header from './header'
import Content from './content'
import Panes from './panes'
import Menu from './menu'
import { getMenus } from '../../config/tools'
import CustomBar from '@/layouts/custom-bar'
import routeConfig from '../../config/routes'

import styles from './global.less'

export const menus = getMenus(originMenus)
export const route = routeConfig[0].routes[2]

const Layouts = (props: any) => {
  const { settings } = useContext(SettingsContext)
  const { top, menu, menuTheme, tabs } = settings
  const { pathname } = useLocation()
  const access = useAccess()
  const [appPath, setAppPath] = useState('/typical')

  if (!JSON.parse(sessionStorage.getItem('user') as any)) {
    return <Redirect to="/login" />
  }

  const curRoute = route.routes?.find(({ path }) => path === pathname)
  if (!curRoute) {
    Message.error(`页面 ${pathname || ''} 未找到!`)
    history.push('/typical/exception/404')
  }
  if (!access.accessible(curRoute?.access)) {
    Message.error(`您无权访问 ${curRoute?.path || ''} !`)
    history.push('/typical/exception/403')
  }

  useEffect(() => {
    if (menus.length > 1) {
      setAppPath(`/${pathname.split('/')[1]}`)
    }
  }, [])

  return (
    <Layout className={styles.layout}>
      {top !== 'off' && <Header {...{ appPath, top }} />}
      {menus.map(({ path, name, routes }) =>
        routes ? (
          <Layout key={path} className={classnames(styles.main, { [styles.active]: path === appPath })}>
            {menu !== 'off' && <Menu {...{ sideMenus: routes, pathname, menu, menuTheme }} />}
            {tabs ? <Panes sideMenus={routes} /> : <Content {...props} />}
          </Layout>
        ) : (
          <Empty description={name} className={classnames(styles.empty, { [styles.active]: path === appPath })} />
        ),
      )}
      {process.env.REACT_APP_ENV === 'pre' && access.isAdmin && <CustomBar />}
    </Layout>
  )
}

export default Layouts
