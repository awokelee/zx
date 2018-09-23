
# CSS 规范

## charset 编码

- 样式文件必须写上 `@charset` 规则，并且 **一定要在样式文件的第一行首个字符位置开始写**，编码名用 `“UTF-8”`
- 字符 `@charset “”`; **都用小写字母**，不能出现转义符，编码名允许大小混写
- 考虑到在使用 `“UTF-8”` 编码情况下 `BOM` 对代码的污染和编码显示的问题，在可控范围下，**坚决不使用 BOM**。

**推荐**:

```css
@charset "UTF-8";

.jdc{}
```

**不推荐**：

```css
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */

/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.jdc{}
@CHARSET "UTF-8";
/* @charset规则没有用小写 */

.jdc{}
/* 无@charset规则 */
.jdc{}
```

## 代码格式化

- 样式书写一般有两种：一种是紧凑格式 (`Compact`)

```css
.jdc{ display: block;width: 50px;}
```

- 一种是展开格式（`Expanded`）

```css
.jdc{
    display: block;
    width: 50px;
}
```

团队约定

**统一使用展开格式书写样式**。

## 代码大小写

**样式选择器，属性名，属性值关键字全部使用小写字母书写**，**属性字符串允许使用大小写**。

```css
/* 推荐 */
.jdc{
  display:block;
}

/* 不推荐 */
.JDC{
  DISPLAY:BLOCK;
}
```

## 选择器

- 尽量少用通用选择器 `*`
- 不使用 `ID` 选择器
- 不使用无具体语义定义的标签选择器

```css
/* 推荐 */
.jdc {}
.jdc li {}
.jdc li p{}

/* 不推荐 */
*{}
#jdc {}
.jdc div{}
```

## 分号

每个属性声明末尾都要加分号；

```css
.jdc {
    width: 100%;
    height: 100%;
}
```

## 代码易读性

- 左括号与类名之间一个空格，冒号与属性值之间一个空格

**推荐**：

```css
.jdc {
    width: 100%;
}
```

**不推荐**：

```css
.jdc{
    width:100%;
}
```

- 逗号分隔的取值，逗号之后一个空格

**推荐**：

```css
.jdc {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

**不推荐**：

```css
.jdc {
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```

- 为单个 css 选择器或新申明开启新行

**推荐**：

```css
.jdc,
.jdc_logo,
.jdc_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}
```

**不推荐**：

```css
.jdc,jdc_logo,.jdc_hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

- 颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0

**推荐**：

```css
.jdc {
    color: rgba(255,255,255,.5);
}
```

**不推荐**：

```css
.jdc {
    color: rgba( 255, 255, 255, 0.5 );
}
```

- 属性值十六进制数值能用简写的尽量用简写

**推荐**：

```css
.jdc {
    color: #fff;
}
```

**不推荐**：

```css
.jdc {
    color: #ffffff;
}
```

- 不要为 0 指明单位

**推荐**：

```css
.jdc {
    margin: 0 10px;
}
```

**不推荐**：

```css
.jdc {
    margin: 0px 10px;
}
```

## 属性值引号

css 属性值需要用到引号时，统一使用 **单引号**

```css
/* 推荐 */
.jdc {
  font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.jdc {
  font-family: "Hiragino Sans GB";
}
```

## 属性书写顺序

建议遵循以下顺序：

- 布局定位属性：`display / position / float / clear / visibility / overflow`
- 自身属性：`width / height / margin / padding / border / background`
- 文本属性：`color / font / text-decoration / text-align / vertical-align / white- space / break-word`
- 其他属性（CSS3）：`content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient` …

```css
.jdc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

## CSS3 浏览器私有前缀写法

**CSS3 浏览器私有前缀在前，标准前缀在后**。

```css
.jdc {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

## CSS 单行注释

注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行

**推荐**：

```css
/* Comment Text */
.jdc{}

/* Comment Text */
.jdc{}
```

**不推荐**：

```css
/*Comment Text*/
.jdc{
  display: block;
}
.jdc{
  display: block;/*Comment Text*/
}
```

## CSS 模块注释

注释内容第一个字符和最后一个字符都是一个空格字符，/* 与 模块信息描述占一行，多个横线分隔符-与*/占一行，行与行之间相隔两行

推荐：

```CSS
/* Module A
---------------------------------------------------------------- */
.mod_a {}


/* Module B
---------------------------------------------------------------- */
.mod_b {}
```

不推荐：

```CSS
/* Module A ---------------------------------------------------- */
.mod_a {}
/* Module B ---------------------------------------------------- */
.mod_b {}
```

## CSS 文件信息注释

在样式文件编码声明 `@charset` 语句下面注明页面名称、作者、创建日期等信息

```CSS
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2017-10-10
 */
 ```

## 重置样式

### 移动端

```CSS
* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }
img { border: 0 none; vertical-align: top; }
i, em { font-style: normal; }
ol, ul { list-style: none; }
input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }
table { border-collapse: collapse; border-spacing: 0; }
a { text-decoration: none; color: #666; }
body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: -apple-system,Helvetica,sans-serif; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
```

### PC 端

```css
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
ul, ol { list-style: none; }
img { border: 0 none; vertical-align: top; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: none; }
table { border-collapse: collapse; border-spacing: 0; }
strong, em, i { font-style: normal; font-weight: normal; }
ins { text-decoration: underline; }
del { text-decoration: line-through; }
mark { background: none; }
input::-ms-clear { display: none !important; }
body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
a { text-decoration: none; color: #333; }
a:hover { text-decoration: underline; }
```

## 媒体查询

### 常用查询语句

- 判断设备横竖屏

```css
/* 横屏 */
@media all and (orientation :landscape) {

}

/* 竖屏 */
@media all and (orientation :portrait) {

}
```

- 判断设备宽高

```css
/* 设备宽度大于 320px 小于 640px */
@media all and (min-width:320px) and (max-width:640px) {

}
```

- 判断设备像素比

```css
/* 设备像素比为 1 */
@media only screen and (-webkit-min-device-pixel-ratio: 1), only screen and (min-device-pixel-ratio: 1) {

}

/* 设备像素比为 1.5 */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {

}

/* 设备像素比为 2 */
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {

}
```

### 常用设备设置

[其他设备](https://guide.aotu.io/docs/css/query.html)

**iPhones**:

```css
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 5 and 5S ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6 ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {

}

/* Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6+ ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3) {

}

/* Portrait */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
```