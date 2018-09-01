<template>
  <div>
    <Card v-for='book in books' :key='book.id' :book='book'></Card>
    <p class="text-footer" v-if="!more">没有更多数据</p>
  </div>
</template>
<script>
import { get } from '@/util'
import Card from '@/components/Card'
export default {
  components: {
    Card
  },
  data() {
    return {
      books: [],
      page: 0,
      more: true
    }
  },
  created() {
    this.getList(true)
  },
  onPullDownRefresh () {
    this.getList(true)
  },
  onReachBottom(){
    if(!this.more){
      return false
    }
    this.page = this.page + 1
    this.getList()
  },
  methods: {
    async getList(init){
      if(init){
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist', {page: this.page})
      if(books.list.length < 10 && this.page >0) {
        this.more = false
      }
      if(init){
        this.books = books.list
        wx.stopPullDownRefresh()
      }else{
        this.books = this.books.concat(books.list)
      }
      wx.hideNavigationBarLoading()
    }
  }
}
</script>
<style lang="scss">
</style>

