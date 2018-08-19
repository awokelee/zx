# propTypes 和 defaultProps

- `propTypes` 类型校验

- `defaultProps` 默认值

[官网链接](https://reactjs.org/docs/typechecking-with-proptypes.html)

```js {3,23,36}
import React, { Component } from 'react'
// 1. 引入 PropTypes
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content, test } = this.props
    return <div onClick={this.handleClick}>{test} - {content}</div>
  }

  handleClick(){
    const { handleItemDelete, index } = this.props
    typeof handleItemDelete === 'function' && handleItemDelete(index)
  }
}

// 2. 添加 propTypes, 常用的如下, 还有很多参考官网文档.
TodoItem.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  test: PropTypes.string.isRequired, // 必传
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number, PropTypes.string), // 数组的内容是 number 或 string
  optionalOneOf: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 之一
}

// 3. 设置 defaultProps
TodoItem.defaultProps = {
  test: ' world'
}

export default TodoItem
```