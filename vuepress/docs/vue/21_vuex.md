# vuex 状态管理

> 全局状态管理

- 这里是一个简易版, 新建三个文件

`src/store/index.js`

```js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
```

`src/store/state.js`

```js
export default {
  // 站点对话框保存
  siteDialogVisible: true,
}
```

`src/store/mutations.js`

```js
export default {
  // 站点保存对话框
  updateSiteDialogVisible (state, siteDialogVisible) {
    state.siteDialogVisible = siteDialogVisible
  },
}
```

在 `main.js` 引入

```js
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

  - `get/set`
  
  取值: `this.$store.state.siteDialogVisible`

  设值: `this.$store.commit('updateSiteDialogVisible', value)`

  - 需要双向绑定的用 `computed`

```html
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