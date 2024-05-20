import { useState } from 'react'
import { Icon, Collapse, Row, Col, Input, Form, Button, Space, Upload, Table, DatePicker } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import formStyles from '../index.less'
import styles from './index.less'

export default function Proof() {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [form] = Form.useForm()
  const [index, setIndex] = useState(1)
  const [selected, setSelected] = useState<number[]>([])
  const [state, setState] = useState<any[]>([
    {
      index,
      subject: i18n('form.guid.proof1'),
      origin: i18n('form.guid.proof2'),
      rate: '100%',
      dimension: i18n('form.guid.proof3'),
    },
  ])

  const addItem = () => {
    const i = index + 1
    const list = [
      ...state,
      {
        index: i,
        subject: i18n('form.guid.proof1') + i,
        origin: i18n('form.guid.proof2'),
        dimension: i18n('form.guid.proof3'),
        rate: '100%',
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
      alert(i18n('form.guid.proof4'))
    }
  }

  const customerColumns = [
    { code: 'summary', width: 150, name: i18n('form.guid.proof5') },
    { code: 'subject', width: 150, name: i18n('form.guid.proof6') },
    { code: 'currency', width: 150, name: i18n('form.guid.proof7') },
    { code: 'origin', width: 150, name: i18n('form.guid.proof8') },
    { code: 'rate', width: 150, name: i18n('form.guid.proof9') },
    { code: 'dimension', width: 150, name: i18n('form.guid.proof10') },
    { code: 'unit', width: 150, name: i18n('form.guid.proof11') },
  ]

  const rowSelection = {
    type: 'checkbox',
    value: selected,
    onChange: setSelected,
  }

  const dragButton = (
    <div>
      <Icon type="add" style={{ fontSize: 16, color: '#666', fontWeight: 'bolder' }} />
      <div>{i18n('form.guid.proof12')}</div>
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

  const { avatar = 'avatar.png' } = JSON.parse((sessionStorage.getItem('user') || '{}') as any)

  return (
    <Collapse
      className={formStyles.collapse}
      defaultActiveKey={['basic', 'proof', 'amount', 'detail', 'attachment']}
      style={{ overflow: 'overlay' }}
    >
      <Collapse.Panel header={i18n('basic')} panelKey="basic">
        <div style={{ display: 'flex' }}>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <img src={(window as any).routerBase + avatar} />
            </div>
            <ul className={styles.attrs}>
              <li>
                <h3>{i18n('form.guid.proof13')}</h3>
              </li>
              <li>
                {i18n('form.guid.proof14')}： {i18n('form.guid.proof15')}
              </li>
              <li>
                {i18n('form.guid.proof16')}： {i18n('form.guid.proof17')}
              </li>
            </ul>
          </div>
          <Form form={form} labelWidth={100} style={{ flex: 'auto' }}>
            <Row gutter={[80, 22]} className={formStyles.row}>
              <Col span={8}>
                <Form.Item required label={i18n('form.guid.proof18')} name="subject" validateTrigger="onBlur">
                  <Input defaultValue="TempAp-201902-0000012" suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item required label={i18n('form.guid.proof19')} name="date" validateTrigger="onBlur">
                  <DatePicker defaultValue={new Date('2019-02-10')} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item required label={i18n('form.guid.proof20')} name="code" validateTrigger="onBlur">
                  <Input defaultValue="RQX201902141500" suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item required label={i18n('form.guid.proof21')} name="name" validateTrigger="onBlur">
                  <Input defaultValue={i18n('form.guid.proof22')} suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Collapse.Panel>
      <Collapse.Panel header={i18n('form.guid.proof23')} panelKey="proof">
        <Form form={form} labelWidth={100}>
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item required label={i18n('form.guid.proof24')} name="date1" validateTrigger="onBlur">
                <Input defaultValue={i18n('form.guid.proof25')} suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.proof26')} name="type" required validateTrigger="onBlur">
                <Input defaultValue={i18n('form.guid.proof27')} suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.proof28')} name="transfer" required validateTrigger="onBlur">
                <Input defaultValue={i18n('form.guid.proof29')} suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.proof30')} name="info" required validateTrigger="onBlur">
                <Input defaultValue="" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.proof31')} name="sort" required validateTrigger="onBlur">
                <Input defaultValue={i18n('form.guid.proof32')} suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label={i18n('form.guid.proof33')} name="number" validateTrigger="onBlur">
                <Input defaultValue="" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Collapse.Panel>
      <Collapse.Panel
        header={i18n('form.guid.proof34')}
        panelKey="detail"
        extra={
          <Space className={formStyles.extra} size={16}>
            <button onClick={addItem}>{i18n('form.guid.proof35')}</button>
            <i className={formStyles.split} />
            <button onClick={delItem}>{i18n('form.guid.proof36')}</button>
          </Space>
        }
      >
        <Table dataSource={state} columns={customerColumns} rowSelection={rowSelection as any} primaryKey="index" />
      </Collapse.Panel>
      <Collapse.Panel header={i18n('form.guid.proof37')} panelKey="attachment">
        <Upload {...uploadProps} style={{ display: 'inline-block' }}>
          <Button type="ghost" icon={<Icon type="upload" />}>
            {i18n('form.guid.proof38')}
          </Button>
        </Upload>
        <span style={{ fontSize: 12, color: '#999', marginLeft: 20 }}>
          {i18n('form.guid.proof39')}ctrl+v{i18n('form.guid.proof40')}
        </span>
        <Upload.Dragger {...uploadProps} style={{ width: '100%', marginTop: 10 }}>
          {dragButton}
        </Upload.Dragger>
      </Collapse.Panel>
    </Collapse>
  )
}
