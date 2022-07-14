import { request } from 'umi'

export async function getReportBasic(options?: { [key: string]: any }) {
  return request('/mock/report/basic', {
    method: 'GET',
    ...(options || {}),
  })
}

export async function getReportBasicSum(options?: { [key: string]: any }) {
  return request('/mock/report/basic/sum', {
    method: 'GET',
    ...(options || {}),
  })
}

export function getReportStatisticsList() {
  return request('/mock/report/statistics/list', {
    method: 'GET',
  })
}

export function getReportStatisticsEcharts() {
  return request('/mock/report/statistics/echarts', {
    method: 'GET',
  })
}
