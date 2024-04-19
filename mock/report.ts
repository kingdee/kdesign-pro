export default {
  '/mock/report/basic': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = {
      dataSource: Array(20)
        .fill(null)
        .map((_, index) => ({
          index: index + 1,
          organization: '环宇机械集团',
          summary: index + 10,
          risk_name: '数值指标测试',
          risk_code: `00268${index}`,
          risk_level: '高',
          start_time: '2020-05-12',
          end_time: '2020-05-12',
          type: index % 3,
          results: '-',
          setting: '',
        })),
    }
    if (lang === 'en-US') {
      data = {
        dataSource: Array(20)
          .fill(null)
          .map((_, index) => ({
            index: index + 1,
            organization: 'Universe Machinery Group',
            summary: index + 10,
            risk_name: 'Numerical Indicator Test',
            risk_code: `00268${index}`,
            risk_level: 'High',
            start_time: '2020-05-12',
            end_time: '2020-05-12',
            type: index % 3,
            results: '-',
            setting: '',
          })),
      }
    }
    res.send(data)
  },
  '/mock/report/basic/sum': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = {
      sumData: Array(20)
        .fill(null)
        .map((_, index) => ({
          index: index + 1,
          organization: '环宇机械集团',
          summary: index + 10,
        })),
    }
    if (lang === 'en-US') {
      data = {
        sumData: Array(20)
          .fill(null)
          .map((_, index) => ({
            index: index + 1,
            organization: 'Universe Machinery Group',
            summary: index + 10,
          })),
      }
    }
    res.send(data)
  },
  '/mock/report/statistics/list': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = [
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
    ]
    if (lang === 'en-US') {
      data = [
        { key: 1, type: 'Advance Payment', time: 1, right: '-' },
        { key: 2, type: 'Current Assets', time: 2, right: '-' },
        { key: 3, type: 'Salary', time: 3, right: '-' },
        { key: 4, type: 'Notes Receivable', time: 4, right: '-' },
        { key: 5, type: 'Interest Receivable', time: 5, right: '-' },
        { key: 6, type: 'Monetary Funds', time: 6, right: '-' },
        { key: 7, type: 'Dividends Receivable', time: 7, right: '-' },
        { key: 8, type: 'Monetary Funds', time: 8, right: '-' },
        { key: 9, type: 'Dividends Receivable', time: 9, right: '-' },
        { key: 10, type: 'Other Receivables', time: 10, right: '-' },
        { key: 11, type: 'Inventory', time: 11, right: '-' },
        { key: 12, type: 'Left Content', time: 12, right: '-' },
        { key: 111, type: 'Advance Payment', time: 1, right: '-' },
        { key: 112, type: 'Current Assets', time: 2, right: '-' },
        { key: 113, type: 'Salary', time: 3, right: '-' },
        { key: 114, type: 'Notes Receivable', time: 4, right: '-' },
        { key: 115, type: 'Interest Receivable', time: 5, right: '-' },
        { key: 116, type: 'Monetary Funds', time: 6, right: '-' },
        { key: 117, type: 'Dividends Receivable', time: 7, right: '-' },
        { key: 118, type: 'Monetary Funds', time: 8, right: '-' },
        { key: 119, type: 'Dividends Receivable', time: 9, right: '-' },
        { key: 1110, type: 'Other Receivables', time: 10, right: '-' },
        { key: 1111, type: 'Inventory', time: 11, right: '-' },
        { key: 1112, type: 'Left Content', time: 12, right: '-' },
      ]
    }
    res.send(data)
  },
  '/mock/report/statistics/echarts': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = {
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
          name: '成本', // 数据项名称，非必选
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
    }
    if (lang === 'en-US') {
      data = {
        data1: [
          { value: 1048, name: 'Net Profit' },
          { value: 735, name: 'Total Assets' },
        ],
        data2: [
          {
            name: 'This Month: 280.35 million',
            type: 'bar',
            label: { show: true },
            data: [1500, 1050, 1100, 800],
          },
          {
            name: 'Last Month: 170.35 million',
            type: 'bar',
            label: { show: true },
            data: [1220, 582, 563, 400],
          },
        ],
        data3: [
          {
            name: 'Type Three: 280.25 million',
            type: 'bar',
            label: { show: true },
            data: [1500, 1050, 1100, 800],
          },
        ],
        data4: [
          {
            data: [32, 37, 21, 29],
            type: 'bar',
            name: 'Cost',
            barWidth: 12,
          },
          {
            data: [38, 72, 56, 71],
            type: 'bar',
            name: 'Revenue',
            barWidth: 12,
          },
        ],
        data5: [
          { value: 1048, name: 'Taxes and Surcharges' },
          { value: 735, name: 'Management Expenses' },
          { value: 580, name: 'Sales Expenses' },
        ],
        data6: [
          {
            name: 'Receivable Count',
            type: 'line',
            data: [100, 132, 101],
          },
          {
            name: 'Payable Amount (million)',
            type: 'line',
            data: [0, 182, 191],
          },
        ],
      }
    }
    res.send(data)
  },
}
