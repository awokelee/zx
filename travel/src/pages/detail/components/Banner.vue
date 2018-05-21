<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img  class="banner-img" src="//img1.qunarzz.com/sight/p0/1805/eb/eb135bb3494ace1fa3.img.jpg_600x330_c26b91e1.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">五江温泉城</div>
        <div class="banner-number"><span class="iconfont icon-sousuo banner-icon"></span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201403/11/7dfaaa7b9722fdffac88801ed4dc3512.jpg_r_800x800_72ffcbd0.jpg',
        'http://img1.qunarzz.com/sight/p0/201407/04/1e6bb8cacc7e72495f252869e70668e6.jpg_350x240_07d85b55.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        line-height: .32rem
        height: .32rem
        margin-top: .14rem
        border-radius: .2rem
        font-size: .24rem
        background: rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
</style>
