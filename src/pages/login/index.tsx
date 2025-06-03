import { useState } from 'react'
import { history, Link, useModel } from 'umi'

import { Alert, Button, Form, Icon, Input, Message, Radio, Space } from '@kdcloudjs/kdesign'

import { login } from '@/services/user'
import styles from './index.less'

interface ILoginParams {
  username: string
  password: string
}

export default () => {
  const { setInitialState } = useModel('@@initialState')
  const { setUsername } = useModel('global')

  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  async function submit({ values }: { values: ILoginParams }) {
    if (!loading) {
      setLoading(true)
      const { status, data } = await login(values)
      setLoading(false)
      if (status === 'success') {
        sessionStorage.setItem('user', JSON.stringify(data))
        Message.success('登录成功！')
        setUsername(data.name)
        await setInitialState((s: any) => ({
          ...s,
          access: data?.access || 'guest',
        }))
        history.push('/')
      } else {
        setMsg('用户名或密码错误！')
      }
    }
  }

  const [pwdVisible, setPwdVisible] = useState(false)
  const handleSwitchPwdVisible = () => setPwdVisible(!pwdVisible)

  return (
    <div className={styles.login}>
      <div className={styles.banner}>
        <h1>企业级产品设计系统</h1>
        <h2>赋能数字化时代新体验</h2>
      </div>
      <div className={styles.bar}>
        <div className={styles.logo}>
          <img src={require('@/assets/logo.png')} height="30" />
        </div>
        <div className={styles.title}>
          <span>账号密码登录</span>
          <Link to="#">立即注册</Link>
        </div>
        {msg && <Alert message={msg} type="error" delayOffTime={0} showIcon />}
        <Form layout="vertical" labelWidth={100} onFinish={submit}>
          <Form.Item label="用户名" name="username" required>
            <Input borderType="bordered" placeholder="kdcloud or guest" defaultValue="kdcloud" allowClear />
          </Form.Item>
          <Form.Item label="密码" name="password" required>
            <Input
              allowClear
              borderType="bordered"
              placeholder="kdesign"
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
        <Space className={styles.footer} split={<i className={styles.split} />}>
          <Link to="#">服务协议</Link>
          <Link to="#">隐私政策</Link>
        </Space>
      </div>
    </div>
  )
}
