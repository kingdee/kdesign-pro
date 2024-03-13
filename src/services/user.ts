import { request } from 'umi'

export async function login(data?: { [key: string]: any }) {
  return request('/mock/user/login', {
    data,
    method: 'POST',
  })
}

export async function logout(data?: { [key: string]: any }) {
  return request('/mock/user/login', {
    data,
    method: 'POST',
  })
}
