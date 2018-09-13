# instanceof

用于判断引用类型属于哪个构造函数的方法.

- 使用 `instanceof` 判断一个函数是否是一个变量的构造函数

```js
var arr = []
arr instanceof Array // true
typeof arr // object, typeof 是无法判断是否是数组的
```

### instanceof 逻辑

```js
// 构造函数
function Foo(name, age) {
  this.name = name
}
Foo.prototype.alertName = function () {
  alert(this.name)
}

// 创建示例
var f = new Foo('zhangsan')
f.printName = function () {
  console.log(this.name)
}

// 测试
f.printName()
f.alertName()
f.toString() // 要去 f.__proto__.__proto__ 中查找
```

`f instanceof Foo` 的逻辑判断是:

`f` 的 `__proto__` 一层一层往上, 能否对应到 `Foo.prototype`

再试着判断 `f instanceof Object`