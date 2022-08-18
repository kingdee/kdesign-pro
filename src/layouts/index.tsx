import { useContext } from 'react'
import { IRouteComponentProps, Redirect } from 'umi'
import classnames from 'classnames'
import { Layout, Empty } from '@kdcloudjs/kdesign'
import SettingsContext from '@/layouts/custom-bar/context'
import originMenus from '../../config/menus'
import Header from './header'
import Content from './content'
import Panes from './panes'
import Menu from './menu'
import { getMenus } from '../../config/tools'
import CustomBar from '@/layouts/custom-bar'

import styles from './global.less'

const menus = getMenus(originMenus)

export default function (props: IRouteComponentProps) {
  const { location, history, route } = props

  const user = JSON.parse(sessionStorage.getItem('user') as any)
  if (!user) {
    return <Redirect to="/login" />
  }

  const { pathname } = location
  const currentRoute = route?.routes?.find(({ path }) => path === pathname)
  if (currentRoute?.unaccessible) {
    const R403 = route?.routes?.find(({ path }) => path === '/typical/exception/403')
    currentRoute.component = R403?.component
  }

  const handleSwitchApp = (path: string) => history.push(path)

  const { settings } = useContext(SettingsContext)

  const appPath = '/typical'

  const { top, menu, menuTheme, tabs } = settings

  return (
    <Layout className={styles.layout}>
      {top !== 'off' && <Header {...{ appPath, top, menus, handleSwitchApp }} />}
      {menus.map(({ path, name, routes }) =>
        routes ? (
          <Layout key={path} className={classnames(styles.main, { [styles.active]: path === appPath })}>
            {menu !== 'off' && <Menu {...{ sideMenus: routes, pathname, menu, menuTheme, route }} />}
            {tabs ? <Panes {...{ sideMenus: routes, ...props }} /> : <Content {...props} />}
          </Layout>
        ) : (
          <Empty description={name} className={classnames(styles.empty, { [styles.active]: path === appPath })} />
        ),
      )}
      {process.env.REACT_APP_ENV === 'pre' && <CustomBar />}
    </Layout>
  )
}
