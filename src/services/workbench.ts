import { request } from 'umi'

export async function getHome(params?: { [key: string]: any }) {
  return request('/mock/home', {
    method: 'GET',
    params,
  })
}
