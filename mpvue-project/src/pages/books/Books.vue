<template>
  <div>
    <Card v-for='book in books' :key='book.id' :book='book'></Card>
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
      books: []
    }
  },
  created() {
    this.getList()
  },
  onPullDownRefresh () {
    this.getList()
    console.log('下拉')
  },
  methods: {
    async getList(){
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist')
      this.books = books.list
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }
  }
}
</script>
<style lang="scss">
</style>

