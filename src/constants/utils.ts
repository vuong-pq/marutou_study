import { FORMAT } from '@/constants'

/**
 * 空のチェック
 * @param {String} valueToCheck
 * @returns {boolean} true if value is empty
 */
export function isEmpty(valueToCheck: any) {
  return valueToCheck === null || valueToCheck === undefined || valueToCheck === ''
}

export const getDisplayItems = (arrayItem: any[]) => {}

/**
 *
 * @param {String} name
 * @param {String} data
 */
export function setSessionStorageByItem(name: string, data: any) {
  localStorage.setItem(name, window.btoa(encodeURIComponent(JSON.stringify(data))))
}

/**
 *
 * @param {String} name
 * @returns
 */
export function getSessionStorageByItem(name: any) {
  const dataSessionStorage = localStorage.getItem(name)
  if (dataSessionStorage) {
    return isEmpty(dataSessionStorage)
      ? null
      : JSON.parse(decodeURIComponent(window.atob(dataSessionStorage)))
  }

  return false
}

export const isNumber = (value: any) => {
  return typeof Number(value) === 'number' && !isNaN(Number(value))
}

export const replaceUrl = (url: string, params: any) => {
  const queryParams = new URLSearchParams(params).toString()
  const queryString = queryParams.length > 0 ? `?${queryParams}` : ''

  return `${url}${queryString}`
}

/**
 * @param {long} date
 * @return {Boolean}
 */
export function formatDate(date: any, type: string) {
  if (isEmpty(date)) {
    return date
  }
  let d
  d = new Date(date)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  const year = d.getFullYear()

  let result = ''
  if (type === FORMAT.YYYY_MM_DD) {
    result += [year, month, day].join('-')
  }
  if (type === FORMAT.YYYY_MM_DD_JP) {
    result = year + '年' + month + '月' + day + '日'
  }

  return result
}
