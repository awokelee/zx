# 笔记

分情况使用 v-show 少用 v-if

watch 和 computed

v-for

v-model.lazy

路由传参 用 props: true


Angular: 2009年发布, 被 google 收购, 基于 html 的大而全的 MVC 框架, 后端构建 crud 应用.

React: 2013年5月开源, Facebook, 最新版本 16.x, 基于 js 的视图层框架, 适合构建复杂的 web 应用.

Vue: 2014年2月开源, 最新 2.x, 基于 html 的视图层框架, 快速构建 web 应用.

|         | angular    | react | vue |
| --------| ---   | ---      |---      |
| 组织方式 |  MVC     | 模块化   | 模块化       |
| 数据绑定 |  双向绑定 | 单向绑定 | 双向绑定     |
| 模版能力 |  强大     | 自由     | 简洁        |
| 自由度   |  较小     | 大       | 较大        |
| 路由     |  静态路由 | 动态路由 | 动态路由     |
| 文档     |  英文     | 英文    | 多语言(中文)  |
| 上手难度 |  较高(java 思想) | 较高(JSX) | 一般 |
| App 方案 | ionic | react native | weex |

## 生产环境配置

- 安装 nodejs

- 安装 yarn

- 安装 git 并配置权限

- 安装 nginx

## 代码发布过程

- 拉取最新 master 分支的代码

- 项目初始化

- 执行线上环境的打包编译

- 复制 dist 目录到目标目录

## nginx 和域名配置

- nginx 中 vhost 的配置

- 通过指定 hosts 方式做线上回归测试

- 更改域名解析