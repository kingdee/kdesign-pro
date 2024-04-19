import React, { useEffect, useState } from 'react'
import { Space, Button, Icon, Select, Input, RangePicker, Table, Tag } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import { getReportBasic, getReportBasicSum } from '@/services/report'

import globalStyles from '@/layouts/global.less'
import reportStyles from '../index.less'

import report_icon_0 from '@/assets/images/report_icon_0.png'

const { Option } = Select

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [isSumView, setIsSumView] = useState(false)
  const [data, setData] = useState([])
  const [sumData, setSumData] = useState([])

  const columns = [
    { code: 'index', lock: true, width: 60, name: i18n('report.list1'), align: 'center' },
    { code: 'organization', width: 160, name: i18n('report.list2') },
    { code: 'summary', width: 80, name: i18n('report.list3') },
    { code: 'risk_name', width: 160, name: i18n('report.list4') },
    { code: 'risk_code', width: 160, name: i18n('report.list5') },
    { code: 'risk_level', width: 96, name: i18n('report.list6') },
    { code: 'start_time', width: 160, name: i18n('report.list7') },
    {
      code: 'type',
      width: 148,
      name: i18n('report.list8'),
      render: (text: number) => {
        if (text === 0) {
          return (
            <Tag type="text" color="process">
              {i18n('report.list9')}
            </Tag>
          )
        }
        if (text === 1) {
          return (
            <Tag type="text" color="warning">
              {i18n('report.list10')}
            </Tag>
          )
        }
        if (text === 2) {
          return (
            <Tag type="text" color="success">
              {i18n('report.list11')}
            </Tag>
          )
        }
        return null
      },
    },
    { code: 'end_time', width: 160, name: i18n('report.list12') },
    { code: 'results', width: 96, name: i18n('report.list13') },
  ]

  const sum_columns = [
    { code: 'index', lock: true, width: 60, name: i18n('report.list1'), align: 'center' },
    { code: 'organization', width: 160, name: i18n('report.list2') },
    { code: 'summary', width: 80, name: i18n('report.list3') },
  ]

  async function initListBasic() {
    const { dataSource } = await getReportBasic()
    setData(dataSource)
    const { sumData: sd } = await getReportBasicSum()
    setSumData(sd)
  }

  useEffect(() => {
    initListBasic()
  }, [])

  return (
    <div className={reportStyles.report}>
      <div className={reportStyles.panel}>
        <div className={reportStyles.filter}>
          {i18n('report.list14')}
          <Select placeholder={i18n('report.list15')} borderType="bordered" style={{ width: 230, marginLeft: 24 }}>
            <Option value="1">{i18n('report.list16')}</Option>
            <Option value="2">{i18n('report.list17')}</Option>
            <Option value="3">{i18n('report.list18')}</Option>
            <Option value="4">{i18n('report.list19')}</Option>
          </Select>
        </div>
        <Space className={reportStyles.operation} size={12}>
          <Button.Dropdown
            type="similar"
            overlay={[
              { value: 'copy', label: i18n('copy') },
              { value: 'paste', label: i18n('report.list20') },
            ]}
          >
            {i18n('report.list21')}
          </Button.Dropdown>
          <Button type="primary">{i18n('refresh')}</Button>
          <Button type="primary">{i18n('back')}</Button>
        </Space>
      </div>
      <div className={reportStyles.main}>
        <div className={reportStyles.limit}>
          <Space className={reportStyles.operation} size={20}>
            <div>
              <span className={reportStyles.label}>
                {i18n('report.list22')}
                <em>*</em>
              </span>
              <Input value={i18n('org')} style={{ width: 200 }} />
            </div>
            <div>
              <span className={reportStyles.label}>{i18n('report.list6')}</span>
              <Input value={i18n('report.list23')} style={{ width: 200 }} />
            </div>
            <div>
              <span className={reportStyles.label}>{i18n('report.list24')}</span>
              <RangePicker
                defaultPickerValue={[new Date('2021-01-01'), new Date('2021-12-31')]}
                borderType="underline"
                suffixIcon={<Icon type="search" />}
              />
            </div>
          </Space>
          <div className={reportStyles.viewType} onClick={setIsSumView.bind(null, !isSumView)}>
            {isSumView ? <Icon type="classify" /> : <img src={report_icon_0} />}
          </div>
        </div>
        <div className={globalStyles.tableContainer}>
          <div className={globalStyles.settings}>
            <Icon type="setting" style={{ fontSize: 14, cursor: 'pointer' }} />
          </div>
          {isSumView ? (
            <Table
              useOuterBorder={false}
              style={{ flex: '1 1 100px', overflow: 'auto' }}
              dataSource={sumData}
              columns={sum_columns as any}
              columnResize
            />
          ) : (
            <Table
              useOuterBorder={false}
              style={{ flex: '1 1 100px', overflow: 'auto' }}
              dataSource={data}
              columns={columns as any}
              columnResize
            />
          )}
        </div>
      </div>
    </div>
  )
}
