# `koa-router` 介绍

[koa-router 地址](https://github.com/alexmingoia/koa-router)

- 安装

`npm install koa-router`

- 使用

```js
var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    // ...
  });

app
  .use(router.routes())
  .use(router.allowedMethods());
```