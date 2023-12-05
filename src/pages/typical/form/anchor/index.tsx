import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Button, Icon, Row, Col, Input, Switch, Tabs, Form, Anchor, Table, Empty } from '@kdcloudjs/kdesign'
import { getFormAnchor } from '@/services/form'

import globalStyles from '@/layouts/global.less'
import formStyles from '../index.less'
import styles from './index.less'

const customerColumns = [
  { code: 'index', lock: true, width: 60, name: '#' },
  { code: 'way', width: 100, name: '渠道' },
  { code: 'checked', width: 100, name: '来源渠道', render: (value: boolean) => <Switch defaultChecked={value} /> },
  { code: 'organization', width: 200, name: '组织' },
  { code: 'id', width: 200, name: '对应用户ID' },
  { code: 'memo', width: 200, name: '备注' },
]

export default () => {
  const [form] = Form.useForm()
  const [dataSource, setDataSource] = useState([])
  const [basicInformation, setBasicInformation] = useState([])
  const [recommendedInformation, setRecommendedInformation] = useState([])
  const [cardData, setCardData] = useState([])

  async function initListForm() {
    const gfa = await getFormAnchor()
    setDataSource(gfa.dataSource)
    setBasicInformation(gfa.basicInformation)
    setRecommendedInformation(gfa.recommendedInformation)
    setCardData(gfa.cardData)
  }

  useEffect(() => {
    initListForm()
  }, [])

  const rowSelection = {
    type: 'checkbox',
  }

  const { avatar } = JSON.parse(sessionStorage.getItem('user') as any)

  return (
    <Tabs type="card" defaultActiveKey="vip" className={classnames(formStyles.form, styles.container)}>
      <Tabs.TabPane key="vip" tab="会员信息">
        <Space className={styles.operation} size={12}>
          <Button type="primary">新增</Button>
          <Button type="primary" onClick={() => form.submit()}>
            保存
          </Button>
          <Button type="primary">删除</Button>
          <Button type="primary">保存并新增</Button>
          <Button.Dropdown type="similar" overlay={[{ value: 'enabled', label: '启用' }]}>
            禁用
          </Button.Dropdown>
          <Button type="primary">发卡</Button>
          <Button type="primary">发券</Button>
          <Button type="primary">退出</Button>
        </Space>
        <div className={globalStyles.container}>
          <div className={styles.cont}>
            <Form form={form} labelWidth={100}>
              <div className={styles.part}>
                <div className={styles.anchor}>
                  <Anchor type="advanced">
                    <Anchor.Link href="#basicInformation" title="基本信息" />
                    <Anchor.Link href="#recommendedInformation" title="会员推荐信息" />
                    <Anchor.Link href="#channelInformation" title="渠道信息" />
                    <Anchor.Link href="#identityInformation" title="身份信息" />
                  </Anchor>
                </div>
                <h4 id="basicInformation">基本信息</h4>
                <header>
                  <div className={styles.avatar}>
                    <img src={`${(window as any).routerBase}${avatar}`} />
                  </div>
                  <div className={styles.tags}>
                    <div className={styles.palceholder}>暂无信息标签，请添加标签哦～</div>
                    <Button type="primary" ghost>
                      添加
                    </Button>
                  </div>
                </header>
                <Row gutter={[80, 22]} className={formStyles.row}>
                  {basicInformation.map((item) => {
                    const { required, label, name, defaultValue, validateTrigger } = item
                    return (
                      <Col span={6} key={name}>
                        <Form.Item
                          required={required}
                          label={label}
                          name={name}
                          defaultValue={defaultValue}
                          validateTrigger={validateTrigger}
                        >
                          <Input suffix={<Icon type="search" />} />
                        </Form.Item>
                      </Col>
                    )
                  })}
                </Row>
                <div className={styles.part}>
                  <h4 id="recommendedInformation">会员推荐信息</h4>
                  <Row gutter={80} className={formStyles.row}>
                    {recommendedInformation.map((item) => {
                      const { required, label, name, defaultValue, validateTrigger } = item
                      return (
                        <Col span={6} key={name}>
                          <Form.Item
                            required={required}
                            label={label}
                            name={name}
                            defaultValue={defaultValue}
                            validateTrigger={validateTrigger}
                          >
                            <Input suffix={<Icon type="search" />} />
                          </Form.Item>
                        </Col>
                      )
                    })}
                  </Row>
                </div>
                <div className={styles.part}>
                  <h4>渠道信息</h4>
                  <Table columns={customerColumns} dataSource={dataSource} rowSelection={rowSelection as any} />
                </div>
                <div className={styles.part}>
                  <h4 id="identityInformation">身份信息</h4>
                  <Button type="primary" ghost>
                    <Icon type="add" />
                    添加卡片
                  </Button>
                  <ul className={styles.cardWalls}>
                    {cardData.map((item: any, index) => (
                      <li className={classnames(styles.card, styles[item.style])} key={index}>
                        <div className={styles.type}>{item.type}</div>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.code}>{item.code}</div>
                        <ol className={styles.attrs}>
                          {item.attrs.map((value: string, indx: number) => (
                            <li key={indx} className={styles.list}>
                              {value}
                            </li>
                          ))}
                        </ol>
                        <div className={styles.actions}>
                          <Button type="text">编辑</Button>
                          <Button type="text">取消</Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane key="relation" tab="关联信息">
        <div style={{ backgroundColor: '#fff', padding: 80 }}>
          <Empty />
        </div>
      </Tabs.TabPane>
    </Tabs>
  )
}
