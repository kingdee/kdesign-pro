export default {
  '/mock/form/anchor': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = {
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
    }
    if (lang === 'en-US') {
      data = {
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
      }
    }
    res.send(data)
  },
  '/mock/form/preview': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = {
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
    }
    if (lang === 'en-US') {
      data = {
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
      }
    }
    res.send(data)
  },
  '/mock/form/basic': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = {
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
          price: '￥10',
          taxPrice: undefined,
          originPrice: '￥15',
          gift: '-',
          discountWay: '空',
        },
      ],
    }
    if (lang === 'en-US') {
      data = {
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
            price: '￥10',
            taxPrice: undefined,
            originPrice: '￥15',
            gift: '-',
            discountWay: 'Empty',
          },
        ],
      }
    }
    res.send(data)
  },
  '/mock/form/guide': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = {
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
    }
    if (lang === 'en-US') {
      data = {
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
      }
    }
    res.send(data)
  },
}
