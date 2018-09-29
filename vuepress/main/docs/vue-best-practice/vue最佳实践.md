# Vue 最佳实践

## vue数据更新， 视图未更新

解决方案如下：

1、通过vue.set方式赋值

`Vue.set(数据源, key, newValue)`

2、 通过Array.prototype.splice方法

`数据源.splice(indexOfItem, 1, newValue)`

3、修改数据的长度

`数据源.splice(newLength)`

4、变异方法

Vue.js 包装了被观察数组的变异方法，故它们能触发视图更新。被包装的方法有：

```js
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

## 属性给初始值

```html
<div id="demo">
  <p v-class="green: validation.valid">{{message}}</p>
  <input v-model="message">
</div>
```

```js
new Vue({
  el: '#demo',
  data: {
    message: '',
    validation: {
      valid: false
    }
  }
})
```

Vue 通过递归遍历数据对象并将现有属性转换为使用 `Object.defineProperty` 的 `getter` 和 `setter` 来观察数据更改.

**如果在创建实例时不存在属性，则 Vue 将无法跟踪它。**

## 添加和删除属性

Vue 通过 Object.defineProperty 来观察数据, 在 ECMAScript 5中，无法检测何时将新属性添加到Object，或者何时从Object中删除属性。

为了处理这种约束，观察对象增加了三种方法:

- `obj.$add(key, value)`
- `obj.$set(key, value)`
- `obj.$delete(key)`

Vue 组件实例也有相应的实例方法：

- vm.$get(path)
- vm.$set(path, value)
- vm.$add(key, value)
- vm.$delete(key, value)

## Vue 的异步更新视图

设置时 `vm.someData = 'new value'`，`DOM` 不会立即更新, 它将在 next “tick 中更新, 可以 Vue.nextTick(callback)在数据更改后立即使用- 当调用回调时，DOM将被更新。

全局方法:

```js
var vm = new Vue({
  el: '#example',
  data: {
    msg: '123'
  }
})

vm.msg = 'new message' // 改变 msg

vm.$el.textContent === 'new message' // false

Vue.nextTick(function () {
  vm.$el.textContent === 'new message' // true
})
```

组件方法:

```js
Vue.component('example', {
  template: '<span>{{msg}}</span>',
  data: function () {
    return {
      msg: 'not updated'
    }
  },
  methods: {
    updateMessage: function () {
      this.msg = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    }
  }
})
```

## 更改默认选项

可以通过在全局 `Vue.options` 对象上设置选项来更改选项的默认值。例如，您可以设置 `Vue.options.replace = false` 为所有Vue实例提供行为 `replace: false`。请谨慎使用此功能，并仅在启动新项目时使用此功能，因为它会影响每个实例的行为。

## 善用 watch的 immediate 属性

例如有请求需要再也没初始化的时候就执行一次，然后监听他的变化，很多人这么写：

```js
created(){
    this.fetchPostList()
},
watch: {
    searchInputValue(){
        this.fetchPostList()
    }
}
```

上面的这种写法我们可以完全如下写：

```js
watch: {
    searchInputValue:{
        handler: 'fetchPostList',
        immediate: true
    }
}
```

## 精简组件注册与引入

一般情况下，我们组件如下写：

```js
import BaseButton from './baseButton'
import BaseIcon from './baseIcon'
import BaseInput from './baseInput'

export default {
  components: {
    BaseButton,
    BaseIcon,
    BaseInput
  }
}
<BaseInput  v-model="searchText" @keydown.enter="search" />
<BaseButton @click="search">  <BaseIcon name="search"/></BaseButton>
```

步骤一般有三部，第一步，引入、第二步注册、第三步才是正式的使用

这也是最常见和通用的写法。但是这种写法经典归经典，好多组件，要引入多次，注册多次，感觉很烦。

我们可以借助一下webpack，使用 require.context() 方法来创建自己的（模块）上下文，从而实现自动动态require组件。

思路是：在src文件夹下面main.js中，借助webpack动态将需要的基础组件统统打包进来。

代码如下：

```js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Require in a base component context
const requireComponent = require.context(
  ‘./components’, false, /base-[\w-]+\.vue$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )

  // Register component globally
  Vue.component(componentName, componentConfig.default || componentConfig)
})
```

这样我们引入组件只需要第三步就可以了：

```js
<BaseInput
  v-model="searchText"
  @keydown.enter="search"
/>
<BaseButton @click="search">
  <BaseIcon name="search"/>
</BaseButton>
```

## 精简 vuex 的 modules 引入

对于vuex，我们输出store如下写：

```js
import auth from './modules/auth'
import posts from './modules/posts'
import comments from './modules/comments'
// ...

export default new Vuex.Store({
  modules: {
    auth,
    posts,
    comments,
    // ...
  }
})
```

要引入好多modules，然后再注册到Vuex.Store中~~

精简的做法和上面类似，也是运用 require.context()读取文件，代码如下：

```js
import camelCase from 'lodash/camelCase'
const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  // Don't register this file as a Vuex module
  if (fileName === './index.js') return

  const moduleName = camelCase(
    fileName.replace(/(\.\/|\.js)/g, '')
  )
  modules[moduleName] = {
                namespaced: true,
               ...requireModule(fileName),
              }

})

export default modules
```

这样我们只需如下代码就可以了：

```js
import modules from './modules'
export default new Vuex.Store({
  modules
})
```

## 路由的延迟加载

可以通过require方式或者import()方式动态加载组件。

```js
{
  path: '/admin',
  name: 'admin-dashboard',
  component:require('@views/admin').default
}
```

或者

```js
{
  path: '/admin',
  name: 'admin-dashboard',
  component:() => import('@views/admin')
}
```

## router 设置 key 刷新

下面这个场景真的是伤透了很多程序员的心...先默认大家用的是Vue-router来实现路由的控制。 假设我们在写一个博客网站，需求是从/post-haorooms/a，跳转到/post-haorooms/b。然后我们惊人的发现，页面跳转后数据竟然没更新？！原因是vue-router"智能地"发现这是同一个组件，然后它就决定要复用这个组件，所以你在created函数里写的方法压根就没执行。通常的解决方案是监听$route的变化来初始化数据，如下：

```js
data() {
  return {
    loading: false,
    error: null,
    post: null
  }
}, 
watch: {
  '$route': {
    handler: 'resetData',
    immediate: true
  }
},
methods: {
  resetData() {
    this.loading = false
    this.error = null
    this.post = null
    this.getPost(this.$route.params.id)
  },
  getPost(id){

  }
}
```

bug是解决了，可每次这么写也太不优雅了吧？秉持着能偷懒则偷懒的原则，我们希望代码这样写：

```js
data() {
  return {
    loading: false,
    error: null,
    post: null
  }
},
created () {
  this.getPost(this.$route.params.id)
},
methods () {
  getPost(postId) {
    // ...
  }
}
```

解决方案：给router-view添加一个唯一的key，这样即使是公用组件，只要url变化了，就一定会重新创建这个组件。

```js
<router-view :key="$route.fullpath"></router-view>
```

注：我个人的经验，这个一般应用在子路由里面，这样才可以不避免大量重绘，假设app.vue根目录添加这个属性，那么每次点击改变地址都会重绘，还是得不偿失的！

## 唯一组件根元素
场景如下：

```js
(Emitted value instead of an instance of Error)
  Error compiling template:

  <div></div>
  <div></div>

  - Component template should contain exactly one root element. 
    If you are using v-if on multiple elements, use v-else-if 
    to chain them instead.
```

模板中div只能有一个，不能如上面那么平行2个div。

例如如下代码：

```js
<template>
  <li
    v-for="route in routes"
    :key="route.name"
  >
    <router-link :to="route">
      {{ route.title }}
    </router-link>
  </li>
</template>
```

会报错！

我们可以用render函数来渲染

```js
functional: true,
render(h, { props }) {
  return props.routes.map(route =>
    <li key={route.name}>
      <router-link to={route}>
        {route.title}
      </router-link>
    </li>
  )
}
```

## 组件包装、事件属性穿透问题

当我们写组件的时候，通常我们都需要从父组件传递一系列的props到子组件，同时父组件监听子组件emit过来的一系列事件。举例子：

```js
//父组件
<BaseInput 
    :value="value"
    label="密码" 
    placeholder="请填写密码"
    @input="handleInput"
    @focus="handleFocus>
</BaseInput>

//子组件
<template>
  <label>
    {{ label }}
    <input
      :value="value"
      :placeholder="placeholder"
      @focus=$emit('focus', $event)"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>
```

这样写很不精简，很多属性和事件都是手动定义的，我们可以如下写：

```js
<input
    :value="value"
    v-bind="$attrs"
    v-on="listeners"
>

computed: {
  listeners() {
    return {
      ...this.$listeners,
      input: event => 
        this.$emit('input', event.target.value)
    }
  }
}
```

$attrs包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定，并且可以通过 v-bind="$attrs" 传入内部组件。

$listeners包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件。

## $destroy()销毁组件，没有销毁slot

可以用v-if判断slot，如下：

```js
<comp-b @close-a="showA = false">
  <comp-a v-if="showA"/>
</comp-b>
```

另外可以用v-if指定组件渲染循序，例如，某个组件要在ajax请求返回数据之后再渲染，我们可以给组件一个状态，默认是false，当ajax请求返回数据之后，状态改成true。

:::tip 参考
[【译】vue技术分享-你可能不知道的7个秘密](https://www.haorooms.com/post/vue_7secret), by haoroom.
:::