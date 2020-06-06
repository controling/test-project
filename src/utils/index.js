import Cookies from 'js-cookie'

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}

export const parseQueryString = url => {
  var json = {}
  var arr = url.substr(url.indexOf('?') + 1).split('&')
  arr.forEach(item => {
    var tmp = item.split('=')
    json[tmp[0]] = tmp[1]
  })
  return json
}

export const setTitle = (title) => {
  window.document.title = title || 'admin'
}

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
