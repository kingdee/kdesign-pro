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
import formStyles from '../index.less'
import styles from './index.less'

const { Option } = Select

export default function Contact() {
  const [form] = Form.useForm()
  const [index, setIndex] = useState(1)
  const [selected, setSelected] = useState<number[]>([])
  const [state, setState] = useState<any[]>([
    { index, material: '绳子', payable: '260,000.00', discount: '1000', realpay: '268,000.00' },
  ])

  const addItem = () => {
    const i = index + 1
    const list = [
      ...state,
      {
        index: i,
        material: `绳子${i}`,
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
      alert('请选中后删除')
    }
  }

  const customerColumns = [
    { code: 'material', width: 150, name: '物料' },
    { code: 'payable', width: 150, name: '应付金额' },
    { code: 'discount', width: 150, name: '现金折扣' },
    { code: 'realpay', width: 150, name: '实付金额' },
    { code: 'use', width: 150, name: '自己用途' },
    { code: 'order', width: 150, name: '采购订单号' },
    { code: 'lockAmount', width: 150, name: '已锁定金额' },
    { code: 'settleAmount', width: 150, name: '已结算金额' },
    { code: 'noSettleAmount', width: 150, name: '未结算金额' },
    { code: 'memo', width: 150, name: '备注' },
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

  return (
    <Collapse
      className={formStyles.collapse}
      defaultActiveKey={['contact', 'pay', 'amount', 'detail', 'attachment']}
      style={{ overflow: 'overlay' }}
    >
      <Collapse.Panel header={'联系信息'} panelKey="contact">
        <Form form={form} labelWidth={100}>
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item required label="联系人" name="contacts" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="联系部门" name="department" required validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="联系人职务" name="title" required validateTrigger="onBlur">
                <Select placeholder="请输入名称" style={{ width: '100%' }}>
                  <Option value="title1">主管</Option>
                  <Option value="title2">经理</Option>
                  <Option value="title3">总经理</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="联系办公室电话" name="phone" required validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="联系人手机" name="mobile" required validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="联系人邮箱" name="email" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="其它方式" name="other" validateTrigger="onBlur">
                <Input placeholder="请输入内容" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Collapse.Panel>
      <Collapse.Panel header={'付款信息'} panelKey="pay">
        <Row gutter={[100, 22]} className={formStyles.row}>
          <Col span={12} className={styles.info}>
            <h2 className={styles.title}>
              付款方{' '}
              <span>
                即时余额 <Icon type="tips" />
                <strong>￥0.00</strong>
              </span>
            </h2>
            <div className={styles.list}>
              <img src={require('@/assets/images/pay_pic.png')} />
              <ul>
                <li>
                  <h3>
                    深圳环宇科技有限公司
                    <Button type="ghost" size="small">
                      切换
                    </Button>
                  </h3>
                </li>
                <li>
                  <span>付款账号</span>4555 2145 2145 2145 5
                </li>
                <li>
                  <span>付款银行</span>中国工商银行股份有限公司南京高新园支行
                </li>
              </ul>
            </div>
          </Col>
          <Col span={12} className={styles.info}>
            <h2 className={styles.title}>收款方</h2>
            <div className={styles.list}>
              <img src={require('@/assets/images/receive_pic.png')} />
              <ul>
                <li>
                  <h3>
                    深圳蓝海商贸有限公司
                    <Button type="ghost" size="small">
                      切换
                    </Button>
                  </h3>
                </li>
                <li>
                  <span>收款账号</span>4367 1234 1234 1314 6
                </li>
                <li>
                  <span>收款银行</span>中国建设银行股份有限公司深圳高新园支行
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Collapse.Panel>
      <Collapse.Panel header={'金额栏'} panelKey="amount">
        <Form form={form} labelWidth={100}>
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item required label="币种" name="currency" validateTrigger="onBlur">
                <Input defaultValue="人民币" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="结算方式" name="settlement" required validateTrigger="onBlur">
                <Input defaultValue="-" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="结算号" name="no" required validateTrigger="onBlur">
                <Input defaultValue="340284302" suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="结算日期" name="date" required validateTrigger="onBlur">
                <DatePicker defaultValue={new Date('2019-02-10')} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Collapse.Panel>
      <Collapse.Panel
        header={'付款明细'}
        panelKey="detail"
        extra={
          <Space className={formStyles.extra} size={16}>
            <button onClick={addItem}>增行</button>
            <i className={formStyles.split}></i>
            <button onClick={delItem}>删行</button>
          </Space>
        }
      >
        <Table dataSource={state} columns={customerColumns} rowSelection={rowSelection} primaryKey={'index'} />
      </Collapse.Panel>
      <Collapse.Panel header={'附件'} panelKey="attachment">
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
