// noinspection DuplicatedCode

const data1 = {
  mock1: {
    dataSource: [
      {
        index: 1,
        way: '小程序',
        checked: true,
        organization: '环宇软件深圳南山店',
        id: 'SIH1239845767283492',
        memo: '',
      },
      {
        index: 2,
        way: '团购网站',
        checked: false,
        organization: '环宇软件深圳南山店',
        id: 'SIH1239845767283493',
        memo: '',
      },
    ],
    basicInformation: [
      {
        required: true,
        label: '会员编码',
        name: 'code',
        defaultValue: '88438748',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '会员姓名',
        name: 'name',
        defaultValue: '李*遥',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '手机号码',
        name: 'mobile',
        defaultValue: '134****1234',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '出生日期',
        name: 'date',
        defaultValue: '1998-01-20',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '性别',
        name: 'sex',
        defaultValue: '男',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '民族',
        name: 'nation',
        defaultValue: '汉族',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '学历',
        name: 'education',
        defaultValue: '大学',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '邮箱',
        name: 'email',
        defaultValue: '393****0989@qq.com',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '会员类型',
        name: 'type',
        defaultValue: '高级会员',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '发卡动态',
        name: 'trends',
        defaultValue: '已发',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '会员分组',
        name: 'group',
        defaultValue: 'abc',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '备注',
        name: 'memo',
        defaultValue: '无',
        validateTrigger: 'onBlur',
      },
    ],
    recommendedInformation: [
      {
        required: true,
        label: '我的引荐人',
        name: 'referee',
        defaultValue: '李*瑞',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '我与引荐人关系',
        name: 'refereeRelationship',
        defaultValue: '朋友',
        validateTrigger: 'onBlur',
      },
    ],
    cardData: [
      {
        type: '护照',
        name: '王文君',
        code: 'EA-56421022',
        attrs: ['有效期：2029.1.12', '国家代码：CN'],
        style: 'pp',
      },
      {
        type: '往来港澳通行证',
        name: '王文君',
        code: 'EA-56421022',
        attrs: ['有效期：2029.1.12 国家代码：CN', '签发地：广东出入境管理局', '备注：我是备注'],
        style: 'hk',
      },
      {
        type: '往来台湾通行证',
        name: '王文君',
        code: 'EA-56421022',
        attrs: ['有效期：2029.1.12 国家代码：CN', '签发地：广东出入境管理局', '备注：我是备注'],
        style: 'tw',
      },
    ],
  },
  mock2: {
    previewData: [
      {
        id: 1,
        title: '吃在环球',
        desc: '不知道今晚吃什么？附近的美食一网打尽！',
        image: '1',
        author: '9724811212',
        describe: '我就是描述文本',
      },
      {
        id: 2,
        title: '通关锦囊',
        desc: '我们这应有尽有，小伙伴来了解下？',
        image: '2',
        author: '9724811211',
        describe: '描述文本',
      },
      {
        id: 3,
        title: '福利百科',
        desc: '我们这应有尽有，小伙伴来了解下？',
        image: '3',
        author: '9724811213',
        describe: '描述文本',
      },
      {
        id: 4,
        title: '会议白皮树',
        desc: '不知道今晚吃什么？附近的美食一网打尽！',
        image: '4',
        author: '9724811214',
        describe: '我就是描述文本',
      },
    ],
  },
  mock3: {
    base: {
      group: '环宇科技股份有限公司',
      code: 'TempAP-201902-000001',
      date: '2019-02-10',
      type: '标准应付单',
      supplier: '深圳建筑设计院',
      supplier2: '内容',
      payway: '赊购',
      type2: '内容',
      memo: '内容',
      payGroup: '内容',
      taxType: '内容',
      amount: '内容',
    },
    list: [
      {
        index: 1,
        material: '绳子',
        unit: '米',
        number: '1000',
        price: '10',
        taxPrice: undefined,
        originPrice: '15',
        gift: '-',
        discountWay: '空',
      },
    ],
  },
  mock4: {
    base: {
      organization: '某某集团',
      year: '2019',
      rigistryType: '内资企业',
      applicantType: '非跨地区经营企业',
      industryName: '保险业',
      applicableType: '企业会计准则',
    },
    base2: {
      assetsAmount: '720',
      population: '720',
    },
    taxList: [
      { title: '收入类', list: ['视同销售业务', '未按权责发生制补充文字', '投资收益', '专项用途财政资金'] },
      {
        title: '扣除类',
        list: ['业务招待费', '广告宣传费', '捐赠支出', '研发费用', '利息费用', '佣金手续费', '党组织工作经费'],
      },
      { title: '资产类', list: ['资产折旧、摊销补充文字', '资产损失', '资产减值准备'] },
      {
        title: '其他业务',
        list: [
          '企业重组及递延文字补充',
          '政策性搬迁',
          '技术转让',
          '境外所得',
          '环境保护专用设备',
          '创业投资企业合文字补充',
        ],
      },
    ],
    buildList: [
      '企业所得税年度纳税申报基础信息表',
      '企业所得税年度纳税申报表填报表',
      '中华人民共和国企业所得税年度纳税申报表（A类）',
      '一般企业收入明细表',
      '一般企业成本支出明细表',
      '期间费用明细表',
      '纳税调整项目明细表',
      '职工薪酬支出及纳税调整明细表',
      '企业所得税弥补亏损明细表',
      '减免所得税优惠明细表',
    ],
    buildListPlus: ['未按权责发生制补充文字', '广告宣传费'],
  },
}
const data2 = {
  mock1: {
    dataSource: [
      {
        index: 1,
        way: 'Mini Program',
        checked: true,
        organization: 'Universal Software Shenzhen Nanshan Store',
        id: 'SIH1239845767283492',
        memo: '',
      },
      {
        index: 2,
        way: 'Group Buying Website',
        checked: false,
        organization: 'Universal Software Shenzhen Nanshan Store',
        id: 'SIH1239845767283493',
        memo: '',
      },
    ],
    basicInformation: [
      {
        required: true,
        label: 'Member Code',
        name: 'code',
        defaultValue: '88438748',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Member Name',
        name: 'name',
        defaultValue: 'Li*Yao',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Mobile Number',
        name: 'mobile',
        defaultValue: '134****1234',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Date of Birth',
        name: 'date',
        defaultValue: '1998-01-20',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Gender',
        name: 'sex',
        defaultValue: 'Male',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Ethnicity',
        name: 'nation',
        defaultValue: 'Han',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Education',
        name: 'education',
        defaultValue: 'University',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Email',
        name: 'email',
        defaultValue: '393****0989@qq.com',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Member Type',
        name: 'type',
        defaultValue: 'Advanced Member',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Card Issuance Status',
        name: 'trends',
        defaultValue: 'Issued',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Member Group',
        name: 'group',
        defaultValue: 'abc',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Remarks',
        name: 'memo',
        defaultValue: 'None',
        validateTrigger: 'onBlur',
      },
    ],
    recommendedInformation: [
      {
        required: true,
        label: 'My Referrer',
        name: 'referee',
        defaultValue: 'Li*Rui',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Relationship with My Referrer',
        name: 'refereeRelationship',
        defaultValue: 'Friend',
        validateTrigger: 'onBlur',
      },
    ],
    cardData: [
      {
        type: 'Passport',
        name: 'Wang Wenjun',
        code: 'EA-56421022',
        attrs: ['Expiration Date: 2029.1.12', 'Country Code: CN'],
        style: 'pp',
      },
      {
        type: 'Entry-Exit Permit for Hong Kong and Macao',
        name: 'Wang Wenjun',
        code: 'EA-56421022',
        attrs: [
          'Expiration Date: 2029.1.12 Country Code: CN',
          'Place of Issue: Guangdong Entry-Exit Administration Bureau',
          'Remarks: I am a remark',
        ],
        style: 'hk',
      },
      {
        type: 'Entry-Exit Permit for Taiwan',
        name: 'Wang Wenjun',
        code: 'EA-56421022',
        attrs: [
          'Expiration Date: 2029.1.12 Country Code: CN',
          'Place of Issue: Guangdong Entry-Exit Administration Bureau',
          'Remarks: I am a remark',
        ],
        style: 'tw',
      },
    ],
  },
  mock2: {
    previewData: [
      {
        id: 1,
        title: 'Dining at Universal',
        desc: "Don't know what to eat tonight? All nearby delicacies!",
        image: '1',
        author: '9724811212',
        describe: 'I am the description text',
      },
      {
        id: 2,
        title: 'Passport to Customs Clearance',
        desc: 'We have everything you need, come and check it out, buddies!',
        image: '2',
        author: '9724811211',
        describe: 'Description text',
      },
      {
        id: 3,
        title: 'Welfare Encyclopedia',
        desc: 'We have everything you need, come and check it out, buddies!',
        image: '3',
        author: '9724811213',
        describe: 'Description text',
      },
      {
        id: 4,
        title: 'White Paper on Meetings',
        desc: "Don't know what to eat tonight? All nearby delicacies!",
        image: '4',
        author: '9724811214',
        describe: 'I am the description text',
      },
    ],
  },
  mock3: {
    base: {
      group: 'Universal Technology Co., Ltd.',
      code: 'TempAP-201902-000001',
      date: '2019-02-10',
      type: 'Standard Accounts Payable Order',
      supplier: 'Shenzhen Architectural Design Institute',
      supplier2: 'Content',
      payway: 'Credit Purchase',
      type2: 'Content',
      memo: 'Content',
      payGroup: 'Content',
      taxType: 'Content',
      amount: 'Content',
    },
    list: [
      {
        index: 1,
        material: 'Rope',
        unit: 'meter',
        number: '1000',
        price: '10',
        taxPrice: undefined,
        originPrice: '15',
        gift: '-',
        discountWay: 'Empty',
      },
    ],
  },
  mock4: {
    base: {
      organization: 'Some Group',
      year: '2019',
      rigistryType: 'Domestic Enterprise',
      applicantType: 'Non-Regional Operating Enterprise',
      industryName: 'Insurance Industry',
      applicableType: 'Enterprise Accounting Standards',
    },
    base2: {
      assetsAmount: '720',
      population: '720',
    },
    taxList: [
      {
        title: 'Income Category',
        list: [
          'Deemed Sales Business',
          'Supplementary Texts for Non-accrual Basis',
          'Investment Income',
          'Special Purpose Fiscal Funds',
        ],
      },
      {
        title: 'Deduction Category',
        list: [
          'Business Entertainment Expenses',
          'Advertising and Publicity Expenses',
          'Donation Expenses',
          'Research and Development Expenses',
          'Interest Expenses',
          'Commission Fees',
          'Expenses of Party Organization Work',
        ],
      },
      {
        title: 'Asset Category',
        list: [
          'Supplementary Texts for Asset Depreciation and Amortization',
          'Asset Losses',
          'Provision for Asset Impairment',
        ],
      },
      {
        title: 'Other Businesses',
        list: [
          'Enterprise Restructuring and Deferred Texts Supplement',
          'Policy Relocation',
          'Technology Transfer',
          'Overseas Income',
          'Special Equipment for Environmental Protection',
          'Entrepreneurial Investment Enterprise Text Supplement',
        ],
      },
    ],
    buildList: [
      'Annual Tax Declaration Basic Information Form for Corporate Income Tax',
      'Fill-in Form for Corporate Income Tax Annual Tax Declaration Form',
      "Annual Tax Declaration Form for Corporate Income Tax of the People's Republic of China (Class A)",
      'General Enterprise Income Statement',
      'General Enterprise Cost Expenditure Statement',
      'Periodic Expense Statement',
      'Tax Adjustment Project Statement',
      'Employee Compensation Expenditure and Tax Adjustment Statement',
      'Enterprise Income Tax Loss Offset Statement',
      'Income Tax Exemption and Reduction Details Statement',
    ],
    buildListPlus: ['Supplementary Texts for Non-accrual Basis', 'Advertising and Publicity Expenses'],
  },
}
const data3 = {
  mock1: {
    dataSource: [
      {
        index: 1,
        way: 'マイクロプログラム',
        checked: true,
        organization: '環宇ソフトウェア深セン南山店',
        id: 'SIH1239845767283492',
        memo: '',
      },
      {
        index: 2,
        way: 'グループ購入サイト',
        checked: false,
        organization: '環宇ソフトウェア深セン南山店',
        id: 'SIH1239845767283493',
        memo: '',
      },
    ],
    basicInformation: [
      {
        required: true,
        label: '会員コード',
        name: 'code',
        defaultValue: '88438748',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '会員氏名',
        name: 'name',
        defaultValue: '李*遥',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '携帯電話番号',
        name: 'mobile',
        defaultValue: '134****1234',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '生年月日',
        name: 'date',
        defaultValue: '1998-01-20',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '性別',
        name: 'sex',
        defaultValue: '男',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '民族',
        name: 'nation',
        defaultValue: '漢族',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '学歴',
        name: 'education',
        defaultValue: '大学',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '電子メール',
        name: 'email',
        defaultValue: '393****0989@qq.com',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '会員種別',
        name: 'type',
        defaultValue: '高級会員',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'カード発行状況',
        name: 'trends',
        defaultValue: '発行済',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '会員グループ',
        name: 'group',
        defaultValue: 'abc',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '備考',
        name: 'memo',
        defaultValue: '無し',
        validateTrigger: 'onBlur',
      },
    ],
    recommendedInformation: [
      {
        required: true,
        label: '私の推薦者',
        name: 'referee',
        defaultValue: '李*瑞',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: '私と推薦者の関係',
        name: 'refereeRelationship',
        defaultValue: '友人',
        validateTrigger: 'onBlur',
      },
    ],
    cardData: [
      {
        type: 'パスポート',
        name: '王文君',
        code: 'EA-56421022',
        attrs: ['有効期間：2029.1.12', '国家コード：CN'],
        style: 'pp',
      },
      {
        type: '香港・マカオ往来証',
        name: '王文君',
        code: 'EA-56421022',
        attrs: ['有効期間：2029.1.12 国家コード：CN', '発行地：広東入出境管理局', '備考：私は備考です'],
        style: 'hk',
      },
      {
        type: '台湾往来証',
        name: '王文君',
        code: 'EA-56421022',
        attrs: ['有効期間：2029.1.12 国家コード：CN', '発行地：広東入出境管理局', '備考：私は備考です'],
        style: 'tw',
      },
    ],
  },
  mock2: {
    previewData: [
      {
        id: 1,
        title: '世界で食べる',
        desc: '今夜は何を食べるかわからない？近くの美味しいものが一通り揃っています！',
        image: '1',
        author: '9724811212',
        describe: 'これが説明テキストです',
      },
      {
        id: 2,
        title: '通関のヒント',
        desc: '我々にはすべてがあります、仲間が来て確認しましょう？',
        image: '2',
        author: '9724811211',
        describe: '説明テキスト',
      },
      {
        id: 3,
        title: '福利百科',
        desc: '我々にはすべてがあります、仲間が来て確認しましょう？',
        image: '3',
        author: '9724811213',
        describe: '説明テキスト',
      },
      {
        id: 4,
        title: '会議ホワイトペーパー',
        desc: '今夜は何を食べるかわからない？近くの美味しいものが一通り揃っています！',
        image: '4',
        author: '9724811214',
        describe: 'これが説明テキストです',
      },
    ],
  },
  mock3: {
    base: {
      group: '環宇テクノロジー株式会社',
      code: 'TempAP-201902-000001',
      date: '2019-02-10',
      type: '標準支払いオーダー',
      supplier: '深セン建築設計院',
      supplier2: '内容',
      payway: '掛け売り',
      type2: '内容',
      memo: '内容',
      payGroup: '内容',
      taxType: '内容',
      amount: '内容',
    },
    list: [
      {
        index: 1,
        material: '綱',
        unit: 'メートル',
        number: '1000',
        price: '10',
        taxPrice: null,
        originPrice: '15',
        gift: '-',
        discountWay: '空',
      },
    ],
  },
  mock4: {
    base: {
      organization: '某某グループ',
      year: '2019',
      rigistryType: '国内企業',
      applicantType: '地域間をまたぐ企業でない',
      industryName: '保険業',
      applicableType: '企業会計基準',
    },
    base2: {
      assetsAmount: '720',
      population: '720',
    },
    taxList: [
      {
        title: '収入',
        list: ['類似販売業務', '責任発生の原則に基づかない補足文言', '投資利益', '特定用途の財政資金'],
      },
      {
        title: '控除',
        list: ['業務接待費', '広告宣伝費', '寄付支出', '研究開発費', '利息費用', '手数料', '党組織活動経費'],
      },
      {
        title: '資産',
        list: ['資産の減価償却、摘要の補足', '資産損失', '減価償却準備'],
      },
      {
        title: 'その他の業務',
        list: [
          '企業再編及び繰延の文字補充',
          '政策的転換',
          '技術移転',
          '海外所得',
          '環境保護専用機器',
          'ベンチャーキャピタル企業合意の補足',
        ],
      },
    ],
    buildList: [
      '法人所得税年次納税申告基本情報表',
      '法人所得税年次納税申告書記入説明書',
      '中華人民共和国法人所得税年次納税申告書（A類）',
      '一般企業収入詳細表',
      '一般企業費用支出詳細表',
      '期間費用詳細表',
      '納税調整項目詳細表',
      '職員給与支出及び納税調整詳細表',
      '法人所得税損失補償詳細表',
      '所得税優遇減免詳細表',
    ],
    buildListPlus: ['責任発生の原則に基づかない補足文言', '広告宣伝費'],
  },
}
const data4 = {
  mock1: {
    dataSource: [
      {
        index: 1,
        way: 'Ứng dụng nhỏ',
        checked: true,
        organization: 'Cửa hàng phần mềm Toàn cầu tại Nam Sơn, Thâm Quyến',
        id: 'SIH1239845767283492',
        memo: '',
      },
      {
        index: 2,
        way: 'Trang web mua sắm theo nhóm',
        checked: false,
        organization: 'Cửa hàng phần mềm Toàn cầu tại Nam Sơn, Thâm Quyến',
        id: 'SIH1239845767283493',
        memo: '',
      },
    ],
    basicInformation: [
      {
        required: true,
        label: 'Mã hội viên',
        name: 'code',
        defaultValue: '88438748',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Tên hội viên',
        name: 'name',
        defaultValue: 'Lý* Diệu',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Số điện thoại di động',
        name: 'mobile',
        defaultValue: '134****1234',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Ngày sinh',
        name: 'date',
        defaultValue: '1998-01-20',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Giới tính',
        name: 'sex',
        defaultValue: 'Nam',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Dân tộc',
        name: 'nation',
        defaultValue: 'Người Hán',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Trình độ học vấn',
        name: 'education',
        defaultValue: 'Đại học',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Thư điện tử',
        name: 'email',
        defaultValue: '393****0989@qq.com',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Loại hội viên',
        name: 'type',
        defaultValue: 'Hội viên cao cấp',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Tình trạng phát thẻ',
        name: 'trends',
        defaultValue: 'Đã phát',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Nhóm hội viên',
        name: 'group',
        defaultValue: 'abc',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Ghi chú',
        name: 'memo',
        defaultValue: 'Không',
        validateTrigger: 'onBlur',
      },
    ],
    recommendedInformation: [
      {
        required: true,
        label: 'Người giới thiệu của tôi',
        name: 'referee',
        defaultValue: 'Lý* Thụy',
        validateTrigger: 'onBlur',
      },
      {
        required: true,
        label: 'Mối quan hệ giữa tôi và người giới thiệu',
        name: 'refereeRelationship',
        defaultValue: 'Bạn bè',
        validateTrigger: 'onBlur',
      },
    ],
    cardData: [
      {
        type: 'Hộ chiếu',
        name: 'Vương Văn Quân',
        code: 'EA-56421022',
        attrs: ['Hạn sử dụng: 2029.1.12', 'Mã quốc gia: CN'],
        style: 'pp',
      },
      {
        type: 'Thẻ đi lại Hồng Kông và Macao',
        name: 'Vương Văn Quân',
        code: 'EA-56421022',
        attrs: [
          'Hạn sử dụng: 2029.1.12 Mã quốc gia: CN',
          'Nơi phát hành: Cục quản lý nhập cảnh Guangdong',
          'Ghi chú: Tôi là ghi chú',
        ],
        style: 'hk',
      },
      {
        type: 'Thẻ đi lại Đài Loan',
        name: 'Vương Văn Quân',
        code: 'EA-56421022',
        attrs: [
          'Hạn sử dụng: 2029.1.12 Mã quốc gia: CN',
          'Nơi phát hành: Cục quản lý nhập cảnh Guangdong',
          'Ghi chú: Tôi là ghi chú',
        ],
        style: 'tw',
      },
    ],
  },
  mock2: {
    previewData: [
      {
        id: 1,
        title: 'Ăn khắp thế giới',
        desc: 'Không biết tối nay ăn gì? Tất cả món ngon trong khu vực gần bạn!',
        image: '1',
        author: '9724811212',
        describe: 'Đây là văn bản mô tả',
      },
      {
        id: 2,
        title: 'Túi lọc thông qua',
        desc: 'Chúng tôi có tất cả, bạn đến tìm hiểu chưa?',
        image: '2',
        author: '9724811211',
        describe: 'Văn bản mô tả',
      },
      {
        id: 3,
        title: 'Bách khoa phúc lợi',
        desc: 'Chúng tôi có tất cả, bạn đến tìm hiểu chưa?',
        image: '3',
        author: '9724811213',
        describe: 'Văn bản mô tả',
      },
      {
        id: 4,
        title: 'Bài báo hội nghị',
        desc: 'Không biết tối nay ăn gì? Tất cả món ngon trong khu vực gần bạn!',
        image: '4',
        author: '9724811214',
        describe: 'Đây là văn bản mô tả',
      },
    ],
  },
  mock3: {
    base: {
      group: 'Công ty Cổ phần Công nghệ Toàn cầu',
      code: 'TempAP-201902-000001',
      date: '2019-02-10',
      type: 'Phiếu nợ tiêu chuẩn',
      supplier: 'Viện Thiết kế Kiến trúc Thâm Quyến',
      supplier2: 'Nội dung',
      payway: 'Mua trả góp',
      type2: 'Nội dung',
      memo: 'Nội dung',
      payGroup: 'Nội dung',
      taxType: 'Nội dung',
      amount: 'Nội dung',
    },
    list: [
      {
        index: 1,
        material: 'Dây thừng',
        unit: 'mét',
        number: '1000',
        price: '10',
        taxPrice: undefined,
        originPrice: '15',
        gift: '-',
        discountWay: 'Trống',
      },
    ],
  },
  mock4: {
    base: {
      organization: 'Tập đoàn ABC',
      year: '2019',
      rigistryType: 'Doanh nghiệp trong nước',
      applicantType: 'Doanh nghiệp không kinh doanh qua các khu vực',
      industryName: 'Ngành bảo hiểm',
      applicableType: 'Tiêu chuẩn kế toán doanh nghiệp',
    },
    base2: {
      assetsAmount: '720',
      population: '720',
    },
    taxList: [
      {
        title: 'Loại thu nhập',
        list: [
          'Kinh doanh bán hàng, dịch vụ',
          'Chưa thêm vào trách nhiệm và quyền lợi',
          'Thu nhập từ đầu tư',
          'Kinh phí tài chính đặc biệt',
        ],
      },
      {
        title: 'Loại khấu trừ',
        list: [
          'Chi phí tiếp khách kinh doanh',
          'Chi phí quảng cáo',
          'Chi phí quyên góp',
          'Chi phí nghiên cứu và phát triển',
          'Chi phí lãi',
          'Chi phí hoa hồng và phí dịch vụ',
          'Chi phí công việc của tổ chức Đảng',
        ],
      },
      {
        title: 'Loại tài sản',
        list: ['Bổ nhiệm và trải phối tài sản', 'Thiệt hại tài sản', 'Dự trữ giảm giá tài sản'],
      },
      {
        title: 'Kinh doanh khác',
        list: [
          'Tái cấu trúc doanh nghiệp và nội dung bổ sung về trách nhiệm',
          'Di dời có chính sách',
          'Chuyển giao công nghệ',
          'Thu nhập từ nước ngoài',
          'Thiết bị bảo vệ môi trường',
          'Câu chuyện hợp tác với doanh nghiệp đầu tư khởi nghiệp',
        ],
      },
    ],
    buildList: [
      'Bảng thông tin cơ bản khai báo thuế doanh nghiệp',
      'Bảng điền thông tin khai báo thuế doanh nghiệp',
      'Bảng điền thông tin khai báo thuế doanh nghiệp năm (Loại A)',
      'Bảng chi tiết thu nhập của doanh nghiệp thông thường',
      'Bảng chi tiết chi phí chi tiêu của doanh nghiệp thông thường',
      'Bảng chi phí trong kỳ',
      'Bảng chi tiết các mục điều chỉnh thuế',
      'Bảng chi tiết chi phí lương của nhân viên và điều chỉnh thuế',
      'Bảng chi tiết mức thuế bổ sung cho khoản lỗ',
      'Bảng chi tiết ưu đãi giảm thuế',
    ],
    buildListPlus: ['Chưa thêm vào trách nhiệm và quyền lợi', 'Chi phí quảng cáo'],
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
  '/mock/form/anchor': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 1))
  },
  '/mock/form/preview': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 2))
  },
  '/mock/form/basic': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 3))
  },
  '/mock/form/guide': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 4))
  },
}
