const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

const data1 = {
  mock1: [
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
  mock2: [
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
  mock3: {
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
  },
}
const data2 = {
  mock1: [
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
  ],
  mock2: [
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
  ],
  mock3: {
    status: 'success',
    data: {
      name: 'Zhang LiLi',
      avatar: 'avatar.png',
      department: 'Kingdee Cloud',
      slogan: 'To strive for progress, to strive for excellence',
      data_center: 'XX Business Upgrade Center',
      business_unit: 'XXXX Department',
      theme_color: '#276FF5',
    },
  },
}
const data3 = {
  mock1: [
    {
      title: '蒋丽丽が提出した経費精算書',
      time: '04-28 12:34',
      status: '審査待ち',
      code: 'KDC-20220428-00392',
    },
    {
      title: '姚悠悠が提出した出張申請書',
      time: '04-28 11:23',
      status: '審査待ち',
      code: 'KDC-20220428-00332',
    },
    {
      title: '王萌が提出した発注書',
      time: '04-28 10:47',
      status: '審査待ち',
      code: 'KDC-20220428-00264',
    },
    {
      title: '郑恒河の休暇申請書',
      time: '04-28 10:34',
      status: '審査待ち',
      code: 'KDC-20220428-00238',
    },
    {
      title: 'アイエンが提出した出張申請書',
      time: '04-28 09:51',
      status: '審査待ち',
      code: 'KDC-20220428-00219',
    },
    {
      title: '李大儒が提出した発注書',
      time: '04-27 17:02',
      status: '審査待ち',
      code: 'KDC-20220427-00627',
    },
  ],
  mock2: [
    {
      title: '在庫警告',
      time: '04-28 12:34',
      message: '商品KFH00002の在庫が設定値より低いです',
      code: 2248,
    },
    {
      title: 'ディスパッチ作業通知',
      time: '04-28 11:23',
      message: '01工場の人員ディスパッチが成功しました',
      code: 953,
    },
    {
      title: '期末残高報告書',
      time: '04-28 10:47',
      message: '注文処理中です。後でもう一度お試しください',
      code: 3331,
    },
    {
      title: '出庫計算',
      time: '04-27 16:23',
      message: '出庫計算が成功しました',
      code: 2690,
    },
    {
      title: '在庫警告',
      time: '04-27 13:51',
      message: '商品KFH00234の在庫が設定値より低いです',
      code: 344,
    },
    {
      title: '在庫警告',
      time: '04-27 11:32',
      message: '商品KFH00309の在庫が設定値より低いです',
      code: 8781,
    },
  ],
  mock3: {
    status: 'success',
    data: {
      name: '田中りり',
      avatar: 'avatar.png',
      department: '金蝶XXクラウドXX部',
      slogan: '努力する者を中心に、長期的に心を明確に保ちます',
      data_center: 'XXビジネスXXアップグレードライブラリ',
      business_unit: 'XXXX部門',
      theme_color: '#276FF5',
    },
  },
}
const data4 = {
  mock1: [
    {
      title: 'Phiếu đề xuất chi phí của Jiang Lệ Lệ',
      time: '04-28 12:34',
      status: 'Chờ phê duyệt',
      code: 'KDC-20220428-00392',
    },
    {
      title: 'Đơn xin đi công tác của Diệu U U',
      time: '04-28 11:23',
      status: 'Chờ phê duyệt',
      code: 'KDC-20220428-00332',
    },
    {
      title: 'Đơn đặt hàng của Vương Mạnh',
      time: '04-28 10:47',
      status: 'Chờ phê duyệt',
      code: 'KDC-20220428-00264',
    },
    {
      title: 'Đơn xin nghỉ của Trịnh Hằng Hà',
      time: '04-28 10:34',
      status: 'Chờ phê duyệt',
      code: 'KDC-20220428-00238',
    },
    {
      title: 'Đơn xin đi công tác của Ai Ân',
      time: '04-28 09:51',
      status: 'Chờ phê duyệt',
      code: 'KDC-20220428-00219',
    },
    {
      title: 'Đơn đặt hàng của Lý Đại Nhu',
      time: '04-27 17:02',
      status: 'Chờ phê duyệt',
      code: 'KDC-20220427-00627',
    },
  ],
  mock2: [
    {
      title: 'Cảnh báo tồn kho',
      time: '04-28 12:34',
      message: 'Tồn kho của mặt hàng KFH00002 dưới mức quy định',
      code: Math.floor(Math.random() * 10000),
    },
    {
      title: 'Thông báo điều phối công việc',
      time: '04-28 11:23',
      message: 'Điều phối nhân viên phòng 01 thành công',
      code: Math.floor(Math.random() * 10000),
    },
    {
      title: 'Bảng báo cáo cuối kỳ',
      time: '04-28 10:47',
      message: 'Đang thực hiện thao tác xuất bảng, vui lòng thử lại sau',
      code: Math.floor(Math.random() * 10000),
    },
    {
      title: 'Kiểm kê xuất kho',
      time: '04-27 16:23',
      message: 'Kiểm kê xuất kho thành công',
      code: Math.floor(Math.random() * 10000),
    },
    {
      title: 'Cảnh báo tồn kho',
      time: '04-27 13:51',
      message: 'Tồn kho của mặt hàng KFH00234 dưới mức quy định',
      code: Math.floor(Math.random() * 10000),
    },
    {
      title: 'Cảnh báo tồn kho',
      time: '04-27 11:32',
      message: 'Tồn kho của mặt hàng KFH00309 dưới mức quy định',
      code: Math.floor(Math.random() * 10000),
    },
  ],
  mock3: {
    status: 'success',
    data: {
      name: 'Trương Lệ Lệ',
      avatar: 'avatar.png',
      department: 'Phòng Mây Đám Đông Vân',
      slogan: 'Lấy người chiến đấu làm trung tâm, kiên trì lâu dài và thanh thản trong lòng',
      data_center: 'Kho cập nhật nâng cấp dịch vụ',
      business_unit: 'Phòng XXXX',
      theme_color: '#276FF5',
    },
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

const legalAccounts = ['kdcloud', 'guest']
const legalAccountsEn = ['k_12_D_@_cloud—345', 'gu_12_D_#_est—345']

export default {
  'POST /mock/user/login': async (req: any, res: any) => {
    const { username, password } = req.body
    const data = {
      status: 'success',
      data: username,
    }
    await waitTime(1000)
    if (legalAccounts.includes(username) && legalAccountsEn.includes(password)) {
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
    res.send(getData(lang, 1))
  },
  '/mock/user/messages': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 2))
  },
  '/mock/user/info': async (req: any, res: any) => {
    const { lang } = req.query || {}
    res.send(getData(lang, 3))
  },
}
