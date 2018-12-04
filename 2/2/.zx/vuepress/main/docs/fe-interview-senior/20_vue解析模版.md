# Vue 解析模版

```html
<div id="app">
  <div>
    <input v-model="title">
    <button v-on:click="add">submit</button>
  </div>
  <div>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</div>
```

- 本质: 字符串

- 有逻辑, 如 `v-if` `v-for` 等

- 与 `html` 格式很像, 但有很大区别

- 最终还是要转换为 `html` 来显示

模版最终必须转换成 `JS` 代码, 因为:

- 有逻辑(`v-if` `v-for`), 必须用 `JS` 才能实现

- 转换为 `html` 渲染页面, 必须用 `JS` 才能实现

因此, 模版最重要转换成一个 `JS` 函数(`render` 函数)