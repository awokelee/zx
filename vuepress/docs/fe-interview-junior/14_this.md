# this

this 要在执行时才能确认值, 定义时无法确认.

```js
var  a = {
  name: 'A',
  fn: function () {
    console.log(this.name)
  }
}
a.fn() // this === a
a.fn.call({name: 'B'}) // this === {name: 'B'}
var fn1 = a.fn
fn1() // this === window
```

- 作为构造函数执行

```js
function Foo(name) {
  this.name = name
}
var f = new Foo('zhangsan')
```

- 作为对象属性执行

```js
var obj = {
  name: 'A',
  printName: function () {
    console.log(this.name)
  }
}
obj.printName()
```

- 作为普通函数执行

```js
function fn() {
  console.log(this)
}
fn()
```

- call apply bind

```js
function fn1(name, age) {
  console.log(name, age)
  console.log(this)
}
fn1.call({x: 10}, 'zhangsan', 20)
fn1.apply({x: 10}, ['zhangsan', 20])

var fn2 = function(name, age) {
  console.log(name, age)
  console.log(this)
}.bind({y: 200})
fn2('zs', 20)
```