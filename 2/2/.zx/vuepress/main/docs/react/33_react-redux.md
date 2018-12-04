# react-redux

`react-redux` 帮助我们在 `react` 中使用 `redux`. 实际项目中用的很多.

- 安装

`yarn add react-redux`

- 目录结构

```bash
├── index.js
├── store
|  ├── actionCreators.js
|  ├── actionTypes.js
|  ├── index.js
|  └── reducer.js
└── TodoList.js
```

- index.js

```js {4,8,9,10,11,12}
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store'

// react-redux 核心 API Provider 提供 store, Provider 内所有的组件都能获取到 store
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
```

- actionTypes.js

```js
export const ADD_ITEM = 'add_item'
export const CHANGE_INPUT_VALUE = 'change_input_value'
```

- actionCreators.js

```js
import { ADD_ITEM, CHANGE_INPUT_VALUE } from './actionTypes'

export const getChangeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItem = () => ({
  type: ADD_ITEM
})
```

- store/index.js

```js
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
```

- reducer.js

```js
import { ADD_ITEM, CHANGE_INPUT_VALUE } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state;
}
```

- TodoList.js

```js {2,21,29,47}
import React from 'react'
import { connect } from 'react-redux'
import { getAddItem, getChangeInputValue } from './store/actionCreators'

const TodoList = (props) => {
  const { inputValue, handleInputChange, handleClickBtn, list, handleDelete } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange}/>
        <button onClick={handleClickBtn}>提交</button>
      </div>
      <ul>
        {list.map((item, index)=>{ return <li key={index}>{item}</li> })}
      </ul>
    </div>
  )
}

// 映射关系: store 的 state 映射到 props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// 映射关系: store.dispatch 挂载到 props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getChangeInputValue(e.target.value)
      dispatch(action)
    },
    handleClickBtn() {
      const action = getAddItem()
      dispatch(action)
    },
  }
}

// react-redux 核心 API connect, 让组件与 store 连接.
// 连接规则就是 mapStateToProps, 也就是 state 转 props.
// 'TodoList' 组件这里只有 render 函数, 是一个 UI 组件, 
// 但 connect 方法把 TodoList 包装成了容器组件.
// export 的是 connect 执行的结果, 也就是一个容器组件.
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
```