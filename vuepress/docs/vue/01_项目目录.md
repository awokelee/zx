# 项目目录

::: tip
前面两步已经用 `vue-cli` 生成了项目, 生成后项目目录大致如下
:::

- 工程目录

```js
├─build                 // 构建
├─config                // 配置
├─node_modules          // node 包依赖文件目录
├─src                   // 源文件
│  ├─assets             // 资源(css、图片)
│  ├─components         // 一些可以复用的公用组件
│  └─router             // 路由
├─static                // 静态资源存放目录, 比如 favicon 网站图标
│
├─.babelrc              // js 新语法转换(向下兼容)
├─.editorconfig         // 编辑器配置
├─.gitignore            // git 忽略
├─.postcssrc.js         // postcss (最常用的是添加各浏览器兼容前缀)
├─index.html            // 入口
├─package.json          // 包配置文件(类似pom.xml)
└─README.md             // 项目说明文档(一般怎么运行项目, 怎么打包都在里面)
```

- 运行、打包项目

在 `README.md` 文件中通常会有说明怎么运行怎么打包

```md
# vue-alc

> A Vue.js project

## Build Setup

# install dependencies
# 安装依赖包
npm install

# serve with hot reload at localhost:8080
# 运行项目, 通过 localhost:8080 访问
npm run dev

# build for production with minification
# 打生产包
npm run build

# build for production and view the bundle analyzer report
# 打生产包 + 包分析 (性能优化)
npm run build --report

For a detailed explanation on how things work,
check out the [guide](http://vuejs-templates.github.io/webpack/) and
[docs for vue-loader](http://vuejs.github.io/vue-loader).
```

::: warning
当 `npm run build` 后, 会在项目根目录生成 `dist` 文件夹, `dist` 内是一些打包后的静态文件, 直接给后台开发人员就可以部署了, 如果直接鼠标点击是以 `file://` 形式打开, 这样 **无法正常访问项目**, 前端可以采用 `live-server` `http-server` (自行搜索安装及使用方法)这类前端服务以 `http://` 形式访问, 后台用 `tomcat` `nginx` 部署.
:::