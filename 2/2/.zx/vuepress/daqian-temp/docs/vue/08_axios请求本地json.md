# axios 请求本地 json

- 将 `json` 文件放在 `static` 文件夹中

- 代码中:

```js
this.$http.get('/static/test.json').then((res)=>{
  //....
})
```