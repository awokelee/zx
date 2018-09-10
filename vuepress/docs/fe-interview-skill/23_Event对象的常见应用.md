# Event 对象的常见应用

- `event.preventDefault()`

阻止默认事件, 比如 a 链接跳转

- `event.stopPropagation()`

阻止冒泡, 比如父子级元素单独绑定事件

- `event.stopImmediatePropagation()`

比如按钮绑定了两个点击事件 a b, 想让点击 a 后不要再执行 b, 在 a 响应函数加上这个方法即可阻止 b 的执行.

- `event.currentTarget`

比如 `10` 个元素采用事件委托后, 获取当前谁被点击, 早期 `IE` 不支持, 早期 `IE` 用的是 `Event.srcElement`

- `event.target`

一个触发事件的对象的引用.