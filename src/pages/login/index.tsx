import { useState, useContext } from 'react'
import { IRouteComponentProps, Link, useModel } from 'umi'
import { Row, Col, Form, Input, Button, Radio, Space, Alert, Icon, Message } from '@kdcloudjs/kdesign'
import SettingsContext from '@/layouts/custom-bar/context'
import { login } from '@/services/user'
import styles from './index.less'

interface ILoginParams {
  username: string
  password: string
}

export default function ({ history }: IRouteComponentProps) {
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
        Message.success('登录成功！')
        await getAccess()
        history.push('/typical/workbench')
      } else {
        setMsg('用户名或密码错误！(kdcloud/kdesign)')
      }
    }
  }

  const [pwdVisible, setPwdVisible] = useState(false)
  const handleSwitchPwdVisible = () => setPwdVisible(!pwdVisible)

  return (
    <Row className={styles.login} wrap={false} align="stretch">
      <Col className={styles.banner} flex="auto">
        <h1>企业级产品设计系统</h1>
        <h2>赋能数字化时代新体验</h2>
      </Col>
      <Col className={styles.bar} flex="400px">
        {logo && (
          <div className={styles.logo}>
            <img src={`${(window as any).routerBase}${logo}`} height="30" />
          </div>
        )}
        <div className={styles.title}>
          <span>账号密码登录</span>
          <Link to="#">立即注册</Link>
        </div>
        {msg && <Alert message={msg} type="error" delayOffTime={0} showIcon={true} />}
        <Form layout="vertical" labelWidth={100} onFinish={submit}>
          <Form.Item label="用户名" name="username" required>
            <Input borderType="bordered" placeholder="用户名:kdcloud or guest" defaultValue="kdcloud" allowClear />
          </Form.Item>
          <Form.Item label="密码" name="password" required>
            <Input
              allowClear
              borderType="bordered"
              placeholder="密码:kdesign"
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
            <Radio>自动登录</Radio>
            <Link to="#">忘记密码</Link>
          </div>
          <Button size="large" type="primary" htmlType="submit" loading={loading} style={{ width: '100%', height: 44 }}>
            登录
          </Button>
        </Form>
        <Space className={styles.footer} split={<i className={styles.split}></i>}>
          <Link to="#">服务协议</Link>
          <Link to="#">隐私政策</Link>
        </Space>
      </Col>
    </Row>
  )
}
