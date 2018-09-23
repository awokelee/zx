# Webpack

## 概述

- `webpack` 是一个现代 `JavaScript` 应用程序的模块打包器(`module bundler`)
- `webpack` 是一个模块化方案（预编译）
- `webpack` 获取具有依赖关系的模块，并生成表示这些模块的静态资源
- 四个核心概念：**入口(`entry`)、输出(`output`)、加载器`loader`、插件(`plugins`)**

```JS
模块化方案: webpack 和 requirejs

browserify 是与 webpack 相似的模块化打包工具

webpack 预编译 (在开发阶段通过webpack进行模块化处理, 最终项目上线, 就不在依赖于 webpack)

requirejs 线上的编译( 代码运行是需要依赖与 requirejs 的 )
```

### webpack 起源

webpack解决了现存模块打包器的两个痛点：
- **`Code Spliting` - 代码分离**
- **静态资源的模块化处理方案**

### webpack 的目标

- 分离依赖树到`chunks`（块，文件），实现按需加载
- 保证初始化加载时间更短
- 每一个静态资源能够被当作一个模块处理
- 能够整合第三方包使其成为模块
- 能够定制模块打包的每一部分（环节）
- 适合大型项目

### webpack 与模块

- 在 `webpack` 看来：所有的静态资源都是模块
- `webpack` 模块能够识别以下等形式的模块之间的依赖：
- `JS` 的模块化规范:
    - **ES2015** `import` `export`
    - **CommonJS** `require()` `module.exports`
    - **AMD** `define` 和 `require`
- 非 `JS` 等静态资源：
    - `css/sass/less` 文件中的 `@import`
    - 图片连接，比如：样式 `url(...)` 或 `HTML` `<img src=...>`
    - 字体 等

### webpack 能做什么

- 模块化
- 将 `ES6`、`TypeScript`、`CoffeeScript` 等浏览器无法识别的语言转化为 `ES5`
- 将 `SCSS`、`LESS` 等预编译器创建的 `CSS` 转化为浏览器识别的 `CSS`
- 进行文件压缩、合并、拷贝
- 启动服务器，实现页面实时刷新，热加载
- 项目上线，通过配置生成项目目录，优化代码提升性能

### 安装 webpack

- 全局安装：`npm i -g webpack`
目的：在任何目录中通过 `CLI` 使用 `webpack` 这个命令
- 项目安装：`npm i -D webpack`
目的：执行当前项目的构建

### webpack 的基本使用

- `npm i -D webpack`
- `webpack` 的两种使用方式：1.命令行 2.配置文件（`webpack.config.js`）

#### 命令行方式演示 - 案例：隔行变色

- 使用 `npm init -y` 初始 `package.json`，使用 `npm` 来管理项目中的包
- 新建 `index.html` 和 `index.js`，实现隔行变色功能
- 运行`webpack src/js/index.js` `dist/bundle.js`进行打包构建，语法是：`webpack 入口文件 输出文件`
- 注意：需要在页面中引入 输出文件 的路径（此步骤可通过配置`webpack`去掉）

```JS
/*
  src/js/index.js
*/

// 1 导入 jQuery
import $ from 'jquery'

// 2 获取页面中的li元素
const $lis = $('#ulList').find('li')

// 3 隔行变色
// jQuery中的 filter() 方法用来过滤jquery对象
$lis.filter(':odd').css('background-color', '#def')
$lis.filter(':even').css('background-color', 'skyblue')
```

#### 配置文件方式（推荐）

```JS
/* 
  webpack.config.js

  运行命令：webpack  

  entry 入口的配置说明：
  https://doc.webpack-china.org/concepts/entry-points
*/

var path = require('path')
module.exports = {
  // 入口文件
  entry: path.join(__dirname, 'src/js/index.js'), 

  // 输出文件
  output: {
    path: path.join(__dirname, 'dist'),   // 输出文件的路径
    filename: 'bundle.js'                 // 输出文件的名称
  }
}
```

### webpack-dev-server

- 安装：`npm i -D webpack-dev-server`
- 作用：配合 `webpack`，创建开发环境（启动服务器、监视文件变化、自动编译、刷新浏览器等），提高开发效率
- 注意：无法直接在终端中执行 `webpack-dev-server`，需要通过 `package.json` 的 `scripts` 实现
- 使用方式：`npm run dev`

```JS
"scripts": {
  "dev": "webpack-dev-server"
}
```

#### 使用说明

- 注意：`webpack-dev-server` 将打包好的文件存储在内存中，提高编译和加载速度，效率更高
- 注意：输出的文件被放到项目根目录中
命令行中的提示：`webpack output is served from /`
在 `index.html` 页面中直接通过 `/bundle.js` 来引入内存中的文件

#### 配置说明 - CLI 配置

- `--contentBase` ：主页面目录
`--contentBase ./`：当前工作目录
`--contentBase ./src`：w`ebpack-dev-server` 启动的服务器，我们在浏览器中打开的时候会自动展示 `./src` 中的 `index.html` 文件
- `--open` ：自动打开浏览器
- `--port` ：端口号
- `--hot` ：热更新，只加载修改的文件(按需加载修改的内容)，而非全部加载

#### 配置说明 - webpack.config.js

```JS
const webpack = require('webpack')

devServer: {
  // 服务器的根目录 Tell the server where to serve content from
  // https://webpack.js.org/configuration/dev-server/#devserver-contentbase
  contentBase: path.join(__dirname, './'),
  // 自动打开浏览器
  open: true,
  // 端口号
  port: 8888,

  // --------------- 1 热更新 -----------------
  hot: true,
  // 解决打开页面出现 /undefined bug
  //openPage: ''
},

plugins: [
  // ---------------- 2 启用热更新插件 ----------------
  new webpack.HotModuleReplacementPlugin()
]
```

### html-webpack-plugin 插件

- 安装：`npm i -D html-webpack-plugin`
- 作用：根据模板，自动生成 `html` 页面
- 优势：页面存储在内存中，自动引入 `bundle.js`、`css` 等文件 


```JS
/* webpack.config.js */
const htmlWebpackPlugin = require('html-webpack-plugin')

// ...
plugins: [
  new htmlWebpackPlugin({
    // 模板页面路径
    template: path.join(__dirname, './index.html'),
    // 在内存中生成页面路径，默认值为：index.html
    filename: 'index.html'
  })
]
```

## Loaders（加载器）

- `webpack` 只能处理 `JavaScript` 资源
- `webpack` 通过 `loaders` 处理非 `JavaScript` 静态资源

## CSS打包

- `CSS` 打包文件（加载）
- `SASS` 打包文件（编译为CSS）

### 使用 webpack 打包 CSS

- 安装：`npm i -D style-loader css-loader`
- 注意：`use` 中模块的顺序不能颠倒，加载顺序：从右向左加载

```js
/* index.js */

// 导入 css 文件
import './css/app.css'

/* webpack.config.js */

// 配置各种资源文件的loader加载器
module: {
  // 配置匹配规则
  rules: [
    // test 用来配置匹配文件规则（正则）
    // use  是一个数组，按照从后往前的顺序执行加载
    {test: /\.css$/, use: ['style-loader', 'css-loader']}, 
  ]
}
```

### 使用 webpack 打包 sass

- 安装：`npm i -D sass-loader node-sass`
- 注意：`sass-loader` 依赖于 `node-sass` 模块

```JS
/* webpack.config.js */

// 参考：https://webpack.js.org/loaders/sass-loader/#examples
// "style-loader"  ：creates style nodes from JS strings 创建style标签
// "css-loader"    ：translates CSS into CommonJS 将css转化为CommonJS代码
// "sass-loader"   ：compiles Sass to CSS 将Sass编译为css

module:{
  rules:[
    {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
  ]
}
```

### 图片和字体打包

- 安装：`npm i -D url-loader file-loader`
- `file-loader`：加载并重命名文件（图片、字体 等）
- `url-loader`：将图片或字体转化为 `base64` 编码格式的字符串，嵌入到样式文件中

```JS
/* webpack.config.js */

module:{
  rules:[
    // 打包 图片文件
    { test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader' },

    // 打包 字体文件
    { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
  ]
}
```

#### 图片打包注意点

- 默认将图片转为 `base64` 编码格式
- `limit` 参数的作用：
限制图片的文件大小，单位为：字节(byte)
文件重命名为`哈希值`，保证文件不会重复。例如：一张图片拷贝一个副本，这两个图片实际是同一个
- 规则：
当图片文件大小（字节）`小于`指定的 `limit` 时，图片被转化为base64编码格式
当图片文件大小（字节）`大于等于`指定的 `limit` 时，图片被重命名，不使用 `base64` 编码，此时，需要 `file-loader` 来加载图片

```JS
/* webpack.config.js */

module: {
  rules: [
    // {test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=100'},
    {
      test: /\.(jpg|png|gif|jpeg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }
  ]
}
```

#### 字体文件打包说明

- 可以使用 `url-loader` 或者 `file-loader`
- `url-loader` 会将字体文件解析为 `base64` 编码格式的字符串，嵌入到 `CSS` 样式中
- `file-loader` 以文件形式加载字体文件

### 在 webpack 中配置 babel-loader

- 安装：`npm i -D babel-core babel-loader babel-plugin-transform-runtime`
- 安装：`npm i -D babel-preset-es2015 babel-preset-stage-0`
- 安装：`npm i -S babel-runtime`
注意：`stage-0` 依赖于 `es2015`
`ES6 -> ES7` 过程中要经历：`4个阶段（0-3）`，并且 `stage-*` 的语法比 `ES6` 更新

#### 基本使用（两步）

- 第一步：

```JS
/* webpack.config.js */

module: {
  rules: [
    // exclude 排除，不需要编译的目录，提高编译速度
    {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
  ]
}
```

- 第二步：在项目根目录中新建 `.babelrc` 配置文件

```JS
/* .babelrc */

// 将来babel-loader运行的时候，会检查这个配置文件，并读取相关的语法和插件配置
{
  "presets": ["es2015", "stage-0"],
  "plugins": ["transform-runtime"]
}
```

### babel 的说明

#### babel-core

```JS
把 js 代码分析成 ast (抽象语法树, 是源代码的抽象语法结构的树状表现形式)，方便各个插件分析语法进行相应的处理。

有些新语法在低版本 js 中是不存在的，如箭头函数，rest 参数，函数默认值等，

这种语言层面的不兼容只能通过将代码转为 ast，再通过`语法转换器`分析其语法后转为低版本 js。

Bable AST： http://www.zcfy.cc/article/347

代码转AST：  https://astexplorer.net/

babel原理：  https://zhuanlan.zhihu.com/p/27289600
```

#### babel-preset-*

> Babel 通过语法转换器，能够支持最新版本的 JavaScript 语法

- 作用：将浏览器无法识别的新语法转化为 `ES5` 代码
- `ES6` 语法提案的批准流程
`ES2015` 也就是 `ES6`, 下一个要发布的 `ES7`, 从 `ES6` 到 `ES7` 之间经历了 `5` 个阶段
一般进入到 `stage 4` 就可以认为是下一个版本的语法了!

```JS
Stage 0 - Strawman（展示阶段）
Stage 1 - Proposal（征求意见阶段）
Stage 2 - Draft（草案阶段）
Stage 3 - Candidate（候选人阶段）
Stage 4 - Finished（定案阶段）

Stage 0 is "i've got a crazy idea", 
stage 1 is "this idea might not be stupid", 
stage 2 is "let's use polyfills and transpilers to play with it", 
stage 3 is "let's let browsers implement it and see how it goes", 
stage 4 is "now it's javascript".
```

#### babel-polyfill 和 transform-runtime

- 作用：实现浏览器对不支持 `API` 的兼容（兼容旧环境、填补）
- `polyfill`
- `transform-runtime`
- 命令：`npm i -S babel-polyfill`
- 命令：`npm i -D babel-plugin-transform-runtime 和 npm i -S babel-runtime`
- 区别：

polyfill 污染全局环境、支持实例方法

runtime  不污染全局环境、不支持实例方法

> polyfill：如果想要支持全局对象（比如：`Promise`）、静态方法（比如：`Object.assign`）或者**实例方法**（比如：`String.prototype.padStart`）等，那么就需要使用`babel-polyfill`

```TEXT
babel-runtime ：提供了兼容旧环境的helper函数，使用的时候，需要我们自己手动引入
  比如：const Promise = require('babel-runtime/core-js/promise') 
  说明：
    1 手动引入太繁琐
    2 多个文件引入同一个helper（定义），造成代码重复，增加代码体积
    3 安装该插件即可

babel-plugin-transform-runtime：
    1 自动引入helper
    2 babel-runtime提供定义，使用的位置引入这个helper，避免重复
    3 babel-runtime包中的代码会被打包到你的代码中（-S）
    4 依赖于 babel-runtime 插件
```

```JS
// 第一行引入
require("babel-polyfill")

var s = 'abc'.padStart(4)
console.log(s)

// webpack.config.js 配置
module.exports = {
  entry: ['babel-polyfill', './app/js']
}
```

#### 总结

```JS
babel-core 将新的JS语法解析为 抽象语法树(AST)

babel-preset-es2015 能够将 抽象语法树 转化为浏览器能够识别的语法
  注意: 只能处理新的语法( static / 箭头函数 ) , 但是对于一些新的JS API 无法处理

transform-runtime / babel-polyfill 提供浏览器不识别的全局对象或者新的API的兼容实现，以达到兼容浏览器的目的

// 判断浏览器是否兼容 padStart 这个 API
if (!String.prototype.padStart) {
  // 如果不兼容, 就自己模拟 padStart的功能实现一份
  String.prototype.padStart = function padStart(targetLength,padString) {
  }
}
```

### vue 单文件组件 vue-loader

- `single-file components`(单文件组件)
- 后缀名：`.vue`，该文件需要被预编译后才能在浏览器中使用
- 注意：单文件组件依赖于两个包 `vue-loader` / `vue-template-compiler`
- 安装：`npm i -D vue-loader vue-template-compiler`

```HTML
<!-- App.vue 示例代码： -->
<template>
  <div>
    <h1>VUE 单文件组件示例 -- App.vue</h1>
    <p>这是 模板内容</p>
  </div>
</template>

<script>
  // 组件中的逻辑代码
  export default {}
</script>

<style>
/* 组件样式 */
h1 {
  color: red;
}
</style>
```

```JS
// webpack.config.js 配置：
module: {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ]
}
```

#### 单文件组件使用步骤

- 安装：`npm i -D vue-loader vue-template-compiler`
- 在 `webpack.config.js` 中配置 `.vue` 文件的 `loader`
`{ test: /\.vue$/, use: 'vue-loader' }`
- 创建 `App.vue` 单文件组件，注意：`App` 可以是任意名称
- 在 `main.js` 入口文件中，导入 `vue` 和 `App.vue` 组件，通过 `render` 将组件与实例挂到一起

## Webpack 发布项目

### 项目发布

- 开发期间，为了提高工作效率和编译速度，我们使用`webpack-dev-server`插件来辅助开发
- 项目发布：剔除开发期间用到的开发工具，模块化分析和打包项目代码

### 创建项目发布配置文件

- 开发期间配置文件：`webpack.config.js`
- 项目发布配置文件：`webpack.prod.js` （文件名称非固定）
- 命令：`webpack --config webpack.prod.js` 指定配置文件名称运行 `webpack`
- 参数：`--display-error-details` 用于显示`webpack`打包的错误信息

```JS
/* package.json */

"scripts": {
  "prod": "webpack --config webpack.prod.js"
}
```

### 项目上线处理方式

- 删除：`webapck-dev-server` 配置 以及 `deltools` 配置
- 处理文件路径（包括：图片、css、js）
- 处理`url-loader`参数
- 自动删除`dist`目录
- 分离第三方包

### 处理图片路径

- 如果`limit`小于比图片大，那么图片将被转化为`base64`编码格式

```JS
// 处理URL路径的loader

{
  test: /\.(jpg|png|gif|bmp|jpeg)$/, 
  use: {
    loader: 'url-loader',
    options: {
      limit: 8192,
      // name参数：重命名文件以及修改文件路径，不用原始文件名字就是为了防止相同图片但名字不同的这种情况
      name: 'images/imgs-[hash:7].[ext]'
    }
  }
},
```

### 自动删除 dist 目录

`npm i -D clean-webpack-plugin`

```JS
/* webpack.prod.js */
const cleanWebpackPlugin = require('clean-webpack-plugin')

plugins: [
  // 创建一个删除文件夹的插件，删除dist目录
  new cleanWebpackPlugin(['dist'])
]
```

### 分离第三方包

- 目的：将公共的第三方包，抽离为一个单独的包文件，这样防止重复打包！
- 例如：3个页面中都引入了jQuery，不分离的话，会被打包3次

```JS
/* webpack.prod.js */

// 入口 -- 打包文件的入口
entry: {
  // 项目代码入口
  app: path.join(__dirname, './src/js/main.js'),
  // 第三方包入口
  vendor: ['vue', 'vue-router', 'vue-resource']
},

output: {
  // 修改输出文件的名称
  filename: 'js/[name].[chunkhash].js',
},

plugins: [
  // 分离第三方包（公共包文件）
  new webpack.optimize.CommonsChunkPlugin({
    // 第三方包入口名称，对应 entry 中的 vendor 属性
    // 将 entry 中指定的 ['vue', 'vue-router', 'vue-resource'] 打包到名为 vendor 的js文件中
    name: 'vendor',
  }),
]
```

### 压缩混淆 JS

```JS
plugins: [
  // 优化代码
  // https://github.com/webpack-contrib/uglifyjs-webpack-plugin/tree/v0.4.6
  new webpack.optimize.UglifyJsPlugin({
    // 压缩
    compress: {
      // 移除警告
      warnings: false
    }
  }),

  // 指定环境，设置为生产环境
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
]
```

### 抽取和压缩 CSS 文件

- 安装：抽离 `npm i -D extract-text-webpack-plugin`
- 安装：压缩 `npm i -D optimize-css-assets-webpack-plugin`

```JS
// 分离 css 到独立的文件中
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 压缩 css 资源文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// bug描述: 生成后面的css文件中图片路径错误，打开页面找不到图片
// 解决：google搜索 webpack css loader 样式图片路径
output: {
  // ...

  // https://doc.webpack-china.org/configuration/output/#output-publicpath
  // 设置公共路径
  publicPath: '/',
},

module: {
  rules: [
    {
      test: /\.css$/, 
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
    {
      test: /\.scss$/, 
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader']
      })
    },
  ]
},
plugins: [
  // 通过插件抽离 css (参数)
  new ExtractTextPlugin("css/style.css"),
  // 抽离css 的辅助压缩插件
  new OptimizeCssAssetsPlugin()
]
```

### 压缩 HTML 页面

- html-minifier

```JS
new htmlWebpackPlugin({
  // 模板页面
  template: path.join(__dirname, './index.html'),
  // 在内容中生成页面名称
  filename: 'index.html',

  // 压缩HTML
  minify: {
    // 移除空白
    collapseWhitespace: true,
    // 移除注释
    removeComments: true,
    // 移除属性中的双引号
    removeAttributeQuotes: true
  }
}),
```

### source map

- 有利于代码调试，能够准确定位错误发生的位置

```JS
// 在 webpack.config.js 中添加以下配置项：
devtool: 'inline-source-map',

// ------------------------------------

// 1 注意：在生产环境中使用以下配置（体积更小）
devtool: 'cheap-module-source-map',

// 2 注意：如果启用了js压缩功能，需要添加 sourceMap: true
plugins: [
  // 压缩js
  new webpack.optimize.UglifyJsPlugin({
    // 启用 source map，需要将 sourceMap属性 设置为true
    sourceMap: true
  }),
]
```

### Tree-Shaking

- `tree shaking` 是一个术语，通常用于描述移除 `JavaScript` 上下文中的未引用代码(`dead-code`)
- 注意：只对`ES2015`的模块语法有效，如果使用了`babel`，需要关闭`babel`的模块转换功能
- 说明：`webpack`会自动标识没有引用的代码，通过`uglifyjs`来移除这部分代码
- `webpack.optimize.UglifyJsPlugin == uglifyjs-webpack-plugin/`

```JS
// .babelrc
// 关闭 modules 解析功能
"presets": [ ["es2015", { "modules": false } ] ]
```

- 关闭 `babel` 的模块处理功能（`modules: false`）
- 通过 `uglifyjs` 移除被`webpack`标记为没有被使用的代码

### webpack 3 - Scope Hoisting （性能优化）

- 作用：让 `Webpack` 打包出来的代码文件更小、运行的更快
- 说明：只支持`ES2015`模块写法，不支持`CommonJS`模块使用
- 命令：`webpack --display-optimization-bailout`
  - 参数：打印出项目无法使用 `Scope Hoisting` 的原因
- 注意：使用这个插件的时候，模块热替换将不起作用，所以最好只在代码优化的时候才使用这个插件

```JS
/*
  webpack.config.js
  使用方式：在配置文件中添加一个新的插件 webpack.optimize.ModuleConcatenationPlugin
*/

module.exports = {
  plugins: [
    // scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
```

### vue配合webpack实现路由按需加载

- 修改组件的引用方式

```JS
// 方式一: require.ensure()
const NewsList = r => require.ensure([], () => r(require('../components/news/newslist.vue')), 'news')
// const NewsInfo = r => require.ensure([], () => r(require('../components/news/newsinfo.vue')), 'news')

// 方式二: import()
const NewsInfo = () => import(/* webpackChunkName: "newsinfo" */ '../components/news/newsinfo.vue')
```

- 修改 webpack 配置文件的output

```JS
output: {
  path: path.join(__dirname, './dist'),
  filename: 'js/[name].[chunkhash].js',

    // ------添加 chunkFilename, 指定输出js文件的名称------
  chunkFilename: 'js/[name].[chunkhash].js',
},
```