import React, { cloneElement, useEffect, useState } from 'react'
import {
  Pagination,
  Space,
  Button,
  Collapse,
  Row,
  Col,
  Input,
  Tabs,
  Radio,
  Select,
  TextArea,
  Form,
  Timeline,
  Icon,
} from '@kdcloudjs/kdesign'
import classnames from 'classnames'
import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import styles from './index.less'
import { getDetailColumns } from '@/services/detail'

const { Group } = Radio
const { Option } = Select

const TaskHandle = () => {
  const [form] = Form.useForm()
  return (
    <Form className={detailStyles.form} form={form} labelWidth={120}>
      <ul className={styles.task}>
        <li>
          <Form.Item label="单据编号" name="code" validateTrigger="onBlur">
            <Group style={{ marginTop: 8 }}>
              <Radio value="a" radioType="square">
                审批
              </Radio>
              <Radio value="b" radioType="square">
                移交
              </Radio>
            </Group>
          </Form.Item>
        </li>
        <li>
          <Form.Item required label="审批决策" name="decision" validateTrigger="onBlur">
            <Select style={{ width: '100%' }}>
              <Option value="1">同意</Option>
              <Option value="2">不同意</Option>
            </Select>
          </Form.Item>
        </li>
        <li>
          <Form.Item label="下一步节点" name="nextNode" validateTrigger="onBlur">
            <Input value="二级审批-吴欣艾" />
          </Form.Item>
        </li>
        <li>
          <Form.Item required label="审批意见" name="opinion" validateTrigger="onBlur">
            <TextArea autoSize={{ minRows: 4, maxRows: 6 }} borderType="bordered" style={{ marginTop: 6 }} />
          </Form.Item>
        </li>
      </ul>
      <Button htmlType="submit" type="primary" style={{ width: 90, margin: '0 auto' }}>
        提交
      </Button>
    </Form>
  )
}

const { avatar } = JSON.parse(sessionStorage.getItem('user') as any)

const ApprovalRecord = ({ records }: { records: Array<any> }) => {
  return (
    <Timeline className={styles.records}>
      {records.map((item: any, index) => (
        <Timeline.Item
          dot={<Icon type="right-solid" style={{ fontSize: 16 }} />}
          color="green"
          key={index}
          style={{ paddingBottom: 10 }}
        >
          <div className={styles.item}>
            <div className={styles.avatar}>
              <img src={`${(window as any).routerBase}${avatar}`} />
            </div>
            <div className={styles.attr}>
              <h4 className={styles.title}>
                {index === 0 ? (
                  <>
                    {item.title.slice(0, 2)}
                    <Icon type="material" />
                    {item.title.slice(2)}
                  </>
                ) : (
                  item.title
                )}
              </h4>
              <span className={styles.time}>
                {item.time}
                {item.submit && <a>提交申请</a>}
              </span>
            </div>
            <Icon className={styles.toMessage} type="communication-solid" />
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}

const panes = [
  { name: '任务处理', component: <TaskHandle /> },
  { name: '审批记录', component: <ApprovalRecord records={[]} /> },
]

export default () => {
  const initalResources = { basicInfo: {}, saleInfo: {}, records: [] }
  const [resources, setResources] = useState<Record<string, any>>(initalResources)

  function getResources() {
    getDetailColumns().then((rs) => {
      setResources(rs)
    })
  }

  useEffect(() => {
    getResources()
  }, [])

  const { basicInfo, saleInfo, records } = resources

  return (
    <div className={styles.columns}>
      <div className={styles.topPanel}>
        <Space size={12}>
          <Button type="primary">查看流程图</Button>
          <Button type="primary">传阅</Button>
          <Button type="primary">协办</Button>
          <Button type="primary">加签</Button>
          <Button type="primary">退出</Button>
        </Space>
        <Pagination pageType="bill" defaultCurrent={2} total={50} />
      </div>
      <div className={classnames(globalStyles.container, styles.layout)}>
        <Collapse className={detailStyles.collapse} defaultActiveKey={['base', 'sale']}>
          <Collapse.Panel header="基本信息" panelKey="base">
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>单据编号</span>
                  <Input value={basicInfo.code} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>单据类型</span>
                  <Input value={basicInfo.billType} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>业务类型</span>
                  <Input value={basicInfo.businessType} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>订单日期</span>
                  <Input value={basicInfo.date} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>单据状态</span>
                  <Input value={basicInfo.status} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={24}>
                <div>
                  <span className={detailStyles.label}>备注</span>
                  <Input placeholder="无" value={basicInfo.memo} />
                </div>
              </Col>
            </Row>
          </Collapse.Panel>
          <Collapse.Panel header="销售信息" panelKey="sale">
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>销售组织</span>
                  <Input value={saleInfo.organization} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>销售部门</span>
                  <Input placeholder="无" value={saleInfo.department} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>销售组</span>
                  <Input value={saleInfo.team} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>销售员</span>
                  <Input value={saleInfo.saler} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>客户</span>
                  <Input value={saleInfo.customer} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>联系人</span>
                  <Input placeholder="无" value={saleInfo.contact} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>销售员</span>
                  <Input placeholder="无" value={null} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>联系地址</span>
                  <Input placeholder="无" value={saleInfo.contactAddress} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>收货方</span>
                  <Input placeholder="无" value={saleInfo.deliver} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>收货联系人</span>
                  <Input placeholder="无" value={saleInfo.receipt} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>收货地址</span>
                  <Input placeholder="无" value={saleInfo.shippingAddress} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>收票方</span>
                  <Input value={saleInfo.ticket} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>付款方</span>
                  <Input value={saleInfo.payer} />
                </div>
              </Col>
            </Row>
          </Collapse.Panel>
        </Collapse>
        <div className={styles.tabs}>
          <Tabs activeKey="任务处理">
            {panes.map((pane) => (
              <Tabs.TabPane key={pane.name} tab={pane.name}>
                {pane.name === '审批记录' ? cloneElement(pane.component, { records }) : pane.component}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
