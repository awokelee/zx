# DOM

`Document Object Model`.

`DOM` 可以理解为:

浏览器把拿到的 `html` 代码, 结构化成一个浏览器能识别并且 `js` 可操作的一个模型而已.

`DOM` 的数据结构是 `树`.

### 获取 DOM 节点

```js
var div1 = document.getElementById('div1') // 元素
var divList = document.getElementsByTagName('div') // 集合
console.log(divList.length)
console.log(divList[0])

var containerList = document.getElementsByClassName('.container') // 集合
var pList = document.querySelectorAll('p') // 集合
```

### property

```js
var pList = document.querySelectorAll('p') // 集合
var p = pList[0]
console.log(p.style.width) // 获取样式
p.style.width = '100px' // 修改样式
console.log(p.className) // 获取 class
p.className = 'p1' // 修改 class

// 获取 nodeName 和 nodeType
console.log(p.nodeName)
console.log(p.nodeType)
```

### attribute

```js
var pList = document.querySelectorAll('p') // 集合
var p = pList[0]

p.getAttribute('data-name')
p.setAttribute('data-name', 'imc')

p.getAttribute('style')
p.getAttribute('style', 'font-size:30px')
```

### property 和 attribute 区别

- `property` 只是一个 `JS` 对象的属性的修改

- `attribute` 是对 `html` 标签属性的修改

### 新增节点

```js
var div1 =  document.getElementById('div1')

// 添加新节点
var p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
// 添加新创建的元素
div1.appendChild(p1)

// 移动已有节点
var p2 = document.getElementById('p2')
div1.appendChild(p2)
```

### 获取父元素和子元素

```js
var div1 = document.getElementById('div1')
var parent = div1.parentElement

var child = div1.childNodes
div1.removeChild(child[0])
```