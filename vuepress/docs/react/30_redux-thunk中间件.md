# redux-thunk 中间件来请求数据

[redux-thunk 说明](https://github.com/reduxjs/redux-thunk)

`redux-thunk` 让我们在 `action` 中可以写异步代码.

- 安装

`yarn add redux-thunk`

- 配置

`redux-thunk` 跟 `redux-devtools` 一起用的时候需要配置.

[redux-devtools-extension 配置说明](https://github.com/zalmoxisus/redux-devtools-extension)

`store/index.js` 内容如下:

```js {1,2,5,6,7,8,9,11,12}
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(
  reducer,
  enhancer
)
export default store
```

- reducer.js

```js {1,10,11,12,13,14}
import { INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

// reducer 可以接收 state, 但是绝不能修改 state
export default (state = defaultState, action) => {
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  return state
}
```

- actionCreators.js

```js {1,4,5,6,7,9,20}
import { INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios'

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  // 使用 redux-thunk 后 action 可以是一个函数.
  return (dispatch) => {
    axios.get('/list.json')
      .then((res)=>{
        const data = res.data
        const action = initListAction(data)
        dispatch(action)
      })
      .catch((err)=>{console.log('失败')})
  }
}
```

- TodoList.js

```js {3,7,8,9,10,11}
import React, { Component } from 'react'
import store from './store' // 引入 store
import { getTodoList } from './store/actionCreators'

class TodoList extends Component {
  ......
  componentDidMount() {
    const action = getTodoList()
    // 这里 action 是一个函数, dispatch 触发 actiton 自动执行(调接口)
    store.dispatch(action)
  }
  ...
}

export default TodoList
```