# router 按需加载

> 路由按需加载

- `router/index.js` 中

```js
{
  path: '/',
  name: 'Home',
  component: Home
},
// 改成
{
  path: '/',
  name: 'Home',
  component: () => import('@/pages/home/Home')
},
```

- 组件中

如 `Home.vue`

```js
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