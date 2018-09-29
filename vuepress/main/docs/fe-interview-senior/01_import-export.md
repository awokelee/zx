# `ES6 Module 的 import/export`

### import/export 介绍

出自 `ES6` 的 `import/export` 晚了许多。被大家所熟知和使用也是 2015 年之后的事了。 这其实要感谢 `babel`（原来项目名叫做 `6to5`，后更名为 `babel`） 这个神一般的项目。由于有了 `babel` 将还未被宿主环境（各浏览器、`Node.js`）直接支持的 `ES6 Module` 编译为 `ES5` 的 `CommonJS` —— 也就是 `require/exports` 这种写法 —— `Webpack` 插上 `babel-loader` 这个翅膀才开始高飞.

### 用法

```js
import fs from 'fs'
import {default as fs} from 'fs'
import * as fs from 'fs'
import {readFile} from 'fs'
import {readFile as read} from 'fs'
import fs, {readFile} from 'fs'

export default fs
export const fs
export function readFile
export {readFile, read}
export * from 'fs'
```

### 特点

`default` 是 `ES6 Module` 所独有的关键字.

`export default fs` 输出默认的接口对象，`import fs from 'fs'` 可直接导入这个对象.

### 参考链接

- [require，import区别](https://www.zhihu.com/question/56820346/answer/150724784), by 寸志.