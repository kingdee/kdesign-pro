import { request } from 'umi'

export async function getFormAnchor(options?: { [key: string]: any }) {
  return request('/mock/form/anchor', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getFormPreview(options?: { [key: string]: any }) {
  return request('/mock/form/preview', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getFormBasic(options?: { [key: string]: any }) {
  return request('/mock/form/basic', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getFormGuide(options?: { [key: string]: any }) {
  return request('/mock/form/guide', {
    method: 'GET',
    ...(options || {}),
  })
}
