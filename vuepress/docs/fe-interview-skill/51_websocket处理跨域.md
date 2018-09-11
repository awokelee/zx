# WebSocket 处理跨域

```js
// Websocket【参考资料】http://www.ruanyifeng.com/blog/2017/05/websocket.html

var ws = new WebSocket('wss://echo.websocket.org');

// 发送
ws.onopen = function (evt) {
  console.log('Connection open ...');
  ws.send('Hello WebSockets!');
};

// 接收
ws.onmessage = function (evt) {
  console.log('Received Message: ', evt.data);
  ws.close();
};

// 监听是否断开
ws.onclose = function (evt) {
  console.log('Connection closed.');
};
```