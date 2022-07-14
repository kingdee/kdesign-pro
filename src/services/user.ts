import { request } from 'umi'

export async function login(data?: { [key: string]: any }) {
  return request('/mock/user/login', {
    data,
    method: 'POST',
  })
}

export async function logout(options?: { [key: string]: any }) {
  return request('/mock/user/logout', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getAccess() {
  return request('/mock/access', {
    method: 'GET',
  })
}

export async function getUserTasks(options?: { [key: string]: any }) {
  return request('/mock/user/tasks', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getUserMessages(options?: { [key: string]: any }) {
  return request('/mock/user/messages', {
    method: 'GET',
    ...(options || {}),
  })
}
