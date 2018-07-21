# Node 安装

- 安装 node

官网: `https://nodejs.org/zh-cn/`, 下载安装

安装完执行 `node -v` 和 `npm -v` 检查是否完成

- 配置 npm

淘宝镜像: `https://npm.taobao.org/` (10分钟同步一次)

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