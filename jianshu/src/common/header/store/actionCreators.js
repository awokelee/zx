import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data), // 这里一定要把后台传的 data 变成 immutable 对象
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})


export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data
      dispatch(changeList(data.data))
    }).catch((err)=>{ console.log(err) })
  }
}
