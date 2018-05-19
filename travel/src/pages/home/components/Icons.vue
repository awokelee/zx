<template>
  <div class="icons">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="icon in page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.src" alt="">
          </div>
          <p class="icon-desc">{{`${icon.name} ${icon.id}`}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconsList: [
        {
          id: '001',
          name: '热门景点热门景点热门景点热门景点热门景点热门景点',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          id: '002',
          name: '热门景点',
          src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          id: '003',
          name: '热门景点',
          src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },
        {
          id: '004',
          name: '热门景点',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
        },
        {
          id: '005',
          name: '热门景点',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'
        },
        {
          id: '006',
          name: '热门景点',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
        },
        {
          id: '007',
          name: '热门景点',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'
        },
        {
          id: '008',
          name: '热门景点',
          src: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png'
        },
        {
          id: '009',
          name: '热门景点',
          src: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow hidden
      float: left
      width: 25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: #333
        ellipsis()
</style>
