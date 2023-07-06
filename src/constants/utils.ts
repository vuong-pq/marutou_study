import lodash from 'lodash'

const { isEmpty } = lodash

export const getDisplayItems = (arrayItem: any[]) => {}

/**
 *
 * @param {String} name
 * @param {String} data
 */
export function setSessionStorageByItem(name: string, data: any) {
  sessionStorage.setItem(name, window.btoa(encodeURIComponent(JSON.stringify(data))))
}

/**
 *
 * @param {String} name
 * @returns
 */
export function getSessionStorageByItem(name: any) {
  const dataSessionStorage = sessionStorage.getItem(name)
  if (dataSessionStorage) {
    return isEmpty(dataSessionStorage)
      ? null
      : JSON.parse(decodeURIComponent(window.atob(dataSessionStorage)))
  }

  return false
}
