# Security

### TODO

代码实现!!!

### 项目环境

- 下载项目测试环境源码

[Web前后端漏洞分析与防御 环境源码](https://github.com/TYRMars/WebSafe-StepPitGuide)

- `windows` 环境安装 `cross-env`

```bash
npm i cross-env -D
```

`package.json` 增加 `cross-env`

```js
"dev": "cross-env NODE_ENV=development nodemon server.js -e\"js pug\"",
```

- 初始化 `jspm`

```bash
npm install jspm -g
```

进入到 `static` 目录

```js
cd static
```

初始化 `jspm`, 会在 `static` 目录下生成 `jspm_packages` 文件夹

```js
jspm init
```

- 配置数据库

按照 `models/connection.js` 新建好数据库

- 安装依赖启动项目

```bash
npm install
```

启动项目

```bash
npm run dev
```