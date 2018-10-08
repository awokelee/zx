# immutable

`immutable` 是 `facebook` 历时三年打造的一个库, 这里用来管理 `state`, 防止被人为误操作更改.

- 安装

`yarn add immutable`

- 设置 `immutable` 对象

在 reducer.js 中添加如下代码:

```js {2,5,6,7,13,16}
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

// 转为 immutable 对象.
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS) {
    // immutable 对象的 set 方法, 会结合之前 immutable 对象的值
    // 和设置的值, 返回一个全新的对象.(也就是没有对之前数据修改)
    return state.set('focused', true)
  }
  if(action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}
```

- 获取 `immutable` 对象属性

在 `header/index.js` 组件中使用

```js {6}
......
const mapStateToProps = (state) => {
  // immutable对象不能用 .属性来调用, 
  // state.header.focused 这种是不行的
  return {
    focused: state.header.get('focused')
  }
}
```