import { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation, useModel, useRouteData, history } from 'umi'
import { Empty, Layout } from '@kdcloudjs/kdesign'
import classnames from 'classnames'

import SettingsContext from '@/layouts/custom-bar/context'
import Header from '@/layouts/header'
import Menu from '@/layouts/menu'
import Panes from '@/layouts/panes'
import Content from '@/layouts/content'
import CustomBar from '@/layouts/custom-bar'

import styles from '@/layouts/global.less'
import { menus } from '@/layouts/index'

const BaseLayout = (props: any) => {
  const { settings } = useContext(SettingsContext)
  const { top, menu, menuTheme, tabs } = settings
  const { pathname } = useLocation()
  const [appPath, setAppPath] = useState('/typical')

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
      {process.env.REACT_APP_ENV === 'pre' && <CustomBar />}
    </Layout>
  )
}

export default BaseLayout
