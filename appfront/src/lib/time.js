// 修改时间的格式
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    let str = o[k] + ''
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
export function compare (property) {
  return function (a, b) {
    let value1 = a[property]
    let value2 = b[property]
    return value1 - value2
  }
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
export function comdify (n) {
  return n.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}
// 修改千分位
export function numFormat (num) {
  var c = (num.toString().indexOf('.') !== -1) ? num.replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return c
}
// 千分位改成正常数字
export function delcommafy (num) {
  if ((num + '').trim() === '') {
    return ''
  }
  num = num.replace(/,/gi, '')
  return Number(num)
}
