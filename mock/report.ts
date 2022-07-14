export default {
  '/mock/report/basic': {
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        organization: '环宇机械集团',
        summary: index + 10,
        risk_name: '数值指标测试',
        risk_code: '00268' + index,
        risk_level: '高',
        start_time: '2020-05-12',
        end_time: '2020-05-12',
        type: index % 3,
        results: '-',
        setting: '',
      })),
  },
  '/mock/report/basic/sum': {
    sumData: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        organization: '环宇机械集团',
        summary: index + 10,
      })),
  },
  '/mock/report/statistics/list': [
    { key: 1, type: '预付款', time: 1, right: '-' },
    { key: 2, type: '流动资产', time: 2, right: '-' },
    { key: 3, type: '工资', time: 3, right: '-' },
    { key: 4, type: '应收票据', time: 4, right: '-' },
    { key: 5, type: '应收利息', time: 5, right: '-' },
    { key: 6, type: '货币资金', time: 6, right: '-' },
    { key: 7, type: '应收股利', time: 7, right: '-' },
    { key: 8, type: '货币资金', time: 8, right: '-' },
    { key: 9, type: '应收股利', time: 9, right: '-' },
    { key: 10, type: '其它应收', time: 10, right: '-' },
    { key: 11, type: '存货', time: 11, right: '-' },
    { key: 12, type: '居左内容', time: 12, right: '-' },
    { key: 111, type: '预付款', time: 1, right: '-' },
    { key: 112, type: '流动资产', time: 2, right: '-' },
    { key: 113, type: '工资', time: 3, right: '-' },
    { key: 114, type: '应收票据', time: 4, right: '-' },
    { key: 115, type: '应收利息', time: 5, right: '-' },
    { key: 116, type: '货币资金', time: 6, right: '-' },
    { key: 117, type: '应收股利', time: 7, right: '-' },
    { key: 118, type: '货币资金', time: 8, right: '-' },
    { key: 119, type: '应收股利', time: 9, right: '-' },
    { key: 1110, type: '其它应收', time: 10, right: '-' },
    { key: 1111, type: '存货', time: 11, right: '-' },
    { key: 1112, type: '居左内容', time: 12, right: '-' },
  ],
  '/mock/report/statistics/echarts': {
    data1: [
      { value: 1048, name: '净利润' },
      { value: 735, name: '资产总量' },
    ],
    data2: [
      {
        name: '本月：280.35万',
        type: 'bar',
        label: { show: true },
        data: [1500, 1050, 1100, 800],
      },
      {
        name: '上月：170.35万',
        type: 'bar',
        label: { show: true },
        data: [1220, 582, 563, 400],
      },
    ],
    data3: [
      {
        name: '类型三：280.25万',
        type: 'bar',
        label: { show: true },
        data: [1500, 1050, 1100, 800],
      },
    ],
    data4: [
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
    data5: [
      { value: 1048, name: '税费及附加费' },
      { value: 735, name: '管理费用' },
      { value: 580, name: '销售费用' },
    ],
    data6: [
      {
        name: '应收笔数',
        type: 'line',
        data: [100, 132, 101],
      },
      {
        name: '应付金额（万）',
        type: 'line',
        data: [0, 182, 191],
      },
    ],
  },
}
