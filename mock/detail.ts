export default {
  '/mock/detail/basic': {
    basicInfo: {
      project: '演示项目',
      code: '2021923010983402',
      settlement: '银行转账',
      allowance: true,
      deduction: true,
      memo: null,
    },
    reductionRule: {
      method: '按每期固定金额',
      start: '2021-07',
      end: '2021-08',
      'per-amount': '1000',
      amount: 1,
    },
    costData: [
      {
        code: 1,
        cost: '物业管理费',
      },
      {
        code: 2,
        cost: '垃圾费',
      },
      {
        code: 3,
        cost: '水费',
      },
    ],
    customerData: [
      {
        code: 1,
        building: 'B栋',
        unit: '4单元',
        customer: '谭荆棘',
        type: '年租',
        date: '2021-01-28',
      },
      {
        code: 2,
        building: 'B栋',
        unit: '4单元',
        customer: '霍米玲',
        type: '季租',
        date: '2021-02-10',
      },
      {
        code: 3,
        building: 'A栋',
        unit: '2单元',
        customer: '刘志喜',
        type: '月租',
        date: '2021-03-15',
      },
    ],
  },
  '/mock/detail/columns': {
    basicInfo: {
      code: 'XSDD-200710-000001',
      billType: '标准销售订单',
      businessType: '物料类销售',
      date: '2020-07-10',
      status: '已提交',
      memo: null,
    },
    saleInfo: {
      organization: '环宇国际集团有限公司',
      department: null,
      team: '深圳销售分部',
      saler: '刘晓红',
      customer: '深圳梦工厂',
      contact: null,
      contactAddress: null,
      deliver: null,
      receipt: null,
      shippingAddress: null,
      ticket: '深圳梦工厂',
      payer: '环球集团',
    },
    records: [
      {
        title: '杨志提交申请',
        time: '2017-05-07 14:30',
        submit: false,
      },
      {
        title: '交互设计部经理已审批通过',
        time: '2017-05-07 14:30',
        submit: true,
      },
      {
        title: '交互设计部经理已审批通过',
        time: '2017-05-07 14:30',
        submit: true,
      },
    ],
  },
  '/mock/detail/vertical': {
    rechargeColumns: [
      { code: 'date', width: 200, name: '订单日期', align: 'left' },
      { code: 'code', width: 150, name: '单据编码', align: 'left' },
      { code: 'time', width: 200, name: '下单时间', align: 'left' },
      { code: 'head', width: 100, name: '负责人', align: 'left' },
      { code: 'institutions', width: 200, name: '充值机构', align: 'left' },
      { code: 'amount', width: 100, name: '订单金额', align: 'right' },
      { code: 'status', width: 100, name: '订单状态', align: 'left' },
    ],
    rechargeData: Array(20)
      .fill(null)
      .map((_, index) => ({
        date: '2021-04-17',
        code: 'SO20180118-1008',
        time: '2018-03-20  15:39:42',
        head: '林俊均',
        institutions: '蓝海大型商超',
        amount: '¥ 1,180.00',
        status: index === 0 ? '待确认' : '已完成',
      })),
    expenseColumns: [
      { code: 'index', width: 80, name: '序号', align: 'center' },
      { code: 'date', width: 200, name: '业务日期', align: 'left' },
      { code: 'group', width: 200, name: '业务组织', align: 'left' },
      { code: 'name', width: 150, name: '单据名称', align: 'left' },
      { code: 'code', width: 150, name: '单据编码', align: 'left' },
      { code: 'time', width: 200, name: '记账时间', align: 'left' },
      { code: 'pipeline', width: 100, name: '流水线', align: 'left' },
    ],
    expenseData: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        date: '2019-10-29  20:12:34',
        group: '金蝶软件园',
        name: '卡消费',
        code: 'BU-010299387',
        time: '2019-10-21  21:09:29',
        pipeline: '消费',
      })),
    panes: ['会员信息', '充值记录', '消费记录'],
  },
  '/mock/detail/cross': {
    materialColumns: [
      { code: 'index', lock: true, width: 80, name: '#' },
      { code: 'name', width: 200, name: '原材料名称' },
      { code: 'type', width: 200, name: '规格型号' },
      { code: 'memo', width: 200, name: '说明' },
      { code: 'originName', width: 200, name: '原厂商' },
      { code: 'originType', width: 200, name: '原厂型号' },
      { code: 'updateName', width: 200, name: '变更后厂商' },
      { code: 'updateType', width: 200, name: '变更后厂商型号' },
    ],
    materialData: Array(3)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        name: '测试物料',
        type: `0${index + 1}`,
        memo: '3月采购',
        originName: '领峰科技',
        originType: 'LF-00129',
        updateName: '环球信息技术',
        updateType: 'HQ-02930',
      })),
    craftColumns: [
      { code: 'index', lock: true, width: 80, name: '#' },
      { code: 'type', width: 200, name: '类别' },
      { code: 'craft', width: 200, name: '工艺' },
      { code: 'memo', width: 200, name: '说明' },
    ],
    craftData: Array(3)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: '变更前',
        craft: '电镀',
        memo: '暂无说明',
      })),
    stageColumns: [
      { code: 'index', lock: true, width: 60, name: '#' },
      { code: 'type', width: 126, name: '类别' },
      { code: 'desc', width: 126, name: '说明' },
    ],
    stageData: Array(2)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: Math.random() > 0.5 ? '变更前' : '变更后',
        desc: '无',
      })),
    transportColumns: [
      { code: 'index', lock: true, width: 60, name: '#' },
      { code: 'type', width: 126, name: '类别' },
      { code: 'desc', width: 126, name: '说明' },
    ],
    transportData: Array(2)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: Math.random() > 0.5 ? '变更前' : '变更后',
        desc: '无',
      })),
    panes: ['生产相关', '存储运输相关', '企业管理体系', '其他信息'],
  },
  '/mock/detail/flow': {
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        return {
          index: index + 1,
          date: `2021-0${Math.ceil(Math.random() * 9)}-${Math.floor(Math.random() * 3)}${Math.floor(
            Math.random() * 10,
          )}`,
          code: `CLBX-1040${Math.floor(Math.random() * 10000)}`,
          supplier: '甲设计公司',
        }
      }),
  },
}
