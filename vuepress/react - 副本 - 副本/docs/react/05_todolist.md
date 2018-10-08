# 简单 TodoList 组件

```js
import React, { Component, Fragment } from 'react'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props) // 调用父类构造函数
    this.state = {
      inputValue: 'hello',
      list: []
    }
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
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>submit</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index)=>{
              return (
                <li 
                  key={index} 
                  onClick={this.handleItemDelete.bind(this, index)}
                  dangerouslySetInnerHTML={{__html: item}}
                >
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e){
    // 注意 this
    this.setState({ inputValue: e.target.value })
  }

  handleBtnClick(){
    if(!this.state.inputValue) return
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index){
    // immutable, state 不允许我们做任何的改变, 会有性能问题, 我们可以做个拷贝
    // 也就是不允许 this.state.list.splice(index, 1)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list })
  }
}

export default TodoList
```