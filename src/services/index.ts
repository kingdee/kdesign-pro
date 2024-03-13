import { RequestConfig } from 'umi'

const request: RequestConfig = {
  timeout: 3000,
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [
    (url, options) => {
      console.log('requestInterceptors', url)
      return { url, options }
    },
  ],
  responseInterceptors: [
    (response) => {
      console.log('responseInterceptors', response)
      return response
    },
  ],
}

export default request
