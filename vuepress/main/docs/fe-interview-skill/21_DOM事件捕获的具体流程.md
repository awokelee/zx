# DOM 事件捕获的具体流程

从 `window` 开始 -> `document` -> `html` 标签 -> `body` -> ...`目标元素`

![](./media/capture.png)

### DOM 冒泡的具体流程

与捕获流程相反.

从`目标元素`开始 -> ... -> `body` -> `html` -> `document` -> `window`