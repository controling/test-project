import axios from 'axios'
import { baseURL } from '@/config'
import { getToken } from '@/utils/index'

class HttpRequest {
  // constructor (baseUrl) {
  //  baseUrl = baseUrl || baseURL
  // }
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl // this表示要创建的实例
    this.queue = {} // 请求队列
  }
  getInsideConfig() {
    // 全局配置
    const config = {
      baseUrl: this.baseUrl,
      header: {
        //
      }
    }
    return config
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 可以添加请求前控制
      // 添加全局loading
      // console.log(config)
      if (Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      // 设置token请求头
      config.headers['Authorization'] = getToken()

      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      // console.log(res)
      const { data } = res
      return data
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  request(options) {
    // 创建请求
    const instance = axios.create() // 创建实例
    options = Object.assign(this.getInsideConfig(), options) // 合并请求配置
    this.interceptors(instance, options.url) // 调用拦截
    return instance(options)
  }
}
export default HttpRequest
