# new 过程

```js
function Foo(name, age) {
  this.name = name
  this.age = age
  this.class = 'class-1'
  // return this // 默认有这一行
}

var f = new Foo('zhangsan', 20)
```

- 创建一个新对象

- `this` 指向这个新对象

- 执行代码, 即对 `this` 赋值

- 返回 `this`