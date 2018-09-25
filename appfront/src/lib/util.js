import axios from 'axios'
import Qs from 'qs'
import config from './global'
import { stringify } from 'querystring'

let util = {}
let ajaxUrl = {}
// let oToken = this.$cookie.get('token')
if ((window.location.hostname.startsWith('192.168') || window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost')) {
  ajaxUrl = config.developmentUrl
} else if (window.location.hostname === '120.55.126.116') {
  ajaxUrl = config.productionUrl
}
util.ajax = axios.create({
  baseURL: ajaxUrl.host,
  transformRequest: (data) => {
    return (Qs.a = stringify(data))
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 500000
})
export default util
