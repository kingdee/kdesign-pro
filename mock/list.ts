const data1 = {
  mock1: {
    filterConditions: [
      {
        key: 'date',
        label: '申请日期',
        required: true,
        options: [
          { value: 'today', label: '今天' },
          { value: 'thisWeek', label: '本周' },
          { value: 'thisMonth', label: '本月' },
          { value: 'nearlyThreeMonths', label: '过去三个月' },
          { value: 'nearlyYear', label: '近一年' },
        ],
      },
      {
        key: 'status',
        label: '状态',
        multiple: true,
        options: [
          { value: 'status1', label: '暂存' },
          { value: 'status2', label: '已提交' },
          { value: 'status3', label: '审核中' },
          { value: 'status4', label: '审核未通过' },
          { value: 'status5', label: '审核通过' },
          { value: 'status6', label: '等待付款' },
          { value: 'status7', label: '已付款' },
          { value: 'status8', label: '废弃' },
          { value: 'status9', label: '关闭' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['nearlyThreeMonths'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        const currentMap: Record<number, string> = {
          0: '一级审批/李王开',
          1: '二级审批/谭曾',
          2: '总部财务/曾志诚',
        }

        const mapDepart: Record<number, string> = {
          0: '集团总办',
          1: '用户体验部',
          2: '后勤部',
          3: '人力资源部',
        }
        return {
          index: index + 1,
          date: `2021-0${Math.ceil(Math.random() * 9)}-${Math.floor(Math.random() * 3)}${Math.floor(
            Math.random() * 10,
          )}`,
          number: `CLBX-1040${Math.floor(Math.random() * 10000)}`,
          subject: '共享差旅费用',
          reimburse: '26,800.00',
          vouch: '26,800.00',
          cash: '26,800.00',
          current: currentMap[Math.floor(Math.random() * 3)],
          status: index % 3 === 0 ? '已提交' : '暂存',
          department: mapDepart[Math.floor(Math.random() * 4)],
        }
      }),
  },
  mock2: {
    filterConditions: [
      {
        key: 'company',
        label: '组织',
        required: true,
        options: [
          { value: 'company1', label: '环宇科技广东分公司' },
          { value: 'company2', label: '环宇集团' },
          { value: 'company3', label: '环宇科技有限公司' },
          { value: 'company4', label: '环宇科技深圳分公司' },
          { value: 'company5', label: '环宇贸易' },
          { value: 'company6', label: '环宇生鲜' },
        ],
      },
      {
        key: 'organize',
        label: '组织',
        multiple: true,
        options: [
          { value: 'organize1', label: '环宇科技广东分公司' },
          { value: 'organize2', label: '环宇科技' },
          { value: 'organize3', label: '环宇科技有限公司' },
          { value: 'organize4', label: '环宇科技深圳分公司' },
          { value: 'organize5', label: '环宇贸易' },
          { value: 'organize6', label: '环宇生鲜' },
        ],
      },
    ],
    filterDefaultValue: {
      company: ['company5'],
      organize: ['organize6'],
    },
    treeData: [
      {
        key: '1',
        title: '全部',
        children: [
          {
            key: '1-0',
            title: '经营活动产生的现金流量1',
            children: [
              {
                key: '1-0-0',
                title: '子项1',
              },
              {
                key: '1-0-1',
                title: '子项2',
              },
            ],
          },
          {
            key: '1-1',
            title: '投资活动产生的现金流量2',
            children: [
              {
                key: '1-1-0',
                title: '筹资活动产生的现金流量',
              },
              {
                key: '1-1-1',
                title: '汇率变动产生的现金流量',
              },
            ],
          },
          {
            key: '1-2',
            title: '现金流量附表项目',
            children: [
              {
                key: '1-2-0',
                title: '子项1',
              },
              {
                key: '1-2-1',
                title: '子项2',
              },
            ],
          },
        ],
      },
    ],
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        number: 'C23.136',
        name: '收回投资收到的现金',
        type: '主表项目',
        flow: '资金流入',
        business: '',
      })),
  },
  mock3: {
    filterConditions: [
      {
        key: 'date',
        label: '日期',
        required: true,
        options: [
          { value: 'today', label: '今天' },
          { value: 'thisWeek', label: '本周' },
          { value: 'thisMonth', label: '本月' },
          { value: 'nearlyThreeMonths', label: '近三个月' },
        ],
      },
      {
        key: 'customer',
        label: '组织',
        multiple: true,
        options: [
          { value: 'customer1', label: '蓝海大型商超' },
          { value: 'customer2', label: '华生连锁超市' },
          { value: 'customer3', label: '蓝海外贸' },
          { value: 'customer4', label: '华生外贸' },
        ],
      },
    ],
    filterDefaultValue: {
      date: ['nearlyThreeMonths'],
      customer: ['customer1'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        return {
          index: String(index + 1),
          date: '2021-04-17',
          number: 'SO20180118-1008',
          time: '2018-03-20 15:39:42',
          principal: '林俊均',
          name: '沃尔玛超市',
          amount: '¥ 26,800.00',
          status: '待确认',
          spread: String(index + 1),
        }
      }),
    detailData: Array(3)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        code: 'T0420',
        name: '火锅底料',
        property: '底料',
        quantity: 500,
        unit: '克/g',
        price: '¥ 35.00',
        sum: '¥ 3500.00',
        existQuantity: 500,
        steamQuantity: 500,
        address: '深圳宝安',
        memo: '暂无相关备注',
      })),
  },
  mock4: {
    filterConditions: [
      {
        key: 'date',
        label: '日期',
        required: true,
        options: [
          { value: 'today', label: '今天' },
          { value: 'thisWeek', label: '本周' },
          { value: 'thisMonth', label: '本月' },
          { value: 'nearlyThreeMonths', label: '近三个月' },
          { value: 'nearlyYear', label: '近一年' },
        ],
      },
      {
        key: 'status',
        label: '客户',
        multiple: true,
        options: [
          { value: 'status1', label: '环宇集团' },
          { value: 'status2', label: '环宇科技有限公司' },
          { value: 'status3', label: '环宇科技深圳分公司' },
          { value: 'status4', label: '环宇贸易' },
          { value: 'status5', label: '环宇生鲜' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['today'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        key: index,
        checked: false,
        title: '2020年6月北京客户大会',
        name: '闻莘',
        dep: '用户体验部',

        way: '深圳－北京－深圳',
        time: '08.25-08.29',
        cost: '¥ 8,236.00',
      })),
  },
  mock5: {
    filterConditions: [
      {
        key: 'date',
        label: '日期',
        required: true,
        options: [
          { value: 'today', label: '今天' },
          { value: 'thisWeek', label: '本周' },
          { value: 'thisMonth', label: '本月' },
          { value: 'nearlyThreeMonths', label: '近三个月' },
        ],
      },
      {
        key: 'status',
        label: '客户',
        multiple: true,
        options: [
          { value: 'status1', label: '环宇集团' },
          { value: 'status2', label: '环宇科技有限公司' },
          { value: 'status3', label: '环宇科技深圳分公司' },
          { value: 'status4', label: '环宇贸易' },
          { value: 'status5', label: '环宇生鲜' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['nearlyThreeMonths'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        const mapProduct: Record<number, any> = {
          1: {
            name: '时尚空调',
            code: 'lkene-239386',
            standard: '套装/台',
            color: '白银',
            size: '76*35cm',
            confirmSize: '30*56cm',
            price: 2366,
            originPrice: 3000,
          },
          2: {
            name: '时尚打印机',
            code: 'lkene-2392328',
            standard: '套装/台',
            color: '神秘黑',
            size: '50*20cm',
            confirmSize: '58*130cm',
            price: 2860,
            originPrice: 3200,
          },
          3: {
            name: '时尚笔记本电脑-A32cc',
            code: 'lkene-23928',
            standard: '套装/台',
            color: '魅蓝',
            size: '55*9cm',
            confirmSize: '30*45cm',
            price: 5666,
            originPrice: 6300,
          },
          4: {
            name: '时尚2015版27寸一体机',
            code: 'lkene-239266',
            standard: '套装/台',
            color: '银色',
            size: '60*33cm',
            confirmSize: '75*45cm',
            price: 15666,
            originPrice: 18300,
          },
          5: {
            name: '时尚鼠标',
            code: 'lkene-239245',
            standard: '个',
            color: '气质黑',
            size: '8*7cm',
            confirmSize: '10*7cm',
            price: 56,
            originPrice: 120,
          },
          6: {
            name: '时尚圆珠笔',
            code: 'lkene-239321',
            standard: '支',
            color: '稳重蓝',
            size: '10*2cm',
            confirmSize: '12*2cm',
            price: 6,
            originPrice: 12,
          },
          7: {
            name: '时尚投影仪',
            code: 'lkene-239667',
            standard: '套装/台',
            color: '炫光银',
            size: '84*110cm',
            confirmSize: '80*120cm',
            price: 2450,
            originPrice: 2999,
          },
        }
        const number = Math.ceil(Math.random() * 7)
        const productAttr = mapProduct[number]
        const normalAttr: Record<string, any> = {
          order: `${500 + Math.ceil(Math.random() * 2000)}(${productAttr.standard.slice(-1)})`,
          statusStr: Math.ceil(Math.random() * 2) % 2 === 0 ? '已上架' : '已下架',
          status: Math.ceil(Math.random() * 2) % 2 === 0 ? 'success' : 'expired',
          promotion: 'false',
        }
        return {
          key: index,
          checked: false,
          picture: `banner_img_0${number}`,
          ...productAttr,
          ...normalAttr,
        }
      }),
  },
}
const data2 = {
  mock1: {
    filterConditions: [
      {
        key: 'date',
        label: 'Application Date',
        required: true,
        options: [
          { value: 'today', label: 'Today' },
          { value: 'thisWeek', label: 'This Week' },
          { value: 'thisMonth', label: 'This Month' },
          { value: 'nearlyThreeMonths', label: 'Past Three Months' },
          { value: 'nearlyYear', label: 'Nearly One Year' },
        ],
      },
      {
        key: 'status',
        label: 'Status',
        multiple: true,
        options: [
          { value: 'status1', label: 'Draft' },
          { value: 'status2', label: 'Submitted' },
          { value: 'status3', label: 'Under Review' },
          { value: 'status4', label: 'Not Approved' },
          { value: 'status5', label: 'Approved' },
          { value: 'status6', label: 'Awaiting Payment' },
          { value: 'status7', label: 'Paid' },
          { value: 'status8', label: 'Discarded' },
          { value: 'status9', label: 'Closed' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['nearlyThreeMonths'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        const currentMap: any = {
          0: 'First-level Approval/Li Wangkai',
          1: 'Second-level Approval/Tan Zeng',
          2: 'Headquarters Finance/Zeng Zhicheng',
        }

        const mapDepart: any = {
          0: 'Group General Office',
          1: 'User Experience Department',
          2: 'Logistics Department',
          3: 'Human Resources Department',
        }
        return {
          index: index + 1,
          date: `2021-0${Math.ceil(Math.random() * 9)}-${Math.floor(Math.random() * 3)}${Math.floor(
            Math.random() * 10,
          )}`,
          number: `CLBX-1040${Math.floor(Math.random() * 10000)}`,
          subject: 'Shared Travel Expenses',
          reimburse: '26,800.00',
          vouch: '26,800.00',
          cash: '26,800.00',
          current: currentMap[Math.floor(Math.random() * 3)],
          status: index % 3 === 0 ? 'Submitted' : 'Draft',
          department: mapDepart[Math.floor(Math.random() * 4)],
        }
      }),
  },
  mock2: {
    filterConditions: [
      {
        key: 'company',
        label: 'Organization',
        required: true,
        options: [
          { value: 'company1', label: 'Guangdong Branch of HuanYu Technology' },
          { value: 'company2', label: 'HuanYu Group' },
          { value: 'company3', label: 'HuanYu Technology Co., Ltd.' },
          { value: 'company4', label: 'Shenzhen Branch of HuanYu Technology' },
          { value: 'company5', label: 'HuanYu Trade' },
          { value: 'company6', label: 'HuanYu Fresh' },
        ],
      },
      {
        key: 'organize',
        label: 'Organization',
        multiple: true,
        options: [
          { value: 'organize1', label: 'Guangdong Branch of HuanYu Technology' },
          { value: 'organize2', label: 'HuanYu Technology' },
          { value: 'organize3', label: 'HuanYu Technology Co., Ltd.' },
          { value: 'organize4', label: 'Shenzhen Branch of HuanYu Technology' },
          { value: 'organize5', label: 'HuanYu Trade' },
          { value: 'organize6', label: 'HuanYu Fresh' },
        ],
      },
    ],
    filterDefaultValue: {
      company: ['company5'],
      organize: ['organize6'],
    },
    treeData: [
      {
        key: '1',
        title: 'All',
        children: [
          {
            key: '1-0',
            title: 'Cash Flows from Operating Activities 1',
            children: [
              {
                key: '1-0-0',
                title: 'Subitem 1',
              },
              {
                key: '1-0-1',
                title: 'Subitem 2',
              },
            ],
          },
          {
            key: '1-1',
            title: 'Cash Flows from Investing Activities 2',
            children: [
              {
                key: '1-1-0',
                title: 'Cash Flows from Financing Activities',
              },
              {
                key: '1-1-1',
                title: 'Cash Flows from Exchange Rate Changes',
              },
            ],
          },
          {
            key: '1-2',
            title: 'Supplementary Cash Flow Statement Items',
            children: [
              {
                key: '1-2-0',
                title: 'Subitem 1',
              },
              {
                key: '1-2-1',
                title: 'Subitem 2',
              },
            ],
          },
        ],
      },
    ],
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        number: 'C23.136',
        name: 'Cash Received from Investment Recovery',
        type: 'Main Statement Item',
        flow: 'Cash Inflow',
        business: '',
      })),
  },
  mock3: {
    filterConditions: [
      {
        key: 'date',
        label: 'Date',
        required: true,
        options: [
          { value: 'today', label: 'Today' },
          { value: 'thisWeek', label: 'This Week' },
          { value: 'thisMonth', label: 'This Month' },
          { value: 'nearlyThreeMonths', label: 'Nearly Three Months' },
        ],
      },
      {
        key: 'customer',
        label: 'Organization',
        multiple: true,
        options: [
          { value: 'customer1', label: 'Blue Ocean Supermarket' },
          { value: 'customer2', label: 'Huasheng Chain Supermarket' },
          { value: 'customer3', label: 'Blue Ocean Foreign Trade' },
          { value: 'customer4', label: 'Huasheng Foreign Trade' },
        ],
      },
    ],
    filterDefaultValue: {
      date: ['nearlyThreeMonths'],
      customer: ['customer1'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: String(index + 1),
        date: '2021-04-17',
        number: 'SO20180118-1008',
        time: '2018-03-20 15:39:42',
        principal: 'Lin Junjun',
        name: 'Walmart Supermarket',
        amount: '¥ 26,800.00',
        status: 'Pending Confirmation',
        spread: String(index + 1),
      })),
    detailData: Array(3)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        code: 'T0420',
        name: 'Hot Pot Base Material',
        property: 'Base Material',
        quantity: 500,
        unit: 'Grams/g',
        price: '¥ 35.00',
        sum: '¥ 3500.00',
        existQuantity: 500,
        steamQuantity: 500,
        address: 'Shenzhen Baoan',
        memo: 'No relevant notes yet',
      })),
  },
  mock4: {
    filterConditions: [
      {
        key: 'date',
        label: 'Date',
        required: true,
        options: [
          { value: 'today', label: 'Today' },
          { value: 'thisWeek', label: 'This Week' },
          { value: 'thisMonth', label: 'This Month' },
          { value: 'nearlyThreeMonths', label: 'Nearly Three Months' },
          { value: 'nearlyYear', label: 'Nearly One Year' },
        ],
      },
      {
        key: 'status',
        label: 'Customer',
        multiple: true,
        options: [
          { value: 'status1', label: 'HuanYu Group' },
          { value: 'status2', label: 'HuanYu Technology Co., Ltd.' },
          { value: 'status3', label: 'Shenzhen Branch of HuanYu Technology' },
          { value: 'status4', label: 'HuanYu Trade' },
          { value: 'status5', label: 'HuanYu Fresh' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['today'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        key: index,
        checked: false,
        title: 'June 2020 Beijing Customer Conference',
        name: 'Wen Xin',
        dep: 'User Experience Department',
        way: 'Shenzhen - Beijing - Shenzhen',
        time: '08.25-08.29',
        cost: '¥ 8,236.00',
      })),
  },
  mock5: {
    filterConditions: [
      {
        key: 'date',
        label: 'Date',
        required: true,
        options: [
          { value: 'today', label: 'Today' },
          { value: 'thisWeek', label: 'This Week' },
          { value: 'thisMonth', label: 'This Month' },
          { value: 'nearlyThreeMonths', label: 'Nearly Three Months' },
        ],
      },
      {
        key: 'status',
        label: 'Customer',
        multiple: true,
        options: [
          { value: 'status1', label: 'Universal Group' },
          { value: 'status2', label: 'Universal Technology Co., Ltd.' },
          { value: 'status3', label: 'Universal Technology Shenzhen Branch' },
          { value: 'status4', label: 'Universal Trade' },
          { value: 'status5', label: 'Universal Fresh' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['nearlyThreeMonths'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        const mapProduct: Record<number, any> = {
          1: {
            name: 'Fashion Air Conditioner',
            code: 'lkene-239386',
            standard: 'Set/Unit',
            color: 'Silver',
            size: '76*35cm',
            confirmSize: '30*56cm',
            price: 2366,
            originPrice: 3000,
          },
          2: {
            name: 'Fashion Printer',
            code: 'lkene-2392328',
            standard: 'Set/Unit',
            color: 'Mystic Black',
            size: '50*20cm',
            confirmSize: '58*130cm',
            price: 2860,
            originPrice: 3200,
          },
          3: {
            name: 'Fashion Laptop-A32cc',
            code: 'lkene-23928',
            standard: 'Set/Unit',
            color: 'Charm Blue',
            size: '55*9cm',
            confirmSize: '30*45cm',
            price: 5666,
            originPrice: 6300,
          },
          4: {
            name: 'Fashion 2015 Edition 27-inch All-in-One PC',
            code: 'lkene-239266',
            standard: 'Set/Unit',
            color: 'Silver',
            size: '60*33cm',
            confirmSize: '75*45cm',
            price: 15666,
            originPrice: 18300,
          },
          5: {
            name: 'Fashion Mouse',
            code: 'lkene-239245',
            standard: 'Piece',
            color: 'Elegant Black',
            size: '8*7cm',
            confirmSize: '10*7cm',
            price: 56,
            originPrice: 120,
          },
          6: {
            name: 'Fashion Ballpoint Pen',
            code: 'lkene-239321',
            standard: 'Piece',
            color: 'Steady Blue',
            size: '10*2cm',
            confirmSize: '12*2cm',
            price: 6,
            originPrice: 12,
          },
          7: {
            name: 'Fashion Projector',
            code: 'lkene-239667',
            standard: 'Set/Unit',
            color: 'Radiant Silver',
            size: '84*110cm',
            confirmSize: '80*120cm',
            price: 2450,
            originPrice: 2999,
          },
        }
        const number = Math.ceil(Math.random() * 7)
        const productAttr = mapProduct[number]
        const normalAttr: Record<string, any> = {
          order: `${500 + Math.ceil(Math.random() * 2000)}(${productAttr.standard.slice(-1)})`,
          statusStr: Math.ceil(Math.random() * 2) % 2 === 0 ? 'OnSale' : 'OffSale',
          status: Math.ceil(Math.random() * 2) % 2 === 0 ? 'success' : 'expired',
          promotion: 'false',
        }
        return {
          key: index,
          checked: false,
          picture: `banner_img_0${number}`,
          ...productAttr,
          ...normalAttr,
        }
      }),
  },
}
const data3 = {
  mock1: {
    filterConditions: [
      {
        key: 'date',
        label: '申请日',
        required: true,
        options: [
          { value: 'today', label: '今日' },
          { value: 'thisWeek', label: '今週' },
          { value: 'thisMonth', label: '今月' },
          { value: 'nearlyThreeMonths', label: '過去3ヶ月' },
          { value: 'nearlyYear', label: '近1年' },
        ],
      },
      {
        key: 'status',
        label: 'ステータス',
        multiple: true,
        options: [
          { value: 'status1', label: '一時保存' },
          { value: 'status2', label: '提出済' },
          { value: 'status3', label: '審査中' },
          { value: 'status4', label: '審査未通過' },
          { value: 'status5', label: '審査通過' },
          { value: 'status6', label: '支払待ち' },
          { value: 'status7', label: '支払済' },
          { value: 'status8', label: '廃棄' },
          { value: 'status9', label: '閉鎖' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['nearlyThreeMonths'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        const currentMap: any = {
          0: '一次審査/李王開',
          1: '二次審査/谭曾',
          2: '総務部/曾志誠',
        }

        const mapDepart: any = {
          0: '集団総務',
          1: 'ユーザーエクスペリエンス部',
          2: '後方支援部',
          3: '人事部',
        }
        return {
          index: index + 1,
          date: `2021-0${Math.ceil(Math.random() * 9)}-${Math.floor(Math.random() * 3)}${Math.floor(
            Math.random() * 10,
          )}`,
          number: `CLBX-1040${Math.floor(Math.random() * 10000)}`,
          subject: '共有出張費',
          reimburse: '26,800.00',
          vouch: '26,800.00',
          cash: '26,800.00',
          current: currentMap[Math.floor(Math.random() * 3)],
          status: index % 3 === 0 ? '提出済' : '一時保存',
          department: mapDepart[Math.floor(Math.random() * 4)],
        }
      }),
  },
  mock2: {
    filterConditions: [
      {
        key: 'company',
        label: '組織',
        required: true,
        options: [
          { value: 'company1', label: '宇宙テクノロジーグァンドン支社' },
          { value: 'company2', label: '宇宙グループ' },
          { value: 'company3', label: '宇宙テクノロジー株式会社' },
          { value: 'company4', label: '宇宙テクノロジー深セン支社' },
          { value: 'company5', label: '宇宙トレーディング' },
          { value: 'company6', label: '宇宙生鮮' },
        ],
      },
      {
        key: 'organize',
        label: '組織',
        multiple: true,
        options: [
          { value: 'organize1', label: '宇宙テクノロジーグァンドン支社' },
          { value: 'organize2', label: '宇宙テクノロジー' },
          { value: 'organize3', label: '宇宙テクノロジー株式会社' },
          { value: 'organize4', label: '宇宙テクノロジー深セン支社' },
          { value: 'organize5', label: '宇宙トレーディング' },
          { value: 'organize6', label: '宇宙生鮮' },
        ],
      },
    ],
    filterDefaultValue: {
      company: ['company5'],
      organize: ['organize6'],
    },
    treeData: [
      {
        key: '1',
        title: '全部',
        children: [
          {
            key: '1-0',
            title: '営業活動からの現金流量1',
            children: [
              {
                key: '1-0-0',
                title: 'サブアイテム1',
              },
              {
                key: '1-0-1',
                title: 'サブアイテム2',
              },
            ],
          },
          {
            key: '1-1',
            title: '投資活動からの現金流量2',
            children: [
              {
                key: '1-1-0',
                title: '資金調達からの現金流量',
              },
              {
                key: '1-1-1',
                title: '為替変動からの現金流量',
              },
            ],
          },
          {
            key: '1-2',
            title: '現金流量補足表アイテム',
            children: [
              {
                key: '1-2-0',
                title: 'サブアイテム1',
              },
              {
                key: '1-2-1',
                title: 'サブアイテム2',
              },
            ],
          },
        ],
      },
    ],
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        number: 'C23.136',
        name: '收回投资收到的现金',
        type: '主表项目',
        flow: '资金流入',
        business: '',
      })),
  },
  mock3: {
    filterConditions: [
      {
        key: 'date',
        label: '日付',
        required: true,
        options: [
          { value: 'today', label: '今日' },
          { value: 'thisWeek', label: '今週' },
          { value: 'thisMonth', label: '今月' },
          { value: 'nearlyThreeMonths', label: '過去三ヶ月' },
        ],
      },
      {
        key: 'customer',
        label: '組織',
        multiple: true,
        options: [
          { value: 'customer1', label: 'ブルーオーシャン大型商業施設' },
          { value: 'customer2', label: 'ファームウェイ連鎖スーパー' },
          { value: 'customer3', label: 'ブルーオーシャン輸出入' },
          { value: 'customer4', label: 'ファームウェイ輸出入' },
        ],
      },
    ],
    filterDefaultValue: {
      date: ['nearlyThreeMonths'],
      customer: ['customer1'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        return {
          index: String(index + 1),
          date: '2021-04-17',
          number: 'SO20180118-1008',
          time: '2018-03-20 15:39:42',
          principal: '林俊均',
          name: 'ウォルマートスーパー',
          amount: '¥ 26,800.00',
          status: '確認待ち',
          spread: String(index + 1),
        }
      }),
    detailData: Array(3)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        code: 'T0420',
        name: '火鍋ベース',
        property: 'ベース',
        quantity: 500,
        unit: 'グラム/g',
        price: '¥ 35.00',
        sum: '¥ 3500.00',
        existQuantity: 500,
        steamQuantity: 500,
        address: '深セン寶安',
        memo: '関連メモはありません',
      })),
  },
  mock4: {
    filterConditions: [
      {
        key: 'date',
        label: '日付',
        required: true,
        options: [
          { value: 'today', label: '今日' },
          { value: 'thisWeek', label: '今週' },
          { value: 'thisMonth', label: '今月' },
          { value: 'nearlyThreeMonths', label: '過去三ヶ月' },
          { value: 'nearlyYear', label: '過去一年' },
        ],
      },
      {
        key: 'status',
        label: 'お客様',
        multiple: true,
        options: [
          { value: 'status1', label: 'グローバルグループ' },
          { value: 'status2', label: 'グローバルテクノロジー株式会社' },
          { value: 'status3', label: 'グローバルテクノロジー深セン支店' },
          { value: 'status4', label: 'グローバルトレード' },
          { value: 'status5', label: 'グローバルフレッシュ' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['today'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        key: index,
        checked: false,
        title: '2020年6月北京の顧客大会',
        name: '聞莘',
        dep: 'ユーザーエクスペリエンス部',
        way: '深セン－北京－深セン',
        time: '08.25-08.29',
        cost: '¥ 8,236.00',
      })),
  },
  mock5: {
    filterConditions: [
      {
        key: 'date',
        label: '日付',
        required: true,
        options: [
          { value: 'today', label: '今日' },
          { value: 'thisWeek', label: '今週' },
          { value: 'thisMonth', label: '今月' },
          { value: 'nearlyThreeMonths', label: '過去三ヶ月' },
        ],
      },
      {
        key: 'status',
        label: 'お客様',
        multiple: true,
        options: [
          { value: 'status1', label: 'グローバルグループ' },
          { value: 'status2', label: 'グローバルテクノロジー株式会社' },
          { value: 'status3', label: 'グローバルテクノロジー深セン支店' },
          { value: 'status4', label: 'グローバルトレード' },
          { value: 'status5', label: 'グローバルフレッシュ' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['nearlyThreeMonths'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        const mapProduct: Record<number, any> = {
          1: {
            name: 'ファッションエアコン',
            code: 'lkene-239386',
            standard: 'セット/台',
            color: 'シルバー',
            size: '7635cm',
            confirmSize: '3056cm',
            price: 2366,
            originPrice: 3000,
          },
          2: {
            name: 'ファッションプリンター',
            code: 'lkene-2392328',
            standard: 'セット/台',
            color: 'ミステリーブラック',
            size: '5020cm',
            confirmSize: '58130cm',
            price: 2860,
            originPrice: 3200,
          },
          3: {
            name: 'ファッションノートパソコン-A32cc',
            code: 'lkene-23928',
            standard: 'セット/台',
            color: '魅藍',
            size: '559cm',
            confirmSize: '3045cm',
            price: 5666,
            originPrice: 6300,
          },
          4: {
            name: 'ファッション2015版27インチオールインワン',
            code: 'lkene-239266',
            standard: 'セット/台',
            color: 'シルバー',
            size: '6033cm',
            confirmSize: '7545cm',
            price: 15666,
            originPrice: 18300,
          },
          5: {
            name: 'ファッションマウス',
            code: 'lkene-239245',
            standard: '個',
            color: 'エレガントブラック',
            size: '87cm',
            confirmSize: '107cm',
            price: 56,
            originPrice: 120,
          },
          6: {
            name: 'ファッションボールペン',
            code: 'lkene-239321',
            standard: '本',
            color: 'ステディーブルー',
            size: '102cm',
            confirmSize: '122cm',
            price: 6,
            originPrice: 12,
          },
          7: {
            name: 'ファッションプロジェクター',
            code: 'lkene-239667',
            standard: 'セット/台',
            color: '輝光シルバー',
            size: '84110cm',
            confirmSize: '80120cm',
            price: 2450,
            originPrice: 2999,
          },
        }
        const number = Math.ceil(Math.random() * 7)
        const productAttr = mapProduct[number]
        const normalAttr: Record<string, any> = {
          order: `${500 + Math.ceil(Math.random() * 2000)}(${productAttr.standard.slice(-1)})`,
          statusStr: Math.ceil(Math.random() * 2) % 2 === 0 ? '販売中' : '販売停止',
          status: Math.ceil(Math.random() * 2) % 2 === 0 ? 'success' : 'expired',
          promotion: 'false',
        }
        return {
          key: index,
          checked: false,
          picture: `banner_img_0${number}`,
          ...productAttr,
          ...normalAttr,
        }
      }),
  },
}
const data4 = {
  mock1: {
    filterConditions: [
      {
        key: 'date',
        label: 'Ngày áp dụng',
        required: true,
        options: [
          { value: 'today', label: 'Hôm nay' },
          { value: 'thisWeek', label: 'Tuần này' },
          { value: 'thisMonth', label: 'Tháng này' },
          { value: 'nearlyThreeMonths', label: 'Ba tháng qua' },
          { value: 'nearlyYear', label: 'Gần một năm qua' },
        ],
      },
      {
        key: 'status',
        label: 'Trạng thái',
        multiple: true,
        options: [
          { value: 'status1', label: 'Tạm trữ' },
          { value: 'status2', label: 'Đã gửi' },
          { value: 'status3', label: 'Đang kiểm tra' },
          { value: 'status4', label: 'Kiểm tra không thông qua' },
          { value: 'status5', label: 'Kiểm tra thông qua' },
          { value: 'status6', label: 'Chờ thanh toán' },
          { value: 'status7', label: 'Đã thanh toán' },
          { value: 'status8', label: 'Đã hủy' },
          { value: 'status9', label: 'Đã đóng' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['nearlyThreeMonths'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        const currentMap: Record<number, string> = {
          0: 'Phê duyệt cấp 1/ Lý Vương Khai',
          1: 'Phê duyệt cấp 2/ Thám Tăng',
          2: 'Tài chính tổng hợp/ Tăng Chí Thành',
        }

        const mapDepart: Record<number, string> = {
          0: 'Ban tổng hợp',
          1: 'Bộ phận trải nghiệm người dùng',
          2: 'Bộ phận hậu cần',
          3: 'Bộ phận nhân sự',
        }
        return {
          index: index + 1,
          date: `2021-0${Math.ceil(Math.random() * 9)}-${Math.floor(Math.random() * 3)}${Math.floor(
            Math.random() * 10,
          )}`,
          number: `CLBX-1040${Math.floor(Math.random() * 10000)}`,
          subject: 'Chi phí du lịch chia sẻ',
          reimburse: '26,800.00',
          vouch: '26,800.00',
          cash: '26,800.00',
          current: currentMap[Math.floor(Math.random() * 3)],
          status: index % 3 === 0 ? 'Đã gửi' : 'Tạm trữ',
          department: mapDepart[Math.floor(Math.random() * 4)],
        }
      }),
  },
  mock2: {
    filterConditions: [
      {
        key: 'company',
        label: 'Tổ chức',
        required: true,
        options: [
          { value: 'company1', label: 'Công ty TNHH Khoa học Huyền vũ Chiết Giang' },
          { value: 'company2', label: 'Tập đoàn Huyền vũ' },
          { value: 'company3', label: 'Công ty TNHH Khoa học Huyền vũ' },
          { value: 'company4', label: 'Công ty TNHH Khoa học Huyền vũ Chiết Giang' },
          { value: 'company5', label: 'Thương mại Huyền vũ' },
          { value: 'company6', label: 'Huyền vũ tươi sống' },
        ],
      },
      {
        key: 'organize',
        label: 'Tổ chức',
        multiple: true,
        options: [
          { value: 'organize1', label: 'Công ty TNHH Khoa học Huyền vũ Chiết Giang' },
          { value: 'organize2', label: 'Công ty TNHH Khoa học Huyền vũ' },
          { value: 'organize3', label: 'Công ty TNHH Khoa học Huyền vũ' },
          { value: 'organize4', label: 'Công ty TNHH Khoa học Huyền vũ Chiết Giang' },
          { value: 'organize5', label: 'Thương mại Huyền vũ' },
          { value: 'organize6', label: 'Huyền vũ tươi sống' },
        ],
      },
    ],
    filterDefaultValue: {
      company: ['company5'],
      organize: ['organize6'],
    },
    treeData: [
      {
        key: '1',
        title: 'Tất cả',
        children: [
          {
            key: '1-0',
            title: 'Dòng tiền tạo ra từ hoạt động kinh doanh 1',
            children: [
              {
                key: '1-0-0',
                title: 'Mục con 1',
              },
              {
                key: '1-0-1',
                title: 'Mục con 2',
              },
            ],
          },
          {
            key: '1-1',
            title: 'Dòng tiền tạo ra từ hoạt động đầu tư 2',
            children: [
              {
                key: '1-1-0',
                title: 'Dòng tiền tạo ra từ hoạt động tài trợ',
              },
              {
                key: '1-1-1',
                title: 'Dòng tiền tạo ra từ biến động tỷ giá hối đoái',
              },
            ],
          },
          {
            key: '1-2',
            title: 'Bảng cân đối dòng tiền',
            children: [
              {
                key: '1-2-0',
                title: 'Mục con 1',
              },
              {
                key: '1-2-1',
                title: 'Mục con 2',
              },
            ],
          },
        ],
      },
    ],
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        number: 'C23.136',
        name: 'Thu về tiền đầu tư',
        type: 'Mục chính',
        flow: 'Dòng tiền vào',
        business: '',
      })),
  },
  mock3: {
    filterConditions: [
      {
        key: 'date',
        label: 'Ngày',
        required: true,
        options: [
          { value: 'today', label: 'Hôm nay' },
          { value: 'thisWeek', label: 'Tuần này' },
          { value: 'thisMonth', label: 'Tháng này' },
          { value: 'nearlyThreeMonths', label: 'Ba tháng qua' },
        ],
      },
      {
        key: 'customer',
        label: 'Tổ chức',
        multiple: true,
        options: [
          { value: 'customer1', label: 'Siêu thị lớn Hải Lân' },
          { value: 'customer2', label: 'Siêu thị chuỗi Hua Sheng' },
          { value: 'customer3', label: 'Xuất khẩu Hải Lân' },
          { value: 'customer4', label: 'Xuất khẩu Hua Sheng' },
        ],
      },
    ],
    filterDefaultValue: {
      date: ['nearlyThreeMonths'],
      customer: ['customer1'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        return {
          index: String(index + 1),
          date: '2021-04-17',
          number: 'SO20180118-1008',
          time: '2018-03-20 15:39:42',
          principal: 'Lâm Tuấn Khôn',
          name: 'Siêu thị Walmart',
          amount: '¥ 26,800.00',
          status: 'Chờ xác nhận',
          spread: String(index + 1),
        }
      }),
    detailData: Array(3)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        code: 'T0420',
        name: 'Nguyên liệu lẩu',
        property: 'Nguyên liệu cơ bản',
        quantity: 500,
        unit: 'Gram',
        price: '¥ 35.00',
        sum: '¥ 3500.00',
        existQuantity: 500,
        steamQuantity: 500,
        address: 'Bảo An, Thâm Quyến',
        memo: 'Không có ghi chú liên quan',
      })),
  },
  mock4: {
    filterConditions: [
      {
        key: 'date',
        label: 'Ngày',
        required: true,
        options: [
          { value: 'today', label: 'Hôm nay' },
          { value: 'thisWeek', label: 'Tuần này' },
          { value: 'thisMonth', label: 'Tháng này' },
          { value: 'nearlyThreeMonths', label: 'Ba tháng qua' },
          { value: 'nearlyYear', label: 'Gần một năm qua' },
        ],
      },
      {
        key: 'status',
        label: 'Khách hàng',
        multiple: true,
        options: [
          { value: 'status1', label: 'Tập đoàn Huyền vũ' },
          { value: 'status2', label: 'Công ty TNHH Khoa học Huyền vũ' },
          { value: 'status3', label: 'Công ty TNHH Khoa học Huyền vũ Chiết Giang' },
          { value: 'status4', label: 'Thương mại Huyền vũ' },
          { value: 'status5', label: 'Huyền vũ tươi sống' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['today'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => ({
        key: index,
        checked: false,
        title: 'Hội nghị lớn khách hàng ở Bắc Kinh tháng 6 năm 2020',
        name: 'Văn Thẩm',
        dep: 'Bộ phận trải nghiệm người dùng',

        way: 'Thâm Quyến - Bắc Kinh - Thâm Quyến',
        time: '08.25-08.29',
        cost: '¥ 8,236.00',
      })),
  },
  mock5: {
    filterConditions: [
      {
        key: 'date',
        label: 'Ngày',
        required: true,
        options: [
          { value: 'today', label: 'Hôm nay' },
          { value: 'thisWeek', label: 'Tuần này' },
          { value: 'thisMonth', label: 'Tháng này' },
          { value: 'nearlyThreeMonths', label: 'Ba tháng qua' },
        ],
      },
      {
        key: 'status',
        label: 'Khách hàng',
        multiple: true,
        options: [
          { value: 'status1', label: 'Tập đoàn Huyền vũ' },
          { value: 'status2', label: 'Công ty TNHH Khoa học Huyền vũ' },
          { value: 'status3', label: 'Công ty TNHH Khoa học Huyền vũ Chiết Giang' },
          { value: 'status4', label: 'Thương mại Huyền vũ' },
          { value: 'status5', label: 'Huyền vũ tươi sống' },
        ],
      },
    ],
    filterDefaultValue: {
      status: ['status1'],
      date: ['nearlyThreeMonths'],
    },
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        const mapProduct: Record<number, any> = {
          1: {
            name: 'Điều hòa thời trang',
            code: 'lkene-239386',
            standard: 'Bộ/tờ',
            color: 'Bạch ngân',
            size: '76*35cm',
            confirmSize: '30*56cm',
            price: 2366,
            originPrice: 3000,
          },
          2: {
            name: 'Máy in thời trang',
            code: 'lkene-2392328',
            standard: 'Bộ/tờ',
            color: 'Bí ẩn đen',
            size: '50*20cm',
            confirmSize: '58*130cm',
            price: 2860,
            originPrice: 3200,
          },
          3: {
            name: 'Máy tính xách tay thời trang-A32cc',
            code: 'lkene-23928',
            standard: 'Bộ/tờ',
            color: 'Hồng lôi',
            size: '55*9cm',
            confirmSize: '30*45cm',
            price: 5666,
            originPrice: 6300,
          },
          4: {
            name: 'Máy tính toàn bộ 27 inch phiên bản 2015',
            code: 'lkene-239266',
            standard: 'Bộ/tờ',
            color: 'Màu bạc',
            size: '60*33cm',
            confirmSize: '75*45cm',
            price: 15666,
            originPrice: 18300,
          },
          5: {
            name: 'Chuột thời trang',
            code: 'lkene-239245',
            standard: 'Cái',
            color: 'Đen thanh lịch',
            size: '8*7cm',
            confirmSize: '10*7cm',
            price: 56,
            originPrice: 120,
          },
          6: {
            name: 'Bút bi thời trang',
            code: 'lkene-239321',
            standard: 'Cây',
            color: 'Xanh trầm',
            size: '10*2cm',
            confirmSize: '12*2cm',
            price: 6,
            originPrice: 12,
          },
          7: {
            name: 'Máy chiếu thời trang',
            code: 'lkene-239667',
            standard: 'Bộ/tờ',
            color: 'Bạch quang lẫn',
            size: '84*110cm',
            confirmSize: '80*120cm',
            price: 2450,
            originPrice: 2999,
          },
        }
        const number = Math.ceil(Math.random() * 7)
        const productAttr = mapProduct[number]
        const normalAttr: Record<string, any> = {
          order: `${500 + Math.ceil(Math.random() * 2000)}(${productAttr.standard.slice(-1)})`,
          statusStr: Math.ceil(Math.random() * 2) % 2 === 0 ? 'Đã đăng' : 'Đã hết hạn',
          status: Math.ceil(Math.random() * 2) % 2 === 0 ? 'success' : 'expired',
          promotion: 'false',
        }
        return {
          key: index,
          checked: false,
          picture: `banner_img_0${number}`,
          ...productAttr,
          ...normalAttr,
        }
      }),
  },
}

const getData = (lang: any, index: number = 1) => {
  let data = (data1 as any)[`mock${index}`]
  if (lang === 'en-US') {
    data = (data2 as any)[`mock${index}`]
  }
  if (lang === 'ja-JP') {
    data = (data3 as any)[`mock${index}`]
  }
  if (lang === 'vi-VN') {
    data = (data4 as any)[`mock${index}`]
  }
  return data
}

export default {
  '/mock/list/basic': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 1))
  },
  '/mock/list/tree': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 2))
  },
  '/mock/list/form': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 3))
  },
  '/mock/list/card': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 4))
  },
  '/mock/list/banner': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 5))
  },
}
