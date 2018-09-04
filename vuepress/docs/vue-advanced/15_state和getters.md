# state 和 getters

### 拆分目录结构

- `store/state/state.js`

```js
export default {
  count: 0,
  firstName: 'he',
  lastName: 'ha'
}
```

- `store/mutations/mutations.js`

```js
export default {
  updateCount(state, num){
    state.count = num
  }
}
```

- `store/getters/getters.js`

类似 `computed`, 显示时要组装处理下.

```js
export default {
  fullName(state) {
    return `${state.firstName} ${state.lastName}`
  }
}
```

- `store/store.js`

```js
import Vue from 'vue'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev, // 禁止其他方式修改数据, 不要在正式环境开启, 用于开发时规范 vuex
    state: defaultState,
    mutations,
    getters
  })
}
```

### 组件中使用 getters

- 组件中

```js
computed() {
  fullName() {
    return this.$store.getters.fullName
  }
}
```

### mapState 和 mapGetters

- 组件中使用

```js
import {mapState, mapGetters} from 'vuex'

computed: {
  // ...mapState(['count']) // 方式一, 数组, 同名
  /* ...mapState({
    counter: 'count' // 方式二, 对象, 重新命名
  }) */
  ...mapState({
    counter: (state) => state.count // 方式三, 函数
  }),
  ...mapGetters(['fullName'])
}
```