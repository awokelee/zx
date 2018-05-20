<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="(recommend, index) in recommendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="recommend.src" alt="" >
        </div>
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          title: '上海玛雅海滩水公园',
          desc: '全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景',
          src: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg'
        },
        {
          id: '001',
          title: '上海玛雅海滩水公园',
          desc: '全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景',
          src: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg'
        },
        {
          id: '001',
          title: '上海玛雅海滩水公园',
          desc: '全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景全方位360度尽收上海林立高楼之美景',
          src: 'http://img1.qunarzz.com/sight/source/1505/b7/2f4621a3a4e12c.jpg_r_640x214_d55c10ba.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
