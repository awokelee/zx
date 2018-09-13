# BOM

浏览器对象模型（`Browser Object Model`）.

### navigator 和 screen

```js
// navigator
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)

// screen
console.log(screen.width)
console.log(screen.height)
```

### location 和 history 

```js
console.log(location.href)
console.log(location.protocol)
console.log(location.pathname)
console.log(location.search)
console.log(location.hash)
console.log(location.host)

history.back()
history.forward()
```

### 如何检测浏览器的类型

```js
// navigator
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```

### 拆解 url 的各部分

```js
console.log(location.href)
console.log(location.protocol)
console.log(location.pathname)
console.log(location.search)
console.log(location.hash)
console.log(location.host)
```