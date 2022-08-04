import { useState, lazy, useEffect, Suspense, ReactElement } from 'react'
import { history, IRouteComponentProps } from 'umi'
import { Tabs, Icon } from '@kdcloudjs/kdesign'
import Loading from '@/loading'

import globalStyles from './global.less'
import styles from './panes.less'
import { useFullScreen } from '@/utils/hooks'

interface IPane {
  key: string
  name: React.ReactNode
  component: ReactElement
}
interface PanesProps extends IRouteComponentProps {
  sideMenus: IMenuItem[]
}

export default function ({ sideMenus, location }: PanesProps) {
  const { pathname } = location

  const [panes, setPanes] = useState<IPane[]>([])
  const [activeKey, setActiveKey] = useState('')

  useEffect(() => {
    const [menuPath] = pathname.match(/(\/\w+){2}/g) || ['']
    if (menuPath && pathname) {
      const hasPane = panes.find((pane) => pane.key === pathname)
      if (!hasPane) {
        const pathPane =
          menuPath === pathname
            ? sideMenus.find(({ path }) => path === pathname)
            : sideMenus.find(({ path }) => path === menuPath)?.routes?.find(({ path }) => path === pathname)
        if (pathPane) {
          const AsyncComponent = lazy(() => import(`@/pages${pathPane.component || pathname}`))
          const currentPane = {
            key: pathname,
            name: pathPane.name,
            component: <AsyncComponent />,
          }

          history.push(pathname)
          setPanes([...panes, currentPane])
        }
      }
    }
    setActiveKey(pathname)
  }, [pathname])

  const handleChange = (value: string | number) => {
    history.push(value as string)
  }

  const handleCloseTab = (key: string) => {
    const newPanes = panes.filter((pane) => pane.key !== key)
    setPanes(newPanes)
    if (key === activeKey && newPanes.length > 0) {
      const path = newPanes[newPanes.length - 1].key
      history.push(path)
    }
  }

  const { fullScreen, enterFullScreen, exitFullScreen } = useFullScreen(`.${globalStyles.main}.${globalStyles.active}`)

  function handleSwitchFullScreen() {
    if (fullScreen) {
      exitFullScreen()
    } else {
      enterFullScreen()
    }
  }

  return (
    <Tabs className={styles.panes}  effect="scrollx" type="dynamic" showScrollArrow activeKey={activeKey} onChange={handleChange}>
      {panes.map(({ key, name, component }) => (
        <Tabs.TabPane
          {...{
            key,
            tab: name,
            operations: panes.length > 1 && [<Icon type="close" onClick={handleCloseTab.bind(this, key)} />],
          }}
        >
          <Suspense fallback={<Loading />}>{component}</Suspense>
        </Tabs.TabPane>
      ))}
      <Tabs.TabPane specialPane="right">
        <Icon type="tips" />
        <Icon type={fullScreen ? 'close-full-screen' : 'expand'} onClick={handleSwitchFullScreen} />
      </Tabs.TabPane>
    </Tabs>
  )
}
