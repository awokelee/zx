# Ajax

### XMLHttpRequest

```js
var xhr = new XMLHttpRequest()
xhr.open('GET', '/api', false)
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if(xhr.status == 200){
      alert(xhr.responseText)
    }
  }
}
xhr.send(null)
```

### IE 兼容问题

`IE` 低版本使用 `ActiveObject`, 和 `W3C` 标准不一样

### readyState

- `0` - (未初始化)还没有调用 send() 方法

- `1` - (载入)已调用 send() 方法, 正在发送请求

- `2` - (载入完成) send() 方法执行完成, 已经接收到全部响应内容

- `3` - (交互) 正在解析响应内容

- `4` - (完成) 响应内容解析完成, 可以在客户端调用了

### status

- 2xx - 表示成功处理请求. 如 200

- 3xx - 需要重定向, 浏览器直接跳转

- 4xx - 客户端请求错误, 如 404

- 5xx - 服务器端错误