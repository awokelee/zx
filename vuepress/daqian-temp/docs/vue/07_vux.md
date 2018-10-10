# vux 移动端 UI 库使用

::: tip
一个凑合的 `Vue.js` 移动端 `UI` 组件库,  [官网地址](https://vux.li/)
:::

- 安装 `vux`

`npm install vux --save`

- 安装 `vux-loader`

`npm install vux-loader --save-dev`

- 安装 `less` 和 `less-loader`

`npm install less less-loader --save-dev`

- 修改配置

`vux2` 必须配合 `vux-loader` 使用, 找到 `build/webpack.base.conf.js` 文件

原代码为:

```js {2}
module.exports = {
  ...// 括号内的不变
}
```

新增如下代码:

```js {3}
const vuxLoader = require('vux-loader')
const webpackConfig = {
  ...// 括号内的不变
}

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
```

更新配置后重新 `npm run dev` 运行项目