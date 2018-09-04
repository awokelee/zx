# vue-router 配置

### redirect

- `routes.js` 文件

```js
import Todo from '../views/todo'
import Login from '../views/login'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo
  },
  {
    path: '/login',
    component: Login
  }
]
```

### mode 模式

- `history`

- `hash`

`hash` 路由不会被搜索引擎解析, 不利于 `SEO`, 而且不能做服务端渲染.

```js {7}
import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history'
  })
}
```

### base

```js {5}
export default () => {
  return new Router({
    routes,
    mode: 'history',
    base: '/base/'
  })
}
```

浏览器访问会自动在 `path` 加上 `/base/` : `localhost:8080/base/login`.

只要通过 `vue-router` 的 `api` 跳转的都会加上, 但是你直接在浏览器不加 `/base/` 访问 也是可以的.

### linkActiveClass linkExactActiveClass

- `app.vue`

```js
<router-link to="/app">app</router-link>
<router-link to="/login">login</router-link>
<router-link to="/login/exact">logi exactn</router-link>
```

- `router.js`

```js {6,7}
export default () => {
  return new Router({
    routes,
    mode: 'history',
    base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  })
}
```

页面渲染被 `active` 时会自动加上两个 `class`: `active-link` 和 `exact-active-link`

不加的话默认是: `router-link-exact-active` 和 `router-link-active`

- `linkActiveClass` 和 `linkExactActiveClass` 区别

当访问 `/login/exact` 时:

`<router-link to="/login/exact">logi exactn</router-link>` 是精确匹配所以会有 `exact-active-link` 和 `active-link` 的 `class`

`<router-link to="/login">login</router-link>` 不是精确匹配所以只有 `active-link` 的 `class`

### history 刷新 404

跳转是没有问题, 但是用户刷新就会出现 404.

开发时, 配置 `webpack` 增加 `historyApiFallback : { index: '/index.html' }`

当配置了 `public` `path` 时, 那么也要加上:

```js
public: '/public/'
```

```js
historyApiFallback : {
  index: '/public/index.html'
}
```

生产环境一般用 `nginx` 配置.

### scrollBehavior

页面跳转时, 滚动行为.

`scrollBehavior (to, from, savedPosition)`:

`to`: 到哪去

`from`: 从哪

`savedPosition`: 保存滚动条位置

```js
export default () => {
  return new Router({
    routes,
    mode: 'history',
    base: '/base/',
    scrollBehavior (to, from, savedPosition){
      if(savedPosition){
        return savedPosition
      }else {
        return { x: 0, y: 0 }
      }
    }
  })
}
```

### parseQuery stringifyQuery

`query`: `localhost:8080/app?a=xxx&b=sss`

自己定制 `query` 字符串转对象和字符串转 `Query` 对象的方法.

```js
export default () => {
  return new Router({
    routes,
    mode: 'history',
    base: '/base/',
    parseQuery(query){

    },
    stringifyQuery(obj) {

    }
  })
}
```

### fallback

当遇到不支持 `history` 模式的浏览器时, 会自动切换到 `hash` 模式.

```js
export default () => {
  return new Router({
    routes,
    mode: 'history',
    base: '/base/',
    fallback: true
  })
}
```

### name 路由命名

路由的 `name` 跟 `path` 没有什么关系, 可以根据 `name` 进行路由跳转.

```js
{
  path: '/app',
  component: Todo,
  name: 'app2'
}
```

```js
<router-link :to="{name: app2}">app</router-link>
```

### meta 元信息

`meta` 是用来保存路由的信息, 类似 `html` 的 `meta`, 组件中不好加, 所以加在路由中, 用于 `SEO`.

```js
{
  path: 'app',
  component: Todo,
  meta: {
    title: '这里是标题',
    description: '这里是描述'
  }
}
```

### children

嵌套子路由.

```js
{
  path: '/app',
  component: Todo,
  children: [
    {
      path: 'test',
      component: Login
    }
  ]
}
```

### transition

```js
<transition name="fade">
  <router-view></router-view>
</transition>
```

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
```