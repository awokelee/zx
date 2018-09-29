# viewport

`viewport` 视口

移动端浏览器默认以 `1024` 分辨率显示.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

几个参数:

- `width`：设置布局视口的宽度，一般设为 `device-width`
- `initial-scale`：初始缩放比例
- `maximum-scale`：最大缩放比例, `maximum-scale=1`
- `minimum-scale`：最小缩放比例
- `user-scalable`：是否静止用户进行缩放，默认为 `no`