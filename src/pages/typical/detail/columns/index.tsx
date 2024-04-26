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
import { useIntl } from 'umi'
import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import styles from './index.less'
import { getDetailColumns } from '@/services/detail'

const { Group } = Radio
const { Option } = Select

const TaskHandle = () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [form] = Form.useForm()
  return (
    <Form className={detailStyles.form} form={form} labelWidth={120}>
      <ul className={styles.task}>
        <li>
          <Form.Item label={i18n('detail.column1')} name="code" validateTrigger="onBlur">
            <Group style={{ marginTop: 8 }}>
              <Radio value="a" radioType="square">
                {i18n('approve')}
              </Radio>
              <Radio value="b" radioType="square">
                {i18n('handover')}
              </Radio>
            </Group>
          </Form.Item>
        </li>
        <li>
          <Form.Item required label={i18n('detail.column24')} name="decision" validateTrigger="onBlur">
            <Select style={{ width: '100%' }} defaultValue="1">
              <Option value="1">{i18n('agree')}</Option>
              <Option value="2">{i18n('disagree')}</Option>
            </Select>
          </Form.Item>
        </li>
        <li>
          <Form.Item label={i18n('detail.column25')} name="nextNode" validateTrigger="onBlur">
            <Input value={i18n('detail.column26')} />
          </Form.Item>
        </li>
        <li>
          <Form.Item required label={i18n('detail.column27')} name="opinion" validateTrigger="onBlur">
            <TextArea autoSize={{ minRows: 4, maxRows: 6 }} borderType="bordered" style={{ marginTop: 6 }} />
          </Form.Item>
        </li>
      </ul>
      <Button htmlType="submit" type="primary" style={{ width: 90, margin: '0 auto' }}>
        {i18n('commit')}
      </Button>
    </Form>
  )
}

const { avatar } = JSON.parse(sessionStorage.getItem('user') as any)

const ApprovalRecord = ({ records }: { records: Array<any> }) => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

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
                {item.submit && <a>{i18n('commit')}</a>}
              </span>
            </div>
            <Icon className={styles.toMessage} type="communication-solid" />
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}

export default () => {
  const initalResources = { basicInfo: {}, saleInfo: {}, records: [] }
  const [resources, setResources] = useState<Record<string, any>>(initalResources)
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

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
          <Button type="primary">{i18n('detail.column28')}</Button>
          <Button type="primary">{i18n('detail.column29')}</Button>
          <Button type="primary">{i18n('detail.column30')}</Button>
          <Button type="primary">{i18n('detail.column31')}</Button>
          <Button type="primary">{i18n('quit')}</Button>
        </Space>
        <Pagination pageType="bill" defaultCurrent={2} total={50} />
      </div>
      <div className={classnames(globalStyles.container, styles.layout)}>
        <Collapse className={detailStyles.collapse} defaultActiveKey={['base', 'sale']}>
          <Collapse.Panel header={i18n('basic')} panelKey="base">
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column1')}</span>
                  <Input value={basicInfo.code} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column2')}</span>
                  <Input value={basicInfo.billType} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column3')}</span>
                  <Input value={basicInfo.businessType} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column4')}</span>
                  <Input value={basicInfo.date} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column5')}</span>
                  <Input value={basicInfo.status} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={24}>
                <div>
                  <span className={detailStyles.label}>{i18n('remark')}</span>
                  <Input placeholder={i18n('empty')} value={basicInfo.memo} />
                </div>
              </Col>
            </Row>
          </Collapse.Panel>
          <Collapse.Panel header={i18n('detail.column10')} panelKey="sale">
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column11')}</span>
                  <Input value={saleInfo.organization} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column12')}</span>
                  <Input placeholder={i18n('empty')} value={saleInfo.department} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column13')}</span>
                  <Input value={saleInfo.team} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column14')}</span>
                  <Input value={saleInfo.saler} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column15')}</span>
                  <Input value={saleInfo.customer} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column16')}</span>
                  <Input placeholder={i18n('empty')} value={saleInfo.contact} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column17')}</span>
                  <Input placeholder={i18n('empty')} value={null} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column18')}</span>
                  <Input placeholder={i18n('empty')} value={saleInfo.contactAddress} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column19')}</span>
                  <Input placeholder={i18n('empty')} value={saleInfo.deliver} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column20')}</span>
                  <Input placeholder={i18n('empty')} value={saleInfo.receipt} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column21')}</span>
                  <Input placeholder={i18n('empty')} value={saleInfo.shippingAddress} />
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column22')}</span>
                  <Input value={saleInfo.ticket} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={8}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.column23')}</span>
                  <Input value={saleInfo.payer} />
                </div>
              </Col>
            </Row>
          </Collapse.Panel>
        </Collapse>
        <div className={styles.tabs}>
          <Tabs activeKey={i18n('detail.column6')}>
            {[
              { name: i18n('detail.column6'), component: <TaskHandle /> },
              { name: i18n('detail.column7'), component: <ApprovalRecord records={[]} /> },
            ].map((pane) => (
              <Tabs.TabPane key={pane.name} tab={pane.name}>
                {pane.name === i18n('detail.column7') ? cloneElement(pane.component, { records }) : pane.component}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
