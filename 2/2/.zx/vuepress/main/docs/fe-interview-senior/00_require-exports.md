# `CommonJS 规范的 require/exports `

### require/exports 介绍

`CommonJS` 作为 `Node.js` 的规范，一直沿用至今。由于 `npm` 上 `CommonJS` 的类库众多，以及 `CommonJS` 和 `ES6` 之间的差异，`Node.js` 无法直接兼容 `ES6`。所以现阶段 `require/exports` 仍然是必要且实必须的。

目前你编写的 `import/export` 最终都是编译为 `require/exports` 来执行的。

```js
// a.js 导出
module.exports = {
  a : function() {},
  b : 'xxx'
};

// b.js 引入
var m = require('./a');
m.a();
```

### exports 和 module.exports 的区别

系统自动给 `nodejs` 文件增加 `2` 个变量 `exports` 和 `module`.

`module` 变量又有一个属性 `exports`, 这个 `exports` 属性指向一个空对象 `{}`.

`exports` 变量也指向了这个空对象 `{}`.

于是就有了 `exports => {} <= module.exports`, 即 `exports` 和 `module.exports` 指向同一个空对象 `{}`.

这 `2` 个 `exports` 其实是没有直接关系的, 唯一的关系是: **他们初始都指向同一个空对象** `{}`.

如果其中一个不指向做个空对象了, 那么他们的关系就没有了.

```js
// 一个空对象 {}
var emptyObj = {}

// 系统自动给 nodejs 文件增加 2 个变量 exports 和 module
var exports;
var module;

// exports 变量指向上面的空对象
exports = emptyObj

// module 变量 的 exports 属性指向上面的空对象
module.exports = emptyObj

// aa 拿到的就是 emptyObj
const aa = require('aa')
```

### 使用

```js
exports.count = 0

const {count} = require('./counter')
```

```js
module.exports = {
  count: 0
}

const {count} = require('./counter')
```

### 参考链接

- [require，import区别](https://www.zhihu.com/question/56820346/answer/150724784), by 寸志.

- [exports 和 module.exports 的区别](https://cnodejs.org/topic/5231a630101e574521e45ef8), by nswbmw.
