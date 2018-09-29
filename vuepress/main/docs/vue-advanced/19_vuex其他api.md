# vuex 其他 api

### store.watch

- `src/index.js`

```js
import Vuex from 'vuex'
import createStore from './store/store'

Vue.use(Vuex)

const store = createStore()

// 相当于 getter, 当 count 改变, 触发回调
store.watch((state) => state.count + 1, (newCount) => {
  console.log('new count watched , ' + newCount)
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
```

### store.subscribe

- `src/index.js`

`store.subscribe` 会拿到所有 `mutations` 的变化.

```js
...
const store = createStore()

// 每次当 mutations 被调用都会触发回调
store.subscribe((mutation, state)=>{
  console.log(mutation.type)
  console.log(mutation.payload)
})
...
```

### store.subscribeAction

- `src/index.js`

`store.subscribeAction` 监听 `action` 被调用.

```js
...
const store = createStore()

// action被调用时
store.subscribeAction((action, state)=>{
  console.log(action.type)
  console.log(action.payload)
})
...
```

### 定义插件

- `store/store.js`

```js
import Vue from 'vue'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default () => {
  const store = Vuex.Store({
    state: defaultState,
    mutations,
    getters,
    actions,
    plugins: [
      (store) => {
        console.log('my vuex plugins')
      }
    ]
  })

  ...
}
```