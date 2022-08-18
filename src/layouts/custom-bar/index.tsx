import { useState, useContext, useRef } from 'react'
import { useIntl } from 'umi'
import classnames from 'classnames'
import { Button, Icon, Message, Form, Input, Space, Tooltip } from '@kdcloudjs/kdesign'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SettingsContext from './context'
import changeTheme from '@/utils/change-theme'

import styles from './index.less'

function generateNo() {
  let no = 1
  return function getNo() {
    return no++
  }
}

const getNo = generateNo()

export default function () {
  const intl = useIntl()
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const handleClose = () => setVisible(false)
  const handleSwitchBar = () => setVisible(!visible)

  const { settings, updateSettings } = useContext(SettingsContext)

  const { colors, themeColor, top, menu, menuTheme, tabs } = settings

  const { current: defaultColors } = useRef(colors)

  const updateThemeColor = (themeColor: string) => {
    updateSettings({ themeColor })
    changeTheme(themeColor)
  }
  const handleCopy = () => Message.info(intl.formatMessage({ id: 'setting.copy.success', defaultMessage: '复制配置信息成功！' }))

  const handleAdd = ({ values }: { values: Record<string, string> }) => {
    if (!values.name) values.name = `${intl.formatMessage({ id: 'setting.theme.color.custom', defaultMessage: '自定义' }
    )}${getNo()}`
    updateSettings({ colors: [...colors, values], themeColor: values.value })
    form.resetFields()
    setAddVisible(false)
  }

  const handleRemove = () => {
    const nextColors = colors.filter(({ value }: { value: string }) => value !== themeColor)
    updateSettings({ colors: nextColors, themeColor: nextColors[nextColors.length - 1].value })
  }

  const topList = [
    { name: 'setting.layouts.top.bar', value: 'bar' },
    { name: 'setting.layouts.top.menu', value: 'nav' },
    { name: 'setting.layouts.top.off', value: 'off' },
  ]

  const menuList = [
    { name: 'setting.layouts.menu.inline', value: 'inline' },
    { name: 'setting.layouts.menu.vertical', value: 'vertical' },
    { name: 'setting.layouts.menu.off', value: 'off' },
  ]

  const menuThemeList = [
    { name: 'setting.layouts.menu.theme.light', value: 'light' },
    { name: 'setting.layouts.menu.theme.dark', value: 'dark' },
  ]

  const tabsList = [
    { name: 'setting.layouts.tab.on', value: true },
    { name: 'setting.layouts.tab.off', value: false },
  ]

  const [addVisible, setAddVisible] = useState(false)
  const handleVisibleChange = (visible: boolean) => setAddVisible(visible)

  const addColor = (
    <Form layout="horizontal" labelWidth={60} form={form} className={styles.form} onFinish={handleAdd}>
      <Form.Item label={intl.formatMessage({ id: 'setting.theme.color.name', defaultMessage: '颜色名' })} name="name">
        <Input borderType="bordered" />
      </Form.Item>
      <Form.Item label={intl.formatMessage({ id: 'setting.theme.color.value', defaultMessage: '颜色值' })} name="value" required>
        <Input borderType="bordered" type="color" />
      </Form.Item>
      <Space size={20}>
        <Button htmlType="submit" type="primary">
          {intl.formatMessage({ id: 'setting.theme.color.add', defaultMessage: '添加' })}
        </Button>
        <Button htmlType="reset" type="ghost">
          {intl.formatMessage({ id: 'setting.theme.color.reset', defaultMessage: '重置' })}
        </Button>
      </Space>
    </Form>
  )

  const isDefaultColor = defaultColors.find(({ value }: { value: string }) => value === themeColor)

  return (
    <div className={classnames(styles.custom, { [styles.visible]: visible })}>
      <div className={styles.mask} onClick={handleClose}></div>
      <div className={styles.bar}>
        <header className={styles.header}>{intl.formatMessage({ id: 'setting.theme.editor', defaultMessage: '主题编辑' })}</header>
        <ul className={styles.settings}>
          <li className={styles.item}>
            <h3>
              {intl.formatMessage({ id: 'setting.theme.color', defaultMessage: '主题色' })}
              <Space className={styles.action} size={8}>
                {isDefaultColor ? (
                  <Tooltip trigger="click" placement="top" tip={intl.formatMessage({ id: 'setting.theme.delete.tip', defaultMessage: '系统内置颜色不能删除！' })}>
                    <button className={styles.disabled}>-</button>
                  </Tooltip>
                ) : (
                  <button onClick={handleRemove}>-</button>
                )}
                <Tooltip
                  trigger="click"
                  placement="bottomRight"
                  tip={addColor}
                  visible={addVisible}
                  onVisibleChange={handleVisibleChange}
                >
                  <button>+</button>
                </Tooltip>
              </Space>
            </h3>
            <ul className={styles.theme}>
              {colors.map(({ name, value }: { name: string; value: string }) => (
                <li
                  key={value}
                  title={name}
                  className={classnames({
                    [styles.active]: value === themeColor,
                  })}
                  style={{
                    backgroundColor: value,
                  }}
                  onClick={updateThemeColor.bind(null, value)}
                >
                  <span className={styles.name}>{name}</span>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.item}>
            <h3>{intl.formatMessage({ id: 'setting.layouts', defaultMessage: '页面布局' })}</h3>
            <ul className={styles.layout}>
              <li className={styles.option}>
                <h4 className={styles.label}>{intl.formatMessage({ id: 'setting.layouts.top', defaultMessage: '顶部' })}</h4>
                <ul className={styles.list}>
                  {topList.map(({ name, value }) => (
                    <li key={value} onClick={updateSettings.bind(null, { top: value })}>
                      <div className={classnames(styles.piece, { [styles.active]: top === value })}>
                        <img src={require(`./images/top_${value}.png`)} />
                      </div>
                      <span>{intl.formatMessage({ id: name })}</span>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={styles.option}>
                <h4 className={styles.label}>{intl.formatMessage({ id: 'setting.layouts.menu', defaultMessage: '侧边菜单栏' })}</h4>
                <ul className={styles.list}>
                  {menuList.map(({ name, value }) => (
                    <li key={value} onClick={updateSettings.bind(null, { menu: value })}>
                      <div className={classnames(styles.piece, { [styles.active]: menu === value })}>
                        <img src={require(`./images/menu_${value}.png`)} />
                      </div>
                      <span>{intl.formatMessage({ id: name })}</span>
                    </li>
                  ))}
                </ul>
              </li>
              {/*<li className={classnames(styles.option, { [styles.disabled]: menu === 'off' })}>*/}
              {/*  <h4 className={styles.label}>侧边菜单栏底色</h4>*/}
              {/*  <ul className={styles.list}>*/}
              {/*    {menuThemeList.map(({ name, value }) => (*/}
              {/*      <li key={value} onClick={() => menu !== 'off' && updateSettings({ menuTheme: value })}>*/}
              {/*        <div className={classnames(styles.piece, { [styles.active]: menuTheme === value })}>*/}
              {/*          <img src={require(`./images/menu_${value}.png`)} />*/}
              {/*        </div>*/}
              {/*        <span>{intl.formatMessage({ id: name })}</span>*/}
              {/*      </li>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*</li>*/}
              <li className={styles.option}>
                <h4 className={styles.label}>{intl.formatMessage({ id: 'setting.layouts.tab', defaultMessage: '页签栏' })}</h4>
                <ul className={styles.list}>
                  {tabsList.map(({ name, value }) => (
                    <li key={name} onClick={updateSettings.bind(null, { tabs: value })}>
                      <div className={classnames(styles.piece, { [styles.active]: tabs === value })}>
                        <img src={require(`./images/tabs_${value ? 'on' : 'off'}.png`)} />
                      </div>
                      <span>{intl.formatMessage({ id: name })}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div className={styles.use}>
          <div className={styles.tips}>
            <Icon type="notice" />
            <div className={styles.text}>
              {intl.formatMessage({ id: 'setting.copy.tip', defaultMessage: '配置后仅仅是预览效果，若要运用于实际项目，请将配置信息复制到/config/settings.ts文件中。' })}
            </div>
          </div>
          <CopyToClipboard text={JSON.stringify(settings, null, 2)} onCopy={handleCopy}>
            <Button type="primary" className={styles.copy}>
              <Icon type="copy-code" /> {intl.formatMessage({ id: 'setting.copy.button', defaultMessage: '复制配置' })}
            </Button>
          </CopyToClipboard>
        </div>
        <div className={styles.handle} onClick={handleSwitchBar}></div>
      </div>
    </div>
  )
}
