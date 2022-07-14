import { useState, useEffect } from 'react'
import { getDetailVertical } from '@/services/detail'
import { getFormAnchor } from '@/services/form'
import { Space, Tag, Tabs, Button, Input, Row, Col, Pagination, Icon, Table, Form, Switch } from '@kdcloudjs/kdesign'
import classnames from 'classnames'
import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import styles from './index.less'
import formStyles from '../../form/index.less'
import infoStyles from './info.less'

export default function (props: any) {
  const [panes, setPanes] = useState<any>([])
  const [expenseColumns, setExpenseColumns] = useState<any>([])
  const [expenseData, setExpenseData] = useState<any>([])
  const [rechargeColumns, setRechargeColumns] = useState<any>([])
  const [rechargeData, setRechargeData] = useState<any>([])

  const getData = async () => {
    let {
      panes,
      rechargeColumns: tempRechargeColumns,
      rechargeData: temRechargeData,
      expenseColumns: tempExpenseColumns,
      expenseData: temExpenseData,
    } = await getDetailVertical()

    temExpenseData.map((v: any) => {
      v.code = (
        <a href="true" style={{ textDecoration: 'underline' }} onClick={(e) => e.preventDefault()}>
          {v.code}
        </a>
      )
    })

    temRechargeData.map((v: any) => {
      v.code = (
        <a href="true" style={{ textDecoration: 'underline' }} onClick={(e) => e.preventDefault()}>
          {v.code}
        </a>
      )
    })

    setExpenseColumns(tempExpenseColumns)
    setExpenseData(temExpenseData)
    setRechargeColumns(tempRechargeColumns)
    setRechargeData(temRechargeData)
    setPanes(panes)
  }

  useEffect(() => {
    getData()
  }, [])

  const mapCont: Record<string, any> = {
    会员信息: <MemberInfo />,
    充值记录: <RechargeRecord {...{ rechargeColumns, rechargeData }} />,
    消费记录: <ExpenseRecord {...{ expenseColumns, expenseData }} />,
  }

  return (
    <div className={classnames(globalStyles.container, styles.detailVertical)}>
      <div className={styles.card}>
        <img src={require('@/assets/images/VIP.png')} alt="" />
        <ul className={styles.attr}>
          <li>
            <Space size={12}>
              <span className={styles.title}>多账户卡</span>
              <i className={styles.split}></i>
              <Tag type="status" color="success">
                正常
              </Tag>
            </Space>
          </li>
          <li>VIP-191107-000001</li>
        </ul>
      </div>
      <div className={styles.tabs}>
        <Tabs type="card" position="left" defaultActiveKey={panes[0]}>
          {panes.map((pane: string) => (
            <Tabs.TabPane key={pane} tab={pane}>
              {mapCont[pane]}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

const MemberInfo = (props: any) => {
  const [form] = Form.useForm()
  const { avatar } = JSON.parse(sessionStorage.getItem('user') as any)
  const [dataSource, setDataSource] = useState([])
  const [basicInformation, setBasicInformation] = useState([])
  const [recommendedInformation, setRecommendedInformation] = useState([])
  const [cardData, setCardData] = useState([])

  async function initListForm() {
    const { dataSource, basicInformation, recommendedInformation, cardData } = await getFormAnchor()
    setDataSource(dataSource)
    setBasicInformation(basicInformation)
    setRecommendedInformation(recommendedInformation)
    setCardData(cardData)
  }

  useEffect(() => {
    initListForm()
  }, [])

  const customerColumns = [
    { code: 'index', lock: true, width: 60, name: '#' },
    { code: 'way', width: 100, name: '渠道' },
    { code: 'checked', width: 100, name: '来源渠道', render: (value: boolean) => <Switch defaultChecked={value} /> },
    { code: 'organization', width: 200, name: '组织' },
    { code: 'id', width: 200, name: '对应用户ID' },
    { code: 'memo', width: 200, name: '备注' },
  ]

  const rowSelection = {
    type: 'checkbox',
  }

  return (
    <div className={`${formStyles.form} ${infoStyles.info}`}>
      <div className={infoStyles.cont}>
        <Form form={form} labelWidth={100}>
          <div className={infoStyles.part}>
            <header>
              <div className={infoStyles.avatar}>
                <img src={`${(window as any).routerBase}${avatar}`} />
              </div>
              <div className={infoStyles.tags}>
                <div className={infoStyles.palceholder}>暂无信息标签，请添加标签哦～</div>
                <Button type="primary" ghost>
                  添加
                </Button>
              </div>
            </header>
            <Row gutter={[30, 22]}>
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
                      <Input suffix={<Icon type="search" />} style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                )
              })}
            </Row>
            <div className={infoStyles.part}>
              <h4 id="recommendedInformation">会员推荐信息</h4>
              <Row gutter={30}>
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
            <div className={infoStyles.part}>
              <h4>渠道信息</h4>
              <Table columns={customerColumns} dataSource={dataSource} rowSelection={rowSelection} />
            </div>
            <div className={infoStyles.part}>
              <h4 id="identityInformation">身份信息</h4>
              <Button type="primary" ghost>
                <Icon type="add" />
                添加卡片
              </Button>
              <ul className={infoStyles.cardWalls}>
                {cardData.map((item: any, index) => (
                  <li className={classnames(infoStyles.card, infoStyles[item.style])} key={index}>
                    <div className={infoStyles.type}>{item.type}</div>
                    <div className={infoStyles.name}>{item.name}</div>
                    <div className={infoStyles.code}>{item.code}</div>
                    <ol className={infoStyles.attrs}>
                      {item.attrs.map((value: string, indx: number) => (
                        <li key={indx} className={infoStyles.list}>
                          {value}
                        </li>
                      ))}
                    </ol>
                    <div className={infoStyles.actions}>
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
  )
}

const RechargeRecord = (props: { rechargeData: any[]; rechargeColumns: any[] }) => {
  const { rechargeData, rechargeColumns } = props
  return (
    <>
      <Button type="primary" style={{ margin: '16px 20px', alignSelf: 'flex-start' }}>
        引出
      </Button>
      <Row gutter={80}>
        <Col span={6} style={{ marginLeft: 20 }}>
          <span className={detailStyles.label}>时间范围</span>
          <Input value="最近一年" />
        </Col>
        <Col span={6}>
          <span className={detailStyles.label}>流水类型</span>
          <Input value="充值" />
        </Col>
      </Row>
      <div className={styles.table}>
        <Pagination defaultCurrent={1} total={200} style={{ marginRight: 20, marginBottom: 8 }} />
        <div className={globalStyles.tableContainer}>
          <div className={globalStyles.settings}>
            <Icon type="setting" style={{ fontSize: 14, cursor: 'pointer' }} />
          </div>
          <Table
            style={{ flex: '1 1 100px', maxHeight: 800, overflow: 'auto', borderLeft: 'none', borderRight: 'none' }}
            dataSource={rechargeData}
            columns={rechargeColumns}
            columnResize
          />
        </div>
      </div>
    </>
  )
}

const ExpenseRecord = (props: { expenseData: any[]; expenseColumns: any[] }) => {
  const { expenseData, expenseColumns } = props
  return (
    <>
      <Button type="primary" style={{ margin: '16px 20px', alignSelf: 'flex-start' }}>
        引出
      </Button>
      <Row gutter={80}>
        <Col span={6} style={{ marginLeft: 20 }}>
          <span className={detailStyles.label}>时间范围</span>
          <Input value="最近一年" />
        </Col>
        <Col span={6}>
          <span className={detailStyles.label}>流水类型</span>
          <Input value="发卡、消费" />
        </Col>
      </Row>
      <div className={styles.table}>
        <Pagination defaultCurrent={1} total={200} style={{ marginRight: 20, marginBottom: 8 }} />
        <div className={globalStyles.tableContainer}>
          <div className={globalStyles.settings}>
            <Icon type="setting" style={{ fontSize: 14, cursor: 'pointer' }} />
          </div>
          <Table
            style={{ flex: '1 1 100px', maxHeight: 800, overflow: 'auto', borderLeft: 'none', borderRight: 'none' }}
            dataSource={expenseData}
            columns={expenseColumns}
            columnResize
          />
        </div>
      </div>
    </>
  )
}
