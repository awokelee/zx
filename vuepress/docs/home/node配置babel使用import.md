# Node 配置 babel

::: tip
在 `node` 中直接使用 `import` 报错, 需要使用 `babel` 转义
:::

- 运行时加载

```js
// 加载整个 fs
const fs = require('fs')
fs.writeFile
```

```js
// 运行时加载, 会先加载整个 fs, 然后解构得到 writeFile
const { writeFile } = require('fs')
```

- 静态加载

```js
// 静态加载, 编译时获得到对象
import { writeFile } from 'fs'
```

`node` 直接 `import` 会如下错误:

```bash {1}
(function (exports, require, module, __filename, __dirname) { import fs from 'fs'

SyntaxError: Unexpected token import
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:616:28)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3
```

`node` 需要安装 `babel` 才能使用 `import` 语法

执行 `npm i babel-cli babel-preset-env -D` 安装 `babel`

增加 `.babelrc` 文件, 内容如下

```js
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "ndoe": "current"
        }
      }
    ]
  ]
}
```

修改 `package.json` 文件, 增加 `babel` 配置

```js {7}
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon -w src --exec \"babel-node src --presets env\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "co": "^4.6.0",
    "node-fetch": "^2.2.0"
  }
}
```

执行 `npm run dev` 发现 `import` 支持

::: warning
因为 babel 默认是转义 es6语法, 但是 async/await 是 es7 所以还需要装两个包
:::

`npm i -S babel-plugin-transform-runtime babel-runtime`

`.babelrc` 文件更新如下

```js
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "ndoe": "current"
        }
      }
    ]
  ],
  "plugins": [
    [
      "transform-runtime", {
        "polyfill": false,
        "regenerator": true
      }
    ]
  ]
}
```