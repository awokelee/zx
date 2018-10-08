# CORS 跨域请求的限制与解决

### 模拟跨域

创建三个文件 `server.js`、`server2.js`、`test.html`.

`server2.js` 启动一个服务运行在 `8887` 端口

`server.js` 开启一个服务运行在 `8888` 端口, 并且读取 `test.html` 文件返回到客户端

`test.html` 发起一个 `ajax` 请求, 请求的是 `8887` 端口.

一句话: `8888` 请求 `8887` 资源, 跨域.

- `server.js`

```js
const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
  console.log('request come', request.url)

  const html = fs.readFileSync('test.html', 'utf-8')
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  response.end(html)
}).listen(8888)

console.log('server run 8888')
```

- `server2.js`

```js
const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  response.end('123')
}).listen(8887)

console.log('server run 8887')
```

- `test.html`

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <script>
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://127.0.0.1:8887')
    xhr.send()  
  </script>
</body>
</html>
```

- 运行结果如下:

```js
Failed to load http://127.0.0.1:8887/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8888' is therefore not allowed access.
(index):11 XHR finished loading: GET "http://127.0.0.1:8887/".
```

### 解决跨域

修改 `server2.js`, 增加 `Access-Control-Allow-Origin` 头

`Access-Control-Allow-Origin: *` 表示允许所有网站的请求都允许, 不安全.

`Access-Control-Allow-Origin: 'http://www.baidu.com'`, 表示跨域时只允许百度访问我们.

```js
const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })
  response.end('123')
}).listen(8887)

console.log('server run 8887')
```

### 本质

不管有没有跨域, 客户端发起请求, 服务端都会接受你的请求并且返回内容.

跨域是浏览器来做的! 浏览器接受到服务器返回的内容, 没看到请求头中没有设置 `Access-Control-Allow-Origin` 就报错, 不展示给你结果!

一句话: 服务端没有跨域, 只有浏览器有.

浏览器的同源策略:

浏览器才有跨域! 浏览器才有跨域! 浏览器才有跨域!

### JSONP 处理跨域

`img` `script` `link` 三个标签可以发起跨域请求.

- `server.js` 不变

```js
const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
  console.log('request come', request.url)

  const html = fs.readFileSync('test.html', 'utf-8')
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  response.end(html)
}).listen(8888)

console.log('server run 8888')
```

- `server2.js` 修改内容

`response.end('callback({x:100, y:200})')` 表示给 `test.html` 返回 `callback({x:100, y:200})`, 也就是一个函数, 函数参数是一个对象 `{x:100, y:200}`.

```js
const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)
  response.end('callback({x:100, y:200})')
}).listen(8887)

console.log('server run 8887')
```

- `test.html`

增加如下内容, 先定义一个全局函数, 函数名字跟 `server2.js` 返回的函数名字一致. 然后利用 `srcipt` 标签发起请求.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <script>
    // window.callback 需要定义在 调接口之前不然报未定义.
    window.callback = function (data) {
      // 打印 {x: 100, y: 200}
      console.log(data)
    }
  </script>
  <script src="http://127.0.0.1:8887"></script>
</body>
</html>
```