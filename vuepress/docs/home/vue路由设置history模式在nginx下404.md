# vue路由设置 history 模式在 nginx 下 404

## 出现的问题

- 访问 `http://001.smj123dev.com/newsDetails/2/5` 出现 `404 Not Found`

- 刷新当前页面变成 `404 Not Found`

## 解决方法

### 前端来处理

- 步骤一

在 `src/router/index.js` 文件中, 将 `mode: 'history'` 改成 `mode: 'hash'`, 即改成哈希模式.

- 步骤二

将所有 `.vue` 文件中的 `window.open` (会新开窗口)路径前面加上 `#`(变成 `hash` 模式)

例如:

开始的代码:

```js
let path = '/newsDetails/1/' + id
window.open(path)
```

更改后

```js
let path = '#/newsDetails/1/' + id
window.open(path)
```

### 后台来处理, nginx

- 思路: 把所有请求转到 `index.html`

```bash
location / {
  try_files $uri $uri/ /index.html;
}
```

## 原因

- 当访问 `http://001.smj123dev.com/newsDetails/2/5` 出现 `404`, 是因为在 `nginx` 配置的根目录下面没有 `/newsDetails/2/5` 这个真实资源存在，这些访问资源都是在`js`里渲染的.

- `vue-router` 默认 `hash` 模式 —— 使用 `URL` 的 `hash` 来模拟一个完整的 `URL`，于是当 `URL` 改变时，`页面不会重新加载`

- `history` 模式，利用 `history.pushState` `API` 来完成 `URL` 跳转, 也就是动态的通过 `js` 操作 `window.history` 来改变浏览器地址栏里的路径，并没有发起 `http` 请求，但是当直接在浏览器里输入这个地址(`刷新`)的时候，就一定要对服务器发起 `http` 请求，但是这个目标在服务器上又不存在，所以会返回 `404`

## 地址栏展示

多了个 `#`

- `history` 模式在地址栏展示为: `http://001.smj123dev.com/newsDetails/2/5`

- `hash` 模式在地址栏展示为: `http://001.smj123dev.com/#/newsDetails/2/5`