import React, { useEffect, useState } from 'react'
import { Space, Button, Collapse, Row, Col, Input, Switch, Radio, Form, Table } from '@kdcloudjs/kdesign'
import classnames from 'classnames'
import { useIntl } from 'umi'
import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import { getDetailBasic } from '@/services/detail'

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })
  const [form] = Form.useForm()
  const [basicInfo, setBasicInfo] = useState<Record<string, any>>({})
  const [reductionRule, setReductionRule] = useState<Record<string, any>>({})
  const [costSelected, setCostSelected] = useState<Array<string>>([])
  const [customerSelected, setCustomerSelected] = useState<Array<string>>([])
  const [costData, setCostData] = useState<Array<any>>([])
  const [customerData, setCustomerData] = useState<Array<any>>([])

  const customerColumns = [
    { code: 'index', lock: true, width: 80, name: '#', render: (a: any, b: any, rowIndex: number) => rowIndex + 1 },
    { code: 'building', width: 200, name: i18n('detail.customer2') },
    { code: 'unit', width: 200, name: i18n('detail.customer3') },
    { code: 'customer', width: 200, name: i18n('detail.customer4') },
    { code: 'type', width: 200, name: i18n('detail.customer5') },
    { code: 'date', width: 200, name: i18n('detail.customer6') },
  ]

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
    const { basicInfo: bi, reductionRule: rr, costData: cd, customerData: cud } = await getDetailBasic()
    setBasicInfo(bi)
    setReductionRule(rr)
    setCostData(cd)
    setCustomerData(cud)
  }

  useEffect(() => {
    getResources()
  }, [])

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
    { code: 'cost', width: 200, name: i18n('detail.rule2') },
    {
      code: 'sort',
      width: 200,
      name: i18n('detail.rule3'),
      render: (value: any, record: Record<string, any>, rowIndex: number) => (
        <Space className={detailStyles.extra} size={16}>
          <button type="button" onClick={handleMoveUp.bind(null, record, rowIndex)}>
            {i18n('detail.rule4')}
          </button>
          <i className={detailStyles.split} />
          <button type="button" onClick={handleMoveDown.bind(null, record, rowIndex)}>
            {i18n('detail.rule5')}
          </button>
        </Space>
      ),
    },
  ]

  return (
    <Form className={detailStyles.form} form={form} labelWidth={120}>
      <Space className={detailStyles.operation} size={12}>
        <Button type="primary" htmlType="submit">
          {i18n('save')}
        </Button>
        <Button type="primary">{i18n('quit')}</Button>
      </Space>
      <Collapse
        className={classnames(globalStyles.container, detailStyles.collapse)}
        defaultActiveKey={['info', 'rule', 'cost', 'customer']}
      >
        <Collapse.Panel header={i18n('basic')} panelKey="info">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              {basicInfo.project && (
                <Form.Item
                  required
                  label={i18n('detail.basic2')}
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
                <Form.Item
                  required
                  label={i18n('detail.basic3')}
                  name="code"
                  defaultValue={basicInfo.code}
                  validateTrigger="onBlur"
                >
                  <Input />
                </Form.Item>
              )}
            </Col>
            <Col span={6}>
              {basicInfo.settlement && (
                <Form.Item
                  required
                  label={i18n('detail.basic4')}
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
                <Form.Item label={i18n('detail.basic5')} name="allowance" validateTrigger="onBlur">
                  <Switch defaultChecked={basicInfo.allowance} />
                </Form.Item>
              )}
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              {basicInfo.deduction && (
                <Form.Item label={i18n('detail.basic6')} name="deduction" validateTrigger="onBlur">
                  <Switch defaultChecked={basicInfo.deduction} />
                </Form.Item>
              )}
            </Col>
            <Col span={18}>
              <Form.Item label={i18n('remark')} name="memo" defaultValue={basicInfo.memo} validateTrigger="onBlur">
                <Input placeholder={i18n('empty')} />
              </Form.Item>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header={i18n('detail.reduce1')} panelKey="rule">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              {reductionRule.method && (
                <Form.Item
                  required
                  label={i18n('detail.reduce2')}
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
                  label={i18n('detail.reduce3')}
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
                  label={i18n('detail.reduce4')}
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
                  label={i18n('detail.reduce5')}
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
              <Form.Item label={i18n('detail.reduce8')} name="amount" validateTrigger="onBlur">
                <Radio.Group defaultValue={reductionRule.amount}>
                  <Radio value={1}>{i18n('detail.reduce6')}</Radio>
                  <Radio value={2}>{i18n('detail.reduce7')}</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header={i18n('detail.rule1')} panelKey="cost">
          {costData && (
            <Table
              style={{ maxHeight: 800, overflow: 'auto', margin: '0 30px 0 25px' }}
              dataSource={costData}
              columns={costColumns}
              columnResize
              primaryKey="code"
              rowSelection={costSelection as any}
            />
          )}
        </Collapse.Panel>
        <Collapse.Panel header={i18n('detail.customer1')} panelKey="customer">
          {customerData && (
            <Table
              style={{ maxHeight: 800, overflow: 'auto', margin: '0 30px 0 25px' }}
              dataSource={customerData}
              columns={customerColumns}
              columnResize
              primaryKey="code"
              rowSelection={customerSelection as any}
            />
          )}
        </Collapse.Panel>
      </Collapse>
    </Form>
  )
}
