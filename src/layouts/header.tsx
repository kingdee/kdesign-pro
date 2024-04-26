import { useState, useRef, useEffect } from 'react'
import { useIntl, history } from 'umi'
import classnames from 'classnames'
import { Layout, Space, Input, Icon } from '@kdcloudjs/kdesign'
import User from './user'
import News from './news'
import styles from './header.less'
import { menus } from '@/layouts/index'

const { Header } = Layout

interface IHeaderProps {
  appPath: string
  top: string
}

export default ({ top, appPath }: IHeaderProps) => {
  const { formatMessage: i18n } = useIntl()
  const searchRef = useRef<HTMLInputElement>()
  const [showSearch, setShowSearch] = useState(false)

  const handleShowSearch = () => setShowSearch(true)

  const handleSwitchApp = (path: string) => history.push(path)

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
                {i18n({ id: `menu${path.replace(/\//g, '.')}`, defaultMessage: name })}
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
            placeholder={i18n({ id: 'header.search.placeholder', defaultMessage: '输入搜索内容' })}
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
