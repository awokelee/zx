# axios 请求接口

::: tip
`Axios` 是一个基于 `promise` 的 `HTTP` 库,可以用在浏览器和 `node.js` 中, 也是 `Vue` **官方推荐**

[Axios 中文说明
](https://www.kancloud.cn/yunye/axios/234845)
:::

- 安装

`npm install axios -S`

- 引入

`main.js` 中加入以下代码.

```js
// 别忘引入 qs
import qs from 'qs'
import axios from 'axios'

// 挂载到 Vue 原型上
Vue.prototype.$http = axios
```

- 根据后台接口配置 `Content-Type`

::: warning 注意
利用 `axios.interceptors` 设置 `Content-Type`, 这边后台的 `post` 请求需要 `application/x-www-form-urlencoded` 类型, 根据你实际需求更改
:::

还是 `main.js` 中, 案例如下:

```js {6,7,8,9,10,11,12,13,14}
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

- `vue` 组件中使用

因为已经挂载到 `Vue` 原型上, 所以可以在组件中使用 `this` 来调用, 下面案例都是写在 `Vue` `methods` 某个方法中

`GET` 请求方式:

```js
this.$http.get('/url', { params: { id: 1, name: 'zs' }}).then(res => {
  // 拿到数据后处理你的逻辑
})
```

`POST` 请求方式:

```js
this.$http.post('/url', { id: 1, name: 'zs' }).then(res => {
  // 拿到数据后处理你的逻辑
})
```

`GET` 和 `POST` 传参上最直观的区别是 `GET` 多了个 `params: {}`
