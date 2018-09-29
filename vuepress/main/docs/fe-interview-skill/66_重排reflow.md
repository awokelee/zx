# 重排 Reflow

- **定义**

`DOM` 结构中的各个元素都有自己的盒子(模型), 这些都需要浏览器根据各种样式来计算并根据计算结果将元素

放到它该出现的位置, 这个过程称之为 `Reflow`.

- **触发 Reflow**

当你 `增加、删除、修改 DOM 节点` 时, 会导致 `Reflow` 或 `Repaint`

当你 `移动 DOM 的位置`, 或是搞个 `动画` 的时候

当你 `修改 CSS 样式` 的时候

当你 `resize 窗口` 的时候(移动端没有这个问题), 或是滚动的时候

当你 `修改网页的默认字` 体时

注：`display:none` 会触发 `reflow`，而 `visibility:hidden` 只会触发 `repaint`，因为没有发现位置变化。

### 减少 reflow/repaint

下面是一些 `Best Practices`：

- 不要一条一条地修改 `DOM` 的样式。与其这样，还不如预先定义好 `css` 的 `class`，然后修改 `DOM` 的`className`。

```js
// bad
var left = 10,
top = 10;
el.style.left = left + "px";
el.style.top  = top  + "px";

// Good
el.className += " theclassname";

// Good
el.style.cssText += "; left: " + left + "px; top: " + top + "px;";
```

- 把 `DOM` 离线后修改。如：

使用 `documentFragment` 对象在内存里操作 `DOM` 先把 `DOM` 给 `display:none`(有一次 `reflow`)，然后你想怎么改就怎么改。比如修改100次，然后再把他显示出来。 `clone` 一个DOM结点到内存里，然后想怎么改就怎么改，改完后，和在线的那个的交换一下。

- 不要把 `DOM` 结点的属性值放在一个循环里当成循环里的变量。不然这会导致大量地读写这个结点的属性。

- 尽可能的修改层级比较低的 `DOM`。当然，改变层级比较底的 `DOM` 有可能会造成大面积的 `reflow`，但是也可能影响范围很小。

- 为动画的 `HTML` 元件使用 `fixed` 或 `absoult` 的 `position`，那么修改他们的 `CSS` 是不会`reflow` 的。

- 千万不要使用 `table` 布局。因为可能很小的一个小改动会造成整个 `table` 的重新布局。