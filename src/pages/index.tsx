import { useState, useEffect } from 'react'
import { IRouteComponentProps, useModel } from 'umi'
import { SettingsContextProvider } from '@/layouts/custom-bar/context'
import changeTheme from '@/utils/change-theme'
import * as echarts from 'echarts'
import defaultTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-default'
echarts.registerTheme('defaultTheme', defaultTheme)

import 'normalize.css'
import '@kdcloudjs/kdesign/dist/kdesign.css'

export default function ({ children }: IRouteComponentProps) {
  const { initialState } = useModel('@@initialState')
  const [settings, setSettings] = useState(initialState?.settings as any)
  const updateSettings = (option: Record<string, any>) => setSettings({ ...settings, ...option })

  const { colors, themeColor } = settings
  const localThemeColor = localStorage.getItem('themeColor')
  const theme = colors.find(({ value }: { value: string }) => value === (localThemeColor || themeColor)) || colors[0]
  useEffect(() => {
    updateSettings({ themeColor: theme.value })
    changeTheme(theme.value)
  }, [])

  return <SettingsContextProvider value={{ settings, updateSettings }}>{children}</SettingsContextProvider>
}
