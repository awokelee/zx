# instanceof

- 概念

`instanceof` 运算符用来测试一个对象在其 **原型链** 中是否存在一个构造函数的 `prototype` 属性。

`instanceof` 运算符用来检测 `constructor.prototype` 是否存在于参数 `object` 的 **原型链** 上.

`instanceof` 运算符可以区分数组和对象

- 语法

`object` 要检测的对象

`constructor` 某个构造函数

```js
object instanceof constructor
```

- 示例

```js
// 定义构造函数
function C(){}
function D(){}

var o = new C();
o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype
o instanceof D; // false，因为 D.prototype不在o的原型链上
o instanceof Object; // true,因为Object.prototype.isPrototypeOf(o)返回true
C.prototype instanceof Object // true,同上

C.prototype = {};
var o2 = new C();
o2 instanceof C; // true
o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为C.prototype现在在o3的原型链上
```

- `instanceof` 和多全局对象(多个 `frame` 或多个 `window` 之间的交互)

在浏览器中，我们的脚本可能需要在多个窗口之间进行交互。

多个窗口意味着多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置类型构造函数。

这可能会引发一些问题。

比如，表达式 `[] instanceof window.frames[0].Array` 会返回 `false`，因为 `Array.prototype !== window.frames[0].Array.prototype`，并且数组从前者继承。

起初，你会认为这样并没有意义，但是当你在你的脚本中开始处理多个 `frame` 或多个 `window` 以及通过函数将对象从一个窗口传到另一个窗口时，这就是一个有效而强大的话题。

比如，实际上你可以通过使用 `Array.isArray(myObj)` 或者 `Object.prototype.toString.call(myObj) === "[object Array]"` 来安全的检测传过来的对象是否是一个数组。

比如检测一个 `Nodes` 在另一个窗口中是不是 `SVGElement`，你可以使用 `myNode instanceof myNode.ownerDocument.defaultView.SVGElement`.

- 自己实现 `instanceof`

```js
function instanceof(left, right) {
  // 获得类型的原型
  let prototype = right.prototype
  // 获得对象的原型
  left = left.__proto__
  // 判断对象的类型是否等于类型的原型
  while (true) {
    if (left === null)
      return false
    if (prototype === left)
      return true
    left = left.__proto__
  }
}
```

::: tip 相关链接:
[instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof), by MDN.

[https://yuchengkai.cn/docs/zh/frontend/#instanceof](https://yuchengkai.cn/docs/zh/frontend/#instanceof), by InterviewMap
:::