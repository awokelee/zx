# Vue 浏览器回退记住位置

::: tip
有时候需求是返回时回到用户浏览的位置, 记住滚动条的位置
:::

- 路由设置

要使用这一功能，首先需要开启 `vue-router` 的 `history` 模式

滚动行为具体设置如下:

```js
  const router = new VueRouter({
    mode: 'history',
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) { //如果savedPosition存在，滚动条会自动跳到记录的值的地方
        return savedPosition
      } else {
        return { x: 0, y: 0 }//savedPosition也是一个记录x轴和y轴位置的对象
        }
      }，
    routes: [...]
  })
```