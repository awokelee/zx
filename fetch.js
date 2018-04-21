// 识别代理服务器 api请求
const proxyPrefix = __DEV__ ? 'api/' : ''

import { Loading, Message } from 'element-ui'
import router from '../routers'
// loading实例
let loadingInstance = null
/*
 网络请求方法 基于promise的 async 函数
 @param type 请求方法
 @param url 在开发环境会加上api/ 前缀，proxy识别代理请求
 @param data 请求参数
 @param loadingOptions 是否显示loading框  可以为 true 或者 如下属性的对象
 {
  // 	Loading 需要覆盖的 DOM 节点。
  //  可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点
  target: document.body，
  // 同 v-loading 指令中的 body 修饰符
  body: false,
  // 同 v-loading 指令中的 fullscreen 修饰符
  fullscreen: true,
  // 	同 v-loading 指令中的 lock 修饰符
  lock: false,
  //  显示在加载图标下方的加载文案
  text: '',
  // Loading 的自定义类名
  customClass: '',
 }
 @param loadingOptions 当接口调用出错时是否显示 message
 */
export default async (type = 'GET', url = '', data = {}, loadingOptions, showError = true) => {
  type = type.toUpperCase()
  url = window.location.origin + '/' + proxyPrefix + url
  if (type === 'GET' && data) {
    let dataStr = '' // 数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }
  // 显示加载loading
  if (loadingOptions) {
    let options = {
      fullscreen: true,
      lock: true
    }
    options = loadingOptions === true ? options : { ...options, ...loadingOptions }
    loadingInstance = Loading.service(options)
  }
  if (window.fetch) {
    let contentType
    data instanceof FormData ? contentType = {} : contentType = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: contentType
      // mode: 'cors',
      // cache: 'force-cache',
    }
    if (type === 'POST' && data) {
      requestConfig.body = data instanceof FormData ? data : JSON.stringify(data)
    }

    let response = await fetch(url, requestConfig)
    loadingInstance && loadingInstance.close()
    if (response.ok) {
      let obj = await response.json()
      if (obj && obj.code === '4001') {
        router.push('/pages/login')
        // Message.error('用户未登录或已登录超时，请重新登录');
        // throw new Error('登录失效')
      } else {
        return obj
      }
    } else {
      showError && Message.error('网络连接失败')
      if (__DEV__) {
        let text = await response.text()
        console.log(text)
      }
    }
  } else {
    return await new Promise((resolve, reject) => {
      let requestObj
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest()
      } else {
        requestObj = new ActiveXObject()
      }

      let sendData = ''
      if (type === 'POST') {
        sendData = data instanceof FormData ? data : JSON.stringify(data)
      }

      requestObj.open(type, url, true)
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      requestObj.send(sendData)

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          loadingInstance && loadingInstance.close()
          if (requestObj.status == 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            if (obj && obj.code === '4001') {
              router.push('/pages/login')
              Message.error('用户未登录或已登录超时，请重新登录')
              throw new Error('登录失效')
            } else {
              resolve(obj)
            }
          } else {
            showError && Message.error('网络连接失败')
            reject(requestObj)
          }
        }
      }
    })
  }
}
