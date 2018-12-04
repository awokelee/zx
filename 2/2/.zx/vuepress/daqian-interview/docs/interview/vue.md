# Vue

## axios 设置 xsrf

由于项目需要，在客户端生成 `xsrf` `token`，在发请求的时候在 `header` 里发给服务端。

```js
import axios from 'axios'
// 创建一个修改了默认配置的 axios 实例
const instance = axios.create({
    xsrfCookieName: '_csrf',    // axios 要从 cookie 中取的 cookie 的 key
    xsrfHeaderName: '_csrf'     // axios 将在 header 中设置 xsrf 的 key，value 使用上面 cookie 对应的值
})

// request 拦截器
instance.interceptors.request.use((config) => {
    // 请求发送前，在 cookie 里生成 xsrf token
    document.cookie = `_csrf=${new Date().getTime()}`
    return config
})

export default instance
```

`axios` 会在请求的时候自动从 `cookie` 中取出你配置的 `xsrfCookieName` 的值，然后设置到 `requestHeader` 中你配置的 `xsrfHeaderName` 上

## axios设置两个baseUrl

可以弄两个 axios 实例, 针对不同 api 设置不同 baseUrl

## 开发多页应用

嵌套路由: 市面上所谓的用单页应用框架开发多页应用

## Vue IE9 以上才支持

因为 `Object.defineProperty` `IE9+` 才支持.

## 注册全局组件

`Vue.component('组件名', 组件对象)`, `component` 不带 `s`

## 组件内注册

`components: { '组件名', 组件对象 }`, `components` 带 `s`

## 全局过滤器

`Vue.filter('过滤器名', 过滤方式fn)`, `filter` 不带 `s`

使用:

```md
{{ 内容 | 使用过滤器输出 }}
```

## 组件过滤器

`filter: {'过滤器名', 过滤方式fn}`, `filters` 带 `s`

使用:

```md
{{ 内容 | 使用过滤器输出 }}
```

## watch

监视单个

```js
data() {
  return {
    myText: '111',
    stus: [{
      name: 'jx'
    }]
  }
}
```

**基本数据类型简单监视**:

```js
watch: {
  myText:function (newV, oldV) {
    console.log(newV, oldV)
  }
}
```

**复杂数据类型深度监视**:

监视的是对象的地址, 地址没变, 改变的是同地址属性的值

深度监视: `object || array`

```js
watch: {
  stus: {
    deep: true,
    handler: function (newV, oldV) {
      console.log(newV, oldV)
    }
  }
}
```

## computed

监视多个

```js
data(){
  return {
    n1: 0,
    n2: 0,
  }
},
computed: {
  // 原值不变, 缓存不调函数的优化机制
  result: function () {
    return this.n1 - 0 + this.n2 - 0
  }
}
```

使用:

```js
{{ result }}
```

## slot

- 内置的组件
- `slot` 其实就是父组件传递的 `DOM` 结构
- `<子组件>DOM</子组件>`
- `slot` 动态的 `DOM`、`props` 是动态的数据

## 获取 DOM

- 获取的 DOM

```js
<button ref="btn"></button>

mounted(){
  this.$refs.btn
}
```

- 获取的是组件

```js
<My-Component ref="temp"></My-Component>

mounted(){
  this.$refs.temp
}
```

## $nextTick

```js
mounted(){
  this.isShow = true;

  // this.$refs.input.focus()

  // 我们希望 vue 正真渲染 DOM 到页面以后,才做的事
  this.$nextTick(function () {
    this.$refs.input.focus()
  })
}
```

## 生命周期

- 内置组件

`keep-alive`: `activated`, `deactivate

d`. 表示组件被激活和停用

`keep-alive` 包裹 `v-if` 可以提升性能, 避免频繁创建和销毁的组件用

```js
<keep-alive>
  <test v-if="isExist"></test>
</keep-alive>
```

## Vue 插件