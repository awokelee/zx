# computed 和 watch

### computed

`computed` 用于显示.

`computed` 本质是 `defineProperty` 的 `get` 方法, 这里会做缓存.

- `get/set` 方式

```js
computed: {
  name: {
    get () {
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    },
    set (name) {
      const names = name.split(' ')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
},
```

- 函数方式

```js
computed: {
  name () {
    console.log('new name')
    return `${this.firstName} ${this.lastName}`
  }
},
```

### watch

`watch` 用于监听, 更多的是用于某个值改变时给后台发请求. 这个是 `computed` 做不到的.

`watch` 本质是执行 `handler` 方法.

`immediate` 为 `false` 会等到值改变才触发一次,  `immediate` 为 `true` 会立马执行一次.

`deep` 默认 `false`, 也就是 默认监听 `obj` 引用的变化, 当 `obj.a` 发生变化, 引用没变, `所以watch` 不会触发, `this.obj = { a: '345' }` 改变 `obj` 会触发.

当 `deep` 设置为 `true` 则, 会将 `obj` 的对象遍历, 每个属性都加上 `watch`, 性能开销更大.

```js
watch: {
  'obj': {
    handler () {
      console.log('obj.a changed')
    },
    immediate: true
    deep: true
  }
}
```

所以 `watch` `obj.a` 把 `deep` 去掉性能更好.

```js
watch: {
  'obj.a': {
    handler () {
      console.log('obj.a changed')
    },
    immediate: true
  }
}
```

- 第二种写法

```js
watch: {
  firstName(newName, oldName){
    this.fullName = newName + ' ' + oldName;
  }
}
```

### 注意点

`watch` 和 `computed` 注意别去改被监听的对象, 容易死循环. 比如监听的是 `obj.a` 而又在 `watch` 中修改 `obj.a` :

```js
  watch: {
    'obj.a': {
      handler () {
        console.log('obj.a changed')
        this.obj.a += 1
      },
      immediate: true
    }
  },
```