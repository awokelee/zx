# redux 创建 store

- 安装 `redux`

`yarn add redux`

- 定义 `reducer`

新建文件 `/store/reducer.js`

```js
const defaultState = {
  inputValue: '123',
  list: [1,2,3]
}

export default (state = defaultState, action) => {
  return state
}
```

- 定义 `store`

新建文件 `/store/index.js`, 文件内容如下:

```js {4}
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
```

- 组件中使用 `redux`

```js {4,11}
import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'; // 引入 antd 的 css
import { Input, Button, List } from 'antd'; // 根据需要引入 antd 组件
import store from './store' // 引入 store

class TodoList extends Component {
  constructor(props) {
    super(props)
    // store 有个 getState 方法
    // 这里是把 store 中的 state 赋值给当前组件的 state
    this.state = store.getState()
  }
  render(){
    return (
      <Fragment>
        <div style={{marginTop: 10, marginLeft: 10}}>
          <Input
            value={this.state.inputValue}
            placeholder='todo'
            style={{width: 300, marginRight: 10}}
          />
          <Button type='primary'>提交</Button>
          <List
            style={{marginTop: 10, width: 300}}
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </Fragment>
    )
  }
}

export default TodoList
```