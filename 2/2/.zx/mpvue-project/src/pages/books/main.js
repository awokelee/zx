import Vue from 'vue'
import Books from './Books'

const app = new Vue(Books)
app.$mount()

export default{
  config: {
    enablePullDownRefresh: true
  }
}
