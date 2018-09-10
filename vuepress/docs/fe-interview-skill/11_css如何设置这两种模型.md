# CSS 如何设置这两种模型

- 浏览器默认方式: `box-sizing: content-box;`

- 标准模型: `width` 就是 `content` 宽度, 所以 `CSS` 代码是 `box-sizing: content-box;`

- IE 模型: `width` 包含 `border` 和 `padding`, 所以 `CSS` 代码是 `box-sizing: border-box;`