import { useEffect, useState, useRef } from 'react'
import ReactECharts from 'echarts-for-react'
import { Space, Button, Icon, Select, Row, Col, Input, RangePicker, Table } from '@kdcloudjs/kdesign'
import { getReportStatisticsList, getReportStatisticsEcharts } from '@/services/report'

import reportStyles from '../index.less'
import styles from './index.less'

const { Option } = Select

const customerColumns = [
  { code: 'type', width: 250, name: '资产' },
  { code: 'time', width: 100, name: '行次' },
  {
    code: 'right',
    width: 200,
    title: (
      <div>
        <span style={{ color: 'red' }}>*</span>右标题
      </div>
    ),
  },
  {
    code: 'right',
    width: 200,
    title: (
      <div>
        <span style={{ color: 'red' }}>*</span>右标题
      </div>
    ),
  },
  { code: 'type', width: 250, name: '负债及所有者权益' },
  { code: 'time', width: 100, name: '行次' },
  {
    code: 'right',
    width: 200,
    title: (
      <div>
        <span style={{ color: 'red' }}>*</span>右标题
      </div>
    ),
  },
]

const echartsData = {
  o1: {
    grid: { left: 0, top: 40, right: 0, bottom: 0 },
    legend: { icon: 'circle', left: 0 }, // 是否显示图例， 非必选
    tooltip: {
      trigger: 'item',
    },
    title: {
      text: '25%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontSize: 20,
        fontWeight: 'normal',
      },
    },
    series: [
      {
        name: '资产净利率',
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: '净利润' },
          { value: 735, name: '资产总量' },
        ],
      },
    ],
  },
  o2: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      icon: 'rect',
      left: 0,
    },
    grid: {
      left: 50,
    },
    xAxis: {
      type: 'value',
      name: 'Days',
      axisLabel: {
        formatter: '{value}',
      },
    },
    yAxis: {
      type: 'category',
      inverse: true,
      data: ['星期一', '星期二', '星期三', '星期四'],
    },
    series: [
      {
        name: '本月：0万',
        type: 'bar',
        label: { show: true },
        data: [0, 0, 0, 0],
      },
      {
        name: '上月：0万',
        type: 'bar',
        label: { show: true },
        data: [0, 0, 0, 0],
      },
    ],
  },
  o3: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      icon: 'rect',
      left: 0,
    },
    grid: {
      left: 50,
    },
    xAxis: {
      type: 'value',
      name: 'Days',
      axisLabel: {
        formatter: '{value}',
      },
    },
    yAxis: {
      type: 'category',
      inverse: true,
      data: ['星期一', '星期二', '星期三', '星期四'],
    },
    series: [
      {
        name: '类型三：0万',
        type: 'bar',
        label: { show: true },
        data: [0, 0, 0, 0],
      },
    ],
  },
  o4: {
    grid: { left: 0, top: 40, right: 0, bottom: 0 },
    legend: { icon: 'rect', left: 0 }, // 是否显示图例， 非必选
    xAxis: {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [32, 37, 21, 29],
        type: 'bar', // echarts 图表类型， 必选
        name: '成本', //数据项名称，非必选
        barWidth: 12,
      },
      {
        data: [38, 72, 56, 71],
        type: 'bar',
        name: '销售额',
        barWidth: 12,
      },
    ],
    tooltip: {
      show: true,
    },
  },
  o5: {
    legend: { icon: 'circle', left: 0 },
    series: [
      {
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        data: [
          { value: 0, name: '税费及附加费' },
          { value: 0, name: '管理费用' },
          { value: 0, name: '销售费用' },
        ],
      },
    ],
  },
  o6: {
    legend: {
      data: ['应收笔数', '应付金额（万）'],
      left: 0,
    },
    grid: { left: 0, right: 0, bottom: 0, containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['未到期', '31-90天', '181以上'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '应收笔数',
        type: 'line',
        data: [0, 0, 0],
      },
      {
        name: '应付金额（万）',
        type: 'line',
        data: [0, 0, 0],
      },
    ],
  },
}

export default function (props: any) {
  // const pipeline = useTablePipeline({}).input({ dataSource, columns }).use(features.columnResizeWidth())

  const [list, setList] = useState<any>([])
  const [showTable, setShowTable] = useState<boolean>(true)
  const [data, setData] = useState<any>(null)
  const [opt1, setOpt1] = useState<any>(echartsData.o1)
  const [opt2, setOpt2] = useState<any>(echartsData.o2)
  const [opt3, setOpt3] = useState<any>(echartsData.o3)
  const [opt4, setOpt4] = useState<any>(echartsData.o4)
  const [opt5, setOpt5] = useState<any>(echartsData.o5)
  const [opt6, setOpt6] = useState<any>(echartsData.o6)

  let ref1: any = useRef(null)
  let ref2: any = useRef(null)
  let ref3: any = useRef(null)
  let ref4: any = useRef(null)
  let ref5: any = useRef(null)
  let ref6: any = useRef(null)
  let echartInstance1: any
  let echartInstance2: any
  let echartInstance3: any
  let echartInstance4: any
  let echartInstance5: any
  let echartInstance6: any

  const renderEcharts = () => {
    const { o1, o2, o3, o4, o5, o6 } = echartsData
    const { data1, data2, data3, data4, data5, data6 } = data

    echartInstance1 = ref1.getEchartsInstance()
    echartInstance2 = ref2.getEchartsInstance()
    echartInstance3 = ref3.getEchartsInstance()
    echartInstance4 = ref4.getEchartsInstance()
    echartInstance5 = ref5.getEchartsInstance()
    echartInstance6 = ref6.getEchartsInstance()

    let t1: any = Object.assign({}, o1)
    t1.series.data = data1
    echartInstance1.setOption(t1)
    let t2: any = Object.assign({}, o2)
    t2.series = data2
    echartInstance2.setOption(t2)
    let t3: any = Object.assign({}, o3)
    t3.series = data3
    echartInstance3.setOption(t3)
    let t4: any = Object.assign({}, o4)
    t4.series = data4
    echartInstance4.setOption(t4)
    let t5: any = Object.assign({}, o5)
    t5.series.data = data5
    echartInstance5.setOption(t5)
    let t6: any = Object.assign({}, o6)
    t6.series = data6
    echartInstance6.setOption(t6)

    setTimeout(() => {
      echartInstance1.resize({ width: 'auto' })
      echartInstance2.resize({ width: 'auto' })
      echartInstance3.resize({ width: 'auto' })
      echartInstance4.resize({ width: 'auto' })
      echartInstance5.resize({ width: 'auto' })
      echartInstance6.resize({ width: 'auto' })
    }, 500)
  }

  const initPage = () => {
    getReportStatisticsList().then((res) => {
      setList(res)
    })

    getReportStatisticsEcharts().then((res) => {
      setData(res)
    })
  }

  useEffect(() => {
    if (!showTable) {
      renderEcharts()
    }
  }, [showTable])

  useEffect(() => {
    if (data && ref1 && ref4) {
      echartInstance1 = ref1.getEchartsInstance()
      echartInstance4 = ref4.getEchartsInstance()
      echartInstance1.resize({ width: 'auto' })
      echartInstance4.resize({ width: 'auto' })
    }
  }, [ref1, data])

  useEffect(() => {
    initPage()
  }, [])

  return (
    <div className={reportStyles.report}>
      <div className={reportStyles.panel}>
        <div className={reportStyles.filter}>
          资金流量
          <Select placeholder="筛选方案名称选择" borderType="bordered" style={{ width: 230, marginLeft: 24 }}>
            <Option value="1">方案一</Option>
            <Option value="2">方案二</Option>
            <Option value="3">方案三</Option>
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
      <div className={styles.cont}>
        {showTable && (
          <div className={reportStyles.main} style={{ margin: '0 10px 0 0' }}>
            <div className={reportStyles.limit}>
              <Row gutter={20}>
                <Col span={6}>
                  <span className={reportStyles.label}>
                    核算主体<em>*</em>
                  </span>
                  <Input value="环宇科技股份有限公司" />
                </Col>
                <Col span={6}>
                  <span className={reportStyles.label}>统计视图</span>
                  <Input value="核算体系" />
                </Col>
                <Col span={6}>
                  <span className={reportStyles.label}>
                    会计期间<em>*</em>
                  </span>
                  <RangePicker
                    defaultPickerValue={[new Date('2021-01-01'), new Date('2021-12-31')]}
                    borderType="underline"
                    suffixIcon={<Icon type="search" />}
                  />
                </Col>
              </Row>
            </div>
            <Table
              dataSource={list}
              useOuterBorder={false}
              columns={customerColumns}
              className={'statistics-table'}
              style={{ flex: '1 1 100px', overflow: 'auto' }}
            />
          </div>
        )}
        <div
          className={styles.charts}
          style={{
            width: showTable ? '316px' : '100%',
          }}
        >
          <header>
            <h3>关键指标</h3>
            <span>
              <Icon type="setting" style={{ marginRight: 20 }} />
              <Icon type="expand" onClick={() => setShowTable(!showTable)} />
            </span>
          </header>
          <div className={styles.scroll}>
            <div className={styles.div}>
              <div className={styles.box} style={{ marginRight: showTable ? 0 : 20 }}>
                <h4>资产净利率</h4>
                <ReactECharts option={opt1} ref={(e) => (ref1 = e)} theme={'defaultTheme'} style={{ width: '100%' }} />
              </div>
              {!showTable && (
                <>
                  <div className={styles.box}>
                    <h4>结算量占比</h4>
                    <ReactECharts
                      option={opt2}
                      ref={(e) => (ref2 = e)}
                      theme={'defaultTheme'}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className={styles.box}>
                    <h4>利润表</h4>
                    <ReactECharts
                      option={opt3}
                      ref={(e) => (ref3 = e)}
                      theme={'defaultTheme'}
                      style={{ width: '100%' }}
                    />
                  </div>
                </>
              )}
            </div>
            <div className={styles.div}>
              <div className={styles.box} style={{ marginRight: showTable ? 0 : 20 }}>
                <h4>
                  业务笔数分析 <span>平均应付款:0.28万</span>
                </h4>
                <ReactECharts option={opt4} ref={(e) => (ref4 = e)} theme={'defaultTheme'} style={{ width: '100%' }} />
              </div>
              {!showTable && (
                <>
                  <div className={styles.box}>
                    <h4>费用占比</h4>
                    <ReactECharts
                      option={opt5}
                      ref={(e) => (ref5 = e)}
                      theme={'defaultTheme'}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className={styles.box}>
                    <h4>应付账龄分析</h4>
                    <ReactECharts
                      option={opt6}
                      ref={(e) => (ref6 = e)}
                      theme={'defaultTheme'}
                      style={{ width: '100%' }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
