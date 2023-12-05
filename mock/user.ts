const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

let access = ''

const getAccess = () => access

const legalAccounts = ['kdcloud', 'guest']

export default {
  'POST /mock/user/login': async (req: any, res: any) => {
    const { username, password } = req.body
    await waitTime(2000)
    if (legalAccounts.includes(username) && password === 'kdesign') {
      res.send({
        status: 'success',
        data: {
          name: '张丽丽',
          avatar: 'avatar.png',
          department: '金蝶XX云XX部',
          slogan: '以奋斗者为本，长期坚持明心净心',
          data_center: 'XX业务XX升级库',
          business_unit: 'XXXX部',
          theme_color: '#276FF5',
        },
      })
      access = username
    } else {
      res.send({
        status: 'failure',
      })
    }
  },
  '/mock/user/logout': {
    status: 'success',
  },
  '/mock/access': (req: any, res: any) => {
    res.send({
      status: 'success',
      data: {
        access: getAccess(),
      },
    })
  },
  '/mock/user/tasks': [
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
  ],
  '/mock/user/messages': [
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
  ],
}
