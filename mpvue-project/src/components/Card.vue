<template>
  <a @click="goDetail">
    <div class="book-card">
      <div class="thumb">
        <img :src="book.image" alt="" class="img" mode="aspectFill">
      </div>
      <div class="detail">
        <div class="row text-primary">
          <div class="right">
            {{book.rate}} <Rate :value='book.rate'></Rate>
          </div>
          <div class="left text-primary">
            {{book.title}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            浏览量:
          </div>
          <div class="left">
            {{book.author}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            {{book.user_info.nickName}}
          </div>
          <div class="left">
            {{book.publisher}}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
import Rate from '@/components/Rate'

export default {
  components: {
    Rate
  },
  props: ['book'],
  computed: {
    detailUrl() {
      return '/pages/detail/main?id='+this.book.id
    }
  },
  methods: {
    goDetail(){
      wx.navigateTo({
        url: '/pages/detail/main?id='+this.book.id
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.book-card {
  padding: 5px;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  .thumb {
    width: 90px;
    height: 90px;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    .img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail {
    margin-left: 100px;
    .row {
      line-height: 20px;
      margin-bottom: 3px;
    }
    .right {
      float: right;
    }
    .left {
      margin-right: 80px;
    }
  }
}
</style>
