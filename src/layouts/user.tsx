import { history, getAllLocales, getLocale, setLocale, useIntl } from 'umi'
import { useState, useRef, useContext, useEffect } from 'react'
import { Icon, Space, Dropdown } from '@kdcloudjs/kdesign'
import usePopper from '@kdcloudjs/kdesign/es/_utils/usePopper'
import SettingsContext from '@/layouts/custom-bar/context'
import changeTheme from '@/utils/change-theme'
import { getUserInfo, logout } from '@/services/user'
import { mapLocal } from '@/locales'

import styles from './user.less'

const { Menu, Item } = Dropdown

type IThemeColor = {
  name: string
  value: string
}

export default function User() {
  const { formatMessage: i18n } = useIntl()
  const avatarRef = useRef<any>()
  const [user, setUser] = useState<any>({})

  const { settings, updateSettings } = useContext(SettingsContext)

  const { colors, themeColor } = settings
  useEffect(() => {
    switchTheme(themeColor, false)
  }, [themeColor])

  const defaultTheme = colors.find(({ value }: IThemeColor) => value === themeColor) || colors[0]

  const [theme, setTheme] = useState(defaultTheme)

  const { avatar, name, department, slogan, data_center, business_unit } = user

  useEffect(() => {
    getUserInfo().then((res) => {
      sessionStorage.setItem('user', JSON.stringify(res.data))
      setUser(res.data)
    })
  }, [])

  const Locator = (
    <div className={styles.userHandle}>
      <div className={styles.avatar} ref={avatarRef}>
        <img src={`${(window as any).routerBase}${avatar}`} />
      </div>
    </div>
  )

  const switchTheme = (color: string, save = true) => {
    const te = colors.find(({ value }: IThemeColor) => value === color)
    setTheme(te)
    changeTheme(color)
    updateSettings({ themeColor: color })
    save && localStorage.setItem('themeColor', color)
  }

  const colorMenu = (
    <Menu onClick={switchTheme}>
      {colors.map(({ name: n, value }: IThemeColor) => (
        <Item key={value}>
          <i className={styles.colorSquare} style={{ backgroundColor: value }} />
          {i18n({ id: n })}
        </Item>
      ))}
    </Menu>
  )

  const handleLogout = async () => {
    const { status } = await logout()
    if (status === 'success') {
      sessionStorage.clear()
      history.push('/login')
    }
  }

  const switchLocale = async (locale: string) => {
    setLocale(locale, false)
    sessionStorage.removeItem('user')
    window.location.reload()
  }

  const localesMenu = (
    <Menu onClick={switchLocale}>
      {getAllLocales().map((locale: string) => (
        <Item key={locale}>{mapLocal[locale]}</Item>
      ))}
    </Menu>
  )

  return usePopper(
    Locator,
    <div className={styles.center}>
      <header className={styles.header}>
        <div className={styles.info}>
          <div className={styles.avatar}>
            <img src={`${(window as any).routerBase}${avatar}`} />
          </div>
          <div className={styles.attr}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.department}>{department}</div>
          </div>
        </div>
        <div className={styles.slogan}>{slogan}</div>
        <ul className={styles.actions}>
          <li>
            <Icon type="setting" />
          </li>
          <li>
            <Dropdown menu={localesMenu} placement="bottom" selectable selectedKey={getLocale()}>
              <Icon type="international" />
            </Dropdown>
          </li>
          <li>
            <Icon type="quit" onClick={handleLogout} />
          </li>
        </ul>
      </header>
      <div className={styles.cont}>
        <ul className={styles.list}>
          <li>
            <span className={styles.name}>{i18n({ id: 'header.user.DC', defaultMessage: '数据中心' })}</span>
            <span className={styles.value}>{data_center}</span>
            <i className={styles.icon} />
          </li>
          <li>
            <span className={styles.name}>
              {i18n({ id: 'header.user.bussiness.unit', defaultMessage: '业务单元' })}
            </span>
            <span className={styles.value}>
              {business_unit}
              <Icon className={styles.icon} type="switch" />
            </span>
          </li>
          <li>
            <span className={styles.name}>{i18n({ id: 'header.user.theme', defaultMessage: '主题' })}</span>
            <Dropdown
              selectable
              trigger="click"
              menu={colorMenu}
              placement="bottomRight"
              selectedKey={theme.value}
              getPopupContainer={() => document.querySelector('.kd-pro-user-center-popper') as HTMLElement}
            >
              <span className={`${styles.value} ${styles.color}`} tabIndex={0}>
                <i className={styles.colorSquare} style={{ backgroundColor: theme.value }} />
                {i18n({ id: theme.name })}
                <Icon className={styles.icon} type="arrow-down" />
              </span>
            </Dropdown>
          </li>
        </ul>
        <Space className={styles.features} size={16} split={<span className={styles.split} />}>
          <span>{i18n({ id: 'header.user.center', defaultMessage: '用户中心' })}</span>
          <span>{i18n({ id: 'header.user.about', defaultMessage: '关于产品' })}</span>
        </Space>
      </div>
    </div>,
    {
      gap: 1,
      trigger: 'click',
      placement: 'bottomRight',
      prefixCls: 'kd-pro-user-center-popper',
      getTriggerElement: () => avatarRef.current,
    },
  )
}
