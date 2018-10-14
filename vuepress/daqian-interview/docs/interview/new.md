# new

### new 的作用

`new` 命令的作用，就是`执行构造函数`，`返回`一个`实例`对象

### new 命令的原理

1. `创建一个空对象`，作为将要返回的对象实例。
2. 将这个`空对象的原型`，`指向构造函数的prototype属性`。
3. 将这个`空对象赋值给函数内部的this关键字`。
4. 开始`执行构造函数内部的代码`

也就是说，构造函数内部，this指的是一个新生成的空对象，所有针对this的操作，都会发生在这个空对象上。

构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即this对象），将其“构造”为需要的样子。

如果构造函数内部`有return语句`，`而且return后面跟着一个对象`，new命令会`返回return语句指定的对象`；`否则`，就会不管return语句，`返回this`对象。

```js
var Vehicle = function () {
  this.price = 1000;
  return 1000;
};

(new Vehicle()) === 1000
// false
```

但是，**如果return语句返回的是一个跟this无关的新对象，new命令会返回这个新对象，而不是this对象。这一点需要特别引起注意**。

```js
var Vehicle = function (){
  this.price = 1000;
  return { price: 2000 };
};

(new Vehicle()).price
// 2000
```

**如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象**:

```js
function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();

msg // {}
typeof msg // "object"
```

### new 命令简化的内部流程

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

原文链接: [构造函数与 new 命令](https://javascript.ruanyifeng.com/oop/basic.html), by 阮一峰.