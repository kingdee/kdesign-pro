import { request } from 'umi'

export async function getHome(options?: { [key: string]: any }) {
  return request('/mock/home', {
    method: 'GET',
    ...(options || {}),
  })
}
