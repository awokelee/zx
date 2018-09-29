# 父子组件通信

::: tip
Vue 是单项数据流

父组件传值给子组件(`props`)

子组件要怎么'传'给父组件? **触发方法**, 通知父组件改变数据
:::

加入有如下两个组件, 一个是父组件 一个是子组件

`Parent.vue` 如下:

```html {3,12,16}
<template>
  <div>
    <child :msg="msg"></child>
  </div>
</template>

<script>
import Child from '@/components/Child'
export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      msg: 'to child'
    }
  },
}
</script>
```

以下是 `Child.vue`

```html {4,11}
<template>
  <div>
    <!-- 显示的是 `to child` -->
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Child',
  props:['msg']
}
</script>
```

- 子组件传给父组件

以下是 `Child.vue`

```html {3,13}
<template>
  <div>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props:['msg'],
  methods: {
    handleClick() {
      this.$emit('add', 'to parent')
    }
  }
}
</script>
```

以下是 `Parent.vue`

```html {3,22}
<template>
  <div>
    <child @add="handleAdd"></child>
    <!-- 从组件传来的 `to parent` -->
    {{msg}}
  </div>
</template>

<script>
import Child from '@/components/Child'
export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    handleAdd(param) {
      this.msg = param
    }
  }
}
</script>
```