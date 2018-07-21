# axios 请求接口

## 安装

`npm install axios -S`

## 引入

`main.js` 中加入以下代码.

```js
import qs from 'qs'
import axios from 'axios'

// 全局拦截器, 这里用于将 POST 请求 FormData 数据 {id:1,name:'zs'} 
// 转换成 FormData 的 id=1&name=zs
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 挂载到 Vue 原型上
Vue.prototype.$http = axios
```

### 使用

`vue组件中:`

- `GET`

```js
  this.$http.get('/url', { params: { id: 1, name: 'zs' }})
    .then(res => {
      // todo something
    })
```

- `POST`

```js
  this.$http.post('/url', { id: 1, name: 'zs' })
    .then(res => {
      // todo something
    })
```
