import { Space, Button, Icon, Collapse, Row, Col, Input, Switch, Upload, Form, Table } from '@kdcloudjs/kdesign'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'umi'
import { getFormBasic } from '@/services/form'
import formStyles from '../index.less'

const uploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info: any) {
    const { status } = info.file
    if (status === 'done') {
      console.info('file uploaded successfully.')
    } else if (status === 'error') {
      console.error('file upload failed.')
    }
  },
}

export default () => {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [form] = Form.useForm()
  const [index, setIndex] = useState(1)
  const [selected, setSelected] = useState<number[]>([])
  const [state, setState] = useState<any[]>([])

  const dragButton = (
    <div>
      <Icon type="add" style={{ fontSize: 16, color: '#666', fontWeight: 'bolder' }} />
      <div>{i18n('form.basic1')}</div>
    </div>
  )

  const addItem = () => {
    const i = index + 1
    const list = [
      ...state,
      {
        index: i,
        material: i18n('form.basic2') + i,
        unit: i18n('form.basic3'),
        number: '1000',
        price: '10',
        taxPrice: undefined,
        originPrice: '15',
        gift: '-',
        discountWay: i18n('form.basic4'),
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
      alert(i18n('form.basic5'))
    }
  }

  const customerColumns = [
    { code: 'index', width: 100, name: '#' },
    { code: 'material', width: 150, name: i18n('form.basic6') },
    { code: 'unit', width: 150, name: i18n('form.basic7') },
    { code: 'number', width: 150, name: i18n('form.basic8') },
    { code: 'originPrice', width: 150, name: i18n('form.basic9') },
    { code: 'gift', width: 150, name: i18n('form.basic10') },
    {
      code: 'taxPrice',
      width: 150,
      name: i18n('form.basic11'),
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
          {i18n('form.basic12')}
        </div>
      ),
    },
    { code: 'price', name: i18n('form.basic13'), width: 100 },
  ]

  const rowSelection = {
    type: 'checkbox',
    value: selected,
    onChange: setSelected,
  }

  async function initPage() {
    const data = await getFormBasic()
    const { base, list } = data
    setState(list)
    form.setFieldsValue(base)
  }

  useEffect(() => {
    initPage()
  }, [lang])

  return (
    <div className={formStyles.form}>
      <Space className={formStyles.operation} size={12}>
        <Button type="primary">{i18n('form.basic14')}</Button>
        <Button.Dropdown type="similar" overlay={[{ value: 'enabled', label: i18n('form.basic15') }]}>
          {i18n('form.basic16')}
        </Button.Dropdown>
        <Button type="primary">{i18n('add')}</Button>
        <Button type="primary">{i18n('form.basic17')}</Button>
      </Space>

      <Collapse
        className={formStyles.collapse}
        defaultActiveKey={['basic', 'payable', 'attachment']}
        style={{ overflow: 'overlay' }}
      >
        <Collapse.Panel header={i18n('basic')} panelKey="basic">
          <Form form={form} labelWidth={100}>
            <Row gutter={[80, 22]} className={formStyles.row}>
              <Col span={6}>
                <Form.Item required label={i18n('form.basic18')} name="group" validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label={i18n('form.basic19')} name="code" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label={i18n('form.basic20')} name="date" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label={i18n('form.basic21')} name="type" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item required label={i18n('form.basic22')} name="supplier" validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label={i18n('form.basic22')} name="supplier2" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label={i18n('form.basic23')} name="payway" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label={i18n('form.basic21')} name="type2" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item required label={i18n('remark')} name="memo" validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label={i18n('form.basic24')} name="payGroup" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label={i18n('form.basic25')} name="taxType" required validateTrigger="onBlur">
                  <Input suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Collapse.Panel>
        <Collapse.Panel header={i18n('form.basic26')} panelKey="amount">
          {i18n('form.basic27')}
        </Collapse.Panel>
        <Collapse.Panel
          header={
            <div>
              {i18n('form.basic28')}
              <span className={formStyles.other}>
                {i18n('form.basic29')}：{i18n('form.basic30')}
              </span>
            </div>
          }
          panelKey="purchase"
        >
          {i18n('form.basic31')}
        </Collapse.Panel>
        <Collapse.Panel
          header={i18n('form.basic32')}
          panelKey="payable"
          extra={
            <Space className={formStyles.extra} size={16}>
              <button onClick={addItem}>{i18n('form.basic33')}</button>
              <i className={formStyles.split} />
              <button onClick={delItem}>{i18n('form.basic34')}</button>
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
        <Collapse.Panel header={i18n('form.basic35')} panelKey="attachment">
          <Upload {...uploadProps} style={{ display: 'inline-block' }}>
            <Button type="ghost" icon={<Icon type="upload" />}>
              {i18n('form.basic36')}
            </Button>
          </Upload>
          <span style={{ fontSize: 12, color: '#999', marginLeft: 20 }}>
            {i18n('form.basic37')}
            ctrl+v
            {i18n('form.basic38')}
          </span>
          <Upload.Dragger {...uploadProps} style={{ width: '100%', marginTop: 10 }}>
            {dragButton}
          </Upload.Dragger>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}
