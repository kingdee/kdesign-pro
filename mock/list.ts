export default {
  '/mock/list/basic': {
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
          number: 'CLBX-1040' + Math.floor(Math.random() * 10000),
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
  '/mock/list/tree': {
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
  '/mock/list/form': {
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
  '/mock/list/card': {
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
  '/mock/list/banner': {
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
    dataSource: getBannerList(),
  },
}

function getBannerList() {
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
  return Array(20)
    .fill(null)
    .map((_, index) => {
      const number = Math.ceil(Math.random() * 7)
      const productAttr = mapProduct[number]
      const normalAttr: Record<string, any> = {
        order: 500 + Math.ceil(Math.random() * 2000) + `(${productAttr.standard.slice(-1)})`,
        status: Math.ceil(Math.random() * 2) % 2 === 0 ? '已上架' : '已下架',
        promotion: Math.ceil(Math.random() * 2) % 2 === 0 ? true : false,
      }
      return {
        key: index,
        checked: false,
        picture: `banner_img_0${number}`,
        ...productAttr,
        ...normalAttr,
      }
    })
}
