export const autoScroll = (id: string, interval = 200, height = 2) => {
  const p = document.getElementById(id)
  let initInterval: any = null

  if (p) {
    p.scrollTop = 0
    initInterval = setInterval(() => {
      if (p.scrollTop + p.clientHeight >= p.scrollHeight) {
        p.scrollTop = 0
      } else {
        p.scrollTop = height + p.scrollTop
      }
    }, interval)
  }
  return initInterval
}

export const getUrlSearchData = () => {
  let url: any = window.location.search
  url = url.substring(1)
  const dataObj: any = {}
  if (url.indexOf('&') > -1) {
    url = url.split('&')
    for (let i = 0; i < url.length; i++) {
      const arr = url[i].split('=')
      dataObj[arr[0]] = decodeURIComponent(arr[1])
    }
  } else {
    url = url.split('=')
    // eslint-disable-next-line prefer-destructuring
    dataObj[url[0]] = url[1]
  }
  return dataObj
}
