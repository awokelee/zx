# 登录跳转

::: tip
登录验证
:::

- 需要登录访问项目

找到 `main.js` 添加 `router.beforeEach` 案例如下:

```js {5,10,12}
// 引入路由
import router from './router'

// 登录
router.beforeEach((to, from, next) => {
  // 看是否已经登录
  const isLogin = window.sessionStorage.getItem('isLogin')
  // 未登录则跳转登录
  if (!isLogin && to.name !== 'login') {
    next({ path: '/', query: { from: to.fullPath }})
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router, // 路由
  store,
  components: {
    App
  },
  template: '<App/>'
})
```