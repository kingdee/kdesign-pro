import { useState, useRef, useEffect } from 'react'
import { useIntl } from 'umi'
import classnames from 'classnames'
import { Layout, Space, Input, Icon } from '@kdcloudjs/kdesign'
import User from './user'
import News from './news'
import styles from './header.less'

const { Header } = Layout

interface IHeaderProps {
  appPath: string
  menus: IMenuItem[]
  top: string
  handleSwitchApp: (path: string) => void
}

export default ({ top, menus, appPath, handleSwitchApp }: IHeaderProps) => {
  const intl = useIntl()
  const searchRef = useRef<HTMLInputElement>()
  const [showSearch, setShowSearch] = useState(false)

  const handleShowSearch = () => setShowSearch(true)

  useEffect(() => {
    showSearch && searchRef.current?.focus()
  }, [showSearch])

  const handleSearchBlur = () => setShowSearch(false)

  return (
    <Header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <img src={`${(window as any).routerBase}logo.png`} height="24" />
        </div>
        {top === 'nav' && (
          <ul className={styles.nav}>
            {menus.map(({ path, name }) => (
              <li
                key={path}
                className={classnames({ [styles.active]: path === appPath })}
                onClick={handleSwitchApp.bind(null, path)}
              >
                {intl.formatMessage({ id: `menu${path.replace(/\//g, '.')}`, defaultMessage: name })}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Space className={styles.tools} size={20}>
        {showSearch ? (
          <Input
            ref={searchRef}
            borderType="underline"
            placeholder={intl.formatMessage({ id: 'header.search.placeholder', defaultMessage: '输入搜索内容' })}
            onBlur={handleSearchBlur}
            style={{ width: 300 }}
            prefix={<Icon type="search" />}
          />
        ) : (
          <Icon type="search" onClick={handleShowSearch} style={{ fontSize: 20, cursor: 'pointer' }} />
        )}
        <News />
        <User />
      </Space>
    </Header>
  )
}
