// params 参数来源: https://xiaoce-cache-api-ms.juejin.im/v1/get 这个请求
let params = {
  token: 'token',
  id: 'id',
  client_id: 'client_id',
  uid: 'uid',
  src: 'web'
}

let urls = {
  getUrl: 'https://xiaoce-cache-api-ms.juejin.im/v1/get', // get 接口, 不需要变
  getSectionUrl: 'https://xiaoce-cache-api-ms.juejin.im/v1/getSection' // getSection 接口, 不需要变
}

module.exports = {
  params,
  urls
}
