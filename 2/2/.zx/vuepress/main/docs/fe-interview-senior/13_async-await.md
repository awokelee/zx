# `Async/Await` ES7 新特性

`koa2` 用的就是 `async/await`.

- `then` 只是将 `callback` 拆分了

- `async/await` 是最直接的同步写法

- 使用 `await`, 函数必须用 `async` 标识

- `await` 后面跟的是一个 `Promise` 实例

- 需要 `babel-polyfill`

- 使用了 `Promise`, 并没有和 `Promise` 冲突

- 完全是同步的写法, 再也没有回调函数

- 但是: 改变不了 `JS` 单线程的本质

### 使用案例

```js
import 'babel-polyfill'

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

var src1 = 'https://www.imooc.com/static/img/index/logo_new.png'
var src2 = 'https://img1.mukewang.com/545862fe00017c2602200220-100-100.jpg'
```

```js
const load = async function () {
  const result1 = await loadImg(src1)
  console.log(result1)
  const result2 = await loadImg(src2)
  console.log(result2)
}
load()
```