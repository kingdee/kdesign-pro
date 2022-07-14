import { request } from 'umi'

export async function getDetailBasic(options?: Record<string, any>) {
  return request('/mock/detail/basic', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getDetailColumns(options?: Record<string, any>) {
  return request('/mock/detail/columns', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getDetailVertical(options?: { [key: string]: any }) {
  return request('/mock/detail/vertical', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getDetailCross(options?: { [key: string]: any }) {
  return request('/mock/detail/cross', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getDetailFlow(options?: { [key: string]: any }) {
  return request('/mock/detail/flow', {
    method: 'GET',
    ...(options || {}),
  })
}
