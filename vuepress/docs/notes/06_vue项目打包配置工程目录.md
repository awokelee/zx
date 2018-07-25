# vue 项目打包配置工程目录

::: tip
正常情况 `npm run build` 将 `dist` 部署 `nginx` 根目录, 然后通过 `www.gaodaqian.com` 访问, 现在需要通过 `www.gaodaqian.com/vip/v1/` 访问
:::

一共需要修改 **两处** 地方

- 第一处 `config/index.js`

将 `assetsPublicPath: '/'` 修改为 `assetsPublicPath: '/vip/v1'`,

修改前:

```js
  build: {
      // Template for index.html
      index: path.resolve(__dirname, '../dist/index.html'),

      // Paths
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      ...
  }
```

修改后:

```js
  build: {
      // Template for index.html
      index: path.resolve(__dirname, '../dist/index.html'),

      // Paths
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static',
      assetsPublicPath: '/vip/v1',
      ...
  }
```

- 第二处 `src/router/index.js`

增加 `base: '/vip/v1'`, `base` 默认是 `'/'`

修改前:

```js
const router = new Router({
  mode: 'history',
  linkActiveClass: 'menvscode-active',
  ...
})
```

修改后:

```js
const router = new Router({
  base: '/vip/v1', // 新增
  mode: 'history',
  linkActiveClass: 'menvscode-active',
  ...
})
```

- 通过 `www.gaodaqian.com/vip/v1/` 访问项目