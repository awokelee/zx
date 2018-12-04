# redux-immutable

前面讲 `immutable` 时, 有如下代码:

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

代码中 `header` 经过 `fromJS` 转为  `immutable` 对象了, 但是 `state` 没有, 需要统一, 所以引入 `redux-immutable`

- 安装

`yarn add redux-immutbale`

- 设置 `state` 为 `immutable` 对象

`src/store/reducer.js` 文件内容如下:

```js {3}
// import { combineReducers } from 'redux'
// 之前 combineReducers 从 redux 中来, 现在改为从 redux-immutable
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'

// 现在用 combineReducers 生成的就是 immutable 对象.
const reducer = combineReducers({
  header: headerReducer
})

export default reducer
```

- 使用

`src/common/header/index.js` 组件使用如下:

```js {6,7}
......
const mapStateToProps = (state) => {
  // 利用 redux-immutable 将 state 变成 immutable 对象
  // 所以要用 get 方式获取.
  return {
    focused: state.get('header').get('focused')
    // focused: state.getIn(['header', 'focused'])  这种写法也行
  }
}
```