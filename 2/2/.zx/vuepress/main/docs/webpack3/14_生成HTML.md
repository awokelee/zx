# 自动生成 HTML

自动生成 HTML, 把 CSS、JS 都自动加入.

### 生成 HTML

HtmlWebpackPlugin

options: template、filename、minify、chunks、inject

安装: `npm i html-webpack-plugin -D`

```JS
var HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './index.html',
    chunks: ['app'] // 如果不指定 chunks 会把所有 chunks 引入到你的 html
    minify: {
      collapseWhitespace: true // 压缩空格
    }
    // inject: false
  })
]
```

### HTML 中引入图片

html-loader

options: attrs:[img:src]

安装: `npm i html-loader`

- index.html

```html
<img src="src/assets/imgs/1.png" data-src="src/assets/imgs/1.png" />
```

- webpack.config.js

```js
output: {
  publicPath: '/'
},
rules: [
  {
    test: '/\.html$/',
    use: [
      {
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'img:data-src'] // 处理 img 标签的 src 和 data-src
        }
      }
    ]
  }
]
```

- require 方式在 webpack 引入图片

```html
<img src="${require('./src/assets/imgs/1.png')}" />
```

### 配合优化

减少 http 请求, 提前载入 webpack 加载代码:  

inline-manifest-webpack-plugin

html-webpack-inline-chunk-plugin(推荐)

安装: `npm i html-webpack-inline-chunk-plugin -D`

`npm i babel-core babel-loader babel-preset-env -D`

```js
var HtmlWebpackInlineChunkPlugin  = require('html-webpack-inline-chunk-plugin')

rules: [
  {
    test: /\.js$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  }
]
...
plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new HtmlWebpackInlineChunkPlugin({
    inlineChunks: ['manifest']
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './index.html',
    minify: {
      collapseWhitespace: true
    }
  })
]
```