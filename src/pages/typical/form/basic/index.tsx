import { Space, Button, Icon, Collapse, Row, Col, Input, Switch, Upload, Form, Table } from '@kdcloudjs/kdesign'
import React, { useEffect, useState } from 'react'
import { getFormBasic } from '@/services/form'
import formStyles from '../index.less'

const dragButton = (
  <div>
    <Icon type="add" style={{ fontSize: 16, color: '#666', fontWeight: 'bolder' }} />
    <div>点击或拖拽上传</div>
  </div>
)

const uploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info: any) {
    const { status } = info.file
    if (status === 'done') {
      console.info(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      console.error(`${info.file.name} file upload failed.`)
    }
  },
}

export default () => {
  const [form] = Form.useForm()
  const [index, setIndex] = useState(1)
  const [selected, setSelected] = useState<number[]>([])
  const [state, setState] = useState<any[]>([])

  const addItem = () => {
    const i = index + 1
    const list = [
      ...state,
      {
        index: i,
        material: `绳子${i}`,
        unit: '米',
        number: '1000',
        price: '￥10',
        taxPrice: undefined,
        originPrice: '￥15',
        gift: '-',
        discountWay: '空',
      },
    ]
    setState(list)
    setIndex(i)
  }

  const delItem = () => {
    if (selected.length) {
      const list = state.filter((d) => !selected.includes(d.index))
      setState(list)
      setSelected([])
    } else {
      alert('请选中后删除')
    }
  }

  const customerColumns = [
    { code: 'index', width: 100, name: '#' },
    { code: 'material', width: 150, name: '物料' },
    { code: 'unit', width: 150, name: '计价单位' },
    { code: 'number', width: 150, name: '计价数量' },
    { code: 'originPrice', width: 150, name: '单价' },
    { code: 'gift', width: 150, name: '赠品' },
    {
      code: 'taxPrice',
      width: 150,
      name: '含税单价',
      render: () => {
        return <Switch />
      },
    },
    {
      code: 'discountWay',
      width: 150,
      title: (
        <div>
          <span style={{ color: 'red' }}>*</span>
          折扣价格
        </div>
      ),
    },
    { code: 'price', name: '实际单价', width: 100 },
  ]

  const rowSelection = {
    type: 'checkbox',
    value: selected,
    onChange: setSelected,
  }

  async function init() {
    const data = await getFormBasic()
    const { base, list } = data
    setState(list)
    form.setFieldsValue(base)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div className={formStyles.form}>
      <Space className={formStyles.operation} size={12}>
        <Button type="primary">删除</Button>
        <Button.Dropdown type="similar" overlay={[{ value: 'enabled', label: '启用' }]}>
          禁用
        </Button.Dropdown>
        <Button type="primary">新增</Button>
        <Button type="primary">中止执行</Button>
      </Space>

      <Collapse
        className={formStyles.collapse}
        defaultActiveKey={['basic', 'payable', 'attachment']}
        style={{ overflow: 'overlay' }}
      >
        <Collapse.Panel header="基本信息" panelKey="basic">
          <Form form={form} labelWidth={100}>
            <Row gutter={[80, 22]} className={formStyles.row}>
              <Col span={6}>
                <Form.Item required label="应付组织" name="group" validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="单据编号" name="code" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="单据日期" name="date" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="单据类型" name="type" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item required label="供应商" name="supplier" validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="供应商" name="supplier2" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="付款方式" name="payway" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="单据类型" name="type2" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item required label="备注" name="memo" validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="付款组织" name="payGroup" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="计税类型" name="taxType" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Collapse.Panel>
        <Collapse.Panel header="金额信息" panelKey="amount">
          金额信息内容
        </Collapse.Panel>
        <Collapse.Panel
          header={
            <div>
              采购信息
              <span className={formStyles.other}>采购组织：环球科技深圳分公司</span>
            </div>
          }
          panelKey="purchase"
        >
          采购信息内容
        </Collapse.Panel>
        <Collapse.Panel
          header="应付明细"
          panelKey="payable"
          extra={
            <Space className={formStyles.extra} size={16}>
              <button onClick={addItem}>增行</button>
              <i className={formStyles.split} />
              <button onClick={delItem}>删行</button>
            </Space>
          }
        >
          <Table
            dataSource={state}
            columns={customerColumns as any}
            rowSelection={rowSelection as any}
            primaryKey="index"
          />
        </Collapse.Panel>
        <Collapse.Panel header="附件" panelKey="attachment">
          <Upload {...uploadProps} style={{ display: 'inline-block' }}>
            <Button type="ghost" icon={<Icon type="upload" />}>
              上传文件
            </Button>
          </Upload>
          <span style={{ fontSize: 12, color: '#999', marginLeft: 20 }}>支持ctrl+v粘贴截图</span>
          <Upload.Dragger {...uploadProps} style={{ width: '100%', marginTop: 10 }}>
            {dragButton}
          </Upload.Dragger>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}
