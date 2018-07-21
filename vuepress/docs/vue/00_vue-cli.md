# 创建项目

- 安装脚手架

执行 `npm install vue-cli -g`, 控制台显示大致如下:

```md
$ `npm install vue-cli -g`
npm WARN deprecated coffee-script@1.12.7:
CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
...
added 2 packages from 7 contributors,
removed 8 packages and updated 24 packages in 125.624s
```

- 初始化项目

假如项目名称叫做 `tutorial`, 则执行 `vue init webpack tutorial`

项目配置选项可以参考如下:

```md
$ vue init webpack tutorial

? Project name `tutorial`
? Project description `A Vue.js project`
? Author `awokelee <awokelee@gmail.com>`
? Vue build standalone
? Install vue-router? `Yes`
? Use ESLint to lint your code? `Yes`
? Pick an ESLint preset `Standard`
? Set up unit tests `No`
? Setup e2e tests with Nightwatch? `No`
? Should we run `npm install` for you after the project has been created? 

# Project initialization finished!
# ========================

To get started:

  `cd tutorial`
  `npm run dev`

Documentation can be found at https://vuejs-templates.github.io/webpack
```

- 运行项目

进入 `tutorial` 目录, `cd tutorial`

安装依赖包, `npm install`

执行 `npm run dev`