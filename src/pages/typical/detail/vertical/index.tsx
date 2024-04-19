import { useState, useEffect } from 'react'
import { Space, Tag, Tabs, Button, Input, Row, Col, Pagination, Icon, Table, Form, Switch } from '@kdcloudjs/kdesign'
import classnames from 'classnames'
import { useIntl } from 'umi'
import { getDetailVertical } from '@/services/detail'
import { getFormAnchor } from '@/services/form'
import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import styles from './index.less'
import formStyles from '../../form/index.less'
import infoStyles from './info.less'

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const panes = [i18n('detail.vertical1'), i18n('detail.vertical2'), i18n('detail.vertical3')]
  const [expenseColumns, setExpenseColumns] = useState<any>([])
  const [expenseData, setExpenseData] = useState<any>([])
  const [rechargeColumns, setRechargeColumns] = useState<any>([])
  const [rechargeData, setRechargeData] = useState<any>([])

  const getData = async () => {
    const {
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
      return v
    })

    temRechargeData.map((v: any) => {
      v.code = (
        <a href="true" style={{ textDecoration: 'underline' }} onClick={(e) => e.preventDefault()}>
          {v.code}
        </a>
      )
      return v
    })

    setExpenseColumns(tempExpenseColumns)
    setExpenseData(temExpenseData)
    setRechargeColumns(tempRechargeColumns)
    setRechargeData(temRechargeData)
  }

  useEffect(() => {
    getData()
  }, [])

  const mapCont: Record<string, any> = [
    <MemberInfo />,
    <RechargeRecord {...{ rechargeColumns, rechargeData }} />,
    <ExpenseRecord {...{ expenseColumns, expenseData }} />,
  ]

  return (
    <div className={classnames(globalStyles.container, styles.detailVertical)}>
      <div className={styles.card}>
        <img src={require('@/assets/images/VIP.png')} alt="" />
        <ul className={styles.attr}>
          <li>
            <Space size={12}>
              <span className={styles.title}>{i18n('detail.vertical4')}</span>
              <i className={styles.split} />
              <Tag type="status" color="success">
                {i18n('detail.vertical5')}
              </Tag>
            </Space>
          </li>
          <li>VIP-191107-000001</li>
        </ul>
      </div>
      <div className={styles.tabs}>
        <Tabs type="card" position="left" defaultActiveKey={panes[0]}>
          {panes.map((pane: string, index) => (
            <Tabs.TabPane key={pane} tab={pane}>
              {mapCont[index]}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

const MemberInfo = () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [form] = Form.useForm()
  const { avatar } = JSON.parse(sessionStorage.getItem('user') as any)
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

  const customerColumns = [
    { code: 'index', lock: true, width: 60, name: '#' },
    { code: 'way', width: 100, name: i18n('detail.vertical6') },
    {
      code: 'checked',
      width: 100,
      name: i18n('detail.vertical7'),
      render: (value: boolean) => <Switch defaultChecked={value} />,
    },
    { code: 'organization', width: 200, name: i18n('org') },
    { code: 'id', width: 200, name: i18n('detail.vertical8') },
    { code: 'memo', width: 200, name: i18n('remark') },
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
                <div className={infoStyles.palceholder}>{i18n('detail.vertical9')}</div>
                <Button type="primary" ghost>
                  {i18n('add')}
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
              <h4 id="recommendedInformation">{i18n('detail.vertical10')}</h4>
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
              <h4>{i18n('detail.vertical11')}</h4>
              <Table columns={customerColumns} dataSource={dataSource} rowSelection={rowSelection as any} />
            </div>
            <div className={infoStyles.part}>
              <h4 id="identityInformation">{i18n('detail.vertical12')}</h4>
              <Button type="primary" ghost>
                <Icon type="add" />
                {i18n('add')}
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
  )
}

const RechargeRecord = (props: { rechargeData: any[]; rechargeColumns: any[] }) => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const { rechargeData, rechargeColumns } = props
  return (
    <>
      <Button type="primary" style={{ margin: '16px 20px', alignSelf: 'flex-start' }}>
        {i18n('detail.vertical13')}
      </Button>
      <Row gutter={80}>
        <Col span={6} style={{ marginLeft: 20 }}>
          <span className={detailStyles.label}>{i18n('detail.vertical14')}</span>
          <Input value={i18n('detail.vertical15')} />
        </Col>
        <Col span={6}>
          <span className={detailStyles.label}>{i18n('detail.vertical16')}</span>
          <Input value={i18n('detail.vertical17')} />
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
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const { expenseData, expenseColumns } = props
  return (
    <>
      <Button type="primary" style={{ margin: '16px 20px', alignSelf: 'flex-start' }}>
        {i18n('detail.vertical13')}
      </Button>
      <Row gutter={80}>
        <Col span={6} style={{ marginLeft: 20 }}>
          <span className={detailStyles.label}>{i18n('detail.vertical14')}</span>
          <Input value={i18n('detail.vertical15')} />
        </Col>
        <Col span={6}>
          <span className={detailStyles.label}>{i18n('detail.vertical16')}</span>
          <Input value={i18n('detail.vertical18')} />
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
