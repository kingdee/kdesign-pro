import { useState } from 'react'
import { Icon, Collapse, Row, Col, Input, Form, Button, Switch, Space, Upload, Table } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import formStyles from '../index.less'
import styles from './index.less'

export default function Goods() {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [form] = Form.useForm()
  const [index, setIndex] = useState(1)
  const [selected, setSelected] = useState<number[]>([])
  const [state, setState] = useState<any[]>([
    {
      index,
      goods: i18n('form.guid.goods1'),
      subject: i18n('form.guid.goods2'),
      dimension: i18n('form.guid.goods3'),
    },
  ])

  const addItem = () => {
    const i = index + 1
    const list = [
      ...state,
      {
        index: i,
        goods: i18n('form.guid.goods1') + i,
        subject: i18n('form.guid.goods2'),
        dimension: i18n('form.guid.goods3'),
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
      alert(i18n('form.guid.goods4'))
    }
  }

  const customerColumns = [
    { code: 'goods', width: 150, name: i18n('form.guid.goods5') },
    { code: 'subject', width: 150, name: i18n('form.guid.goods6') },
    { code: 'currency', width: 150, name: i18n('form.guid.goods7') },
    { code: 'origin', width: 150, name: i18n('form.guid.goods8') },
    { code: 'no', width: 150, name: i18n('form.guid.goods9') },
    { code: 'dimension', width: 150, name: i18n('form.guid.goods10') },
    { code: 'unit', width: 150, name: i18n('form.guid.goods11') },
  ]

  const rowSelection = {
    type: 'checkbox',
    value: selected,
    onChange: setSelected,
  }

  const dragButton = (
    <div>
      <Icon type="add" style={{ fontSize: 16, color: '#666', fontWeight: 'bolder' }} />
      <div>{i18n('form.guid.goods12')}</div>
    </div>
  )

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

  return (
    <Collapse
      className={formStyles.collapse}
      defaultActiveKey={['info', 'features', 'bar', 'attachment']}
      style={{ overflow: 'overlay' }}
    >
      <Collapse.Panel header={i18n('form.guid.goods13')} panelKey="info">
        <Form form={form} labelWidth={100}>
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item required label={i18n('form.guid.goods14')} name="title" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods15')} name="name" required validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods16')} name="category" required validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods17')} name="tags" required validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods18')} name="barCode" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods19')} name="size" validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods20')} name="brand" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods8')} name="origin" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods21')} name="aid" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods11')} name="unit" validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods22')} name="type" validateTrigger="onBlur">
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.goods22')} name="type" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Collapse.Panel>
      <Collapse.Panel header={i18n('form.guid.goods23')} panelKey="features">
        <Space size={60} className={styles.features}>
          <div>
            {i18n('form.guid.goods24')}
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            {i18n('form.guid.goods25')}
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            {i18n('form.guid.goods26')}
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            {i18n('form.guid.goods27')}
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            {i18n('form.guid.goods28')}
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            {i18n('form.guid.goods29')}
            <Switch defaultChecked className={styles.switch} />
          </div>
        </Space>
        <Space size={60} className={styles.features}>
          <div>
            {i18n('form.guid.goods30')}
            <Switch defaultChecked className={styles.switch} />
          </div>
        </Space>
        <Space size={60} className={styles.features}>
          <div>
            {i18n('form.guid.goods31')}
            <Switch defaultChecked className={styles.switch} />
          </div>
        </Space>
      </Collapse.Panel>
      <Collapse.Panel
        header={i18n('form.guid.goods32')}
        panelKey="bar"
        extra={
          <Space className={formStyles.extra} size={16}>
            <button onClick={addItem}>{i18n('form.guid.goods33')}</button>
            <i className={formStyles.split} />
            <button onClick={delItem}>{i18n('form.guid.goods34')}</button>
          </Space>
        }
      >
        <Table dataSource={state} columns={customerColumns} rowSelection={rowSelection as any} primaryKey="index" />
      </Collapse.Panel>
      <Collapse.Panel header={i18n('form.guid.goods35')} panelKey="attachment">
        <Upload {...uploadProps} style={{ display: 'inline-block' }}>
          <Button type="ghost" icon={<Icon type="upload" />}>
            {i18n('form.guid.goods36')}
          </Button>
        </Upload>
        <span style={{ fontSize: 12, color: '#999', marginLeft: 20 }}>
          {i18n('form.guid.goods37')}ctrl+v{i18n('form.guid.goods38')}
        </span>
        <Upload.Dragger {...uploadProps} style={{ width: '100%', marginTop: 10 }}>
          {dragButton}
        </Upload.Dragger>
      </Collapse.Panel>
    </Collapse>
  )
}
