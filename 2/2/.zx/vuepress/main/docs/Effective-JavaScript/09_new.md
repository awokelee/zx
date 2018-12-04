# new

- `new` 作用

`new` 命令的作用，就是执行构造函数，返回一个实例对象

```js
var Vehicle = function () {
  this.price = 1000;
};

var v = new Vehicle();
v.price // 1000
```

- `new` 原理

使用 `new` 命令时，它后面的函数依次执行下面的步骤。

```js
1. 创建一个空对象，作为将要返回的对象实例。
2. 将这个空对象的原型，指向构造函数的 `prototype` 属性。
3. 将这个空对象赋值给函数内部的 `this` 关键字。
4. 开始执行构造函数内部的代码。
```

也就是说，构造函数内部，`this` 指的是一个新生成的空对象，所有针对 `this` 的操作，都会发生在这个空对象上。构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即 `this` 对象），将其“构造”为需要的样子。

如果构造函数内部有 `return` 语句，而且 `return` 后面跟着一个对象，`new` 命令会返回 `return` 语句指定的对象；否则，就会不管 `return` 语句，返回 `this` 对象。

```js
var Vehicle = function () {
  this.price = 1000;
  return 1000;
};

(new Vehicle()) === 1000
// false
```

上面代码中，构造函数 `Vehicle` 的 `return` 语句返回一个数值。这时，`new` 命令就会忽略这个 `return` 语句，返回“构造”后的 `this` 对象。

但是，如果 `return` 语句返回的是一个跟 `this` 无关的新对象，`new` 命令会返回这个新对象，而不是 `this` 对象。这一点需要特别引起注意。

```js
var Vehicle = function (){
  this.price = 1000;
  return { price: 2000 };
};

(new Vehicle()).price
// 2000
```

上面代码中，构造函数 `Vehicle` 的 `return` 语句，返回的是一个新对象。`new` 命令会返回这个对象，而不是 `this` 对象。

另一方面，如果对普通函数（内部没有 `this` 关键字的函数）使用 `new` 命令，则会返回一个空对象。

```js
function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();

msg // {}
typeof msg // "object"
```

上面代码中，`getMessage` 是一个普通函数，返回一个字符串。对它使用 `new` 命令，会得到一个空对象。这是因为 `new` 命令总是返回一个对象，要么是实例对象，要么是 `return` 语句指定的对象。本例中，`return` 语句返回的是字符串，所以 `new` 命令就忽略了该语句。

`new` 命令简化的内部流程，可以用下面的代码表示。

```js
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
var actor = _new(Person, '张三', 28);
```

::: tip 相关链接:
[https://wangdoc.com/javascript/oop/new.html](https://wangdoc.com/javascript/oop/new.html), by 阮一峰.
:::