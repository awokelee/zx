# Vue 插件

1. Vue.use(插件对象); // 过程中会注册一些全局组件, 及给 vm 或者组件对象挂载属性

2. 给 vm 及组件对象挂载的方式:

```js
Object.defineProperty(Vue.prototype, '$router', {
  // 给所有 new Vue()的对象及子类对象都添加 $router, 返回自己的 router 对象
  get: function get() { return this._routerRoot._router }
})
```