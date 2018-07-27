# vuex 状态管理

::: tip
`vuex` 全局状态管理, 之所以用 `vuex`, 是因为有一些状态在很多组件用到, 状态改变时组件都要更新

[vuex 官网](https://vuex.vuejs.org/zh/)
:::

- 这里是一个简易版 `vuex`

新建三个文件 `src/store/index.js`, `src/store/state.js`, `src/store/mutations.js`

- `src/store/index.js`

入口文件

```js
// 引入
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// 使用
Vue.use(Vuex)

// export
export default new Vuex.Store({
  state,
  mutations
})
```

- `src/store/state.js`

`state` 状态管理文件

```js {3}
export default {
  // 定义的全局状态, 变量名字个人决定, 这里案例叫 siteDialogVisible
  siteDialogVisible: true,
}
```

- `src/store/mutations.js`

```js {6}
export default {
  // 去改变上面定义的变量的方法, 方法名字个人定, 这里案例叫 updateSiteDialogVisible
  // 第一个参数时全局的 state, 第二个形参是新值
  updateSiteDialogVisible (state, newValue) {
    // 更新 state 中的 siteDialogVisible 为你传进来的
    state.siteDialogVisible = newValue
  },
}
```

- 在 `main.js` 引入

```js {1,6}
import store from './store'

new Vue({
  el: '#app',
  router,
  store, // 使用
  components: {
    App
  },
  template: '<App/>'
})
```

- 组件中使用

  - 直接使用
  
  取值: 在组件中直接使用 `this.$store.state.siteDialogVisible` 即可拿到全局状态 `siteDialogVisible`

  设值: 组件中使用 `this.$store.commit('updateSiteDialogVisible', value)`设置新值, `value` 是你要更新的值

  - 需要双向绑定的用 `computed`, 双绑案例如下:

```html {4,5,6,7,8,9}
<script>
export default {
  name: 'Poster',
  computed: {
    siteDialogVisible: {
      get() { return this.$store.state.siteDialogVisible },
      set(value) { this.$store.commit('updateSiteDialogVisible', value) }
    },
  }
}
</script>
```