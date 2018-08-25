# use strict

## 严格模式定义

严格模式是为 `JavaScript` 定义了一种不同的解析与执行模式.

1. 严格模式通过抛出错误来消除了一些原有静默错误。

2. 严格模式修复了一些导致 `JavaScript` 引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快。

3. 严格模式禁用了在 `ECMAScript` 的未来版本中可能会定义的一些语法。

## 开启严格模式

- 整个脚本开启严格模式

在所有语句之前放一个特定语句 `"use strict";` 或 `'use strict';`

```js {2}
// 整个脚本都开启严格模式的语法
"use strict";
var v = "Hi!  I'm a strict mode script!";
```

- 函数开启严格模式

把 `"use strict";` 或 `'use strict;'` 声明一字不漏地放在函数体所有语句之前

```js {3}
function strict(){
  // 函数级别严格模式语法
  'use strict';
  console.log("Hi!  I'm a strict mode script!");
}
```

## 严格模式特性

- 无法再意外创建全局变量

```js
"use strict";
mistypedVaraible = 17; // 这一行代码就会抛出 ReferenceError
```

- 会使引起静默失败(`silently fail`, 注: 不报错也没有任何效果)的赋值操抛出异常

```js
"use strict";

// 给不可写属性赋值
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // 抛出TypeError错误

// 给只读属性赋值
var obj2 = { get x() { return 17; } };
obj2.x = 5; // 抛出TypeError错误

// 给不可扩展对象的新属性赋值
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // 抛出TypeError错误
```

- 删除不可删除的属性时会抛出异常(之前这种操作不会产生任何效果)

```js
"use strict";
delete Object.prototype; // 抛出TypeError错误
```

- 函数的参数名唯一

```js
function sum(a, a, c){ // !!! 语法错误
  "use strict";
  return a + a + c; // 代码运行到这里会出错
}
```

- 禁止八进制数字语法

```js
"use strict";
var sum = 015 + // !!! 语法错误
          197 +
          142;
```

- 禁用 `with`

```js
"use strict";
var x = 17;
with (obj) // !!! 语法错误
{
  // 如果没有开启严格模式，with中的这个x会指向with上面的那个x，还是obj.x？
  // 如果不运行代码，我们无法知道，因此，这种代码让引擎无法进行优化，速度也就会变慢。
  x;
}
```

- `eval` 不再为上层范围(`surrounding scope`, 注: 包围 `eval` 代码块的范围)引入新变量

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x");
console.assert(x === 17);
console.assert(evalX === 42);
```

- 禁止删除声明变量

```js
"use strict";

var x;
delete x; // !!! 语法错误
```

- 不允许重新定义 `arguments` 变量

```js
function f() {
"use strict";
var arguments = []; // error: redefinition of arguments
}
```

- 不再支持 `arguments.callee`

```js
"use strict";
var f = function() { return arguments.callee; };
f(); // 抛出类型错误
```

::: tip 相关链接:
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode), by MDN.
:::
