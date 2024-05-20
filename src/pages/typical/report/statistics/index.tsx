import { useEffect, useState, useRef } from 'react'
import ReactECharts from 'echarts-for-react'
import { Space, Button, Icon, Select, Row, Col, Input, RangePicker, Table } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import { getReportStatisticsList, getReportStatisticsEcharts } from '@/services/report'

import reportStyles from '../index.less'
import styles from './index.less'

const { Option } = Select

export default () => {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const customerColumns = [
    { code: 'type', width: 250, name: i18n('report.statistics1') },
    { code: 'time', width: 100, name: i18n('report.statistics2') },
    {
      code: 'right',
      width: 200,
      title: (
        <div>
          <span style={{ color: 'red' }}>*</span>
          {i18n('report.statistics3')}
        </div>
      ),
    },
    {
      code: 'right',
      width: 200,
      title: (
        <div>
          <span style={{ color: 'red' }}>*</span>
          {i18n('report.statistics3')}
        </div>
      ),
    },
    { code: 'type', width: 250, name: i18n('report.statistics4') },
    { code: 'time', width: 100, name: i18n('report.statistics2') },
    {
      code: 'right',
      width: 200,
      title: (
        <div>
          <span style={{ color: 'red' }}>*</span>
          {i18n('report.statistics3')}
        </div>
      ),
    },
  ]

  const echartsData = {
    o1: {
      grid: { left: 0, top: 40, right: 0, bottom: 0 },
      legend: { icon: 'circle', left: 0 },
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
          name: i18n('report.statistics7'),
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
            { value: 1048, name: i18n('report.statistics8') },
            { value: 735, name: i18n('report.statistics9') },
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
        data: [
          i18n('report.statistics10'),
          i18n('report.statistics11'),
          i18n('report.statistics12'),
          i18n('report.statistics13'),
        ],
      },
      series: [
        {
          name: `${i18n('report.statistics14')}：0${i18n('report.statistics15')}`,
          type: 'bar',
          label: { show: true },
          data: [0, 0, 0, 0],
        },
        {
          name: `${i18n('report.statistics16')}：0${i18n('report.statistics15')}`,
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
        data: [
          i18n('report.statistics10'),
          i18n('report.statistics11'),
          i18n('report.statistics12'),
          i18n('report.statistics13'),
        ],
      },
      series: [
        {
          name: `${i18n('report.statistics17')}：0${i18n('report.statistics15')}`,
          type: 'bar',
          label: { show: true },
          data: [0, 0, 0, 0],
        },
      ],
    },
    o4: {
      grid: { left: 0, top: 40, right: 0, bottom: 0 },
      legend: { icon: 'rect', left: 0 },
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
          type: 'bar',
          name: i18n('report.statistics20'),
          barWidth: 12,
        },
        {
          data: [38, 72, 56, 71],
          type: 'bar',
          name: i18n('report.statistics22'),
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
            { value: 0, name: i18n('report.statistics23') },
            { value: 0, name: i18n('report.statistics24') },
            { value: 0, name: i18n('report.statistics25') },
          ],
        },
      ],
    },
    o6: {
      legend: {
        data: [i18n('report.statistics26'), `${i18n('report.statistics27')}（${i18n('report.statistics15')}）`],
        left: 0,
      },
      grid: { left: 0, right: 0, bottom: 0, containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          i18n('report.statistics28'),
          `'31-90${i18n('report.statistics29')}'`,
          `'181${i18n('report.statistics30')}'`,
        ],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: i18n('report.statistics26'),
          type: 'line',
          data: [0, 0, 0],
        },
        {
          name: `${i18n('report.statistics27')}（${i18n('report.statistics15')}）`,
          type: 'line',
          data: [0, 0, 0],
        },
      ],
    },
  }

  const [list, setList] = useState<any>([])
  const [showTable, setShowTable] = useState<boolean>(true)
  const [data, setData] = useState<any>(null)
  const opt1 = echartsData.o1
  const opt2 = echartsData.o2
  const opt3 = echartsData.o3
  const opt4 = echartsData.o4
  const opt5 = echartsData.o5
  const opt6 = echartsData.o6

  const ref1: any = useRef(null)
  const ref2: any = useRef(null)
  const ref3: any = useRef(null)
  const ref4: any = useRef(null)
  const ref5: any = useRef(null)
  const ref6: any = useRef(null)
  let echartInstance1: any
  let echartInstance2: any
  let echartInstance3: any
  let echartInstance4: any
  let echartInstance5: any
  let echartInstance6: any

  const renderEcharts = () => {
    const { o1, o2, o3, o4, o5, o6 } = echartsData
    const { data1, data2, data3, data4, data5, data6 } = data

    echartInstance1 = ref1.current?.getEchartsInstance()
    echartInstance2 = ref2.current?.getEchartsInstance()
    echartInstance3 = ref3.current?.getEchartsInstance()
    echartInstance4 = ref4.current?.getEchartsInstance()
    echartInstance5 = ref5.current?.getEchartsInstance()
    echartInstance6 = ref6.current?.getEchartsInstance()

    const t1: any = { ...o1 }
    t1.series.data = data1
    echartInstance1.setOption(t1)
    const t2: any = { ...o2 }
    t2.series = data2
    echartInstance2.setOption(t2)
    const t3: any = { ...o3 }
    t3.series = data3
    echartInstance3.setOption(t3)
    const t4: any = { ...o4 }
    t4.series = data4
    echartInstance4.setOption(t4)
    const t5: any = { ...o5 }
    t5.series.data = data5
    echartInstance5.setOption(t5)
    const t6: any = { ...o6 }
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
      echartInstance1 = ref1.current?.getEchartsInstance()
      echartInstance4 = ref4.current?.getEchartsInstance()
      echartInstance1.resize({ width: 'auto' })
      echartInstance4.resize({ width: 'auto' })
    }
  }, [ref1, data])

  useEffect(() => {
    initPage()
  }, [lang])

  return (
    <div className={reportStyles.report}>
      <div className={reportStyles.panel}>
        <div className={reportStyles.filter}>
          {i18n('report.statistics31')}
          <Select
            placeholder={i18n('report.statistics32')}
            borderType="bordered"
            style={{ width: 230, marginLeft: 24 }}
          >
            <Option value="1">{i18n('report.statistics33')}</Option>
            <Option value="2">{i18n('report.statistics34')}</Option>
            <Option value="3">{i18n('report.statistics35')}</Option>
          </Select>
        </div>
        <Space className={reportStyles.operation} size={12}>
          <Button.Dropdown
            type="similar"
            overlay={[
              { value: 'copy', label: i18n('copy') },
              { value: 'paste', label: i18n('report.statistics36') },
            ]}
          >
            {i18n('report.statistics37')}
          </Button.Dropdown>
          <Button type="primary">{i18n('refresh')}</Button>
          <Button type="primary">{i18n('back')}</Button>
        </Space>
      </div>
      <div className={styles.cont}>
        {showTable && (
          <div className={reportStyles.main} style={{ margin: '0 10px 0 0' }}>
            <div className={reportStyles.limit}>
              <Row gutter={20}>
                <Col span={6}>
                  <span className={reportStyles.label}>
                    {i18n('report.statistics38')}
                    <em>*</em>
                  </span>
                  <Input value={i18n('report.statistics39')} />
                </Col>
                <Col span={6}>
                  <span className={reportStyles.label}>{i18n('report.statistics40')}</span>
                  <Input value={i18n('report.statistics41')} />
                </Col>
                <Col span={6}>
                  <span className={reportStyles.label}>
                    {i18n('report.statistics42')}
                    <em>*</em>
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
              columns={customerColumns as any}
              className="statistics-table"
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
            <h3>{i18n('report.statistics43')}</h3>
            <span>
              <Icon type="setting" style={{ marginRight: 20 }} />
              <Icon type="expand" onClick={() => setShowTable(!showTable)} />
            </span>
          </header>
          <div className={styles.scroll}>
            <div className={styles.div}>
              <div className={styles.box} style={{ marginRight: showTable ? 0 : 20 }}>
                <h4>{i18n('report.statistics7')}</h4>
                <ReactECharts option={opt1} ref={ref1} theme="defaultTheme" style={{ width: '100%' }} />
              </div>
              {!showTable && (
                <>
                  <div className={styles.box}>
                    <h4>{i18n('report.statistics44')}</h4>
                    <ReactECharts option={opt2} ref={ref2} theme="defaultTheme" style={{ width: '100%' }} />
                  </div>
                  <div className={styles.box}>
                    <h4>{i18n('report.statistics45')}</h4>
                    <ReactECharts option={opt3} ref={ref3} theme="defaultTheme" style={{ width: '100%' }} />
                  </div>
                </>
              )}
            </div>
            <div className={styles.div}>
              <div className={styles.box} style={{ marginRight: showTable ? 0 : 20 }}>
                <h4>
                  {i18n('report.statistics46')}
                  <span>
                    {i18n('report.statistics47')}:0.28{i18n('report.statistics15')}
                  </span>
                </h4>
                <ReactECharts option={opt4} ref={ref4} theme="defaultTheme" style={{ width: '100%' }} />
              </div>
              {!showTable && (
                <>
                  <div className={styles.box}>
                    <h4>{i18n('report.statistics48')}</h4>
                    <ReactECharts option={opt5} ref={ref5} theme="defaultTheme" style={{ width: '100%' }} />
                  </div>
                  <div className={styles.box}>
                    <h4>{i18n('report.statistics49')}</h4>
                    <ReactECharts option={opt6} ref={ref6} theme="defaultTheme" style={{ width: '100%' }} />
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
