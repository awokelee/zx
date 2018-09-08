# Babel + Rollup 编译 ES6 语法

[rollup 官网](https://rollupjs.org/guide/en), `rollup` 功能单一, `webpack` 功能强大.

`react` `vue` 打包用的也是 `rollup`.

### 初始化项目和安装 rollup

- `npm init` 初始化项目, 生成 `package.json` 文件

- 安装 `rollup` 和 `babel`

```bash
npm i rollup rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-external-helpers babel-plugin-syntax-async-functions babel-plugin-transform-runtime babel-polyfill babel-preset-latest babel-runtime babel-core -D
```

- 创建 `.babelrc` 文件, 内容如下:

```json
{
  "presets": [
      ["latest", {
          "es2015": {
              "modules": false
          }
      }]
  ],
  "plugins": ["external-helpers", "babel-plugin-transform-regenerator"]
}
```

### 配置 rollup

- 新建 `rollup` 的配置文件 `rollup.config.js`, 文件内容如下:

```js
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
    entry: 'src/index.js',
    format: 'umd',
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest: 'build/bundle.js'
}
```

- 在 `package.json` 文件中新建 `npm scripts` `"start": "webpack",` 完整文件如下:

```json
{
  "name": "rollup-wfp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "rollup -c rollup.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-plugin-external-helpers": "^6.22.0",
    "babel-plugin-syntax-async-functions": "^6.13.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-polyfill": "^6.26.0",
    "babel-preset-latest": "^6.24.1",
    "babel-runtime": "^6.26.0",
    "rollup": "^0.52.3",
    "rollup-plugin-babel": "^3.0.3",
    "rollup-plugin-node-resolve": "^3.0.0"
  }
}
```

- 执行 `npm start` 生成打包后的文件 `/build/bundle.js`, 完整内容如下:

```js
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var util1 = {
  a: 1
};

function fn() {
  console.log(fn);
}
var PI = 3.14;

console.log(util1);
console.log(fn);
console.log(PI);

})));
```

与 `webpack` 打包后的 `bundle.js` 对比简洁很多.