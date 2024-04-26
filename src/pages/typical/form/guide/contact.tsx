import { useState } from 'react'
import {
  Icon,
  Collapse,
  Row,
  Col,
  Input,
  Form,
  Button,
  Select,
  Space,
  Upload,
  Table,
  DatePicker,
} from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import formStyles from '../index.less'
import styles from './index.less'

const { Option } = Select

export default function Contact() {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [form] = Form.useForm()
  const [index, setIndex] = useState(1)
  const [selected, setSelected] = useState<number[]>([])
  const [state, setState] = useState<any[]>([
    { index, material: i18n('form.guid.contact1'), payable: '260,000.00', discount: '1000', realpay: '268,000.00' },
  ])

  const addItem = () => {
    const i = index + 1
    const list = [
      ...state,
      {
        index: i,
        material: i18n('form.guid.contact1') + i,
        payable: '260,000.00',
        discount: '1000',
        realpay: '268,000.00',
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
      alert(i18n('form.guid.contact2'))
    }
  }

  const customerColumns = [
    { code: 'material', width: 150, name: i18n('form.guid.contact3') },
    { code: 'payable', width: 150, name: i18n('form.guid.contact4') },
    { code: 'discount', width: 150, name: i18n('form.guid.contact5') },
    { code: 'realpay', width: 150, name: i18n('form.guid.contact6') },
    { code: 'use', width: 150, name: i18n('form.guid.contact7') },
    { code: 'order', width: 150, name: i18n('form.guid.contact8') },
    { code: 'lockAmount', width: 150, name: i18n('form.guid.contact9') },
    { code: 'settleAmount', width: 150, name: i18n('form.guid.contact10') },
    { code: 'noSettleAmount', width: 150, name: i18n('form.guid.contact11') },
    { code: 'memo', width: 150, name: i18n('remark') },
  ]

  const rowSelection = {
    type: 'checkbox',
    value: selected,
    onChange: setSelected,
  }

  const dragButton = (
    <div>
      <Icon type="add" style={{ fontSize: 16, color: '#666', fontWeight: 'bolder' }} />
      <div>{i18n('form.guid.contact12')}</div>
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
      defaultActiveKey={['contact', 'pay', 'amount', 'detail', 'attachment']}
      style={{ overflow: 'overlay' }}
    >
      <Collapse.Panel header={i18n('form.guid.contact13')} panelKey="contact">
        <Form form={form} labelWidth={100}>
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item required label={i18n('form.guid.contact14')} name="contacts" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.contact15')} name="department" required validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.contact16')} name="title" required validateTrigger="onBlur">
                <Select placeholder={i18n('form.guid.contact17')} style={{ width: '100%' }}>
                  <Option value="title1">{i18n('form.guid.contact18')}</Option>
                  <Option value="title2">{i18n('form.guid.contact19')}</Option>
                  <Option value="title3">{i18n('form.guid.contact20')}</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.contact21')} name="phone" required validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.contact22')} name="mobile" required validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.contact23')} name="email" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={i18n('form.guid.contact24')} name="other" validateTrigger="onBlur">
                <Input placeholder={i18n('form.guid.contact25')} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Collapse.Panel>
      <Collapse.Panel header={i18n('form.guid.contact26')} panelKey="pay">
        <Row gutter={[100, 22]} className={formStyles.row}>
          <Col span={12} className={styles.info}>
            <h2 className={styles.title}>
              {i18n('form.guid.contact27')}
              <span>
                {i18n('form.guid.contact28')}
                <Icon type="tips" />
                <strong>0.00</strong>
              </span>
            </h2>
            <div className={styles.list}>
              <img src={require('@/assets/images/pay_pic.png')} />
              <ul>
                <li>
                  <h3>
                    {i18n('form.guid.contact29')}
                    <Button type="ghost" size="small">
                      {i18n('form.guid.contact30')}
                    </Button>
                  </h3>
                </li>
                <li>
                  <span>{i18n('form.guid.contact31')}</span>
                  4555 2145 2145 2145 5
                </li>
                <li>
                  <span>{i18n('form.guid.contact32')}</span>
                  {i18n('form.guid.contact33')}
                </li>
              </ul>
            </div>
          </Col>
          <Col span={12} className={styles.info}>
            <h2 className={styles.title}>{i18n('form.guid.contact34')}</h2>
            <div className={styles.list}>
              <img src={require('@/assets/images/receive_pic.png')} />
              <ul>
                <li>
                  <h3>
                    {i18n('form.guid.contact35')}
                    <Button type="ghost" size="small">
                      {i18n('form.guid.contact30')}
                    </Button>
                  </h3>
                </li>
                <li>
                  <span>{i18n('form.guid.contact36')}</span>
                  4367 1234 1234 1314 6
                </li>
                <li>
                  <span>{i18n('form.guid.contact37')}</span>
                  {i18n('form.guid.contact38')}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Collapse.Panel>
      <Collapse.Panel header={i18n('form.guid.contact39')} panelKey="amount">
        <Form form={form} labelWidth={100}>
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item required label={i18n('form.guid.contact40')} name="currency" validateTrigger="onBlur">
                <Input defaultValue={i18n('form.guid.contact41')} suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.contact42')} name="settlement" required validateTrigger="onBlur">
                <Input defaultValue="-" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.contact43')} name="no" required validateTrigger="onBlur">
                <Input defaultValue="340284302" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.contact44')} name="date" required validateTrigger="onBlur">
                <DatePicker defaultValue={new Date('2019-02-10')} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Collapse.Panel>
      <Collapse.Panel
        header={i18n('form.guid.contact45')}
        panelKey="detail"
        extra={
          <Space className={formStyles.extra} size={16}>
            <button onClick={addItem}>{i18n('form.guid.contact46')}</button>
            <i className={formStyles.split} />
            <button onClick={delItem}>{i18n('form.guid.contact47')}</button>
          </Space>
        }
      >
        <Table dataSource={state} columns={customerColumns} rowSelection={rowSelection as any} primaryKey="index" />
      </Collapse.Panel>
      <Collapse.Panel header={i18n('form.guid.contact48')} panelKey="attachment">
        <Upload {...uploadProps} style={{ display: 'inline-block' }}>
          <Button type="ghost" icon={<Icon type="upload" />}>
            {i18n('form.guid.contact49')}
          </Button>
        </Upload>
        <span style={{ fontSize: 12, color: '#999', marginLeft: 20 }}>
          {i18n('form.guid.contact50')}ctrl+v{i18n('form.guid.contact51')}
        </span>
        <Upload.Dragger {...uploadProps} style={{ width: '100%', marginTop: 10 }}>
          {dragButton}
        </Upload.Dragger>
      </Collapse.Panel>
    </Collapse>
  )
}
