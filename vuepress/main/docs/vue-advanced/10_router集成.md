# vue-router 集成

### 安装

`npn i vue-router -S`

### 使用

- `routes.js` 文件

```js
import Todo from '../views/todo'
import Login from '../views/login'

export default [
  {
    path: 'app',
    component: Todo
  },
  {
    path: '/login',
    component: Login
  }
]
```

- `router.js` 文件

方式一: 每个地方 `import` 的都是同一个 `router`.

这种做法会在服务端渲染的时候导致内存溢出的问题, 因为 `export` 出去的只有一个 `router`, 每次服务端渲染都会重新生成新的 `app`, 会缓存新建的 `app`, 导致服务端渲染结束后, `app` 的内存没有释放, 造成内存溢出.

```js
import Router from 'vue-router'
import routes from './routes'

const router = new Router({
  routes
})

export default router
```

方式二: 每个地方的 `router` 都不一样, 服务端渲染

```js
import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes
  })
}
```

- 添加到 `index.js`

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import App from './app'

Vue.use(VueRouter)

const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
```

### 配置 router-view

`app.vue` 文件中

```js
<router-view></router-view>
```