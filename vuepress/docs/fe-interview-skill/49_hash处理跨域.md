# HASH 处理跨域

利用 `hash`:

```js
// 利用hash，场景是当前页面 A 通过iframe或frame嵌入了跨域的页面 B
// 在A中伪代码如下：
var B = document.getElementsByTagName('iframe');
B.src = B.src + '#' + 'data';
// 在B中的伪代码如下
window.onhashchange = function () {
  var data = window.location.hash;
};
```