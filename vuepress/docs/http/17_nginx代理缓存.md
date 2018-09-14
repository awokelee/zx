# Nginx 代理缓存

### 代理缓存设置

- `server.js`

```js
const http = require('http')
const fs = require('fs')

const wait = (seconds) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve()
    }, seconds * 1000)
  })
}

http.createServer(function (request, response) {
  console.log('request come', request.url)
  if (request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf-8')
    response.writeHead(200, {
      'Content-Type': 'text/html',
    })
    response.end(html)
  }

  if (request.url === '/data') {
    response.writeHead(200, {
      'Cache-Control': 'max-age=20',
    })
    wait(2).then(()=> response.end('success'))
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
  <div>This is content <span id="data"><span></div>
  <script>
    fetch('/data').then(function (response) {
      return response.text()
    }).then(function (text) {
      document.getElementById('data').innerText = text
    })
  </script>
</body>
</html>
```

- `nginx.conf` 配置 代理缓存

```bash
proxy_cache_path cache levels=1:2 keys_zone=my_cache:10m;

server {
	listen 		80;
	server_name a.test.com;
	
	location / {
		proxy_cache my_cache;
		proxy_pass http://localhost:8888;
		proxy_set_header Host $host;
	}
}
```

### 代理缓存测试

`chrome` 浏览器访问 `a.test.com`, 第一次结果延迟两秒展示, 再次刷新速度大幅提升

换别的浏览器如 `firfox` 去访问 `a.test.com` 第一次结果并没有延迟两秒展示, 这是因为 `nginx` 做了代理缓存设置,

当一个用户访问了资源, 就会缓存下来, 当其他用户访问时就从缓存取.

### header 设置

- 同时设置 `max-age` 和 `s-maxage`, 代理缓存会设置 `s-maxage`

```bash
response.writeHead(200, {
  'Cache-Control': 'max-age=20, s-maxage=20',
})
```

- `private`

`private` 只允许浏览器缓存, 不允许代理服务器缓存.

```bash
response.writeHead(200, {
  'Cache-Control': 'max-age=20, private',
})
```

- `no-store`

浏览器和代理服务器都不允许缓存

- `Vary`

只有头信息一致才缓存.

```js
response.writeHead(200, {
  'Cache-Control': 's-maxage=20',
  'Vary': 'X-Test-Cache'
})
```

```html
<body>
  <div>This is content <span id="data"><span></div>
  <button id="button">click me</button>
  <script>
    var index = 0

    function doRequest() {
      var data = document.getElementById('data')
      data.innerText = ''
      fetch('/data', {
        headers: {
          'X-Test-Cache': index++
        }
      }).then(function (response) {
        return response.text()
      }).then(function (text) {
        data.innerText = text
      })
    }
    document.getElementById('button').addEventListener('click', doRequest)
  </script>
</body>
```