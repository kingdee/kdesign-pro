import * as echarts from 'echarts'
import { useEffect, useState } from 'react'
import { history, useLocation, useModel, useAccess, useIntl, Outlet } from 'umi'
import defaultTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-default'
import { Message, ConfigProvider } from '@kdcloudjs/kdesign'
import defaultSettings from '../../config/settings'
import { SettingsContextProvider } from '@/layouts/custom-bar/context'
import changeTheme from '@/utils/change-theme'
import BaseLayout from '@/layouts/baseLayout'
import { getMenus } from '../../config/tools'
import originMenus from '../../config/menus'

echarts.registerTheme('defaultTheme', defaultTheme)

export const menus = getMenus(originMenus)

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

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

  const localeConfig: any = {
    localeData: {
      'global.selectholder': i18n('kdesign1'),
      'global.placeholder': `${i18n('kdesign2')}...`,
      'global.cancel': i18n('cancel'),
      'global.confirm': i18n('kdesign3'),
      'Button.text': i18n('kdesign4'),
      'Progress.circleLoadingDesc': i18n('kdesign5'),
      'Progress.loading': `${i18n('kdesign5')}...`,
      'Progress.fail': i18n('kdesign6'),
      'Progress.success': i18n('kdesign7'),
      'Pagination.prevPage': i18n('kdesign8'),
      'Pagination.nextPage': i18n('kdesign9'),
      'Pagination.total': `${i18n('kdesign10')} {page} ${i18n('kdesign11')} {row}${i18n('kdesign12')}`,
      'Pagination.page': `${i18n('kdesign10')} {page} ${i18n('kdesign11')}`,
      'Pagination.row': `${i18n('kdesign10')} {row} ${i18n('kdesign12')}`,
      'Pagination.first': i18n('kdesign13'),
      'Pagination.last': i18n('kdesign14'),
      'Pagination.perPage': `{size} ${i18n('kdesign12')}/${i18n('kdesign11')}`,
      'Pagination.order': `${i18n('kdesign15')} {order} ${i18n('kdesign11')}`,
      'Pagination.forward': `${i18n('kdesign16')} 5 ${i18n('kdesign11')}`,
      'Pagination.backward': `${i18n('kdesign17')} 5 ${i18n('kdesign11')}`,
      'Transfer.selectAll': i18n('kdesign18'),
      'Transfer.searchPlaceholder': [i18n('kdesign19'), i18n('kdesign19')],
      'Transfer.leftTitle': i18n('kdesign20'),
      'Transfer.rightTitle': i18n('kdesign21'),
      'Transfer.emptyTip': i18n('nodata'),
      'Modal.okText': i18n('kdesign3'),
      'Modal.cancelText': i18n('cancel'),
      'Modal.iknowText': i18n('kdesign22'),
      'Empty.emptyText': i18n('nodata'),
      'Empty.searchEmptyText': i18n('kdesign23'),
      'QuickSearch.placeholder': i18n('kdesign19'),
      'QuickSearch.desc': [`${i18n('kdesign24')}"${i18n('kdesign25')}",${i18n('kdesign26')}"${i18n('kdesign27')}"`],
      'QuickSearch.nplDesc': i18n('kdesign28'),
      'QuickSearch.emptyTip': i18n('nodata'),
      'QuickSearch.or': i18n('kdesign25'),
      'CityPicker.domestic': i18n('kdesign29'),
      'CityPicker.common': i18n('kdesign30'),
      'CityPicker.emptyText': i18n('nodata'),
      'CityPicker.commonEmptyText': i18n('kdesign31'),
      'CityPicker.tabsDomestic': i18n('kdesign29'),
      'CityPicker.tabsInternation': `${i18n('kdesign32')}/${i18n('kdesign33')}`,
      'ColorPicker.followFunctionalColor': i18n('kdesign34'),
      'Search.placeholder': i18n('kdesign19'),
      'Search.desc': [`${i18n('kdesign24')}"${i18n('kdesign25')}"`, `${i18n('kdesign26')}"${i18n('kdesign27')}"`],
      'Search.nplDesc': i18n('kdesign28'),
      'Search.emptyTip': i18n('nodata'),
      'Search.or': i18n('kdesign25'),
      'Filter.filterCondition': i18n('kdesign35'),
      'Filter.commonCondition': i18n('kdesign36'),
      'Filter.schemeQuery': i18n('kdesign37'),
      'Filter.spread': i18n('kdesign38'),
      'Filter.packup': i18n('kdesign39'),
      'Filter.filter': i18n('kdesign40'),
      'Filter.scheme': i18n('kdesign41'),
      'Filter.unlimited': i18n('kdesign42'),
      'Filter.commonScheme': i18n('kdesign43'),
      'Filter.advancedQuery': i18n('kdesign44'),
      'Filter.schemeName': i18n('kdesign45'),
      'Filter.addCondition': i18n('kdesign46'),
      'Filter.saveScheme': i18n('kdesign47'),
      'Filter.query': i18n('kdesign48'),
      'Filter.and': i18n('kdesign49'),
      'Filter.settings': i18n('kdesign50'),
      'Filter.schemeNamePlaceholder': i18n('kdesign51'),
      'Form.requiredMessage': i18n('kdesign52'),
      'Table.contain': i18n('kdesign53'),
      'Table.notContain': i18n('kdesign54'),
      'Table.equal': i18n('kdesign55'),
      'Table.notEqual': i18n('kdesign56'),
      'Table.isNull': i18n('kdesign57'),
      'Table.notIsNull': i18n('kdesign58'),
      'Table.resetFilter': i18n('kdesign59'),
      'Table.confirmFilter': i18n('kdesign3'),
      'Select.selectAll': i18n('kdesign18'),
      'Select.seleted': `${i18n('selected')}{size}${i18n('kdesign60')}`,
      'DatePicker.placeholder': i18n('kdesign61'),
      'DatePicker.yearPlaceholder': i18n('kdesign62'),
      'DatePicker.quarterPlaceholder': i18n('kdesign63'),
      'DatePicker.monthPlaceholder': i18n('kdesign64'),
      'DatePicker.weekPlaceholder': i18n('kdesign65'),
      'DatePicker.timePlaceholder': i18n('kdesign66'),
      'DatePicker.now': i18n('kdesign67'),
      'DatePicker.confrim': i18n('kdesign3'),
      'DatePicker.today': i18n('kdesign68'),
      'DatePicker.month': i18n('kdesign69'),
      'DatePicker.year': i18n('kdesign70'),
      'DatePicker.weekTitle': [
        i18n('kdesign71'),
        i18n('kdesign72'),
        i18n('kdesign73'),
        i18n('kdesign74'),
        i18n('kdesign75'),
        i18n('kdesign76'),
        i18n('kdesign77'),
      ],
      'DatePicker.rangePlaceholder': [i18n('kdesign78'), i18n('kdesign79')],
      'DatePicker.rangeYearPlaceholder': [i18n('kdesign80'), i18n('kdesign81')],
      'DatePicker.rangeMonthPlaceholder': [i18n('kdesign82'), i18n('kdesign83')],
      'DatePicker.rangeWeekPlaceholder': [i18n('kdesign84'), i18n('kdesign85')],
      'DatePicker.rangeQuarterPlaceholder': [i18n('kdesign86'), i18n('kdesign87')],
      'DatePicker.rangeTimePlaceholder': [i18n('kdesign88'), i18n('kdesign89')],
    },
  }

  return (
    <ConfigProvider
      value={{
        compDefaultProps: {},
        localeConfig,
      }}
    >
      <SettingsContextProvider value={{ settings, updateSettings }}>
        {pathname === '/login' ? (
          <Outlet />
        ) : (
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        )}
      </SettingsContextProvider>
    </ConfigProvider>
  )
}
