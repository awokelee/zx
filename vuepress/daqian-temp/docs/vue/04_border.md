# border.css 移动端 1px 边框

::: tip 1px 问题
因为 `Retine` 屏的分辨率始终是普通屏幕的`2`倍，`1px`的边框在`devicePixelRatio=2`的`retina`屏下会显示成`2px`，所以在高清瓶下看着`1px`总是感觉变胖了
:::

- 移动端使用 `border.css` 解决移动端 `1px` 问题

首先, 下载好 `border.css` 移动到 `src/assets/styles/` 目录

然后在 `main.js` 引入, `import './assets/styles/border.css'`

下面是 `border.css` 文件的内容, 可以直接复制保存

::: tip 在代码中怎么使用
观察 `border.css` 文件, 它里面都是 一个个 `.` `css` 类样式, 你需要元素哪个 **方位** 添加边框加上类名即可
比如: 我想要在 div 元素的上部加上边框, 则 `<div class="border border-top"></div>`
:::

```css
@charset "utf-8";
.border,
.border-top,
.border-right,
.border-bottom,
.border-left,
.border-topbottom,
.border-rightleft,
.border-topleft,
.border-rightbottom,
.border-topright,
.border-bottomleft {
    position: relative;
}
.border::before,
.border-top::before,
.border-right::before,
.border-bottom::before,
.border-left::before,
.border-topbottom::before,
.border-topbottom::after,
.border-rightleft::before,
.border-rightleft::after,
.border-topleft::before,
.border-topleft::after,
.border-rightbottom::before,
.border-rightbottom::after,
.border-topright::before,
.border-topright::after,
.border-bottomleft::before,
.border-bottomleft::after {
    content: "\0020";
    overflow: hidden;
    position: absolute;
}
/* border
 * 因，边框是由伪元素区域遮盖在父级
 * 故，子级若有交互，需要对子级设置
 * 定位 及 z轴
 */
.border::before {
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #eaeaea;
    transform-origin: 0 0;
}
.border-top::before,
.border-bottom::before,
.border-topbottom::before,
.border-topbottom::after,
.border-topleft::before,
.border-rightbottom::after,
.border-topright::before,
.border-bottomleft::before {
    left: 0;
    width: 100%;
    height: 1px;
}
.border-right::before,
.border-left::before,
.border-rightleft::before,
.border-rightleft::after,
.border-topleft::after,
.border-rightbottom::before,
.border-topright::after,
.border-bottomleft::after {
    top: 0;
    width: 1px;
    height: 100%;
}
.border-top::before,
.border-topbottom::before,
.border-topleft::before,
.border-topright::before {
    border-top: 1px solid #eaeaea;
    transform-origin: 0 0;
}
.border-right::before,
.border-rightbottom::before,
.border-rightleft::before,
.border-topright::after {
    border-right: 1px solid #eaeaea;
    transform-origin: 100% 0;
}
.border-bottom::before,
.border-topbottom::after,
.border-rightbottom::after,
.border-bottomleft::before {
    border-bottom: 1px solid #eaeaea;
    transform-origin: 0 100%;
}
.border-left::before,
.border-topleft::after,
.border-rightleft::after,
.border-bottomleft::after {
    border-left: 1px solid #eaeaea;
    transform-origin: 0 0;
}
.border-top::before,
.border-topbottom::before,
.border-topleft::before,
.border-topright::before {
    top: 0;
}
.border-right::before,
.border-rightleft::after,
.border-rightbottom::before,
.border-topright::after {
    right: 0;
}
.border-bottom::before,
.border-topbottom::after,
.border-rightbottom::after,
.border-bottomleft::after {
    bottom: 0;
}
.border-left::before,
.border-rightleft::before,
.border-topleft::after,
.border-bottomleft::before {
    left: 0;
}
@media (max--moz-device-pixel-ratio: 1.49),
(-webkit-max-device-pixel-ratio: 1.49),
(max-device-pixel-ratio: 1.49),
(max-resolution: 143dpi),
(max-resolution: 1.49dppx) {
    /* 默认值，无需重置 */
}
@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),
(min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),
(min-resolution: 144dpi) and (max-resolution: 239dpi),
(min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
    .border::before {
        width: 200%;
        height: 200%;
        transform: scale(.5);
    }
    .border-top::before,
    .border-bottom::before,
    .border-topbottom::before,
    .border-topbottom::after,
    .border-topleft::before,
    .border-rightbottom::after,
    .border-topright::before,
    .border-bottomleft::before {
        transform: scaleY(.5);
    }
    .border-right::before,
    .border-left::before,
    .border-rightleft::before,
    .border-rightleft::after,
    .border-topleft::after,
    .border-rightbottom::before,
    .border-topright::after,
    .border-bottomleft::after {
        transform: scaleX(.5);
    }
}
@media (min--moz-device-pixel-ratio: 2.5),
(-webkit-min-device-pixel-ratio: 2.5),
(min-device-pixel-ratio: 2.5),
(min-resolution: 240dpi),
(min-resolution: 2.5dppx) {
    .border::before {
        width: 300%;
        height: 300%;
        transform: scale(.33333);
    }
    .border-top::before,
    .border-bottom::before,
    .border-topbottom::before,
    .border-topbottom::after,
    .border-topleft::before,
    .border-rightbottom::after,
    .border-topright::before,
    .border-bottomleft::before {
        transform: scaleY(.33333);
    }
    .border-right::before,
    .border-left::before,
    .border-rightleft::before,
    .border-rightleft::after,
    .border-topleft::after,
    .border-rightbottom::before,
    .border-topright::after,
    .border-bottomleft::after {
        transform: scaleX(.33333);
    }
}
```