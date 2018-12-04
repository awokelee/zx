# Node 安装

::: tip
`Vue` 项目开发环境搭建 - `Node` 安装

[Node 官网](https://nodejs.org/zh-cn/)
:::

- 下载安装 `node`

在官网: `https://nodejs.org/zh-cn/`, 下载安装

安装完执行 `node -v` 和 `npm -v` 检查是否完成

- 关于 `npm`

`npm` 是一个 `node` 包管理工具, 安装 `node` 时默认一起安装了

- 使用 `cnpm`

由于 `npm` 默认会去国外仓库下载依赖, 网络等原因可能 `npm install` 安装依赖时失败

所以淘宝弄了个 `cnpm`, `cnpm` 仓库地址在国内, `10` 分钟同步一次 `npm` (从国外 `npm` 下载依赖)

淘宝官网: `https://npm.taobao.org/`

安装 `cnpm` 方式如下:

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

或者

```bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"
```

以后当使用 `npm install` 安装依赖出现网络原因时, 可以用 `cnpm install` 来安装