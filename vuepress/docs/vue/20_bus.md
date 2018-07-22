# bus 通信

- 新建 `src/components/common/bus.js` 文件, 内容如下

```js
import Vue from 'vue'

// 使用 Event Bus
const bus = new Vue()

export default bus
```

- 组件 A 中

```html
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

```html
<script>
import bus from '@/components/common/bus'

...
// 方法中
bus.$emit('collapse', this.collapse)
</script>
```