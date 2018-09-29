# 父子组件传值完整示例

- 子组件 `TodoItem`

```js {7,12,17}
import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    // 绑定 this, 性能比直接绑定在 render 中好
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content } = this.props
    return <div onClick={this.handleClick}>{content}</div>
  }

  handleClick(){
    const { handleItemDelete, index } = this.props
    typeof handleItemDelete === 'function' && handleItemDelete(index)
  }
}

export default TodoItem
```

- 父组件 `TodoList`

```js {2,28,34,50,58,59,60,61}
import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props) // 调用父类构造函数
    this.state = { inputValue: 'hello', list: [] }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem(){
    return this.state.list.map((item, index)=>{
      return (
        <TodoItem
          key={index}
          content={item} 
          index={index}
          handleItemDelete={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange(e){
    // 16 版本新写法, 里面是个函数变成异步, 需要先保存 e.target.value
    const inputValue = e.target.value
    this.setState(() => ({ inputValue }))
    // 旧版本写法
    // this.setState({ inputValue: e.target.value })
  }

  handleBtnClick(){
    if(!this.state.inputValue) return
    // 接受一个参数, prevState 表示改变之前的状态
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index){
    this.setState(prevState=>{
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default TodoList
```