import { useState, useEffect } from 'react'
import { Space, Button, Collapse, Row, Col, Input, Tabs, Table, Empty } from '@kdcloudjs/kdesign'
import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import styles from './index.less'
import { getDetailCross } from '@/services/detail'

export default function (props: any) {
  const [materialColumns, setMaterialColumns] = useState<any>([])
  const [materialData, setMaterialData] = useState<any>([])
  const [craftColumns, setCraftColumns] = useState<any>([])
  const [craftData, setCraftData] = useState<any>([])
  const [stageColumns, setStageColumns] = useState<any>([])
  const [stageData, setStageData] = useState<any>([])
  const [transportColumns, setTransportColumns] = useState<any>([])
  const [transportData, setTransportData] = useState<any>([])
  const [panes, setPanes] = useState<any>([])

  async function getData() {
    const {
      materialColumns,
      materialData,
      craftColumns,
      craftData,
      panes,
      stageColumns,
      stageData,
      transportColumns,
      transportData,
    } = await getDetailCross()

    setMaterialColumns(materialColumns)
    setMaterialData(materialData)
    setCraftColumns(craftColumns)
    setCraftData(craftData)
    setStageColumns(stageColumns)
    setStageData(stageData)
    setTransportColumns(transportColumns)
    setTransportData(transportData)
    setPanes(panes)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.cross}>
      <Space className={detailStyles.operation} size={12}>
        <Button.Dropdown type="similar" overlay={[{ value: 'copy', label: '复制' }]}>
          新增
        </Button.Dropdown>
        <Button.Dropdown
          type="similar"
          overlay={[
            { value: 'cancel', label: '撤销' },
            { value: 'adandon', label: '废弃' },
          ]}
        >
          提交
        </Button.Dropdown>
        <Button.Dropdown type="similar" overlay={[{ value: 'reversal', label: '反审核' }]}>
          审核
        </Button.Dropdown>
        <Button type="primary">退出</Button>
      </Space>
      <div className={globalStyles.container}>
        <Collapse className={detailStyles.collapse} defaultActiveKey={['info']}>
          <Collapse.Panel header={'基本信息'} panelKey="info">
            <Row gutter={80} className={detailStyles.row}>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>单据编号</span>
                  <Input value="BG20052800011" />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>变更类型</span>
                  <Input value="生产工艺变更" />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>变更主题</span>
                  <Input value="变更主题" />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>采购组织</span>
                  <Input value="环球信息技术深圳有限公司" />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>物料名称</span>
                  <Input value="测试物料" />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>品类</span>
                  <Input value="待分类" />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>备注</span>
                  <Input placeholder="无" />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>供应商</span>
                  <Input value="深圳市领锋科技有限公司" />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>单据状态</span>
                  <Input value="已提交" />
                </div>
              </Col>
            </Row>
          </Collapse.Panel>
        </Collapse>
        <Tabs className={styles.tabs} defaultActiveKey="生产相关">
          {panes.map((item: string, index: number) => {
            const defaultActiveKey = []
            if (index < 2) defaultActiveKey.push('material', 'stage', 'transport')
            if (index === 0 || index === 2) defaultActiveKey.push('craft')
            if (index === 2 || index === 3) {
              return (
                <Tabs.TabPane key={item} tab={item}>
                  <Empty style={{ margin: '80px 0' }}></Empty>
                </Tabs.TabPane>
              )
            }
            if (index === 1) {
              return (
                <Tabs.TabPane key={item} tab={item}>
                  <Collapse defaultActiveKey={defaultActiveKey}>
                    <Collapse.Panel header={'存储方式'} panelKey="stage">
                      <Table
                        style={{ maxHeight: 800, overflow: 'auto' }}
                        columns={stageColumns}
                        dataSource={stageData}
                      />
                    </Collapse.Panel>
                    <Collapse.Panel header={'运输方式'} panelKey="transport">
                      <Table
                        style={{ maxHeight: 800, overflow: 'auto' }}
                        columns={transportColumns}
                        dataSource={transportData}
                      />
                    </Collapse.Panel>
                  </Collapse>
                </Tabs.TabPane>
              )
            }
            return (
              <Tabs.TabPane key={item} tab={item}>
                <Collapse defaultActiveKey={defaultActiveKey}>
                  <Collapse.Panel header={'原材料'} panelKey="material">
                    <Table
                      style={{ maxHeight: 800, overflow: 'auto' }}
                      columns={materialColumns}
                      dataSource={materialData}
                    />
                  </Collapse.Panel>
                  <Collapse.Panel header={'减免费项'} panelKey="craft">
                    <Table style={{ maxHeight: 800, overflow: 'auto' }} columns={craftColumns} dataSource={craftData} />
                  </Collapse.Panel>
                </Collapse>
              </Tabs.TabPane>
            )
          })}
        </Tabs>
      </div>
    </div>
  )
}
