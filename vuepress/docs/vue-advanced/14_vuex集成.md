# vuex 集成

### 安装

`npm i vuex -S`

### 简单使用

- `store/store.js`

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    updateCount(state, num){
      state.count = num
    }
  }
})

export default store
```

- `src/index.js`

```js
import store from './store/store'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
```

- 组件中使用

```js
mounted(){
  // 获取
  console.log(this.$store.state.count)
  setInterval(()=>{
    // 设置
   this.$store.commit('updateCount', i++)
  }, 1000)
},
computed: {
  count() {
    return this.$store.state.count
  }
}
```

### 改造成通用的, 服务端渲染也能用

同 `router` 原理一样, `store` 也要做类似处理.

每个地方 `import` 的都是同一个 `store`.

这种做法会在服务端渲染的时候导致内存溢出的问题, 因为 `export` 出去的只有一个 `store`, 每次服务端渲染都会重新生成新的 `app`, 会缓存新建的 `app`, 导致服务端渲染结束后, `app` 的内存没有释放, 造成内存溢出.

- `store/store.js`

```js
import Vue from 'vue'

export default () => {
  return new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      updateCount(state, num){
        state.count = num
      }
    }
  })
}
```

- `src/index.js`

```js
import Vuex from 'vuex'
import createStore from './store/store'

Vue.use(Vuex)

const store = createStore()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
```