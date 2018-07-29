'use strict';

// 记载整个 fs
var fs = require('fs');

fs.writeFile;

// 运行时加载, 会先加载整个 fs, 然后解构得到 writeFile

var _require = require('fs'),
    writeFile = _require.writeFile;

// 静态加载, 编译时获得到对象
// import { writeFile } from 'fs'

// node 需要安装 babel 才能使用 import 语法糖
// npm i babel-cli babel-preset-env -D
// 增加 .babelrc 文件
/* 不然错误如下
$ node src/index.js
/Users/yuhu/Desktop/code/github/node/koa2/src/index.js:1
(function (exports, require, module, __filename, __dirname) { import fs from 'fs'
                                                              ^^^^^^

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
*/
//# sourceMappingURL=module.js.map