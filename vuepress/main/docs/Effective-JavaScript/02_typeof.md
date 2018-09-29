# typeof

`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型。

- `typeof` 可能的返回值

类型                        | 结果
-------                     | -------
`Undefined`                   | `"undefined"`
`Null`                        | `"object"`
`Boolean`                     | `"boolean"`
`Number`                      | `"number"`
`String`                      | `"string"`
`symbol`                       | `"symbol"`
函数对象                     | `"function"`
任何其他对象                  | `"object"`

- `null`

```js
typeof null === 'object'; // 从一开始出现JavaScript就是这样的
```

在 `JavaScript` 最初的实现中，`JavaScript` 中的值是由一个表示类型的标签和实际数据值表示的。

对象的类型标签是 `0`。由于 `null` 代表的是空指针（大多数平台下值为 `0x00`），因此，`null` 的类型标签也成为了 `0`，`typeof null` 就错误的返回了 `"object"`。

`ECMAScript` 提出了一个修复（通过`opt-in`），但被拒绝。这将导致 `typeof null === 'object'`。

- `Number`

```js
// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写
typeof Number(1) === 'number'; // 但不要使用这种形式!
```

- `String`

```js
// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof总是返回一个字符串
typeof String("abc") === 'string'; // 但不要使用这种形式!
```

- `Boolean`

```js
// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 但不要使用这种形式!
```

- `Symbol`

```js
// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';
```

- `Undefined`

```js
// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined'; 
```

- `Object`

```js
// Objects
typeof {a:1} === 'object';

// 使用 Array.isArray 或者 Object.prototype.toString.call
// 区分数组, 普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// 下面的容易令人迷惑, 不要使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';
```

- `Function`

```js
// 函数
typeof function(){} === 'function';
typeof class C{} === 'function'
typeof Math.sin === 'function';
typeof new Function() === 'function';
```

- 实际编程中

```js

// 错误的写法
if (v) {
  // ...
}
// ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") {
  // ...
}
```

如果我们想获得一个变量的正确类型，可以通过 `Object.prototype.toString.call(xx)`。这样我们就可以获得类似 `[Object Type]` 的字符串。

```js
let a

// 我们也可以这样判断 undefined
a === undefined

// 但是 undefined 不是保留字，能够在低版本浏览器被赋值
let undefined = 1

// 这样判断就会出错
// 所以可以用下面的方式来判断，并且代码量更少
// 因为 void 后面随便跟上一个组成表达式
// 返回就是 undefined
a === void 0
```

::: tip 相关链接:
[https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof), by MDN.

[https://yuchengkai.cn/docs/zh/frontend/#typeof](https://yuchengkai.cn/docs/zh/frontend/#typeof), by InterviewMap
:::