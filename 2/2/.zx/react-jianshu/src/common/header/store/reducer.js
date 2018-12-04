import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

// 转为 immutable 对象.
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.SEARCH_FOCUS:
      // immutable 对象的 set 方法, 会结合之前 immutable 对象的值
      // 和设置的值, 返回一个全新的对象.(也就是没有对之前数据修改)
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      // 多个时 merge 性能高.
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      // return state.set('list', action.data).set('totalPage', action.totalPage)
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}