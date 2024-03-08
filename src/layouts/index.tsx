import * as echarts from 'echarts'
import { useEffect, useState } from 'react'
import { history, Outlet, useLocation, useModel, useAccess } from 'umi'
import defaultTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-default'
import { Message } from '@kdcloudjs/kdesign'
import defaultSettings from '../../config/settings'
import { SettingsContextProvider } from '@/layouts/custom-bar/context'
import changeTheme from '@/utils/change-theme'
import BaseLayout from '@/layouts/baseLayout'
import routeConfig from '../../config/routes'
import { getMenus } from '../../config/tools'
import originMenus from '../../config/menus'

echarts.registerTheme('defaultTheme', defaultTheme)

export const route = routeConfig[2]
export const menus = getMenus(originMenus)

export default () => {
  const { pathname } = useLocation()

  const { initialState } = useModel('@@initialState')
  const access = useAccess()
  const [settings, setSettings] = useState(defaultSettings)
  const updateSettings = (option: Record<string, any>) => setSettings({ ...settings, ...option })

  const { colors, themeColor } = settings
  const localThemeColor = localStorage.getItem('themeColor')
  const theme = colors.find(({ value }: { value: string }) => value === (localThemeColor || themeColor)) || colors[0]

  if (pathname !== '/login' && !access.accessible(initialState?.curRoute?.access)) {
    Message.error(`您无权访问 ${initialState?.curRoute?.path || ''} !`)
    history.push('/typical/exception/403')
  }

  useEffect(() => {
    updateSettings({ themeColor: theme.value })
    changeTheme(theme.value)
  }, [])

  return (
    <SettingsContextProvider value={{ settings, updateSettings }}>
      {pathname === '/login' ? (
        <Outlet />
      ) : (
        <BaseLayout>
          <Outlet />
        </BaseLayout>
      )}
    </SettingsContextProvider>
  )
}
