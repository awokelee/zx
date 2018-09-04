# mutation 和 action

### mutation

- `store/mutations/mutations.js`

```js
export default {
  // 只有两个参数, 第二个参数是一个对象, 传第三个参数进去会得到 undefined
  // 如果要传多个, 可以改成对象 {num, num2}
  updateCount(state, num){
    state.count = num
  }
}
```

### action

`action` 用于异步修改数据.

- `store/actions/actions.js`

```js
export default {
  // 只有两个参数, 第二个参数是一个对象, 传第三个参数进去会得到 undefined
  updateCountAsync(store, data){
    setTimeout(()=>{
      store.commit('updateCount', data.num)
    }, data.time)
  }
}
```

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
    actions
  })
}
```

- 组件中使用

```js
mounted() {
  this.$store.dispatch('updateCountAsync', {
    num: 5,
    time: 2000
  })
}
```

### mapActions 和 mapMutations

要写在 `methods` 里面, 用法类似 `mapState`.

```js
import {mapActions, mapMutations} from 'vuex'

methods: {
  // 其他方法参考 mapState
  ...mapActions(['updateCountAsync']),
  ...mapMutations(['updateCount']),
}
```