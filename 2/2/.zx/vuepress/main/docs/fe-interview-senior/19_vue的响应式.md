# Vue 的响应式

响应式:

- 修改 `data` 属性之后, `vue` 立刻监听到, 关键是 `Object.defineProperty`

- `data` 属性被代理到 `vm` 上

```js
var vm  = new Vue({
  el: '#app',
  data: {
    name: 'zhangsan',
    age: 20
  }
})
```

例如 `vm.name` 能获取到 `data` 中的 `name`.

### Object.defineProperty

```js
var obj = {}
var name = 'zs'

Object.defineProperty(obj, 'name', {
  get: function () {
    console.log('get')
    return name
  },
  set: function (newVal) {
    console.log('set')
    name = newVal
  }
})

console.log(obj.name)
obj.name = 'lisi'
```

### 模拟实现 Vue 的响应式

```js
var vm = new Vue({
  el: '#app',
  data: {
    age: 10,
    name: 'zs'
  }
})
```

模拟 `Vue` 的响应式:

```js
var vm = {}
var data = {
  age: 10,
  name: 'zs'
}

var key, value
for (key in data) {
  (function (key) {
    // 命中闭包. 新建一个函数, 保证 key 的独立作用域
    Object.defineProperty(vm, key, {
      get: function () {
        console.log('get')
        return data[key]
      },
      set: function (newVal) {
        console.log('set')
        data[key] = newVal
      }
    })
  })(key)
}
```