import { request } from 'umi'

export async function getListBasic(options?: { [key: string]: any }) {
  return request('/mock/list/basic', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getListTree(options?: { [key: string]: any }) {
  return request('/mock/list/tree', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getListForm(options?: { [key: string]: any }) {
  return request('/mock/list/form', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getListBanner(options?: { [key: string]: any }) {
  return request('/mock/list/banner', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getListCard(options?: { [key: string]: any }) {
  return request('/mock/list/card', {
    method: 'GET',
    ...(options || {}),
  })
}
