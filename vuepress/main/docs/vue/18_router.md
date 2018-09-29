# router 按需加载

::: tip
路由很多的时候, 设置按需加载, 当进入该路由时才会去加载文件, 减少第一次访问页面时包大小

[Vue Router 官网](https://router.vuejs.org/zh/)
:::

- 路由中的配置

在 `router/index.js` 中

```js {1,5,10,14}
import Home from './components/Home'
{
  path: '/',
  name: 'Home',
  component: Home
},

// 修改为

// import Home from './components/Home'
{
  path: '/',
  name: 'Home',
  component: () => import('@/pages/home/Home')
},
```

- 组件中使用子组件时

如 `Home.vue`

```js {1,5,12}
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader,
  },
}
// 改成
export default {
  name: 'Home',
  components: {
    HomeHeader: () => import('./components/Header'),
  },
}
```