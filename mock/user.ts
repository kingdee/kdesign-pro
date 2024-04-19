const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

const legalAccounts = ['kdcloud', 'guest']

export default {
  'POST /mock/user/login': async (req: any, res: any) => {
    const { username, password } = req.body
    const { lang } = req.query || {}
    let data = {
      status: 'success',
      data: {
        name: '张丽丽',
        avatar: 'avatar.png',
        department: '金蝶XX云XX部',
        slogan: '以奋斗者为本，长期坚持明心净心',
        data_center: 'XX业务XX升级库',
        business_unit: 'XXXX部',
        theme_color: '#276FF5',
        access: username,
      },
    }
    if (lang === 'en-US') {
      data = {
        status: 'success',
        data: {
          name: 'Zhang LiLi',
          avatar: 'avatar.png',
          department: 'Kingdee Cloud',
          slogan: 'To strive for progress, to strive for excellence',
          data_center: 'XX Business Upgrade Center',
          business_unit: 'XXXX Department',
          theme_color: '#276FF5',
          access: username,
        },
      }
    }
    await waitTime(2000)
    if (legalAccounts.includes(username) && password === 'kdesign') {
      res.send(data)
    } else {
      res.send({
        status: 'failure',
      })
    }
  },
  '/mock/user/logout': {
    status: 'success',
  },

  '/mock/user/tasks': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = [
      {
        title: '蒋丽丽提交的费用报销单',
        time: '04-28 12:34',
        status: '待审批',
        code: 'KDC-20220428-00392',
      },
      {
        title: '姚悠悠提交的出差申请单',
        time: '04-28 11:23',
        status: '待审批',
        code: 'KDC-20220428-00332',
      },
      {
        title: '王萌提交的采购订单',
        time: '04-28 10:47',
        status: '待审批',
        code: 'KDC-20220428-00264',
      },
      {
        title: '郑恒河的请假申请单',
        time: '04-28 10:34',
        status: '待审批',
        code: 'KDC-20220428-00238',
      },
      {
        title: '艾恩提交的出差申请单',
        time: '04-28 09:51',
        status: '待审批',
        code: 'KDC-20220428-00219',
      },
      {
        title: '李大儒提交的采购订单',
        time: '04-27 17:02',
        status: '待审批',
        code: 'KDC-20220427-00627',
      },
    ]
    if (lang === 'en-US') {
      data = [
        {
          title: 'Expense Reimbursement submitted by Jiang Lili',
          time: '04-28 12:34',
          status: 'Pending Approval',
          code: 'KDC-20220428-00392',
        },
        {
          title: 'Business Trip Application submitted by Yao Youyou',
          time: '04-28 11:23',
          status: 'Pending Approval',
          code: 'KDC-20220428-00332',
        },
        {
          title: 'Purchase Order submitted by Wang Meng',
          time: '04-28 10:47',
          status: 'Pending Approval',
          code: 'KDC-20220428-00264',
        },
        {
          title: 'Leave Application submitted by Zheng Henghe',
          time: '04-28 10:34',
          status: 'Pending Approval',
          code: 'KDC-20220428-00238',
        },
        {
          title: 'Business Trip Application submitted by Ai En',
          time: '04-28 09:51',
          status: 'Pending Approval',
          code: 'KDC-20220428-00219',
        },
        {
          title: 'Purchase Order submitted by Li Daru',
          time: '04-27 17:02',
          status: 'Pending Approval',
          code: 'KDC-20220427-00627',
        },
      ]
    }
    res.send(data)
  },
  '/mock/user/messages': async (req: any, res: any) => {
    const { lang } = req.query || {}
    let data = [
      {
        title: '库存预警',
        time: '04-28 12:34',
        message: '商品KFH00002的库存低于设定值',
        code: Math.floor(Math.random() * 10000),
      },
      {
        title: '调度作业通知',
        time: '04-28 11:23',
        message: '01车间人员调度成功',
        code: Math.floor(Math.random() * 10000),
      },
      {
        title: '期末余额汇报表',
        time: '04-28 10:47',
        message: '正在进行出单操作，请稍后再试',
        code: Math.floor(Math.random() * 10000),
      },
      {
        title: '出库核算',
        time: '04-27 16:23',
        message: '出库核算计算成功',
        code: Math.floor(Math.random() * 10000),
      },
      {
        title: '库存预警',
        time: '04-27 13:51',
        message: '商品KFH00234的库存低于设定值',
        code: Math.floor(Math.random() * 10000),
      },
      {
        title: '库存预警',
        time: '04-27 11:32',
        message: '商品KFH00309的库存低于设定值',
        code: Math.floor(Math.random() * 10000),
      },
    ]
    if (lang === 'en-US') {
      data = [
        {
          title: 'Inventory Alert',
          time: '04-28 12:34',
          message: 'The inventory of product KFH00002 is below the set value',
          code: Math.floor(Math.random() * 10000),
        },
        {
          title: 'Dispatch Job Notification',
          time: '04-28 11:23',
          message: 'Personnel dispatch in Workshop 01 successful',
          code: Math.floor(Math.random() * 10000),
        },
        {
          title: 'End-of-Period Balance Report',
          time: '04-28 10:47',
          message: 'An order operation is currently in progress. Please try again later.',
          code: Math.floor(Math.random() * 10000),
        },
        {
          title: 'Outbound Settlement',
          time: '04-27 16:23',
          message: 'Outbound settlement calculation successful',
          code: Math.floor(Math.random() * 10000),
        },
        {
          title: 'Inventory Alert',
          time: '04-27 13:51',
          message: 'The inventory of product KFH00234 is below the set value',
          code: Math.floor(Math.random() * 10000),
        },
        {
          title: 'Inventory Alert',
          time: '04-27 11:32',
          message: 'The inventory of product KFH00309 is below the set value',
          code: Math.floor(Math.random() * 10000),
        },
      ]
    }
    res.send(data)
  },
}
