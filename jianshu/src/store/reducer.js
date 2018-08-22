// import { combineReducers } from 'redux'
// 之前 combineReducers 从 redux 中来, 现在改为从 redux-immutable
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as DetailReducer } from '../pages/detail/store'
import { reducer as LoginReducer } from '../pages/login/store'

// 现在用 combineReducers 生成的就是 immutable 对象.
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: DetailReducer,
  login: LoginReducer
})

export default reducer
