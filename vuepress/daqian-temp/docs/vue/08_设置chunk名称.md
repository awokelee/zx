# 设置 chunk 名称

**配置 webpack.base.conf.js**:

增加 `chunkFilename: '[name].js',`

```js
output: {
  path: config.build.assetsRoot,
  filename: '[name].js',
  chunkFilename: '[name].js',
  publicPath: process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : config.dev.assetsPublicPath
},
```

**配置 router/index.js**:

设置 `trunkname`, `/* webpackChunkName: 'home' */`

```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: 'home' */ '@/pages/Home')
    },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import(/* webpackChunkName: 'todo' */'@/pages/Todos')
    }
  ]
})
```

![](./media/trunk.png)