# Promise 标准

- `Promise` 实例必须实现 `then` 这个方法

- `then()` 必须可以接收两个函数作为参数

- `then()` 返回的必须是一个 `Promise` 实例

### Promise 使用案例

```js
function loadImg(src) {
  var promise = new Promise(function (resolve, reject) {
    var img = document.createElement('img')
    img.onload = function () {
        resolve(img)
    }
    img.onerror = function () {
        reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

var src = 'https://www.imooc.com/static/img/index/logo_new.png'
var result = loadImg(src)
result.then(function (img) {
  console.log(1, img.width)
  return img
}, function () {
  console.log('error 1')
}).then(function (img) {
  console.log(2, img.height)
})
```

### Promise 的异常捕获

```js
var result = loadImg(src)
result.then(function (img) {
  console.log(1, img.width)
  return img
}).then(function (img) {
  console.log(2, img.height)
}).catch(function (ex) {
  // 统一捕获异常
  console.log(ex)
})
```

### Promise 多个串联

```js
var src1 = 'https://www.imooc.com/static/img/index/logo_new.png'
var result1 = loadImg(src1)
var src2 = 'https://img1.mukewang.com/545862fe00017c2602200220-100-100.jpg'

var result2 = loadImg(src2)
result1.then(function (img1) {
  console.log('第一个图片加载完成', img1.width)
  return result2  // 重要！！！
}).then(function (img2) {
  console.log('第二个图片加载完成', img2.width)
}).catch(function (ex) {
  console.log(ex)
})
```

### Promise.all 和 Promise.race

```js
var src1 = 'https://www.imooc.com/static/img/index/logo_new.png'
var result1 = loadImg(src1)
var src2 = 'https://img1.mukewang.com/545862fe00017c2602200220-100-100.jpg'
var result2 = loadImg(src2)

// Promise.all 接收一个 promise 对象的数组
// 待全部完成之后, 统一执行 success
Promise.all([result1, result2]).then(function (datas) {
  // 接收到的 datas 是一个数组, 依次包含了多个 promise 返回的内容
  console.log('all', datas[0])
  console.log('all', datas[1])
})

// Promise.race 接收一个包含多个 promise 对象的数组
// 只要有一个完成, 就执行 success
Promise.race([result1, result2]).then(function (data) {
  // data 即最先执行完成的 promise 的返回值
  console.log('race', data)
})
```