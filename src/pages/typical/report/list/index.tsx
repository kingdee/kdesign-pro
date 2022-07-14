import React from 'react'
import { Space, Button, Icon, Select, Input, RangePicker, Table, Tag } from '@kdcloudjs/kdesign'
import { getReportBasic, getReportBasicSum } from '@/services/report'

import globalStyles from '@/layouts/global.less'
import reportStyles from '../index.less'

import report_icon_0 from '@/assets/images/report_icon_0.png'

const { Option } = Select

const columns = [
  { code: 'index', lock: true, width: 60, name: '序号', align: 'center' },
  { code: 'organization', width: 160, name: '运行组织' },
  { code: 'summary', width: 80, name: '汇总计算' },
  { code: 'risk_name', width: 160, name: '风险名称' },
  { code: 'risk_code', width: 160, name: '风险编码' },
  { code: 'risk_level', width: 96, name: '风险等级' },
  { code: 'start_time', width: 160, name: '计算开始时间' },
  {
    code: 'type',
    width: 148,
    name: '状态',
    render: (text: number) => {
      if (text === 0) {
        return (
          <Tag type="text" color="process">
            进行中
          </Tag>
        )
      } else if (text === 1) {
        return (
          <Tag type="text" color="warning">
            待处理
          </Tag>
        )
      } else if (text === 2) {
        return (
          <Tag type="text" color="success">
            已完成
          </Tag>
        )
      }
    },
  },
  { code: 'end_time', width: 160, name: '计算结束时间' },
  { code: 'results', width: 96, name: '处理结果' },
]

const sum_columns = [
  { code: 'index', lock: true, width: 60, name: '序号', align: 'center' },
  { code: 'organization', width: 160, name: '运行组织' },
  { code: 'summary', width: 80, name: '汇总计算' },
]

export default function (props: any) {
  const [isSumView, setIsSumView] = React.useState(false)
  const [data, setData] = React.useState([])
  const [sumData, setSumData] = React.useState([])

  async function initListBasic() {
    const { dataSource } = await getReportBasic()
    setData(dataSource)
    const { sumData } = await getReportBasicSum()
    setSumData(sumData)
  }

  React.useEffect(() => {
    initListBasic()
  }, [])

  return (
    <div className={reportStyles.report}>
      <div className={reportStyles.panel}>
        <div className={reportStyles.filter}>
          风险频率统计表
          <Select placeholder="筛选方案名称选择" borderType="bordered" style={{ width: 230, marginLeft: 24 }}>
            <Option value="1">第一季度高风险</Option>
            <Option value="2">第二季度高风险</Option>
            <Option value="3">第三季度高风险</Option>
            <Option value="4">第四季度高风险</Option>
          </Select>
        </div>
        <Space className={reportStyles.operation} size={12}>
          <Button.Dropdown
            type="similar"
            overlay={[
              { value: 'copy', label: '复制' },
              { value: 'paste', label: '粘贴' },
            ]}
          >
            引出
          </Button.Dropdown>
          <Button type="primary">刷新</Button>
          <Button type="primary">退出</Button>
        </Space>
      </div>
      <div className={reportStyles.main}>
        <div className={reportStyles.limit}>
          <Space className={reportStyles.operation} size={20}>
            <div>
              <span className={reportStyles.label}>
                汇总依据<em>*</em>
              </span>
              <Input value="组织" style={{ width: 200 }} />
            </div>
            <div>
              <span className={reportStyles.label}>风险等级</span>
              <Input value="高" style={{ width: 200 }} />
            </div>
            <div>
              <span className={reportStyles.label}>分析期间</span>
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
              columns={sum_columns}
              columnResize
            />
          ) : (
            <Table
              useOuterBorder={false}
              style={{ flex: '1 1 100px', overflow: 'auto' }}
              dataSource={data}
              columns={columns}
              columnResize
            />
          )}
        </div>
      </div>
    </div>
  )
}
