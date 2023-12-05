import { useEffect, useState } from 'react'
import classnames from 'classnames'
import {
  Space,
  Steps,
  Step,
  Button,
  Collapse,
  Row,
  Col,
  Input,
  Table,
  Icon,
  Pagination,
  Upload,
} from '@kdcloudjs/kdesign'

import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import styles from './index.less'
import { icon1, icon2, icon6 } from './steps-icon'
import { getDetailFlow } from '@/services/detail'

const columns = [
  { code: 'index', lock: true, width: 60, name: '#' },
  {
    code: 'code',
    width: 200,
    name: '单据编号',
    render: (text: string) => (
      <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
  },
  { code: 'supplier', width: 200, name: '供应商' },
  { code: 'date', width: 200, name: '申请时间' },
]

export default () => {
  const [current, setCurrent] = useState(0)
  const [dataSource, setDataSource] = useState<any>([])

  async function getData() {
    const { dataSource: ds } = await getDetailFlow()
    setDataSource(ds)
  }

  useEffect(() => {
    getData()
  }, [])

  const [rows, setRows] = useState<string[]>([])

  const rowSelection = {
    type: 'checkbox',
    value: rows,
    onChange: setRows,
    checkboxPlacement: 'start',
    clickArea: 'checkbox',
    checkboxColumn: { lock: true },
    highlightRowWhenSelected: true,
  }

  const handleSelectAll = () => {
    if (rows.length === dataSource.length) {
      setRows([])
    } else {
      const keys = Object.keys(dataSource)
      setRows(keys)
    }
  }

  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }: Record<string, any>) {
      if (file.status !== 'uploading') {
        console.log(file, fileList)
      }
    },
    defaultFileList: [
      {
        uid: '1',
        size: '11429478.4',
        status: 'done',
        name: '标书模板.ppt',
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        size: '11429478.4',
        status: 'done',
        name: '入围要求.ppt',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        size: '11429478.4',
        status: 'done',
        name: '资质名单.ppt',
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  }

  const mapCont: Record<string, JSX.Element> = {
    0: (
      <Collapse className={detailStyles.collapse} defaultActiveKey={['invite', 'bid']}>
        <Collapse.Panel header="招标信息" panelKey="invite">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>招标名称</span>
                <Input value="环球集团ISC" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>招标编号</span>
                <Input value="ZC2007090001" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购类型</span>
                <Input value="施工类" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购方式</span>
                <Input value="公开招标" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购模式</span>
                <Input value="项目采购" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>计价模式</span>
                <Input value="总价包干" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>立项日期</span>
                <Input value="2022-07-05" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购组织</span>
                <Input value="环宇国际集团有限公司" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>委托方式</span>
                <Input value="不委托" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购控制总金额</span>
                <Input value="5,998,000.00" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>标书费</span>
                <Input value="10,000.00" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>投标保证金</span>
                <Input value="5,000.00" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>单据状态</span>
                <Input value="已审核" />
              </div>
            </Col>
            <Col span={18}>
              <div>
                <span className={detailStyles.label}>资质要求</span>
                <Input value="A类供应商" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={24}>
              <div>
                <span className={detailStyles.label}>采购说明</span>
                <Input value="施工材料招标" />
              </div>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header="发标信息" panelKey="bid">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>指标名称</span>
                <Input value="0309有发标无开标邀请函" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购方式</span>
                <Input value="立项入围发标定标" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购类型</span>
                <Input value="材料设备类" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>招标单位</span>
                <Input value="环宇国际集团有限公司" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>邀请函确认截止时间</span>
                <Input value="2022-07-31 10:50:33" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>发标时间</span>
                <Input value="未填写" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>答疑截止时间</span>
                <Input value="未填写" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>截标开标时间</span>
                <Input value="未填写" />
              </div>
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
    ),
    1: (
      <>
        <div className={styles.pagination}>
          <Space className={styles.notify} size={8}>
            <span>
              已选
              {rows?.length}
              条数据，共
              {dataSource?.length}
              条（1张）
            </span>
            <Button type="text" onClick={handleSelectAll}>
              {rows.length === dataSource?.length ? '取消选择' : '选择全部'}
            </Button>
          </Space>
          <Pagination defaultCurrent={6} total={200} />
        </div>
        <div className={globalStyles.tableContainer}>
          <div className={globalStyles.settings}>
            <Icon type="setting" style={{ fontSize: 14, cursor: 'pointer' }} />
          </div>
          {dataSource && (
            <Table
              useOuterBorder={false}
              style={{ flex: '1 1 100px', overflow: 'auto' }}
              dataSource={dataSource}
              columns={columns as any}
              rowSelection={rowSelection as any}
              columnResize
            />
          )}
        </div>
      </>
    ),
    2: (
      <Collapse className={detailStyles.collapse} defaultActiveKey={['open', 'invite', 'attachment']}>
        <Collapse.Panel header="开标信息" panelKey="open">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购模式</span>
                <Input value="项目采购" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>计价模式</span>
                <Input value="总价包干" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>立项日期</span>
                <Input value="2022-07-05" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购组织</span>
                <Input value="环宇国际集团有限公司" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>委托方式</span>
                <Input value="不委托" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购控制总金额</span>
                <Input value="5,998,000.00" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>标书费</span>
                <Input value="10,000.00" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>投标保证金</span>
                <Input value="5,000.00" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>单据状态</span>
                <Input value="已审核" />
              </div>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header="招标信息" panelKey="invite">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>指标名称</span>
                <Input value="0309有发标无开标邀请函" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购方式</span>
                <Input value="立项入围发标定标" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>采购类型</span>
                <Input value="材料设备类" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>招标单位</span>
                <Input value="环宇国际集团有限公司" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>邀请函确认截止时间</span>
                <Input value="2022-07-31 10:50:33" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>发标时间</span>
                <Input value="2022" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>答疑截止时间</span>
                <Input value="未填写" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>截标开标时间</span>
                <Input value="未填写" />
              </div>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header="附件" panelKey="attachment">
          <div className={styles.attachment}>
            <Space size={20} className={styles.action}>
              <Button icon={<Icon type="upload" />}>文件下载</Button>
              <span style={{ fontSize: 12, color: '#999' }}>支持ctrl+v粘贴截图</span>
            </Space>
            <Upload {...(uploadProps as any)} className={detailStyles.row}>
              <Button icon={<Icon type="upload" />}>文件上传</Button>
            </Upload>
          </div>
        </Collapse.Panel>
      </Collapse>
    ),
  }

  return (
    <div className={classnames(globalStyles.container, styles.container)}>
      <div className={styles.card}>
        <Space className={styles.title} size={20}>
          <span>王梦然招标立项</span>
          <span>00-00001-2020-00000042</span>
        </Space>
        <Space className={styles.attr} size={20}>
          <div>
            <span>采购组织：</span>
            环宇国际集团有限公司
          </div>
          <div>
            <span>采购方式：</span>
            公开招标
          </div>
          <div>
            <span>计价模式：</span>
            总价包干
          </div>
          <div>
            <span>采购类型：</span>
            施工类
          </div>
        </Space>
      </div>
      <Steps className={styles.steps} current={current} status="process" onChange={setCurrent}>
        <Step title="招标立项" icon={icon1} />
        <Step title="供方入围" icon={icon2} />
        <Step title="开标" icon={icon6} />
      </Steps>
      <Space className={detailStyles.operation} size={12}>
        <Button.Dropdown type="similar" overlay={[{ value: 'reversal', label: '反审核' }]}>
          审核
        </Button.Dropdown>
        <Button type="primary">作废</Button>
        <Button type="primary">立项调整</Button>
        <Button type="primary">查看流程图</Button>
        <Button.Dropdown
          type="similar"
          overlay={[
            { value: 'setting', label: '设置' },
            { value: 'print', label: '打印预览' },
          ]}
        >
          打印
        </Button.Dropdown>
        <Button type="primary">刷新</Button>
        <Button type="primary">退出</Button>
      </Space>
      {Array(3)
        .fill(null)
        .map((_, index) => {
          const stepConClass = classnames(styles.stepCon, { [styles.active]: index === current })
          return (
            <div key={index} className={stepConClass}>
              <div className={styles.stepPanel}>{mapCont[index]}</div>
            </div>
          )
        })}
    </div>
  )
}
