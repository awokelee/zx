<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.src" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [
        {
          id: '001',
          src: 'http://img1.qunarzz.com/piao/fusion/1804/d1/2ba49f4f21ed2102.jpg_750x200_79e641ad.jpg'
        },
        {
          id: '002',
          src: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
        },
        {
          id: '003',
          src: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
        }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.75%
    background: #eee
    .swiper-img
      width: 100%
</style>
