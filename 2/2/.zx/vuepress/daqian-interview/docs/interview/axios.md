# axios

- 浏览器端发起XMLHttpRequests请求
- node端发起http请求
- 支持Promise API
- 拦截请求和返回
- 转化请求和返回（数据）
- 取消请求
- 自动转化json数据
- 客户端支持抵御XSRF（跨站请求伪造）

## 合并请求

比如获取省市.

如果其中有一个请求出现了错误那么就会停止请求，所以建议对于单个请求最好附加上处理的catch

```js
function getUserAccount(){
    return axios.get('/user/12345');
}

function getUserPermissions(){
    return axios.get('/user/12345/permissions');
}

axios.all([getUerAccount(),getUserPermissions()])
.then(axios.spread(function(acc,pers){
    // 两个请求现在都完成
})).catch(err=>{console.log(err)});
```

## 配置公共属性

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

- params

```js
 // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },
```

- `transformRequest`

加工请求体数据

```js
// `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],
```

- `transformResponse`

调整服务器返回数据

```js
// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],
```

- `timeout`

```js
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,
```

- `xsrfCookieName`

- `xsrfHeaderName`

## axios 设置 xsrf

由于项目需要，在客户端生成 `xsrf` `token`，在发请求的时候在 `header` 里发给服务端。

```js
import axios from 'axios'
// 创建一个修改了默认配置的 axios 实例
const instance = axios.create({
    xsrfCookieName: '_csrf',    // axios 要从 cookie 中取的 cookie 的 key
    xsrfHeaderName: '_csrf'     // axios 将在 header 中设置 xsrf 的 key，value 使用上面 cookie 对应的值
})

// request 拦截器
instance.interceptors.request.use((config) => {
    // 请求发送前，在 cookie 里生成 xsrf token
    document.cookie = `_csrf=${new Date().getTime()}`
    return config
})

export default instance
```

`axios` 会在请求的时候自动从 `cookie` 中取出你配置的 `xsrfCookieName` 的值，然后设置到 `requestHeader` 中你配置的 `xsrfHeaderName` 上

## 上传/下载进度

上传进度: `this.rate = (progressEvent.loaded / progressEvent.total) * 100`

```js
//`onUploadProgress`允许处理上传过程的进程事件
    onUploadProgress: function(progressEvent){
        that.rate = (progressEvent.loaded / progressEvent.total) * 100
    },

    //`onDownloadProgress`允许处理下载过程的进程事件
    onDownloadProgress: function(progressEvent){
        //下载过程中想做的事
    },
```

## 取消请求

```js
// 1. 取消标识
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

this.source = source;

axios.get('/user/12345', {
    // 2. 携带取消标识
    cancelToken:source.toke
}).catch(function(thrown){
    if(axiso.isCancel(thrown)){
        console.log('Rquest canceled', thrown.message);
    }else{
        //handle error
    }
});

// 3. 取消请求(信息参数设可设置的)
this.source.cancel("操作被用户取消");
```

## 续传

```js
methods:{
  resume:function () {
    // 裁剪文件
    // 开始 this.loaded: progressEvent.loaded
    // 结尾
    var fileData = this.file.splice(this.loaded+1, this.file.size)
    var fd = new FormData()
    fd.append('file', fileData)

    // 为了后续续传以后, 在取消
    var CancelToken = axios.CancelToken;
    var source = CancelToken.source();

    this.source = source;

    this.axios.post('/upload',fd, {
      cancelToken:source.toke,
      onUploadProgress: (progressEvent) => {
          this.loaded = progressEvent.loaded;
          that.rate = (progressEvent.loaded / progressEvent.total) * 100
      },
    })
    .then((res)=>console.log(res))
    .catch(function(thrown){

    });
  }
}
```

## 拦截器

- 请求拦截器

- 响应拦截器

- loading

- 实现类似 cookie 机制

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

## loading

`axios.interceptors.request` 设置 `loading` 的 `v-show = true`

`axios.interceptors.response` 设置 `loading` 的 `v-show = false`

## 实现 cookie 机制

- 在请求之前, 从本地获取 xxx, 设置请求头

```js
axios.interceptors.request.use( (config) => {
  var token = localStorage.setItem('token')
  if(token){
      config.headers['token'] = token
    }

    return config;
  },  (error) => {

    return Promise.reject(error);
  });
```

- 获取服务器的响应头

```js
axios.interceptors.response.use( (res) => {
  if(res.headers.token){
      var token = res.headers.token;
      localStorage.setItem('token', token)
    }

    return res;
  },  (error) => {

    return Promise.reject(error);
  });
```

- `axios` `response` 中 `headers` 中数据和实际响应的不一致问题

出现这个问题是原因是 `CORS` 的限制，我们可以通过在服务器端使用

```md
Access-Control-Expose-Headers
```