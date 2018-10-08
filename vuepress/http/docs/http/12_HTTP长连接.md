# HTTP 长连接

在一个 `tcp` 连接发 多个 `http` 请求.

![](./media/url-tcp.png)

创建连接消耗性能

![](./media/connection.png)

`chrome` 一般一次连接并发是 `6个`.

`Connection: keep-alive`

### 演示

- `server.js`

```js
const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
  console.log('request come', request.url)
  const html = fs.readFileSync('test.html', 'utf-8')
  const img = fs.readFileSync('1.jpg')

  if(request.url === '/'){
      response.writeHead(200, {
        'Content-Type': 'text/html',
      })
    response.end(html)
  } else {
    response.writeHead(200, {
      'Content-Type': 'image/jpg',
    })
    response.end(img)
  }
}).listen(8888)

console.log('server run 8888')
```

- `test.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <img src="/1.jpg" alt="">
  <img src="/2.jpg" alt="">
  <img src="/3.jpg" alt="">
  <img src="/4.jpg" alt="">
  <img src="/5.jpg" alt="">
  <img src="/6.jpg" alt="">
  <img src="/7.jpg" alt="">
  <img src="/11.jpg" alt="">
  <img src="/12.jpg" alt="">
  <img src="/13.jpg" alt="">
  <img src="/14.jpg" alt="">
  <img src="/15.jpg" alt="">
  <img src="/16.jpg" alt="">
  <img src="/17.jpg" alt="">
  <img src="/111.jpg" alt="">
  <img src="/112.jpg" alt="">
  <img src="/113.jpg" alt="">
  <img src="/114.jpg" alt="">
  <img src="/115.jpg" alt="">
  <img src="/116.jpg" alt="">
  <img src="/117.jpg" alt="">
</body>
</html>
```

- 长连接会复用 `tcp` 连接, `chrome` 并发是 `6个`.

![](./media/chrome-connection.png)

- 默认是开启的

![](./media/connection-google.png)

`Connection: keep-alive` 表示长连接开启.

`'Connection': 'close'` 关闭常长连接:

```js
response.writeHead(200, {
  'Content-Type': 'image/jpg',
  'Connection': 'close'
})
```

![](./media/chrome-connection-none.png)