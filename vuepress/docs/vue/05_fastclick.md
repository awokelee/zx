# fastclick 移动端使用

::: tip 原因
移动设备上的浏览器默认会在用户点击屏幕大约延迟 `300` 毫秒后才会触发点击事件，这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了`FastClick`
:::

- 安装

`npm install fastclick --save`

- 引入

在 `mian.js` 中如下引入即可

```js
// 引入
import fastClick from 'fastclick'
// 注入
fastClick.attach(document.body)
```