# vuex 模块

### vuex 模块案例

- `store/store.js`

```js
import Vue from 'vue'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev, // 禁止其他方式修改数据, 不要在正式环境开启, 用于开发时规范 vuex
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        // mutations 与 state 不一样, 默认是全局的
        // 如果要想是当前模块则需要在上面设置 namespaced: true
        mutations: {
          //  这里的 state 是 a 里面的
          updateText (state) {
            console.log(state)
          }
        },
        getters: {
          // rootState 是全局的 state
          textPlus(state, getters, rootState){
            return state.text + rootState.b.text
          }
        },
        actions: {
          add({state, getters, rootState}){
            // 本模块
            commit('updateText', rootState.count)
            // 全局模块
            // commit('updateCount', {num: 567}, {root: true})
          }
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
}
```

- `app.vue`

```js
computed: {
  textA() {
    // 表示模块 a 的 text
    return this.$store.state.a.text
  },
  ...mapState({
    textB: state => state.b.text
  })
}

methods: {
  // 这里是 namespaced: false
  // ...mapMutations(['updateText'])

  // 这里是 namespaced: true
  // ...mapMutations(['a/updateText'])

  ...mapMutations({
    updateText: 'a/updateText'
  })
}

mounted(){
  // 调用 namespaced: true 的 mutations
  this['a/updateText']('123')
}
```

### 动态注册模块

通过 `registerModule` 动态注册模块, `unregisterModule` 取消注册.

- `src/index.js`

```js
import Vuex from 'vuex'
import createStore from './store/store'

Vue.use(Vuex)

const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})

// store.registerModule('c')

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
```