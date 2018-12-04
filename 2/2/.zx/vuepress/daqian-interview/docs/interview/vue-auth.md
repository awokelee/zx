# vue 权限

- 路由 `meta` 元数据 -> `meta` 是对于路由规则是否需要验证权限的配置
  - 路由对象中和 `name` 属性同级 `{meta:{isChecked: true}}`
- 路由钩子 -> 权限控制的函数执行时期
  - 每次路由匹配后, 渲染组件到 `router-view` 之前
  - `router.beforeEach(function(to, from, next){ })`

```js
var router = new VueRouter()

// 可以多次的追加路由规则, 动态的获取路由规则
router.addRoutes([
  {path: '/', redirect: {name: 'login'}}

  {name: 'login', path: '/login', component: Login},

  {
    name: 'music',
    path: '/music',
    component: Login,
    // 全局路由守卫
    meta: {
      isChecked: true
    }
  },
])

router.beforeEach(function (to, from, next) {
  if(!to.meta.isChecked){
    next();
  }else{
    if(isLogin){
      next()
    }else{
      next({name: 'login'})
    }
  }
})
```