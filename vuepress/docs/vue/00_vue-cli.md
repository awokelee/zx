# vue-cli 创建项目

::: tip
`Vue` 提供了一个官方的 `CLI`，为单页面应用快速搭建 (SPA) 繁杂的脚手架
:::

- 安装 `vue-cli` 脚手架

执行 `npm install vue-cli -g` 来安装脚手架, 控制台显示大致如下:

```bash {1}
$ `npm install vue-cli -g`
npm WARN deprecated coffee-script@1.12.7:
CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
...
added 2 packages from 7 contributors,
removed 8 packages and updated 24 packages in 125.624s
```

- 用 `vue-cli` 创建一个项目

假如项目名称叫做 `tutorial`, 则执行 `vue init webpack tutorial`

执行完命令后, 会让你设置一些项目信息, 项目配置选项可以参考如下:

```bash
$ vue init webpack tutorial

# 项目名字, 不写就默认
? Project name `tutorial`

# 项目描述, 不写就默认
? Project description `A Vue.js project`

# 作者, 不写就默认
? Author `awokelee <awokelee@gmail.com>`
? Vue build standalone

# 是否安装路由, 如果你是要做 SPA 单页应用需要路由就 Yes (大部分正常项目需要)
? Install vue-router? `Yes`

# 是否需要开启 ESLint 代码规范检查, 如果是团队开发最好 YES 开启(统一风格)
? Use ESLint to lint your code? `Yes`

# 选择哪种代码风格, standard 是'标准'的,
# airbnb 是 爱彼迎公司的规范, 区别就是 语句结束 加分号和不加分号这些
? Pick an ESLint preset `Standard`

# 是否添加启单元测试, 一般是 NO (大部分公司不做单元测试, 成本太高)
? Set up unit tests `No`

# 是否添加启端到端测试, 同上 NO
? Setup e2e tests with Nightwatch? `No`

# 是否需要帮你安装依赖
? Should we run `npm install` for you after the project has been created?

# Project initialization finished!
# ========================

To get started:

  `cd tutorial` # 进入项目目录
  `npm run dev` # 启动项目

Documentation can be found at https://vuejs-templates.github.io/webpack
```

- 运行项目

进入 `tutorial` 目录, `cd tutorial`

如果没有依赖包则需要安装依赖包(看看是否有 `node_modules` 目录), `npm install`

执行 `npm run dev` 运行项目, 浏览器访问 `localhost:8080` 查看项目