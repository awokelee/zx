# callback，promise，generator，async-await

javascript 异步的发展历程:

```md
ES6 以前：
　　回调函数（callback）：nodejs express 中常用，ajax中常用。

ES6：
　　promise对象：nodejs最早有bluebird promise的雏形，axios中常用。
　　generator函数：nodejs koa框架使用率很高。

ES7:
　　async/await语法：当前最常用的异步语法，nodejs koa2 完全使用该语法。
```

### 回调函数 callback

回调函数实际就是一个参数；

将一个函数当做参数传到另一个函数里，当那个函数执行完后，再执行传进去的这个函数；这个过程就叫做回调。

```js
function A(callback) {
  callback()
}

function B() {
  console.log('主函数')
}

A(B)
```

### promise 对象

promise 对象用于一个异步操作的最终完成（或最终失败）及其结果的表示。

简单地说就是处理一个异步请求。我们经常会做些断言，如果我赢了你就嫁给我，如果输了我就嫁给你之类的断言。

这就是promise的中文含义：断言，一个成功，一个失败。

举个例子，方便大家理解：

promise构造函数的参数是一个函数，我们把它称为处理器函数。

处理器函数接收两个函数reslove和reject作为其参数，当异步操作顺利执行则执行reslove函数, 当异步操作中发生异常时，则执行reject函数。

通过resolve传入得的值，可以在then方法中获取到，通过reject传入的值可以在catch方法中获取到。

因为then和catch都返回一个相同的promise对象，所以可以进行链式调用。

```js
function readFileByPromise(path) {
  // 显示返回一个 promise 对象
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

// 书写方式二
readFileByPromise('a.txt').then( data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### generator 函数

ES6的新特性generator函数，中文译为生成器，在以前一个函数中的代码要么被调用，要么不被调用，还不存在能暂停的情况。

generator让代码暂停成待执行，定义一个生成器很简单，在函数名前加个*号,使用上也与普通函数有区别。

举个例子，方便大家理解：

```js
function *Calculate(a, b) {
  let sum = a + b
  console.log(sum)

  let sub = a - b
  console.log(b)
}
```

上面便是一个简单的generator声明例子。

generator函数不能直接调用，直接调用generator函数会返回一个对象,只有调用该对象的next()方法才能执行函数里的代码

```js
let gen = Calculate(2, 7)

gen.next() // 9 -5
```

其实单独介绍generator并没有太大的价值，要配合key yield，才能真正发挥generator的价值。

yield能将生Generator函数的代码逻辑分割成多个部分，下面改写上面的生成器函数。

```js
function *Calculate(a, b) {
  let sum = a + b
  yield console.log(sum)

  let sub = a - b
  yield console.log(sub)
}

let gen = Calculate(2, 7)
gen.next() // 9 {value: undefined, done: false}
gen.next() // -5 {value: undefined, done: false}
gen.next() // {value: undefined, done: true}
```

```js
function readFile(path) {
  fs.readFile(path, 'utf8', function (err, data) {
    console.log(data)
  })
}

function *main() {
  let res1 = yield readFile('a.txt')
  console.log(res1)

  let res2 = yield readFile('b.txt')
  console.log(res2)

  let res3 = yield readFile('c.txt')
  console.log(res3)
}

let it = main()
it.next()
```

generator函数的强大在于允许你通过一些实现细节来将异步过程隐藏起来，依然使代码保持一个单线程、同步语法的代码风格。

这样的语法使得我们能够很自然的方式表达我们程序的步骤/语句流程，而不需要同时去操作一些异步的语法格式。

### async-await

async函数返回一个promise对象，如果在async函数中返回一个直接量，async会通过Promise.resolve封装成Promise对象。

我们可以通过调用promise对象的then方法，获取这个直接量。

```js
async function test() {
  return 'hello async'
}

let res = test()
console.log(res) // Promise {<resolved>: "hello async"}
```

那如过async函数不返回值，又会是怎么样呢？

```js
async function test(){

}
var result=test()
console.log(result) // Promise {<resolved>: undefined}
```

await会暂停当前async的执行，await会阻塞代码的执行，直到await后的表达式处理完成，代码才能继续往下执行。

await后的表达式既可以是一个Promise对象，也可以是任何要等待的值。

如果await等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。

上边你看到阻塞一词，不要惊慌，async/await只是一种语法糖，代码执行与多个callback嵌套调用没有区别。

本质并不是同步代码，它只是让你思考代码逻辑的时候能够以同步的思维去思考，避开回调地狱。

简而言之-async/await是以同步的思维去写异步的代码，所以async/await并不会影响node的并发数，大家可以大胆的应用到项目中去！

如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。

```js
function A() {
  return 'hello'
}

async function B() {
  return 'world'
}

async function C() {
  let s1 = await A()

  let s2 = await B()
  console.log(s1 + s2)
}

C() // helloworld
```