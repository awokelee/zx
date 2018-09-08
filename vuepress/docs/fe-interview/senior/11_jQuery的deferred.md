# jQuery 的 Deferred

- 无法改变 `JS` 异步和单线程的本质

- 只能从写法上杜绝 `callback` 这种形式

- 它是一种语法糖形式, 但是解耦了代码

- 很好的体现: 开放封闭原则

### jQuery 1.5 之前

```js
// 1.5 之前
var ajax = $.ajax({
  url: 'data.json',
  success: function () {
    console.log('success1')
    console.log('success2')
  },
  error: function () {
    console.log('error1')
    console.log('error2')
  }
})

console.log(ajax) // 返回一个 XHR 对象
```

### jQuery 1.5 之后

```js
// 1.5 之后
var ajax = $.ajax('data.json')
ajax.done(function () {
    console.log('success1')
  })
  .fail(function () {
    console.log('error1')
  })
  .done(function () {
    console.log('success2')
  })
  .fail(function () {
    console.log('error2')
  })

console.log(ajax) // 返回一个 deferred 对象
```

### 很像 Promise 的写法

```js
// 很像 Promise 的写法
var ajax = $.ajax('data.json')
ajax.then(function () {
    console.log('success1')
  }, function () {
    console.log('error1')
  })
  .then(function () {
    console.log('success2')
  }, function () {
    console.log('error2')
  })
```

### Deferred 应用

- 以前实现

```js
var wait = function () {
  var task = function () {
    console.log('执行完成')
  }
  setTimeout(task, 2000)
}
wait()
```

- 改进后

```js
function waitHandle() {
  var dtd = $.Deferred() //创建一个 deferred 对象

  var wait = function (dtd) { // 要求传入一个 deferred 对象
    var task = function () {
      console.log('执行完成')
      dtd.resolve() // 表示异步任务已经完成
      // dtd.reject() // 表示异步任务失败或出错
    }
    setTimeout(task, 2000)
    return dtd // 要求返回 deferred 对象
  }

  // 注意, 这里一定要有返回值
  return wait(dtd)
}


var w = waitHandle()

w.then(function () {
  console.log('success1')
}, function () {
  console.log('error1')
}).then(function () {
  console.log('success2')
}, function () {
  console.log('error2')
})
// 其他方法: w.done w.fial
```

### Deferred 总结

`dtd` 的 `API` 可分成两类, 用意不同

- 第一类: `dtd.resolve` `dtd.reject`

- 第二类: `dtd.then` `dtd.done` `dtd.fail`

**两类应该分开, 否则后果很严重.**

### 使用 dtd.promise

```js {11}
function waitHandle() {
  var dtd = $.Deferred()

  var wait = function (dtd) {
    var task = function () {
      console.log('执行完成')
      dtd.resolve()
    }
    setTimeout(task, 2000)
    // return dtd
    return dtd.promise() // 这里返回的是 promise 而不是直接返回 deferred 对象
  }

  return wait(dtd)
}


var w = waitHandle()

w.then(function () {
  console.log('success1')
}).then(function () {
  console.log('success2')
})
// w.reject() // 执行这句话会直接报错
```