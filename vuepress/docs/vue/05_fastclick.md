# fastclick 点击穿透

> `fastclick` 300ms点击问题

- 安装, `npm install fastclick --save`

- 在 `mian.js` 中引入

```js
// 引入
import fastClick from 'fastclick'
// 注入
fastClick.attach(document.body)
```