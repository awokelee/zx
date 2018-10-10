# session 过期返回登录

::: tip
后台做了`session` 失效处理, 比如 5分钟就自动退出登录返回登录页面
:::

- 配置

通过前面介绍过的 `axios` 中 `interceptors` `response` 实现

在 `main.js` 中添加配置即可, 案例代码如下:

```js {5,10}
import qs from 'qs'
import axios from 'axios'

// axios 全局注入, response
axios.interceptors.response.use((response) => {
  const data = response.data
  // 后台返回 10108 code 表示 session 失效
  if (data && data.msgCode === 10108) {
    // 这里时根据自己配置的路由返回首页
    location.replace(`/`)
  }
  return response
}, (error) => {
  return Promise.reject(error)
})
```