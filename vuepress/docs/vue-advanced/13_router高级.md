# vue-router 高级

### 多个 router-view

```js
<router-view></router-view>
<router-view name="a"></router-view>
```

这里的 `components` 是有 `s`, `default` 是默认, `a` 表示 `router-view` 的 `name` 为 `a`.

```js
{
  path: '/app',
  props: true
  components: {
    default: Todo,
    a: Login
  }
}
```

### 导航守卫

- `src/index.js` 使用路由钩子

```js
const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  if (to.fullPath === '/app') {
    next({ path: '/login' })
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})
```

- `routes.js` 使用路由钩子

`beforeEnter()` 只有在进入路由之前才会被调用.

```js
  {
    path: '/app',
    component: Todo,
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
  },
```

- 组件内部使用路由钩子

```js
export default {
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter', this)
    // 这里组件还没有被创建, 拿到的 this 是 undefined, 所以这里通过 next 的参数回调
    next(vm => {
      console.log('after enter vm.id is ', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    // localhost:8080/app/456 可以在这里判断 参数变换, 而不用去 watch
    // mounted 只触发一次, 当组件一样时, mounted 第二次不去触发, 可以用 beforeRouteUpdate
    console.log('todo update enter')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 比如表单没保存, 提示用户是否要继续离开
    if(global.confirm('是否要离开')){
      next()
    }
  },
  data () {
    return {
      filter: 'all',
      stats: ['all', 'active', 'completed']
    }
  },
}
</script>
```

### 异步组件

如果版本低的话需要安装 `npm i babel-plugin-syntax-dynamic-import`

然后在 `.babelrc` 配置 `"plugins": ["syntax-dynamic-import"]`

```js
{
    path: '/app',
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue'),
  },
```