import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res)=>{
      const { data } = res.data
      dispatch(changeDetail(data.title, data.content))
    }).catch((err)=>{console.log(err)})
  }
}