# defer async

- `defer`

`HTML 4.01` 为 `<script>` 标签定义了 `defer` 属性, 脚本会被延时到整个页面都解析完毕后再运行.

理想状态是延迟脚本按顺序加载, 而且先于 `DOMContentLoaded` 事件.

`defer` 只适用于 **外部脚本文件**, 给嵌入脚本设置的 `defer` 属性会被忽略, 把延迟脚本放在页面底部是最佳选择.

```html {8,9}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>defer</title>
</head>
<body>
  <script defer="defer" src="example1.js"></script>
  <script defer="defer" src="example2.js"></script>
</body>
</html>
```

- `async`

`defer` 只适用于 **外部脚本文件**, 并告诉浏览器立即下载文件.

标记为 `async` 的脚本并不保证按照指定他们的先后顺序 **执行**.

```html {8,9}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>defer</title>
</head>
<body>
  <script async src="example1.js"></script>
  <script async src="example2.js"></script>
</body>
</html>
```

上面 `example2.js` 可能会在第一个脚本文件之前执行, `async` 属性目的是不让页面等待脚本下载和执行.

异步脚本 **一定会** 在页面的 `load` 事件前执行, 但可能会在 `DOMContentLoaded` 事件触发之前或之后执行.

::: tip 相关链接:
[https://book.douban.com/subject/10546125/](https://book.douban.com/subject/10546125/), by 《JavaScript 高级程序设计》.
:::