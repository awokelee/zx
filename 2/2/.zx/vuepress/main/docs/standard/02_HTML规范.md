# HTML 规范

## 资源引入

引入资源使用相对路径，不要指定资源所带的具体协议 ( `http:`, `https:` ) ，除非这两者协议都不可用。

**推荐**：

```html
<script src="//cdn.com/foundation.min.js"></script>

<img src="//img.mukewang.com/5b682a210001156e09360316.jpg">
```

**不推荐**：

```html
<script src="http://cdn.com/foundation.min.js"></script>

<img src="https://img.mukewang.com/5b682a210001156e09360316.jpg">
```

## DOCTYPE 声明

HTML 文件必须加上 `DOCTYPE` 声明，并统一使用 `HTML5` 的文档声明：

```html
<!DOCTYPE html>
```

## 页面语言 LANG

```html
<html lang="zh-CN">
```

## 页面编码

一般情况下统一使用 `“UTF-8”` 编码

```html
<meta charset="UTF-8">
```

由于历史原因，有些业务可能会使用 `“GBK”` 编码

```html
<meta charset="GBK">
```

请尽量统一写成标准的 `“UTF-8”`，**不要写成 “utf-8” 或 “utf8” 或 “UTF8”**。

根据 IETF 对 UTF-8 的定义，其编码标准的写法是 “UTF-8”；而 UTF8 或 utf8 的写法只是出现在某些编程系统中，如 .NET framework 的类 System.Text.Encoding 中的一个属性名就叫 UTF8。

## 元素及标签闭合

[HTML 标签规范](https://www.w3.org/TR/html5/syntax.html#optional-tags)

```md
HTML 元素共有以下 5 种：

空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr

原始文本元素：script、style

RCDATA元素：textarea、title

外来元素：来自 MathML 命名空间和 SVG 命名空间的元素。

常规元素：其他 HTML 允许的元素都称为常规元素。
```

- 原始文本元素、RCDATA元素以及常规元素都有 **一个开始标签来表示开始，一个结束标签来表示结束**。

```html
<title></title>

<style></style>

<script></script>

<text-area></text-area>
```

- 空元素只有一个开始标签，且 **不能为空元素设置结束标签**。

```html
<meta charset="UTF-8">

<link rel="stylesheet" href="">

<img src="" alt="">

<input type="text">

<br>
```

- 外来元素可以有一个开始标签和配对的结束标签，或者只有一个自闭合的开始标签，且后者情况下该元素不能有结束标签。

```html
<svg:svg width="300" height="100" version="1.1" >
  <svg:circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg:svg>
```

## HTML 代码大小写

**HTML 标签名、类名、标签属性和大部分属性值统一用小写**。

**推荐**:

```html
 <div class="demo"></div>
```

**不推荐**:

```html
<div class="DEMO"></div>
```

HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

<script type="text/javascript"><![CDATA[
...
]]></script>
```

## 类型属性

不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

**推荐**:

```html
<link rel="stylesheet" href="" >

<script src=""></script>
```

**不推荐**：

```html
<link rel="stylesheet" type="text/css" href="" >

<script type="text/javascript" src="" ></script>
```

## 特殊字符引用

在 HTML 中不能使用小于号 `“<”` 和大于号 `“>”` 特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体

**推荐**：

```html
<a href="#">more&gt;&gt;</a>
```

**不推荐**：

```html
<a href="#">more>></a>
```

## 纯数字输入框

使用 `type="tel"` 而不是 `type="number"`

```html
<input type="tel">
```

## 代码嵌套

- 每个块状元素独立一行，内联元素可选

**推荐**：

```html
<div>
    <h1></h1>
    <p></p>
</div>
```

**不推荐**：

```html
<div>
    <h1></h1><p></p>
</div>
```

- 段落元素与标题元素只能嵌套内联元素

**推荐**：

```html
<h1><span></span></h1>
<p><span></span><span></span></p>
```

**不推荐**：

```html
<h1><div></div></h1>
<p><div></div><div></div></p>
```

## 单行注释

一般用于简单的描述，如某些状态描述、属性描述等

**注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行**。

**推荐**：

```html
<!-- Comment Text -->
<div>...</div>
```

**不推荐**：

```html
<div>...</div><!-- Comment Text -->

<div><!-- Comment Text -->
    ...
</div>
```

## 模块注释

一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符，`<!-- S Comment Text -->` 表示模块开始，`<!-- E Comment Text -->` 表示模块结束，**模块与模块之间相隔一行**

**推荐写法**：

```html
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->

<!-- S Comment Text B -->
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

**不推荐写法**：

```html
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

## 嵌套模块注释

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用

```html
<!-- S Comment Text -->
<!-- E Comment Text -->
```

而改用

```html
<!-- /Comment Text -->
```

**注释写在模块结尾标签底部，单独一行**。

```html
<!-- S Comment Text A -->
<div class="mod_a">

    <div class="mod_b">
        ...
    </div>
    <!-- /mod_b -->

    <div class="mod_c">
      ...
    </div>
    <!-- /mod_c -->

</div>
<!-- E Comment Text A -->
```

## HTML5 标准模版

HTML 模版指的是团队使用的初始化 HTML 文件，里面会根据不同平台而采用不一样的设置，一般主要不同的设置就是 `mata` 标签的设置，以下是 PC 和移动端的 HTML 模版

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>HTML5 标准模版</title>
</head>
<body>

</body>
</html>
```

## 移动端模版

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" >
<meta name="format-detection" content="telephone=no" >
<title>移动端 HTML 模版</title>

<!-- S DNS预解析 -->
<link rel="dns-prefetch" href="">
<!-- E DNS预解析 -->

<!-- S 线上样式页面片，开发请直接取消注释引用 -->
<!-- #include virtual="" -->
<!-- E 线上样式页面片 -->

<!-- S 本地调试，根据开发模式选择调试方式，请开发删除 -->
<link rel="stylesheet" href="css/index.css" >
<!-- /本地调试方式 -->

<link rel="stylesheet" href="http://srcPath/index.css" >
<!-- /开发机调试方式 -->
<!-- E 本地调试 -->

</head>
<body>

</body>
</html>
```

## PC 端模版

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="keywords" content="your keywords">
<meta name="description" content="your description">
<meta name="author" content="author,email address">
<meta name="robots" content="index,follow">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<meta name="renderer" content="ie-stand">
<title>PC 端 HTML 模版</title>

<!-- S DNS预解析 -->
<link rel="dns-prefetch" href="">
<!-- E DNS预解析 -->

<!-- S 线上样式页面片，开发请直接取消注释引用 -->
<!-- #include virtual="" -->
<!-- E 线上样式页面片 -->

<!-- S 本地调试，根据开发模式选择调试方式，请开发删除 -->
<link rel="stylesheet" href="css/index.css" >
<!-- /本地调试方式 -->

<link rel="stylesheet" href="http://srcPath/index.css" >
<!-- /开发机调试方式 -->
<!-- E 本地调试 -->

</head>
<body>

</body>
</html>
```

## WebApp Meta 标签设置(iOS)

WebApp目的在于使其界面和行为在某种程度上类似于原生APP应用。例如，WebApp 可以在 iOS 设备上通过缩放去适配设备屏幕。当用户将WebApp程序添加到主屏幕后，会使得它看上去像原生APP一样，以此，你可以进一步为 Safari 定制自己的 WebApp，而使用某些专为 iOS 平台设定的设置就可以做到。

WebApp可以通过设置 meta 标签来改变页面的一些表现，有些 meta 设置在 Safari 应用或原生 App 的内嵌网页中都可以生效，而有些设置侧需要将应用添加到主屏幕的时候才会生效。

### 通用类设置

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0,
maximum-scale=1.0, user-scalable=no">
```

- width – viewport 的宽度
- height – viewport 的高度
- initial-scale – 初始的缩放比例
- minimum-scale – 允许用户缩放到的最小比例
- maximum-scale – 允许用户缩放到的最大比例
- user-scalable – 是否允许用户缩放

### Safari on iOS viewport

- 默认宽度是 980px，范围从 200px 到 10000px
- initial-scale 缩放比例范围值是 从 >0 到 10 之间
- minimum-scale 默认值是 0.25
- maximum-scale 默认值是 5
- user-scalable – 默认值是 yes，设置 no 还可以在文本框输入文本的时候阻止页面滚动

### apple-mobile-web-app-capable

设置 WebApp 是否进入全屏模式，该设置需要添加到主屏幕才生效

```html
<meta name="apple-mobile-web-app-capable" content="yes">
```

- content设置 yes 进入全屏模式
- 默认会启动 Safari 应用，使用 Safari 应用浏览
- 通过检测 window.navigator.standalone 的 Boolean 值可以判断 web 应用是否处于全屏模式

### apple-mobile-web-app-status-bar-style

为 webapp 设置状态栏样式

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

- 此 meta 设置只在全屏模式生效
- 默认值是 default
- content=”black”，状态栏背景黑色，网页内容在状态栏下面
- content=”black-translucent”，状态栏半透明，背景黑色，网页内容占满全屏

该设置在 iOS6 和 iOS7 表现还可以，但到了 iOS8 后会出现各种问题，而且在 iOS9 中并没有生效。

### format-detection

自动识别页面中有可能是电话格式的数字

```html
<meta name="format-detection" content="telephone=no">
```

iOS 中的 Safari 会默认识别与电话格式相似的数字并生成一个可以拉起电话应用并将该数字作为电话号码拨打的链接。定义 telephone=no 可以屏蔽该功能
