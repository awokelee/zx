# meta 标签

- 视口（快捷键：`meta:vp`）

移动端需要进行一些视口设置, 即 `index.html` 中 `meta` 标签的 `viewport`
  
::: tip
  在移动浏览器中, 当页面宽度超出设备, 浏览器内部虚拟的一个页面容器, 将页面容器缩放到设备那么大展示;
视口的宽度可以通过 `meta` 标签设置
:::

```html
<meta
  name="viewport"
  content="maximum-scale=1.0,
  minimum-scale=1.0,
  user-scalable=0,
  width=device-width,
  initial-scale=1.0"
/>
```

此属性为移动端页面视口设置:

`width`: 视口的宽度

`width=device-width`: 宽度是设备的宽度

`initial-scale`: 初始化缩放, - `initial-scale=1.0`: 不缩放

`user-scalable`: 是否允许用户自行缩放, 取值0或1, yes或no

`minimum-scale`: 最小缩放

`maximum-scale`: 最大缩放

一般设置了不允许缩放, 就没必要设置最大最小缩放了。

::: danger
  以下是一些其他 `meta` 标签, 可以了解下, 按需加, 主要是兼容低版本 `ie`, 移动端不需要
:::

- 设置浏览器的兼容模式（让 `IE` 使用最新的浏览器渲染）

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
```

- 条件注释

```html
<!--[if lt IE 9]> 
<script src="lib/html5shiv/html5shiv.min.js"></script> 
<script src="lib/respond/respond.min.js"></script> 
<![endif]-->
```

- `html5shiv` 让浏览器可以识别 `html5` 的新标签
- `respond` 让低版本浏览器可以使用 `CSS3` 的媒体查询