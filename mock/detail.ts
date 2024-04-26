const data1 = {
  mock1: {
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
  mock2: {
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
  mock3: {
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
  },
  mock4: {
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
  mock5: {
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
const data2 = {
  mock1: {
    basicInfo: {
      project: 'Demo Project',
      code: '2021923010983402',
      settlement: 'Bank Transfer',
      allowance: true,
      deduction: true,
      memo: null,
    },
    reductionRule: {
      method: 'Fixed Amount Per Period',
      start: '2021-07',
      end: '2021-08',
      'per-amount': '1000',
      amount: 1,
    },
    costData: [
      {
        code: 1,
        cost: 'Property Management Fee',
      },
      {
        code: 2,
        cost: 'Garbage Fee',
      },
      {
        code: 3,
        cost: 'Water Fee',
      },
    ],
    customerData: [
      {
        code: 1,
        building: 'Building B',
        unit: 'Unit 4',
        customer: 'Tan Jingji',
        type: 'Annual Lease',
        date: '2021-01-28',
      },
      {
        code: 2,
        building: 'Building B',
        unit: 'Unit 4',
        customer: 'Huo Milin',
        type: 'Quarterly Lease',
        date: '2021-02-10',
      },
      {
        code: 3,
        building: 'Building A',
        unit: 'Unit 2',
        customer: 'Liu Zhixi',
        type: 'Monthly Lease',
        date: '2021-03-15',
      },
    ],
  },
  mock2: {
    basicInfo: {
      code: 'XSDD-200710-000001',
      billType: 'Standard Sales Order',
      businessType: 'Material Sales',
      date: '2020-07-10',
      status: 'Submitted',
      memo: null,
    },
    saleInfo: {
      organization: 'Universal International Group Limited',
      department: null,
      team: 'Shenzhen Sales Division',
      saler: 'Liu Xiaohong',
      customer: 'Shenzhen Dream Factory',
      contact: null,
      contactAddress: null,
      deliver: null,
      receipt: null,
      shippingAddress: null,
      ticket: 'Shenzhen Dream Factory',
      payer: 'Global Group',
    },
    records: [
      {
        title: 'Yang Zhi submits application',
        time: '2017-05-07 14:30',
        submit: false,
      },
      {
        title: 'Approval by Interaction Design Department Manager',
        time: '2017-05-07 14:30',
        submit: true,
      },
      {
        title: 'Approval by Interaction Design Department Manager',
        time: '2017-05-07 14:30',
        submit: true,
      },
    ],
  },
  mock3: {
    rechargeColumns: [
      { code: 'date', width: 200, name: 'Order Date', align: 'left' },
      { code: 'code', width: 150, name: 'Document Code', align: 'left' },
      { code: 'time', width: 200, name: 'Order Time', align: 'left' },
      { code: 'head', width: 100, name: 'Responsible Person', align: 'left' },
      { code: 'institutions', width: 200, name: 'Recharge Institution', align: 'left' },
      { code: 'amount', width: 100, name: 'Order Amount', align: 'right' },
      { code: 'status', width: 100, name: 'Order Status', align: 'left' },
    ],
    rechargeData: Array(20)
      .fill(null)
      .map((_, index) => ({
        date: '2021-04-17',
        code: 'SO20180118-1008',
        time: '2018-03-20  15:39:42',
        head: 'Lin Junjun',
        institutions: 'Blue Ocean Supermarket',
        amount: '¥ 1,180.00',
        status: index === 0 ? 'Pending Confirmation' : 'Completed',
      })),
    expenseColumns: [
      { code: 'index', width: 80, name: 'Index', align: 'center' },
      { code: 'date', width: 200, name: 'Business Date', align: 'left' },
      { code: 'group', width: 200, name: 'Business Organization', align: 'left' },
      { code: 'name', width: 150, name: 'Document Name', align: 'left' },
      { code: 'code', width: 150, name: 'Document Code', align: 'left' },
      { code: 'time', width: 200, name: 'Accounting Time', align: 'left' },
      { code: 'pipeline', width: 100, name: 'Pipeline', align: 'left' },
    ],
    expenseData: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        date: '2019-10-29  20:12:34',
        group: 'Kingdee Software Park',
        name: 'Card Consumption',
        code: 'BU-010299387',
        time: '2019-10-21  21:09:29',
        pipeline: 'Consumption',
      })),
  },
  mock4: {
    materialColumns: [
      { code: 'index', lock: true, width: 80, name: '#' },
      { code: 'name', width: 160, name: 'Material Name' },
      { code: 'type', width: 200, name: 'Specifications and Models' },
      { code: 'memo', width: 200, name: 'Description' },
      { code: 'originName', width: 200, name: 'Original Manufacturer' },
      { code: 'originType', width: 200, name: 'Original Manufacturer Model' },
      { code: 'updateName', width: 220, name: 'Manufacturer After Change' },
      { code: 'updateType', width: 200, name: 'Manufacturer Model After Change' },
    ],
    materialData: Array(3)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        name: 'Test Material',
        type: `0${index + 1}`,
        memo: 'March Procurement',
        originName: 'Lingfeng Technology',
        originType: 'LF-00129',
        updateName: 'Global Information Technology',
        updateType: 'HQ-02930',
      })),
    craftColumns: [
      { code: 'index', lock: true, width: 80, name: '#' },
      { code: 'type', width: 200, name: 'Category' },
      { code: 'craft', width: 200, name: 'Craft' },
      { code: 'memo', width: 200, name: 'Description' },
    ],
    craftData: Array(3)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: 'Before Change',
        craft: 'Plating',
        memo: 'No description available',
      })),
    stageColumns: [
      { code: 'index', lock: true, width: 60, name: '#' },
      { code: 'type', width: 126, name: 'Category' },
      { code: 'desc', width: 126, name: 'Description' },
    ],
    stageData: Array(2)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: Math.random() > 0.5 ? 'Before Change' : 'After Change',
        desc: 'None',
      })),
    transportColumns: [
      { code: 'index', lock: true, width: 60, name: '#' },
      { code: 'type', width: 126, name: 'Category' },
      { code: 'desc', width: 126, name: 'Description' },
    ],
    transportData: Array(2)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: Math.random() > 0.5 ? 'Before Change' : 'After Change',
        desc: 'None',
      })),
    panes: [
      'Production Related',
      'Storage and Transportation Related',
      'Enterprise Management System',
      'Other Information',
    ],
  },
  mock5: {
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        return {
          index: index + 1,
          date: `2021-0${Math.ceil(Math.random() * 9)}-${Math.floor(Math.random() * 3)}${Math.floor(
            Math.random() * 10,
          )}`,
          code: `CLBX-1040${Math.floor(Math.random() * 10000)}`,
          supplier: 'Design Company A',
        }
      }),
  },
}
const data3 = {
  mock1: {
    basicInfo: {
      project: 'デモプロジェクト',
      code: '2021923010983402',
      settlement: '銀行振込',
      allowance: true,
      deduction: true,
      memo: null,
    },
    reductionRule: {
      method: '期間ごとの固定金額に従う',
      start: '2021年07月',
      end: '2021年08月',
      'per-amount': '1000',
      amount: 1,
    },
    costData: [
      {
        code: 1,
        cost: '管理費',
      },
      {
        code: 2,
        cost: 'ゴミ収集費',
      },
      {
        code: 3,
        cost: '水道料金',
      },
    ],
    customerData: [
      {
        code: 1,
        building: 'B棟',
        unit: '4ユニット',
        customer: '谭荆棘',
        type: '年間賃貸',
        date: '2021年01月28日',
      },
      {
        code: 2,
        building: 'B棟',
        unit: '4ユニット',
        customer: '霍米玲',
        type: '四半期賃貸',
        date: '2021年02月10日',
      },
      {
        code: 3,
        building: 'A棟',
        unit: '2ユニット',
        customer: '刘志喜',
        type: '月間賃貸',
        date: '2021年03月15日',
      },
    ],
  },
  mock2: {
    basicInfo: {
      code: 'XSDD-200710-000001',
      billType: '標準販売注文',
      businessType: '物資販売',
      date: '2020年07月10日',
      status: '提出済み',
      memo: null,
    },
    saleInfo: {
      organization: '環球国際グループ有限公司',
      department: null,
      team: '深セン販売部',
      saler: '劉晓紅',
      customer: '深センドリームファクトリー',
      contact: null,
      contactAddress: null,
      deliver: null,
      receipt: null,
      shippingAddress: null,
      ticket: '深センドリームファクトリー',
      payer: '環球グループ',
    },
    records: [
      {
        title: '楊志が申請を提出しました',
        time: '2017年05月07日 14:30',
        submit: false,
      },
      {
        title: 'インタラクティブデザイン部のマネージャーが承認しました',
        time: '2017年05月07日 14:30',
        submit: true,
      },
      {
        title: 'インタラクティブデザイン部のマネージャーが承認しました',
        time: '2017年05月07日 14:30',
        submit: true,
      },
    ],
  },
  mock3: {
    rechargeColumns: [
      { code: 'date', width: 200, name: '注文日付', align: 'left' },
      { code: 'code', width: 150, name: '伝票コード', align: 'left' },
      { code: 'time', width: 200, name: '注文時間', align: 'left' },
      { code: 'head', width: 100, name: '責任者', align: 'left' },
      { code: 'institutions', width: 200, name: 'チャージ機関', align: 'left' },
      { code: 'amount', width: 100, name: '注文金額', align: 'right' },
      { code: 'status', width: 100, name: '注文状態', align: 'left' },
    ],
    rechargeData: Array(20)
      .fill(null)
      .map((_, index) => ({
        date: '2021-04-17',
        code: 'SO20180118-1008',
        time: '2018-03-20  15:39:42',
        head: '林俊均',
        institutions: '藍海大型商超',
        amount: '¥ 1,180.00',
        status: index === 0 ? '未確認' : '完了',
      })),
    expenseColumns: [
      { code: 'index', width: 80, name: '番号', align: 'center' },
      { code: 'date', width: 200, name: '業務日付', align: 'left' },
      { code: 'group', width: 200, name: '業務組織', align: 'left' },
      { code: 'name', width: 150, name: '伝票名', align: 'left' },
      { code: 'code', width: 150, name: '伝票コード', align: 'left' },
      { code: 'time', width: 200, name: '帳簿記入時間', align: 'left' },
      { code: 'pipeline', width: 100, name: 'パイプライン', align: 'left' },
    ],
    expenseData: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        date: '2019-10-29  20:12:34',
        group: '金蝶ソフトウェア園',
        name: 'カード消費',
        code: 'BU-010299387',
        time: '2019-10-21  21:09:29',
        pipeline: '消費',
      })),
  },
  mock4: {
    materialColumns: [
      { code: 'index', lock: true, width: 80, name: '#' },
      { code: 'name', width: 180, name: '原材料名称' },
      { code: 'type', width: 200, name: '規格型番' },
      { code: 'memo', width: 200, name: '説明' },
      { code: 'originName', width: 200, name: '元メーカー' },
      { code: 'originType', width: 200, name: '元メーカー型番' },
      { code: 'updateName', width: 220, name: '変更後メーカー' },
      { code: 'updateType', width: 200, name: '変更後メーカー型番' },
    ],
    materialData: Array(3)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        name: 'テスト素材',
        type: `0${index + 1}`,
        memo: '3月調達',
        originName: 'リーファングテクノロジー',
        originType: 'LF-00129',
        updateName: 'グローバル情報技術',
        updateType: 'HQ-02930',
      })),
    craftColumns: [
      { code: 'index', lock: true, width: 80, name: '#' },
      { code: 'type', width: 200, name: '種類' },
      { code: 'craft', width: 200, name: '工程' },
      { code: 'memo', width: 200, name: '説明' },
    ],
    craftData: Array(3)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: '変更前',
        craft: '電鍍',
        memo: '暫くの説明はありません',
      })),
    stageColumns: [
      { code: 'index', lock: true, width: 60, name: '#' },
      { code: 'type', width: 126, name: '種類' },
      { code: 'desc', width: 126, name: '説明' },
    ],
    stageData: Array(2)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: Math.random() > 0.5 ? '変更前' : '変更後',
        desc: 'なし',
      })),
    transportColumns: [
      { code: 'index', lock: true, width: 60, name: '#' },
      { code: 'type', width: 126, name: '種類' },
      { code: 'desc', width: 126, name: '説明' },
    ],
    transportData: Array(2)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: Math.random() > 0.5 ? '変更前' : '変更後',
        desc: 'なし',
      })),
    panes: ['生産関連', '保管輸送関連', '企業管理体制', 'その他の情報'],
  },
  mock5: {
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        return {
          index: index + 1,
          date: `2021-0${Math.ceil(Math.random() * 9)}-${Math.floor(Math.random() * 3)}${Math.floor(
            Math.random() * 10,
          )}`,
          code: `CLBX-1040${Math.floor(Math.random() * 10000)}`,
          supplier: '甲デザイン会社',
        }
      }),
  },
}
const data4 = {
  mock1: {
    basicInfo: {
      project: 'Dự án trình diễn',
      code: '2021923010983402',
      settlement: 'Chuyển khoản ngân hàng',
      allowance: true,
      deduction: true,
      memo: null,
    },
    reductionRule: {
      method: 'Theo số tiền cố định mỗi kỳ',
      start: '2021-07',
      end: '2021-08',
      'per-amount': '1000',
      amount: 1,
    },
    costData: [
      {
        code: 1,
        cost: 'Phí quản lý nhà',
      },
      {
        code: 2,
        cost: 'Phí xử lý rác thải',
      },
      {
        code: 3,
        cost: 'Phí nước',
      },
    ],
    customerData: [
      {
        code: 1,
        building: 'Tòa B',
        unit: 'Đơn vị 4',
        customer: 'Tấn Kim Cương',
        type: 'Thuê năm',
        date: '2021-01-28',
      },
      {
        code: 2,
        building: 'Tòa B',
        unit: 'Đơn vị 4',
        customer: 'Hà Mị Ly',
        type: 'Thuê quý',
        date: '2021-02-10',
      },
      {
        code: 3,
        building: 'Tòa A',
        unit: 'Đơn vị 2',
        customer: 'Lưu Chí Hiếu',
        type: 'Thuê tháng',
        date: '2021-03-15',
      },
    ],
  },
  mock2: {
    basicInfo: {
      code: 'XSDD-200710-000001',
      billType: 'Đơn hàng bán hàng tiêu chuẩn',
      businessType: 'Bán hàng vật liệu',
      date: '2020-07-10',
      status: 'Đã gửi',
      memo: null,
    },
    saleInfo: {
      organization: 'Công ty TNHH Tập đoàn Quốc tế Hoàn Vũ',
      department: null,
      team: 'Phòng bán hàng thành phố Thâm Quyến',
      saler: 'Liu晓红',
      customer: 'Nhà máy Thơm Mộng Thâm Quyến',
      contact: null,
      contactAddress: null,
      deliver: null,
      receipt: null,
      shippingAddress: null,
      ticket: 'Nhà máy Thơm Mộng Thâm Quyến',
      payer: 'Tập đoàn Toàn Cầu',
    },
    records: [
      {
        title: 'Dương Trạch đệ trình đơn xin',
        time: '2017-05-07 14:30',
        submit: false,
      },
      {
        title: 'Trưởng phòng Thiết kế Đa tương tác đã phê duyệt',
        time: '2017-05-07 14:30',
        submit: true,
      },
      {
        title: 'Trưởng phòng Thiết kế Đa tương tác đã phê duyệt',
        time: '2017-05-07 14:30',
        submit: true,
      },
    ],
  },
  mock3: {
    rechargeColumns: [
      { code: 'date', width: 200, name: 'Ngày đặt hàng', align: 'left' },
      { code: 'code', width: 150, name: 'Mã hóa đơn', align: 'left' },
      { code: 'time', width: 200, name: 'Thời gian đặt hàng', align: 'left' },
      { code: 'head', width: 100, name: 'Người chịu trách nhiệm', align: 'left' },
      { code: 'institutions', width: 200, name: 'Tổ chức nạp tiền', align: 'left' },
      { code: 'amount', width: 100, name: 'Số tiền hóa đơn', align: 'right' },
      { code: 'status', width: 100, name: 'Trạng thái hóa đơn', align: 'left' },
    ],
    rechargeData: Array(20)
      .fill(null)
      .map((_, index) => ({
        date: '2021-04-17',
        code: 'SO20180118-1008',
        time: '2018-03-20  15:39:42',
        head: 'Lâm Tuấn Kiệt',
        institutions: 'Siêu thị lớn Lan Hải',
        amount: '¥ 1,180.00',
        status: index === 0 ? 'Chờ xác nhận' : 'Đã hoàn thành',
      })),
    expenseColumns: [
      { code: 'index', width: 80, name: 'Số thứ tự', align: 'center' },
      { code: 'date', width: 200, name: 'Ngày giao dịch', align: 'left' },
      { code: 'group', width: 200, name: 'Tổ chức kinh doanh', align: 'left' },
      { code: 'name', width: 150, name: 'Tên hóa đơn', align: 'left' },
      { code: 'code', width: 150, name: 'Mã hóa đơn', align: 'left' },
      { code: 'time', width: 200, name: 'Thời gian ghi sổ', align: 'left' },
      { code: 'pipeline', width: 100, name: 'Pipeline', align: 'left' },
    ],
    expenseData: Array(20)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        date: '2019-10-29  20:12:34',
        group: 'Khu công nghệ phần mềm Kim蝶',
        name: 'Thanh toán bằng thẻ',
        code: 'BU-010299387',
        time: '2019-10-21  21:09:29',
        pipeline: 'Thanh toán',
      })),
  },
  mock4: {
    materialColumns: [
      { code: 'index', lock: true, width: 80, name: '#' },
      { code: 'name', width: 180, name: 'Tên nguyên liệu' },
      { code: 'type', width: 200, name: 'Kiểu dáng và kích thước' },
      { code: 'memo', width: 200, name: 'Ghi chú' },
      { code: 'originName', width: 200, name: 'Nhà sản xuất gốc' },
      { code: 'originType', width: 200, name: 'Kiểu nhà sản xuất gốc' },
      { code: 'updateName', width: 220, name: 'Nhà sản xuất sau khi thay đổi' },
      { code: 'updateType', width: 200, name: 'Kiểu nhà sản xuất sau khi thay đổi' },
    ],
    materialData: Array(3)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        name: 'Vật liệu thử nghiệm',
        type: `0${index + 1}`,
        memo: 'Mua trong tháng 3',
        originName: 'Công nghệ Lãnh Phong',
        originType: 'LF-00129',
        updateName: 'Công nghệ thông tin Toàn Cầu',
        updateType: 'HQ-02930',
      })),
    craftColumns: [
      { code: 'index', lock: true, width: 80, name: '#' },
      { code: 'type', width: 200, name: 'Loại' },
      { code: 'craft', width: 200, name: 'Công nghệ' },
      { code: 'memo', width: 200, name: 'Ghi chú' },
    ],
    craftData: Array(3)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: 'Trước khi thay đổi',
        craft: 'Điện phân',
        memo: 'Không có ghi chú',
      })),
    stageColumns: [
      { code: 'index', lock: true, width: 60, name: '#' },
      { code: 'type', width: 126, name: 'Loại' },
      { code: 'desc', width: 126, name: 'Ghi chú' },
    ],
    stageData: Array(2)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: Math.random() > 0.5 ? 'Trước khi thay đổi' : 'Sau khi thay đổi',
        desc: 'Không có',
      })),
    transportColumns: [
      { code: 'index', lock: true, width: 60, name: '#' },
      { code: 'type', width: 126, name: 'Loại' },
      { code: 'desc', width: 126, name: 'Ghi chú' },
    ],
    transportData: Array(2)
      .fill(null)
      .map((_, index) => ({
        index: index + 1,
        type: Math.random() > 0.5 ? 'Trước khi thay đổi' : 'Sau khi thay đổi',
        desc: 'Không có',
      })),
    panes: [
      'Liên quan đến sản xuất',
      'Liên quan đến lưu trữ và vận chuyển',
      'Hệ thống quản lý doanh nghiệp',
      'Thông tin khác',
    ],
  },
  mock5: {
    dataSource: Array(20)
      .fill(null)
      .map((_, index) => {
        return {
          index: index + 1,
          date: `2021-0${Math.ceil(Math.random() * 9)}-${Math.floor(Math.random() * 3)}${Math.floor(
            Math.random() * 10,
          )}`,
          code: `CLBX-1040${Math.floor(Math.random() * 10000)}`,
          supplier: 'Công ty thiết kế A',
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
  '/mock/detail/basic': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 1))
  },
  '/mock/detail/columns': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 2))
  },
  '/mock/detail/vertical': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 3))
  },
  '/mock/detail/cross': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 4))
  },
  '/mock/detail/flow': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 5))
  },
}
