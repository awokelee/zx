# H5 与 Native 交互

- 获取 `Native` 传来的值

```js {2,5}
message ( e ) {
  let that = this
  document.addEventListener('message', function (e) {
      // 注意: Native 传来的数据 在 e.data 中
      let data = JSON.parse(e.data);
  });
},
```

- 传给 `Native`

```js {3}
sendData ( data ) {
  if (window.originalPostMessage) {
      window.postMessage(data);
  } else {
      throw Error('postMessage接口还未注入');
  }
}
```