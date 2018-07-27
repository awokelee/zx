# bus 通信

::: tip
`BUS` 本质就是 重新 `new` 了个 `Vue`, 将你需要的数据放在 新 `new` 的 `vue` 上

利用 `$on`监听 和 `$emit`触发两个方法.
:::

- 创建

新建 `src/components/common/bus.js` 文件, 内容如下:

```js {4,6}
import Vue from 'vue'

// 使用 Event Bus
const bus = new Vue()

export default bus
```

- 组件 A 中

```html {2,6}
<script>
import bus from '@/components/common/bus'

...
// 方法中
bus.$on('collapse', msg => {
  this.collapse = msg
})
</script>
```

- 组件 B 中

```html {2,6}
<script>
import bus from '@/components/common/bus'

...
// 方法中
bus.$emit('collapse', this.collapse)
</script>
```