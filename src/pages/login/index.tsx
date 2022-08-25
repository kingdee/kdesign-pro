import { useState, useContext } from 'react'
import { IRouteComponentProps, Link, useModel, useIntl } from 'umi'
import { Row, Col, Form, Input, Button, Radio, Space, Alert, Icon, Message } from '@kdcloudjs/kdesign'
import SettingsContext from '@/layouts/custom-bar/context'
import { login } from '@/services/user'
import styles from './index.less'

interface ILoginParams {
  username: string
  password: string
}

export default function ({ history }: IRouteComponentProps) {
  const intl = useIntl()
  const { settings } = useContext(SettingsContext)
  const { logo } = settings

  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const { initialState, setInitialState } = useModel('@@initialState')

  const getAccess = async () => {
    const access = await initialState?.fetchAccess?.()
    if (access) {
      await setInitialState((s) => ({
        ...s,
        access,
      }))
    }
  }

  async function submit({ values }: { values: ILoginParams }) {
    if (!loading) {
      setLoading(true)
      const { status, data } = await login(values)
      setLoading(false)
      if (status === 'success') {
        sessionStorage.setItem('user', JSON.stringify(data))
        Message.success(intl.formatMessage({ id: 'login.success', defaultMessage: '登录成功！' }))
        await getAccess()
        history.push('/typical/workbench')
      } else {
        setMsg(`${intl.formatMessage({ id: 'login.failure', defaultMessage: '用户名或密码错误！' })}(kdcloud/kdesign)`)
      }
    }
  }

  const [pwdVisible, setPwdVisible] = useState(false)
  const handleSwitchPwdVisible = () => setPwdVisible(!pwdVisible)

  return (
    <Row className={styles.login} wrap={false} align="stretch">
      <Col className={styles.banner} flex="auto">
        <h1>{intl.formatMessage({ id: 'login.location', defaultMessage: '企业级产品设计系统' })}</h1>
        <h2>{intl.formatMessage({ id: 'login.slogan', defaultMessage: '赋能数字化时代新体验' })}</h2>
      </Col>
      <Col className={styles.bar} flex="400px">
        {logo && (
          <div className={styles.logo}>
            <img src={`${(window as any).routerBase}${logo}`} height="30" />
          </div>
        )}
        <div className={styles.title}>
          <span>{intl.formatMessage({ id: 'login.account', defaultMessage: '账号密码登录' })}</span>
          <Link to="#">{intl.formatMessage({ id: 'login.register', defaultMessage: '立即注册' })}</Link>
        </div>
        {msg && <Alert message={msg} type="error" delayOffTime={0} showIcon={true} />}
        <Form layout="vertical" labelWidth={100} onFinish={submit}>
          <Form.Item label={intl.formatMessage({ id: 'login.username', defaultMessage: '用户名' })} name="username" required>
            <Input borderType="bordered" placeholder={`${intl.formatMessage({ id: 'login.username', defaultMessage: '用户名' })}:kdcloud or guest`} defaultValue="kdcloud" allowClear />
          </Form.Item>
          <Form.Item label={intl.formatMessage({ id: 'login.password', defaultMessage: '密码' })} name="password" required>
            <Input
              allowClear
              borderType="bordered"
              placeholder={`${intl.formatMessage({ id: 'login.password', defaultMessage: '密码' })}:kdesign`}
              defaultValue="kdesign"
              type={pwdVisible ? 'text' : 'password'}
              suffix={
                <Icon
                  onClick={handleSwitchPwdVisible}
                  type={pwdVisible ? 'preview' : 'hide'}
                  style={{ fontSize: 18, color: '#666', cursor: 'pointer' }}
                />
              }
            />
          </Form.Item>
          <div className={styles.assist}>
            <Radio>{intl.formatMessage({ id: 'login.auto', defaultMessage: '自动登录' })}</Radio>
            <Link to="#">{intl.formatMessage({ id: 'login.forget', defaultMessage: '忘记密码' })}</Link>
          </div>
          <Button size="large" type="primary" htmlType="submit" loading={loading} style={{ width: '100%', height: 44 }}>
          {intl.formatMessage({ id: 'login.login', defaultMessage: '登录' })}
          </Button>
        </Form>
        <Space className={styles.footer} split={<i className={styles.split}></i>}>
          <Link to="#">{intl.formatMessage({ id: 'login.agreement', defaultMessage: '服务协议' })}</Link>
          <Link to="#">{intl.formatMessage({ id: 'login.privacy', defaultMessage: '隐私政策' })}</Link>
        </Space>
      </Col>
    </Row>
  )
}
