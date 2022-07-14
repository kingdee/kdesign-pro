import React from 'react'
import { Space, Button, Collapse, Row, Col, Input, Switch, Radio, Form, Table, Message } from '@kdcloudjs/kdesign'
import classnames from 'classnames'
import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import { getDetailBasic } from '@/services/detail'

const customerColumns = [
  { code: 'index', lock: true, width: 80, name: '#', render: (a: any, b: any, rowIndex: number) => rowIndex + 1 },
  { code: 'building', width: 200, name: '楼栋' },
  { code: 'unit', width: 200, name: '单元' },
  { code: 'customer', width: 200, name: '房间客户' },
  { code: 'type', width: 200, name: '客户类型' },
  { code: 'date', width: 200, name: '迁入日期' },
]

export default function (props: any) {
  const [form] = Form.useForm()
  const [basicInfo, setBasicInfo] = React.useState<Record<string, any>>({})
  const [reductionRule, setReductionRule] = React.useState<Record<string, any>>({})
  const [costSelected, setCostSelected] = React.useState<Array<string>>([])
  const [customerSelected, setCustomerSelected] = React.useState<Array<string>>([])
  const [costData, setCostData] = React.useState<Array<any>>([])
  const [customerData, setCustomerData] = React.useState<Array<any>>([])

  const costSelection = {
    type: 'checkbox',
    value: costSelected,
    onChange: setCostSelected,
  }

  const customerSelection = {
    type: 'checkbox',
    value: customerSelected,
    onChange: setCustomerSelected,
  }

  async function getResources() {
    const { basicInfo, reductionRule, costData, customerData } = await getDetailBasic()
    setBasicInfo(basicInfo)
    setReductionRule(reductionRule)
    setCostData(costData)
    setCustomerData(customerData)
  }

  React.useEffect(() => {
    getResources()
  }, [])

  const handleAddCostLine = (e: React.MouseEvent) => {
    setCostData([...costData, { code: Math.random() * 1000, cost: `项目${costData.length}` }])
  }

  const handleDeleteCostLine = (e: React.MouseEvent) => {
    if (costSelected.length > 0) {
      const newCostData = costData.filter(({ code }) => !costSelected.includes(code))
      setCostData(newCostData)
      setCostSelected([])
    } else {
      Message.warning('请选择要删除的行！')
    }
  }

  const handleAddCustomerLine = (e: React.MouseEvent) => {
    const index = customerData.length + 1
    const mapPeri: Record<number, string> = {
      1: '年',
      2: '季',
      3: '月',
    }
    const newline = {
      code: Math.random() * 1000,
      building: index % 2 ? 'A栋' : 'B栋',
      unit: `${Math.ceil(Math.random() * 4)}单元`,
      customer: `客户${index}`,
      type: `${mapPeri[Math.ceil(Math.random() * 3)]}租`,
      date: `2021-${Math.ceil(Math.random() * 12)}-${Math.ceil(Math.random() * 28)}`,
    }

    setCustomerData([...customerData, newline])
  }

  const handleDeleteCustomerLine = (e: React.MouseEvent) => {
    if (customerSelected.length > 0) {
      const newCustomerData = customerData.filter(({ code }) => !customerSelected.includes(code))
      setCustomerData(newCustomerData)
      setCustomerSelected([])
    } else {
      Message.warning('请选择要删除的行！')
    }
  }

  const handleMoveUp = (record: Record<string, any>, rowIndex: number) => {
    if (rowIndex > 0) {
      const newCostData = [
        ...costData.slice(0, rowIndex - 1),
        record,
        costData[rowIndex - 1],
        ...costData.slice(rowIndex + 1),
      ]
      setCostData(newCostData)
    }
  }

  const handleMoveDown = (record: Record<string, any>, rowIndex: number) => {
    if (rowIndex < costData.length - 1) {
      const newCostData = [
        ...costData.slice(0, rowIndex),
        costData[rowIndex + 1],
        record,
        ...costData.slice(rowIndex + 2),
      ]
      setCostData(newCostData)
    }
  }

  const costColumns = [
    { code: 'index', lock: true, width: 80, name: '#', render: (a: any, b: any, rowIndex: number) => rowIndex + 1 },
    { code: 'cost', width: 200, name: '收费项目' },
    {
      code: 'sort',
      width: 200,
      name: '减免排序',
      render: (value: any, record: Record<string, any>, rowIndex: number) => (
        <Space className={detailStyles.extra} size={16}>
          <button type="button" onClick={handleMoveUp.bind(null, record, rowIndex)}>
            上移
          </button>
          <i className={detailStyles.split}></i>
          <button type="button" onClick={handleMoveDown.bind(null, record, rowIndex)}>
            下移
          </button>
        </Space>
      ),
    },
  ]

  return (
    <Form className={detailStyles.form} form={form} labelWidth={120}>
      <Space className={detailStyles.operation} size={12}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
        <Button type="primary">退出</Button>
      </Space>
      <Collapse
        className={classnames(globalStyles.container, detailStyles.collapse)}
        defaultActiveKey={['info', 'rule', 'cost', 'customer']}
      >
        <Collapse.Panel header={'基本信息'} panelKey="info">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              {basicInfo.project && (
                <Form.Item
                  required
                  label="项目"
                  name="project"
                  defaultValue={basicInfo.project}
                  validateTrigger="onBlur"
                >
                  <Input />
                </Form.Item>
              )}
            </Col>
            <Col span={6}>
              {basicInfo.code && (
                <Form.Item required label="任务编码" name="code" defaultValue={basicInfo.code} validateTrigger="onBlur">
                  <Input />
                </Form.Item>
              )}
            </Col>
            <Col span={6}>
              {basicInfo.settlement && (
                <Form.Item
                  required
                  label="结算方式"
                  name="settlement"
                  defaultValue={basicInfo.settlement}
                  validateTrigger="onBlur"
                >
                  <Input />
                </Form.Item>
              )}
            </Col>
            <Col span={6}>
              {basicInfo.allowance && (
                <Form.Item label="是否自动执行赠送减免" name="allowance" validateTrigger="onBlur">
                  <Switch defaultChecked={basicInfo.allowance} />
                </Form.Item>
              )}
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              {basicInfo.deduction && (
                <Form.Item label="是否按月抵扣" name="deduction" validateTrigger="onBlur">
                  <Switch defaultChecked={basicInfo.deduction} />
                </Form.Item>
              )}
            </Col>
            <Col span={18}>
              <Form.Item label="备注" name="memo" defaultValue={basicInfo.memo} validateTrigger="onBlur">
                <Input placeholder="无" />
              </Form.Item>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header={'减免规则'} panelKey="rule">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              {reductionRule.method && (
                <Form.Item
                  required
                  label="减免方式"
                  name="method"
                  defaultValue={reductionRule.method}
                  validateTrigger="onBlur"
                >
                  <Input />
                </Form.Item>
              )}
            </Col>
            <Col span={6}>
              {reductionRule.start && (
                <Form.Item
                  required
                  label="应收开始期间"
                  name="start"
                  defaultValue={reductionRule.start}
                  validateTrigger="onBlur"
                >
                  <Input />
                </Form.Item>
              )}
            </Col>
            <Col span={6}>
              {reductionRule.end && (
                <Form.Item
                  required
                  label="应收结束期间"
                  name="end"
                  defaultValue={reductionRule.end}
                  validateTrigger="onBlur"
                >
                  <Input />
                </Form.Item>
              )}
            </Col>
            <Col span={6}>
              {reductionRule['per-amount'] && (
                <Form.Item
                  required
                  label="每期减免金额"
                  name="per-amount"
                  defaultValue={reductionRule['per-amount']}
                  validateTrigger="onBlur"
                >
                  <Input />
                </Form.Item>
              )}
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <Form.Item label="减免金额" name="amount" validateTrigger="onBlur">
                <Radio.Group defaultValue={reductionRule.amount}>
                  <Radio value={1}>应收</Radio>
                  <Radio value={2}>违约金</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header={'减免费项'} panelKey="cost">
          {costData && (
            <Table
              style={{ maxHeight: 800, overflow: 'auto', margin: '0 30px 0 25px' }}
              dataSource={costData}
              columns={costColumns}
              columnResize
              primaryKey="code"
              rowSelection={costSelection}
            />
          )}
        </Collapse.Panel>
        <Collapse.Panel header={'减免客户'} panelKey="customer">
          {customerData && (
            <Table
              style={{ maxHeight: 800, overflow: 'auto', margin: '0 30px 0 25px' }}
              dataSource={customerData}
              columns={customerColumns}
              columnResize
              primaryKey="code"
              rowSelection={customerSelection}
            />
          )}
        </Collapse.Panel>
      </Collapse>
    </Form>
  )
}
