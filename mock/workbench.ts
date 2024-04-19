export default {
  '/mock/home': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = {
      banners: ['home_banner_01.png', 'home_banner_02.png', 'home_banner_03.png'],
      receipt: {
        submit: 25,
        audit: 6,
        notPass: 16,
      },
      receive: {
        submit: 6,
        audit: 18,
        notPass: 26,
      },
      boots: [
        { name: '固定资产', pic: 'assets' },
        { name: '收款排程', pic: 'schedule' },
        { name: '付款单', pic: 'receipt' },
        { name: '流程管理', pic: 'BMP' },
        { name: '成本核算', pic: 'cost' },
        { name: '合同维护', pic: 'maintenance' },
        { name: '报表查询', pic: 'report' },
        { name: '收款信息', pic: 'billing' },
      ],
      funds: [
        {
          name: '蓝海集团',
          code: 'KDC-00-20210714-26649',
          logo: 'company_logo_01.png',
          amount: '28453.75',
          expire: '2022-04-19',
          payment: '赊账',
          settlement: '现金支票',
        },
        {
          name: '华生控股集团',
          code: 'KDC-00-20210813-93980',
          logo: 'company_logo_02.png',
          amount: '39844.39',
          expire: '2022-04-23',
          payment: '赊账',
          settlement: '现金支票',
        },
        {
          name: '利金科技有限公司',
          code: 'KDC-00-20210921-63136',
          logo: 'company_logo_03.png',
          amount: '34242.62',
          expire: '2022-04-12',
          payment: '赊账',
          settlement: '现金支票',
        },
      ],
      bills: [
        {
          name: '宇通公司暂应收单',
          code: 'ARUB-2020030200045',
          time: '2020-02-18',
          status: '-1',
        },
        {
          name: '环球集团应收单',
          code: 'ARUB-2020030200058',
          time: '2020-02-18',
          status: '1',
        },
      ],
      news: [
        {
          title: '财务报表分析专题培训',
          author: '环宇画报',
          time: '10-11 10:16',
          cover: 'news_01.png',
        },
        {
          title: '移动助手——助力效率腾飞',
          author: '环宇科技深圳研发部',
          time: '10-09 14:24',
          cover: 'news_02.png',
        },
        {
          title: '第三季度业绩冲刺动员大会',
          author: '环宇销售小蜜',
          time: '09-27 10:16',
          cover: 'news_03.png',
        },
      ],
      agingOption: {
        grid: { left: 30, top: 50, right: 30, bottom: 20 },
        xAxis: {
          type: 'category',
          data: ['未到期', '180天以上', '90-180天', '31-90天'],
          axisLabel: {
            fontSize: 12,
            color: '#999',
          },
        },
        yAxis: [
          {
            type: 'value',
            name: '(万)',
            min: 0,
            max: 250,
            interval: 50,
            nameTextStyle: {
              color: '#999',
              fontSize: 12,
              align: 'right',
            },
            axisLabel: {
              fontSize: 12,
              color: '#999',
            },
            splitLine: {
              lineStyle: {
                type: 'solid',
              },
            },
          },
          {
            type: 'value',
            name: '(笔)',
            min: 0,
            max: 100,
            interval: 20,
            nameTextStyle: {
              color: '#999',
              fontSize: 12,
              align: 'left',
            },
            axisLabel: {
              fontSize: 12,
              color: '#999',
            },
            splitLine: {
              lineStyle: {
                type: 'solid',
              },
            },
          },
        ],
        legend: {
          left: 'right',
          itemGap: 8,
          icon: 'rect',
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#999',
          },
        },
        series: [
          {
            data: [40, 175, 230, 170],
            type: 'bar', // echarts 图表类型， 必选
            name: '应收金额（万）', // 数据项名称，非必选
            color: '#40A9FF',
            barWidth: 16,
          },
          {
            data: [95, 135, 210, 160],
            type: 'bar',
            name: '应收笔数',
            color: '#73D13D',
            barWidth: 16,
          },
        ],
        tooltip: {
          show: true,
        },
      },
      rateOptions: {
        grid: { left: 30, top: 50, right: 35, bottom: 45 },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10'],
          axisLabel: {
            fontSize: 10,
            color: '#999',
            rotate: -55,
            verticalAlign: 'top',
          },
        },
        yAxis: {
          type: 'value',
          name: '(%)',
          min: 0,
          max: 2.5,
          interval: 0.5,
          nameTextStyle: {
            color: '#999',
            fontSize: 12,
            align: 'right',
          },
          axisLabel: {
            fontSize: 12,
            color: '#999',
            formatter: (value: number) => (value % 1 === 0 ? `${value}.0` : value),
          },
          splitLine: {
            lineStyle: {
              type: 'solid',
            },
          },
        },
        tooltip: {
          axisPointer: {
            type: 'cross', // 坐标轴指示器设置为十字准星指示器
          },
        },
        series: [
          {
            data: [0.65, 0.7, 1.3, 2.25, 1.4, 1.65, 1.4, 2.0],
            type: 'line', // echarts 图表类型， 必选
            smooth: true,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(64, 169, 255, .3)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(64, 169, 255, .1)', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            }, // 设置后显示成区域面积图，必选
          },
        ],
      },
    }
    if (lang === 'en-US') {
      data = {
        banners: ['home_banner_01.png', 'home_banner_02.png', 'home_banner_03.png'],
        receipt: {
          submit: 25,
          audit: 6,
          notPass: 16,
        },
        receive: {
          submit: 6,
          audit: 18,
          notPass: 26,
        },
        boots: [
          { name: 'Assets', pic: 'assets' },
          { name: 'Schedule', pic: 'schedule' },
          { name: 'Receipt', pic: 'receipt' },
          { name: 'BMP', pic: 'BMP' },
          { name: 'Cost', pic: 'cost' },
          { name: 'Maintenance', pic: 'maintenance' },
          { name: 'Report', pic: 'report' },
          { name: 'Billing', pic: 'billing' },
        ],
        funds: [
          {
            name: 'Blue ocean group',
            code: 'KDC-00-20210714-26649',
            logo: 'company_logo_01.png',
            amount: '28453.75',
            expire: '2022-04-19',
            payment: 'On credit',
            settlement: 'Cash cheque',
          },
          {
            name: 'Watson Holding Group',
            code: 'KDC-00-20210813-93980',
            logo: 'company_logo_02.png',
            amount: '39844.39',
            expire: '2022-04-23',
            payment: 'On credit',
            settlement: 'Cash cheque',
          },
          {
            name: 'Lijin Technology Co., LTD',
            code: 'KDC-00-20210921-63136',
            logo: 'company_logo_03.png',
            amount: '34242.62',
            expire: '2022-04-12',
            payment: 'On credit',
            settlement: 'Cash cheque',
          },
        ],
        bills: [
          {
            name: 'Yutong Company temporarily receivable',
            code: 'ARUB-2020030200045',
            time: '2020-02-18',
            status: '-1',
          },
          {
            name: 'Global Group receivables',
            code: 'ARUB-2020030200058',
            time: '2020-02-18',
            status: '1',
          },
        ],
        news: [
          {
            title: 'Special training for financial statements analysis',
            author: 'Huanyu Pictorial',
            time: '10-11 10:16',
            cover: 'news_01.png',
          },
          {
            title: 'Mobile assistant -help efficiency take off',
            author: 'Huanyu Technology Shenzhen R & D Department',
            time: '10-09 14:24',
            cover: 'news_02.png',
          },
          {
            title: 'The third quarter performance sprint mobilization meeting',
            author: 'Huanyu Sales Xiaomi',
            time: '09-27 10:16',
            cover: 'news_03.png',
          },
        ],
        agingOption: {
          grid: { left: 30, top: 50, right: 30, bottom: 20 },
          xAxis: {
            type: 'category',
            data: ['undue', 'above 180days', '90-180days', '31-90days'],
            axisLabel: {
              fontSize: 12,
              color: '#999',
            },
          },
          yAxis: [
            {
              type: 'value',
              name: '(wan)',
              min: 0,
              max: 250,
              interval: 50,
              nameTextStyle: {
                color: '#999',
                fontSize: 12,
                align: 'right',
              },
              axisLabel: {
                fontSize: 12,
                color: '#999',
              },
              splitLine: {
                lineStyle: {
                  type: 'solid',
                },
              },
            },
            {
              type: 'value',
              name: '(sum)',
              min: 0,
              max: 100,
              interval: 20,
              nameTextStyle: {
                color: '#999',
                fontSize: 12,
                align: 'left',
              },
              axisLabel: {
                fontSize: 12,
                color: '#999',
              },
              splitLine: {
                lineStyle: {
                  type: 'solid',
                },
              },
            },
          ],
          legend: {
            left: 'right',
            itemGap: 8,
            icon: 'rect',
            itemWidth: 12,
            itemHeight: 12,
            textStyle: {
              color: '#999',
            },
          },
          series: [
            {
              data: [40, 175, 230, 170],
              type: 'bar', // echarts 图表类型， 必选
              name: 'Amount(wan)', // 数据项名称，非必选
              color: '#40A9FF',
              barWidth: 16,
            },
            {
              data: [95, 135, 210, 160],
              type: 'bar',
              name: 'Number',
              color: '#73D13D',
              barWidth: 16,
            },
          ],
          tooltip: {
            show: true,
          },
        },
        rateOptions: {
          grid: { left: 30, top: 50, right: 35, bottom: 45 },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10'],
            axisLabel: {
              fontSize: 10,
              color: '#999',
              rotate: -55,
              verticalAlign: 'top',
            },
          },
          yAxis: {
            type: 'value',
            name: '(%)',
            min: 0,
            max: 2.5,
            interval: 0.5,
            nameTextStyle: {
              color: '#999',
              fontSize: 12,
              align: 'right',
            },
            axisLabel: {
              fontSize: 12,
              color: '#999',
              formatter: (value: number) => (value % 1 === 0 ? `${value}.0` : value),
            },
            splitLine: {
              lineStyle: {
                type: 'solid',
              },
            },
          },
          tooltip: {
            axisPointer: {
              type: 'cross', // 坐标轴指示器设置为十字准星指示器
            },
          },
          series: [
            {
              data: [0.65, 0.7, 1.3, 2.25, 1.4, 1.65, 1.4, 2.0],
              type: 'line', // echarts 图表类型， 必选
              smooth: true,
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(64, 169, 255, .3)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(64, 169, 255, .1)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              }, // 设置后显示成区域面积图，必选
            },
          ],
        },
      }
    }
    res.send(data)
  },
}
