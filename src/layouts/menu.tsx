import { useState, useEffect } from 'react'
import { history, useIntl, useAccess } from 'umi'
import classnames from 'classnames'
import { Menu, Icon } from '@kdcloudjs/kdesign'

import styles from './menu.less'

const { SubMenu, Item } = Menu

interface SiderProps {
  pathname: string
  menu: string
  menuTheme: string
  sideMenus: IMenuItem[]
}

export default ({ menu, menuTheme, pathname, sideMenus: menus }: SiderProps) => {
  const intl = useIntl()
  const access = useAccess()
  const [collapsed, setCollapsed] = useState(false)
  const handleSwitchCollapsed = () => setCollapsed(!collapsed)

  const onClick = ({ key }: { key: string }) => {
    history.push(key)
  }

  const onOpenChange = (openKeys: Array<string>) => {
    setOpenKeys(openKeys)
  }

  const [enter, setEnter] = useState(false)

  const [initOpenKey] = pathname.match(/(\/\w+){2}/g) || ['']
  const [openKeys, setOpenKeys] = useState([initOpenKey])
  const [selectedKey, setSelectedKey] = useState(pathname)

  useEffect(() => {
    const [openKey] = pathname.match(/(\/\w+){2}/g) || ['']
    setOpenKeys([openKey])
    setSelectedKey(pathname)
  }, [pathname])

  const menuProps: Record<string, any> = {
    onClick,
    openKeys,
    selectedKey,
    onOpenChange,
    theme: menuTheme,
    className: styles.menu,
    mode: collapsed ? 'vertical' : menu,
    collapsed: collapsed ? !enter : collapsed,
  }

  if (menu === 'vertical') {
    let timer: any
    const handleMouseEnter = () => {
      timer = setTimeout(() => setEnter(true), 500)
    }
    const handleMouseLeave = () => {
      timer && clearTimeout(timer)
      enter && setEnter(false)
    }
    if (collapsed) {
      menuProps.onMouseEnter = handleMouseEnter
      menuProps.onMouseLeave = handleMouseLeave
    }
  }

  return (
    <div className={classnames(styles.side, { [styles.collapsed]: collapsed, [styles.light]: menuTheme === 'light' })}>
      <div className={classnames(styles.inner, { [styles.enter]: enter })}>
        <Menu {...menuProps}>
          {menus
            .filter((d) => access.isAdmin || !d.access)
            .map(({ path, name, icon, routes }: IMenuItem) => {
              const nameText = intl.formatMessage({ id: `menu${path.replace(/\//g, '.')}`, defaultMessage: name })
              return routes ? (
                <SubMenu key={path} icon={<Icon type={icon as string} />} title={nameText}>
                  {routes
                    ?.filter((d) => access.isAdmin || d.access)
                    .map(({ path: p, name: n }: IMenuItem) => {
                      return (
                        <Item key={p}>
                          {intl.formatMessage({ id: `menu${p.replace(/\//g, '.')}`, defaultMessage: n })}
                        </Item>
                      )
                    })}
                </SubMenu>
              ) : (
                <Item key={path} icon={<Icon type={icon as string} />}>
                  {nameText}
                </Item>
              )
            })}
        </Menu>
        <div className={styles.innerBottom}>
          <div className={styles.collapsedHandle} onClick={handleSwitchCollapsed}>
            {collapsed ? <Icon type="foldmenu" /> : <Icon type="unfoldmenu" />}
          </div>
        </div>
      </div>
    </div>
  )
}
