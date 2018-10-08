# redux-saga 中间件

[redux-saga 网址](https://github.com/redux-saga/redux-saga)

`API` 很多, 适合大型项目, 比 `redux-thunk` 复杂.

- 安装

`yarn add redux-saga`

- `actionTypes.js`

```js
export const GET_INIT_LIST = 'get_init_list'
```

- `actionCreators.js`

```js {1}
import { GET_INIT_LIST } from './actionTypes'

export const getInitList = () => ({
  type: GET_INIT_LIST,
})
```

- `sagas.js`

```js {2,4}
import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from './actionCreators'

function* getInitList() {
  try {
    const res = yield axios.get('/list.json')
    const action = initListAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

// 必须要求是 generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
```

- `TodoList.js`

```js {2,4,5,6,7}
......
import { getInitList } from './store/actionCreators'
......
componentDidMount() {
  const action = getInitList()
  store.dispatch(action)
}
```