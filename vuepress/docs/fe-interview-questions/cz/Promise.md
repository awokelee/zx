# Promise

- `Promise`是一种对尚未返回的数据的一种承诺
- `promise`：承诺、保证

## 介绍

- ES6 原生提供了`Promise`对象，ES6之前有`polyfill`方案（Promise也是一个语法糖）

```JS
Promise 是异步编程的一种解决方案，比传统的解决方案`回调函数和事件`更合理和更强大

Promise 将异步操作以同步操作（链式编程）的流程表达出来，避免了层层嵌套的回调函数（回调地狱的问题）
```

- 所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
- `Promise`对象代表一个异步操作，有三种状态：**pending（进行中）、fulfilled（已成功）和rejected（已失败）**
    - 状态改变 1：`pending -> fufilled`
    - 状态改变 2：`pending -> rejected`
    - **一旦状态改变，就不会再变**

## 基本使用

- 注意：`resolve` 或 `reject` 不会阻止后续代码的执行
- 说明：一般来说，调用`resolve`或`reject`以后，`Promise` 的使命就完成了，后继操作应该放到`then`方法里面，而不应该直接写在`resolve`或`reject`的后面。所以，最好在它们前面加上`return`语句，这样就不会有意外。

```JS
resolve函数的作用：
  1 将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved）
  2 在异步操作 成功 时调用
  3 将异步操作的结果，作为参数传递出去

reject函数的作用
  1 将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected）
  2 在异步操作 失败 时调用
  3 并将异步操作报出的错误，作为参数传递出去

// Promise 是一个构造函数
// 通过 new 创建Promise的实例对象
var promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

## then 和 catch

- `then()`： 用于指定异步操作成功时的回调函数
- `catch()`：用于指定发生错误时的回调函数
- 说明：`then()`方法可以有多个，按照先后顺序执行，通过回调函数返回值传递数据给下一个`then`
- 说明：如果前一个`then`回调函数，返回一个`Promise`对象（即有异步操作），后一个`then`回调函数，就会等待该`Promise`对象的状态发生变化，才会被调用
简单来说：后面的`then`会等待前面的`then`

```JS
let promise = new Promise(function(resolve, reject) {
  console.log('1 Promise');
  // 异步操作
  setTimeout(resolve, ms, 'done');
});

promise.then(function() {
  console.log('3 resolved.');
});

console.log('2 Hi!');
```

- 异步读取图片示例：

```JS
const loadImageAsync = url => new Promise(function(resolve, reject) {
  const image = new Image();
  image.src = url;

  // 图片加载成功
  image.onload = function() {
    resolve(image);
  };

  // 图片加载失败
  image.onerror = function() {
    reject(new Error('Could not load image at ' + url));
  };
})

loadImageAsync('url')
  .then(function(value) {
    // 成功，value 获取到 图片对象（image）
  }, function(error) {
    // 失败，error 获取到 错误信息
  });

// 推荐方式：
loadImageAsync('url')
  // 成功处理
  .then(function(value) {})
  // 错误处理
  .catch(function(err) {})
```

## async 和 await

- 异步编程终极方案
- 注意：`await`只能在`async`函数中使用
- 注意：`await`后面是一个`Promise`实例对象
- 注意：`await`关键字用来暂停后面的函数，等到获取到结果后，下面的代码才会执行
这样，就可以按照代码书写的顺序来理解代码执行顺序

```JS
// 封装 Promise函数
function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms, 'await')
  })
}

// 使用 async关键字 创建一个异步函数
async function fn() {
  console.log('await 前面')

  // 使用await关键字暂停函数，等待 Promise 的结果
  const ret = await timeout(3000)
  console.log(ret)

  console.log('await 后面')
}

fn()
```