# postMessage 处理跨域

```js
// postMessage
// 窗口A(http:A.com)向跨域的窗口B(http:B.com)发送信息
Bwindow.postMessage('data', 'http://B.com');
// 在窗口B中监听
Awindow.addEventListener('message', function (event) {
  console.log(event.origin); // http://A.com
  console.log(event.source); // Awindow
  console.log(event.data); // data!
}, false);
```