<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(recommend, index) in recommendList" :key="index">
        <img class="item-img" :src="recommend.src" alt="" >
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          title: '上海玛雅海滩水公园',
          desc: '全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景',
          src: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg'
        },
        {
          id: '001',
          title: '上海玛雅海滩水公园',
          desc: '全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景',
          src: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg'
        },
        {
          id: '001',
          title: '上海玛雅海滩水公园',
          desc: '全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景',
          src: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
