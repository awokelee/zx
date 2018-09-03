# Vue 实例

```js
import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  watch: {
    text (newText, oldText) {
      console.log(`${newText} : ${oldText}`)
    }
  }
})
```

### $mount

`app.$mount('#root')` 等同于最开始代码中的 `el: '#root',`.

### $data

```js
data: {
  text: 0,
  obj: {}
}
```

`data` 中定义的是 `响应式` 的, 也就是数据改变了会更新到视图, 比如上面的 `text` 和 `obj`.

但是如果后来给 `obj` 新增了属性 `obj.name`, 由于没有在 `data` 给初始值, 不是响应式的, 所以改变 `obj.name` 不会触发视图更新,

这时候可以用 `app.$forceUpdate()`  或者 `app.$set(app.obj, 'name', 'zs')` 更新视图.

`app.$forceUpdate()` 如果控制不好容易无限刷新.

`app.$set()` 是异步的: `nextTick` : 将回调延迟到下次 `DOM` 更新循环之后执行。在修改数据之后立即使用它，然后等待 `DOM` 更新, 推荐使用.

### $set 更新视图

上面的 `obj.name` 本身不是响应式, 通过 `app.$set(app.obj, 'name', i)` 设置后, `obj.name` 就会变成响应式, 也就是以后数据变了视图会随着更新.

### $forceUpdate 强制更新视图

### $props 属性

### $el 挂载元素

### $options 选项

`$options` 就是 `new Vue({})` 中的对象 也就是 `{}` 中的内容, 有个 `render` 函数:

```js
app.$options.render = (h) => {
  return h('div', {}, 'new render function')
}
```

### $root

`app.$root === app`

### $children

### $slots 插槽

### $scopedSlots

### $refs DOM 元素

### $isServer

### $watch

通过实例 `app.$watch` 会返回一个 函数, 用于取消 `watch`.

```js
const unWatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText} : ${oldText}`)
})
setTimeout(() => {
  unWatch()
}, 2000)
```

下面这种模式 `vue` 会在生命周期 `destory` 中主动取消 `watch`.

```js
new Vue({
  el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  watch: {
    text (newText, oldText) {
      console.log(`${newText} : ${oldText}`)
    }
  }
})
```

### $on 监听事件

```js
app.$on('test', (a, b) => {
  console.log(`test emited ${1} ${b}`)
})
```

### $once 触发事件, 只会有一次

```js
app.$once('test', (a, b) => {
  console.log(`test emited ${1} ${b}`)
})
```

### $emit 触发事件

```js
setInterval(() => {
  app.$emit('test', 1, 2)
}, 1000)
```