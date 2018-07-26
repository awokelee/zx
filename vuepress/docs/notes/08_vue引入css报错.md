# Vue 引入 CSS 报错

::: tip
在项目引入 `css` 时, 报错提示缺少 `loader`
:::

原因是我在 `main.js` 直接 `import` 了 `css` 但是缺少 `loader`, 比如 我这里import 的 swiper.css

```js
import 'swiper/dist/css/swiper.css'
```

错误提示如下:

```bash
error  in ./node_modules/swiper/dist/css/swiper.css

Module parse failed: Unexpected token (12:0)
You may need an appropriate loader to handle this file type.
|  * Released on: June 5, 2018
|  */
| .swiper-container {
|   margin: 0 auto;
|   position: relative;

@ ./src/main.js 8:0-36
@ multi (webpack)-dev-server/client?http://localhost:8081 
webpack/hot/dev-server ./src/main.js
```

- 安装 `loader`

`npm install style-loader -D`

- 配置 `loader`

在 `build/webpack.base.conf.js` 中添加 `loader` 如下:

```js
module: {
  rules: [
    ...
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }
    ...
    ]
}  
```

`npm run dev` 重启项目