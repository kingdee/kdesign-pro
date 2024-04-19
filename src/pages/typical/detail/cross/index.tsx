import { useState, useEffect } from 'react'
import { Space, Button, Collapse, Row, Col, Input, Tabs, Table, Empty } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import styles from './index.less'
import { getDetailCross } from '@/services/detail'

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

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
    const gd = await getDetailCross()

    setMaterialColumns(gd.materialColumns)
    setMaterialData(gd.materialData)
    setCraftColumns(gd.craftColumns)
    setCraftData(gd.craftData)
    setStageColumns(gd.stageColumns)
    setStageData(gd.stageData)
    setTransportColumns(gd.transportColumns)
    setTransportData(gd.transportData)
    setPanes(gd.panes)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.cross}>
      <Space className={detailStyles.operation} size={12}>
        <Button.Dropdown type="similar" overlay={[{ value: 'copy', label: i18n('copy') }]}>
          {i18n('add')}
        </Button.Dropdown>
        <Button.Dropdown
          type="similar"
          overlay={[
            { value: 'cancel', label: i18n('abandon') },
            { value: 'adandon', label: i18n('cancel') },
          ]}
        >
          {i18n('commit')}
        </Button.Dropdown>
        <Button.Dropdown type="similar" overlay={[{ value: 'reversal', label: i18n('reapprove') }]}>
          {i18n('approve')}
        </Button.Dropdown>
        <Button type="primary">{i18n('quit')}</Button>
      </Space>
      <div className={globalStyles.container}>
        <Collapse className={detailStyles.collapse} defaultActiveKey={['info']}>
          <Collapse.Panel header={i18n('basic')} panelKey="info">
            <Row gutter={80} className={detailStyles.row}>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.cross1')}</span>
                  <Input value="BG20052800011" />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.cross2')}</span>
                  <Input value={i18n('detail.cross3')} />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.cross4')}</span>
                  <Input value={i18n('detail.cross5')} />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.cross6')}</span>
                  <Input value={i18n('detail.cross7')} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.cross8')}</span>
                  <Input value={i18n('detail.cross9')} />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.cross10')}</span>
                  <Input value={i18n('detail.cross11')} />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>{i18n('remark')}</span>
                  <Input placeholder={i18n('empty')} />
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.cross12')}</span>
                  <Input value={i18n('detail.cross13')} />
                </div>
              </Col>
            </Row>
            <Row gutter={80} className={detailStyles.row}>
              <Col span={6}>
                <div>
                  <span className={detailStyles.label}>{i18n('detail.cross14')}</span>
                  <Input value={i18n('detail.cross15')} />
                </div>
              </Col>
            </Row>
          </Collapse.Panel>
        </Collapse>
        <Tabs className={styles.tabs} defaultActiveKey={i18n('detail.cross16')}>
          {panes.map((item: string, index: number) => {
            const defaultActiveKey = []
            if (index < 2) defaultActiveKey.push('material', 'stage', 'transport')
            if (index === 0 || index === 2) defaultActiveKey.push('craft')
            if (index === 2 || index === 3) {
              return (
                <Tabs.TabPane key={item} tab={item}>
                  <Empty {...({ style: { margin: '80px 0' } } as any)} />
                </Tabs.TabPane>
              )
            }
            if (index === 1) {
              return (
                <Tabs.TabPane key={item} tab={item}>
                  <Collapse defaultActiveKey={defaultActiveKey}>
                    <Collapse.Panel header={i18n('detail.cross17')} panelKey="stage">
                      <Table
                        style={{ maxHeight: 800, overflow: 'auto' }}
                        columns={stageColumns}
                        dataSource={stageData}
                      />
                    </Collapse.Panel>
                    <Collapse.Panel header={i18n('detail.cross18')} panelKey="transport">
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
                  <Collapse.Panel header={i18n('detail.cross19')} panelKey="material">
                    <Table
                      style={{ maxHeight: 800, overflow: 'auto' }}
                      columns={materialColumns}
                      dataSource={materialData}
                    />
                  </Collapse.Panel>
                  <Collapse.Panel header={i18n('detail.cross20')} panelKey="craft">
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
