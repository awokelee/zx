# proptotype 和 __proto__

::: tip
每个函数都有 `prototype` 属性，除了 `Function.prototype.bind()`，该属性指向原型。

每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 `[[prototype]]`，但是 `[[prototype]]` 是内部属性，我们并不能访问到，所以使用 `__proto__` 来访问。

对象可以通过 `__proto__` 来寻找不属于该对象的属性，`__proto__` 将对象连接起来组成了原型链。
:::

`Object` 是所有对象的爸爸，所有对象都可以通过 `__proto__` 找到它

`Function` 是所有函数的爸爸，所有函数都可以通过 `__proto__` 找到它

`Function.prototype` 和 `Object.prototype` 是两个特殊的对象，他们由引擎来创建

除了以上两个特殊对象，其他对象都是通过构造器 `new` 出来的

函数的 `prototype` 是一个对象，也就是原型

对象的 `__proto__` 指向原型， `__proto__` 将对象和原型连接起来组成了原型链

- `__proto__`

每个 `JS` 对象一定对应一个原型对象`__proto__`，并从原型对象继承属性和方法.

**对象__proto__属性的值就是它所对应的原型对象**：

```js
var one = {x: 1};
var two = new Object();
one.__proto__ === Object.prototype // true
two.__proto__ === Object.prototype // true
one.toString === one.__proto__.toString // true
```

- `prototype`

首先来说说 `prototype` 属性，不像每个对象都有 `__proto__` 属性来标识自己所继承的原型，只有函数才有 `prototype` 属性。

函数在 `JS` 中真的很特殊，是所谓的 **一等公民**。`JS` 不像其它面向对象的语言，它没有类（`class`，`ES6` 引进了这个关键字，但更多是语法糖）的概念。`JS` 通过函数来模拟类。

当你创建函数时，`JS` 会为这个函数自动添加 `prototype` 属性，值是一个有 `constructor` 属性的对象，不是空对象。而一旦你把这个函数当作构造函数（`constructor`）调用（即通过 `new` 关键字调用），那么 `JS` 就会帮你创建该构造函数的实例，实例继承构造函数 `prototype` 的所有属性和方法（实例通过设置自己的 `__proto__` 指向承构造函数的 `prototype` 来实现这种继承）。

JS 正是通过 `__proto__` 和 `prototype` 的合作实现了原型链，以及对象的继承。

构造函数，通过 `prototype` 来存储要共享的属性和方法，也可以设置 prototype 指向现存的对象来继承该对象。

对象的 `__proto__` 指向自己构造函数的 `prototype`。

`obj.__proto__.__proto__...` 的原型链由此产生，包括我们的操作符 `instanceof` 正是通过探测 `obj.__proto__.__proto__...` `===` `Constructor.prototype` 来验证 `obj` `是否是Constructor` 的实例。

回到开头的代码，`two = new Object()` 中 `Object` 是构造函数，所以 `two.__proto__` 就是 `Object.prototype`。至于 `one` ，`ES` 规范定义对象字面量的原型就是 `Object.prototype`。

我们知道 `JS` 是单继承的，`Object.prototype` 是原型链的顶端，所有对象从它继承了包括 `toString` 等等方法和属性。

`Object` 本身是构造函数，继承了 `Function.prototype;Function` 也是对象，继承了 `Object.prototype`。这里就有一个_鸡和蛋_的问题：

```js
Object instanceof Function // true
Function instanceof Object // true
```

`ES` 规范:

```js
Function本身就是函数，Function.__proto__是标准的内置对象Function.prototype。

Function.prototype.__proto__是标准的内置对象Object.prototype。
```

![](./media/prototype.jpg)

相信经过上面的详细阐述，这张图应该一目了然了。

`Function.prototype` 和 `Function.__proto__` 都指向 `Function.prototype`，这就是鸡和蛋的问题怎么出现的。
`Object.prototype.__proto__ === null`，说明原型链到 `Object.prototype` 终止。

- `Object.getPrototypeOf(obj)`

不是所有 JavaScript 环境都支持 `__propto__`, `ES5` 引入 `Object.getPrototypeOf(obj)` 函数作为获取对象原型的标准 API.

```js
(function(){
  if(typeof Object.getPrototypeOf === 'undefined') {
    Object.getPrototypeOf = function(obj) {
      var t = typeof obj;
      if(!obj || (t !== 'object' && t !== 'function')) {
        throw new TypeError('not an object');
      }
      return obj.__proto__;
    };
  }
})();
```

::: tip 相关链接:
[https://github.com/creeperyang/blog/issues/9](https://github.com/creeperyang/blog/issues/9), by creeperyang.

[ttps://github.com/KieSun/Blog/issues/2](ttps://github.com/KieSun/Blog/issues/2), by KieSun.
:::h