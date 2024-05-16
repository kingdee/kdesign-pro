import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Button, Icon, Row, Col, Input, Switch, Tabs, Form, Anchor, Table, Empty } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import { getFormAnchor } from '@/services/form'

import globalStyles from '@/layouts/global.less'
import formStyles from '../index.less'
import styles from './index.less'

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

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

  const customerColumns = [
    { code: 'index', lock: true, width: 60, name: '#' },
    { code: 'way', width: 200, name: i18n('form.anchor1') },
    {
      code: 'checked',
      width: 100,
      name: i18n('form.anchor2'),
      render: (value: boolean) => <Switch defaultChecked={value} />,
    },
    { code: 'organization', width: 400, name: i18n('org') },
    { code: 'id', width: 200, name: `${i18n('form.anchor3')}ID` },
    { code: 'memo', width: 200, name: i18n('remark') },
  ]

  const { avatar = 'avatar.png' } = JSON.parse((sessionStorage.getItem('user') || '{}') as any)

  return (
    <Tabs type="card" defaultActiveKey="vip" className={classnames(formStyles.form, styles.container)}>
      <Tabs.TabPane key="vip" tab={i18n('form.anchor4')}>
        <Space className={styles.operation} size={12}>
          <Button type="primary">{i18n('add')}</Button>
          <Button type="primary" onClick={() => form.submit()}>
            {i18n('save')}
          </Button>
          <Button type="primary">{i18n('form.anchor5')}</Button>
          <Button type="primary">{i18n('form.anchor6')}</Button>
          <Button.Dropdown type="similar" overlay={[{ value: 'enabled', label: i18n('form.anchor7') }]}>
            {i18n('form.anchor8')}
          </Button.Dropdown>
          <Button type="primary">{i18n('form.anchor9')}</Button>
          <Button type="primary">{i18n('form.anchor10')}</Button>
          <Button type="primary">{i18n('back')}</Button>
        </Space>
        <div className={globalStyles.container}>
          <div className={styles.cont}>
            <Form form={form} labelWidth={100}>
              <div className={styles.part}>
                <div className={styles.anchor}>
                  <Anchor type="advanced">
                    <Anchor.Link href="#basicInformation" title={i18n('basic')} />
                    <Anchor.Link href="#recommendedInformation" title={i18n('form.anchor11')} />
                    <Anchor.Link href="#channelInformation" title={i18n('form.anchor12')} />
                    <Anchor.Link href="#identityInformation" title={i18n('form.anchor13')} />
                  </Anchor>
                </div>
                <h4 id="basicInformation">{i18n('basic')}</h4>
                <header>
                  <div className={styles.avatar}>
                    <img src={(window as any).routerBase + avatar} />
                  </div>
                  <div className={styles.tags}>
                    <div className={styles.palceholder}>
                      {i18n('form.anchor14')}，{i18n('form.anchor15')}～
                    </div>
                    <Button type="primary" ghost>
                      {i18n('form.anchor16')}
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
                  <h4 id="recommendedInformation">{i18n('form.anchor11')}</h4>
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
                  <h4>{i18n('form.anchor12')}</h4>
                  <Table columns={customerColumns} dataSource={dataSource} rowSelection={rowSelection as any} />
                </div>
                <div className={styles.part}>
                  <h4 id="identityInformation">{i18n('form.anchor13')}</h4>
                  <Button type="primary" ghost>
                    <Icon type="add" />
                    {i18n('form.anchor17')}
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
                          <Button type="text">{i18n('edit')}</Button>
                          <Button type="text">{i18n('cancel')}</Button>
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
      <Tabs.TabPane key="relation" tab={i18n('form.anchor18')}>
        <div style={{ backgroundColor: '#fff', padding: 80 }}>
          <Empty />
        </div>
      </Tabs.TabPane>
    </Tabs>
  )
}
