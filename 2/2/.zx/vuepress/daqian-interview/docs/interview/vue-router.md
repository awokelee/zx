# vue-router 与 SPA

## 路由原理

传统开发方式 url改变后, 立刻发起请求, 响应整个页面, 渲染整个页面

SPA 锚点值改变后不会发起请求, 发起 ajax 请求, 局部改变页面数据

页面不跳转 用户体验更好

## hashchange

`URL(锚点值)` + `innerHTML`

```js
// hashchange 事件, url 上的部分锚点数据(#xxx)改变, 可以获取到这个事件
window.addEventListener('hashchange', function () {
  switch(location.hash){
    case '#/login':
      div.innerHTML = '<h1>点我登录</h1>'
      break;
    case '#/register':
      div.innerHTML = '<h1>注册页面</h1>'
      break;  
  }
})
```

## SPA

单页应用程序

前端路由:

- 锚点值监视
- ajax获取动态数据
- 核心点是锚点值

前端框架 Vue/angualr/react 都很适合开发单页应用

## vue-router 使用

```html
<script src="vue.js"></script>
<script src="vue-router.js"></script>

<script>
var Login = {template:`<div>登录页面</div>`}

// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建一个路由对象
var router = new VueRouter({
  // 3. 配置路由对象
  routes: [{path: '/login', component: Login}]
})

// 5.指定路由改变局部的位置
var App = {
  template: `
    <div>
      <router-view></router-view>
    </div>
  `
}

new Vue({
  el:'#app',
  // 4.将配置好的路由对象关联到vue实例中
  router,
  components:{
    app:App
  },
  template: '<app/>'
})

</script>
```

## vue-router 分析

`Vue` 全局时会自动调用 `Vue-router`, 但是非全局 一定要 `Vue.use(VueRouter)`

- `install` 函数

```js
function install(Vue) {
  // ...
  Vue.component('router-view', View)
  Vue.component('router-link', Link)
  // ...
}

VueRouter.install = install
```

- vue 的 use 函数

```js
use: function (plugin) {
  plugin.install(Vue)
}
```

## Vue 插件

Vue 原型都能拿到

```js
// Vue的实例对象都继承原型, 也就是都能拿到 $router
Object.defineProperty(Vue.prototype, '$router', {
  // 给所有 new Vue()的对象及子类对象都添加$router, 返回自己的某个属性
  get: function get() { return this._routerRoot._router }
})
```

## 参数获取

```html
<!-- query -->
<router-link :to="{name: 'login', query:{id:1}}">去登陆</router-link>

<!-- params -->
<router-link :to="{name: 'register', params:{name:abc}}">去登陆</router-link>
```

```js
var router = new VueRouter({
  routes: [
    // query
    {name: 'login', path: '/login', component: Login},

    // params
    {name: 'register', path: '/register/:name', component: Login},
  ]
})
```

```js
mounted(){
  // query
  console.log(this.$route.query)

  // params
  console.log(this.$route.params)
}
```

## 嵌套路由

具名 slot: 多个组件, 按位置来填入不同的坑

嵌套路由: 多个组件, 按不同的锚点值部分, 填入不同的坑

使用须知: router-view 包含 router-view, 路由 children 路由

```js
// 1. router-view 中包含 router-view
// 2. 路由规则中存在子路由
var Login = {template:`<div>
  <router-view></router-view>
</div>`}

var Man = {template:`<div>
  Man
</div>`}

var App = {
  template: `
    <div>
      <router-link :to="{name: login.man}">Man</router-link>
      <router-view></router-view>
    </div>
  `
}
```

```js
var router = new VueRouter({
  routes: [
    {name: 'login', path: '/login', component: Login,
      children: [
        {
          name: 'login.man',
          path: 'man',
          component: Man
        }
      ]
    },

    {name: 'register', path: '/register/:name', component: Login},
  ]
})
```

## 编程导航

跳到指定的锚点, 并显示页面 `this.$router.pus({name: 'xx', query: {id: 1}})`

根据历史记录, 前进或后退

```js
this.$router.go(-1) // 退一步
this.$router.go(1) // 进一步
```