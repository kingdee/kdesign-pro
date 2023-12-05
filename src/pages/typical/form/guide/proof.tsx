import { useState } from 'react'
import { Icon, Collapse, Row, Col, Input, Form, Button, Space, Upload, Table, DatePicker } from '@kdcloudjs/kdesign'
import formStyles from '../index.less'
import styles from './index.less'

export default function Proof() {
  const [form] = Form.useForm()
  const [index, setIndex] = useState(1)
  const [selected, setSelected] = useState<number[]>([])
  const [state, setState] = useState<any[]>([
    { index, subject: '转账记录', origin: '按比例转出余额', rate: '100%', dimension: '自定义' },
  ])

  const addItem = () => {
    const i = index + 1
    const list = [
      ...state,
      {
        index: i,
        subject: `转账记录${i}`,
        origin: '按比例转出余额',
        rate: '100%',
        dimension: '自定义',
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
    { code: 'summary', width: 150, name: '摘要' },
    { code: 'subject', width: 150, name: '科目' },
    { code: 'currency', width: 150, name: '币种' },
    { code: 'origin', width: 150, name: '数据来源' },
    { code: 'rate', width: 150, name: '转账比例' },
    { code: 'dimension', width: 150, name: '核实维度' },
    { code: 'unit', width: 150, name: '计量单位' },
  ]

  const rowSelection = {
    type: 'checkbox',
    value: selected,
    onChange: setSelected,
  }

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

  const { avatar } = JSON.parse(sessionStorage.getItem('user') as any)

  return (
    <Collapse
      className={formStyles.collapse}
      defaultActiveKey={['basic', 'proof', 'amount', 'detail', 'attachment']}
      style={{ overflow: 'overlay' }}
    >
      <Collapse.Panel header="基本信息" panelKey="basic">
        <div style={{ display: 'flex' }}>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <img src={`${(window as any).routerBase}${avatar}`} />
            </div>
            <ul className={styles.attrs}>
              <li>
                <h3>张景玉</h3>
              </li>
              <li>性别： 男</li>
              <li>职位： 店长</li>
            </ul>
          </div>
          <Form form={form} labelWidth={100} style={{ flex: 'auto' }}>
            <Row gutter={[80, 22]} className={formStyles.row}>
              <Col span={8}>
                <Form.Item required label="核算主体" name="subject" validateTrigger="onBlur">
                  <Input defaultValue="TempAp-201902-0000012" suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item required label="单据日期" name="date" validateTrigger="onBlur">
                  <DatePicker defaultValue={new Date('2019-02-10')} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item required label="编码" name="code" validateTrigger="onBlur">
                  <Input defaultValue="RQX201902141500" suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item required label="名称" name="name" validateTrigger="onBlur">
                  <Input defaultValue="内容" suffix={<Icon type="search" />} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="生成凭证信息" panelKey="proof">
        <Form form={form} labelWidth={100}>
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item required label="凭证日期" name="date1" validateTrigger="onBlur">
                <Input defaultValue="期末最后一天" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="凭证类型" name="type" required validateTrigger="onBlur">
                <Input defaultValue="赊购" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="转账类型" name="transfer" required validateTrigger="onBlur">
                <Input defaultValue="普通转账" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="参考信息" name="info" required validateTrigger="onBlur">
                <Input defaultValue="" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="凭证分录顺序" name="sort" required validateTrigger="onBlur">
                <Input defaultValue="模板顺序" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="附件数" name="number" validateTrigger="onBlur">
                <Input defaultValue="" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Collapse.Panel>
      <Collapse.Panel
        header="转账信息"
        panelKey="detail"
        extra={
          <Space className={formStyles.extra} size={16}>
            <button onClick={addItem}>增行</button>
            <i className={formStyles.split} />
            <button onClick={delItem}>删行</button>
          </Space>
        }
      >
        <Table dataSource={state} columns={customerColumns} rowSelection={rowSelection as any} primaryKey="index" />
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
  )
}
