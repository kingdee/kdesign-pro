const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

export default {
  'POST /mock/user/login': async (req: any, res: any) => {
    const { username } = req.body
    console.log('---mock---', username)
    await waitTime(2000)
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
        access: username,
      },
    })
  },
  '/mock/user/logout': {
    status: 'success',
  },
}
