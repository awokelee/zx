# Vue 的原生指令

### v-show

为 `false` 时 `display: none;`, 如果只是为了显示隐藏 建议用 `v-show`.

- `v-if`

为 `false` 时, 节点是不存在的.

`v-if` 会引起重绘, 节点多会引起性能问题.

### v-for

`v-for` 可以遍历数组和对象, 注意 `key` 要设置唯一的值, 不推荐 数组的 `index`, 因为 `index` 是变化的.

数组:

`<li v-for="(item, index) in arr" :key="item.id"></li>`

对象:

`<li v-for="(val, key, index) in arr" :key="val"></li>`

类似 `Object.keys({})`.

### v-on

`v-on` 本质是绑定在 `vm` 上.

`v-on` 写在 `dom` 元素上, 其实就是用的 `document.addEventlistener`.

`v-on` 绑定在组件上则用的是 `$on`.

```js
<div v-on:click="handeleClick"></div>
```

### v-model

假设这里 `arr: [ 2, 3]`. 则 第二个和第三个 `checkbox` 是选中状态.

`:value="1"` 如果不加 `:` 则表示绑定的是字符串, 加了 `:` 表示数字.

```js
<div>
  <input type="checkbox" :value="1" v-model="arr">
  <input type="checkbox" :value="2" v-model="arr">
  <input type="checkbox" :value="3" v-model="arr">
</div>
```

绑定在单选框:

```js
<div>
  <input type="radio" value="one" v-model="picked">
  <input type="radio" value="two" v-model="picked">
</div>
```

- 修饰符 `.number` `.trim` `.lazy`

`<input text="text" v-model.number="text">`, 默认是字符串

`<input text="text" v-model.trim="text">`, 去前后空格

`<input text="text" v-model.lazy="text">`, 默认绑定的是 `input` 事件, 当设置 `.lazy` 则绑定的是 `onchange` 事件.

### v-pre

```js
<div>Text: {{text}}</div>
```

### v-cloak

使用了 `webpack` 一般都用不到, 只有在直接页面引入 `vue` 库代码, 模版写在 `html` 中 才用到.

`v-cloak` 就是当没加载好先设置一个样式, 当加载完成会去掉 `v-cloak`.

### v-once

`v-once` 代表 `vue` 不会再去检测了, 一般是存放静态内容.

```js
<div v-once>{{text}}</div>
```