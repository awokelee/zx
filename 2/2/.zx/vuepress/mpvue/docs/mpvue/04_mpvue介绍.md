# mpvue 客户端环境搭建

`mpvue` [github 地址](https://github.com/Meituan-Dianping/mpvue) `Vue.js` 开发小程序的前端框架。

### 初始化项目

```bash {1}
# 创建项目
λ vue init mpvue/mpvue-quickstart mpvue-project

  A newer version of vue-cli is available.

  latest:    2.9.6
  installed: 2.9.3
# 项目名称
? Project name mpvue-project
# 小程序的 appid
? wxmp appid wx2ec046bd6405c
# 项目描述
? Project description A Mpvue project
# 作者
? Author awokelee <awokelee@gmail.com>
# vue 编译器
? Vue build runtime
# vue 状态管理 vuex 使用
? Use Vuex? Yes
# ESLint 使用
? Use ESLint to lint your code? Yes
# Standard ESLint 规范
? Pick an ESLint preset Standard
? 小程序测试，敬请关注最新微信开发者工具的“测试报告”功能

   vue-cli · Generated "mpvue-project".

   To get started:
     # 进入项目
     cd mpvue-project
     # 安装项目依赖
     npm install
     # 运行项目
     npm run dev

   Documentation can be found at http://mpvue.com
```

### 项目目录介绍

这里只介绍 `src` 目录, 其他的跟 `vue-cli` 脚手架生成的差不多, 这里不再叙述:

```bash
├── App.vue         # app.wxss + app.js 生命周期使用 vue 的
├── main.js         # 入口, export 的内容相当于 app.json
├── app.json
├── components      # 自定义组件
|  └── card.vue     # 单文件组件
├── pages           # 页面目录
|  ├── counter      # vuex 演示页面
|  |  ├── index.vue # 页面模版 + 样式 + 逻辑
|  |  ├── main.js   # 入口文件, 配置 vue + 返回配置
|  |  └── store.js
|  ├── index        # 首页
|  |  ├── index.vue
|  |  └── main.js
|  └── logs         # 日志
|     ├── index.vue
|     ├── main.js
|     └── main.json
└── utils           # 帮助函数
   └── index.js
```

### 生命周期

`vue` 生命周期 + 兼容小程序生命周期

`created` 创建初始化

`vue` 不支持的 用小程序自己的, 比如 `onPullDownRefresh`
