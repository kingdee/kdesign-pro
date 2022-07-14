import {
  Icon,
  Row,
  Col,
  Input,
  Switch,
  Steps,
  Step,
  Button,
  Space,
  Tabs,
  Select,
  Form,
  Collapse,
  Empty,
} from '@kdcloudjs/kdesign'
import classnames from 'classnames'

import globalStyles from '@/layouts/global.less'
import formStyles from '../index.less'
import styles from './index.less'

const panes = [
  '支付主体',
  '发薪核算组',
  '发薪状态',
  // '开始发薪年月',
  // '预计发薪状态变化日期',
  // '挂靠行政组织',
  // '计薪人员组',
  // '生效日期',
  // '失效日期',
]

const OperationRecord = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.rules}>
          <span className={styles.label}>默认值：</span>
          <Row gutter={10} style={{ width: '60%' }}>
            <Col span={6}>
              <Input defaultValue="录入内容" borderType="bordered" suffix={<Icon type="search" />} />
            </Col>
            <Col span={5}>
              <Select borderType="bordered" style={{ width: '100%' }} size="small">
                {['等于', '大于', '小于'].map((value) => (
                  <Select.Option key={value} value={value}>
                    {value}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={5}>
              <Select borderType="bordered" style={{ width: '100%' }} defaultValue="值" size="small">
                {['值'].map((value) => (
                  <Select.Option key={value} value={value}>
                    {value}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={8}>
              <Input borderType="bordered" />
            </Col>
          </Row>
          <span className={styles.switch}>
            是否通用 <Switch defaultChecked={true} />
          </span>
        </div>
      </div>
      <div className={styles.box}>
        <header className={styles.head}>
          <span>特殊规则一</span>
          <a href="true" onClick={(e) => e.preventDefault()}>
            删除
          </a>
        </header>
        <div className={styles.cont}>
          <div className={styles.rules}>
            <span className={styles.label}>条件：</span>
            <Row gutter={[10, 10]} style={{ width: '60%', marginBottom: 20 }}>
              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Input defaultValue="行政组织" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Button ghost type="primary">
                  <Icon type="add" /> 添加条件
                </Button>
              </Col>
            </Row>
          </div>
          <div className={styles.rules}>
            <span className={styles.label}>结果：</span>
            <Row gutter={[10, 10]} style={{ width: '60%' }}>
              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <header className={styles.head}>
          <span>特殊规则二</span>
          <a href="true" onClick={(e) => e.preventDefault()}>
            删除
          </a>
        </header>
        <div className={styles.cont}>
          <div className={styles.rules}>
            <span className={styles.label}>条件：</span>
            <Row gutter={[10, 10]} style={{ width: '60%', marginBottom: 20 }}>
              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Button ghost type="primary">
                  <Icon type="add" /> 添加条件
                </Button>
              </Col>
            </Row>
          </div>
          <div className={styles.rules}>
            <span className={styles.label}>默认值：</span>
            <Row gutter={[10, 10]} style={{ width: '60%' }}>
              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div>
        <Button type="primary" ghost className={styles.add}>
          <Icon type="add" /> 添加特殊规则
        </Button>
      </div>
    </>
  )
}

const PaymentSubject = () => {
  const [form] = Form.useForm()
  return (
    <Collapse defaultActiveKey={'panel_1'}>
      <Collapse.Panel header={'支付主体'} panelKey="panel_1">
        <Form labelWidth={80} form={form} layout="inline">
          <Form.Item label="支付单位" name="layout" required>
            <Input value="环宇科技有限公司" />
          </Form.Item>
          <span style={{ display: 'inline-block', width: 20 }}></span>
          <Form.Item label="付款卡号" name="note" required>
            <Input value="239238****23840923" />
          </Form.Item>
        </Form>
      </Collapse.Panel>
    </Collapse>
  )
}

export default function (props: any) {
  const mapCont: Record<string, JSX.Element> = {
    发薪核算组: <OperationRecord />,
    支付主体: <PaymentSubject />,
    发薪状态: (
      <div style={{ backgroundColor: '#fff', padding: 80 }}>
        <Empty />
      </div>
    ),
  }

  return (
    <div className={classnames(formStyles.form, styles.container)}>
      <div className={formStyles.panel}>
        <Steps className={formStyles.steps} current={2} icons={{ finish: <Icon type="right-bold" /> }}>
          <Step title={<span style={{ color: '#1BA854' }}>基本信息</span>} />
          <Step title={<span style={{ color: '#1BA854' }}>发薪活动设置</span>} />
          <Step title="字段取值规则" />
          <Step title="字段匹配" />
        </Steps>
        <Space size={12} style={{ padding: '10px 40px 10px 18px', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}>
          <Button type="primary">上一步</Button>
          <Button type="primary">下一步</Button>
          <Button type="primary">保存</Button>
          <Button type="primary">退出</Button>
        </Space>
      </div>
      <div className={classnames(globalStyles.container, styles.tabs)}>
        <div className={styles.actions}>
          <span>字段</span>
          <Icon type="delete" />
          <Icon type="add" />
        </div>
        <Tabs type="card" position="left" defaultActiveKey={'发薪核算组'}>
          {panes.map((pane: string) => (
            <Tabs.TabPane key={pane} tab={pane}>
              {mapCont[pane]}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
