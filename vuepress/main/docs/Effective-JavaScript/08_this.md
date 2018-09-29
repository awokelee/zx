# this

- 全局上下文

无论是否在严格模式下，在全局执行上下文中（在任何函数体外部）`this` 都指代全局对象。

```js
// 在浏览器中, window 对象同时也是全局对象：
console.log(this === window); // true

a = 37;
console.log(window.a); // 37
```

- 函数上下文

在函数内部，`this` 的值取决于函数被调用的方式。

**简单调用:**

因为下面的代码不在严格模式下，且 `this` 的值不是由该调用设置的，所以 `this` 的值默认指向全局对象。

```js
function f1(){
  return this;
}
// 在浏览器中：
f1() === window;   //在浏览器中，全局对象是window

// 在Node中：
f1() === global;
```

然而，在严格模式下，`this` 将保持他进入执行上下文时的值，所以下面的 `this` 将会默认为 `undefined`。

```js
function f2(){
  "use strict"; // 这里是严格模式
  return this;
}

f2() === undefined; // true
```

所以，在严格模式下，如果 `this` 没有被执行上下文（`execution context`）定义，那它将保持为 `undefined`。

如果要想把 this 的值从一个上下文传到另一个，就要用 call 或者apply 方法.

```js
// 将一个对象作为call和apply的第一个参数，this会被绑定到这个对象。
var obj = {a: 'Custom'};

// 这个属性是在global对象定义的。
var a = 'Global';

function whatsThis(arg) {
  return this.a;  // this的值取决于函数的调用方式
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'
```

- 箭头函数

在箭头函数中，`this` 与封闭词法上下文的 `this` 保持一致。在全局代码中，它将被设置为全局对象：

```js
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

- 作为对象的方法

当函数作为对象里的方法被调用时，它们的 `this` 是调用该函数的对象.

```js
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37
```

- 原型链中的 `this`

对于在对象原型链上某处定义的方法，同样的概念也适用。如果该方法存在于一个对象的原型链上，那么 `this` 指向的是调用这个方法的对象，就像该方法在对象上一样。

```js
var o = {
  f: function() { 
    return this.a + this.b; 
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

- `getter` 与 `setter` 中的 `this`

用作 `getter` 或 `setter` 的函数都会把 `this` 绑定到设置或获取属性的对象。

```js
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', {
    get: sum, enumerable: true, configurable: true});

console.log(o.average, o.sum); // logs 2, 6
```

- 作为构造函数

当一个函数用作构造函数时（使用 `new` 关键字），它的 `this` 被绑定到正在构造的新对象

```js
/*
 * 构造函数这样工作:
 *
 * function MyConstructor(){
 *   // 函数实体写在这里
 *   // 根据需要在this上创建属性，然后赋值给它们，比如：
 *   this.fum = "nom";
 *   // 等等...
 *
 *   // 如果函数具有返回对象的return语句，
 *   // 则该对象将是 new 表达式的结果。 
 *   // 否则，表达式的结果是当前绑定到 this 的对象。
 *   //（即通常看到的常见情况）。
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38
```

- 作为一个 `DOM` 事件处理函数

当函数被用作事件处理函数时，它的 `this` 指向触发事件的元素（一些浏览器在使用非 `addEventListener` 的函数动态添加监听函数时不遵守这个约定）

```js
// 被调用时，将关联的元素变成蓝色
function bluify(e){
  console.log(this === e.currentTarget); // 总是 true

  // 当 currentTarget 和 target 是同一个对象时为 true
  console.log(this === e.target);        
  this.style.backgroundColor = '#A5D9F3';
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName('*');

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}
```

- 作为一个内联事件处理函数

当代码被内联 `on-event` 处理函数调用时，它的 `this` 指向监听器所在的 `DOM` 元素

```js
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```

::: tip 相关链接:
[https://developer.mozilla.org/zh-CN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this), by MDN.
:::