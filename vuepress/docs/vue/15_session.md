# session 过期返回登录

> 登录过期跳转到登录页面

通过 `axios` 的 `interceptors` `response` 实现

在 `main.js` 中

```js
import qs from 'qs'
import axios from 'axios'

// axios 全局注入, response
axios.interceptors.response.use((response) => {
  const data = response.data
  // 后台返回 10108 code 表示 session 失效
  if (data && data.msgCode === 10108) {
    location.replace(`/`)
  }
  return response
}, (error) => {
  return Promise.reject(error)
})
```