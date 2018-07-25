# vux 移动端 UI 库使用

> 移动端 UI 库 vux

- 安装 `vux`

`npm install vux --save`

- 安装 `vux-loader`

`npm install vux-loader --save-dev`

- 安装 `less` 和 `less-loader`

`npm install less less-loader --save-dev`

- `vux2` 必须配合 `vux-loader` 使用

原代码为:

```js
module.exports = {
  ...// 这里是相同得
}
```

修改为:

```js
const vuxLoader = require('vux-loader')
const webpackConfig = {
  ...// 这里是相同得
}

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
```

更新配置后重新运行项目