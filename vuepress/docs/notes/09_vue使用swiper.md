# Vue 使用 Swiper 轮播

::: tip
在 `Vue` 中使用 `vue-awesome-swiper` 轮播组件
:::

- 安装

`npm install vue-awesome-swiper --save`

- 全局引入

```js
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 引入 css
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
```

- 当前组件引入 (推荐)

```js
// 引入 css
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  }
}
```

- 组件中使用案例

::: warning
两个常用需求:

拿当前索引通过 `this.activeIndex`

滑动到指定索引 `this.swiper.slideTo(索引, 延迟)`
:::

这里介绍在组件中局部使用

```html
<templete>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in Topspeed">
      <!-- 要轮播的内容 -->
      {{bannerIndex}}
    </swiper-slide>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
  },
  data () {
    const self = this
    return {
      bannerIndex: 0,
      swiperOption: {
        initialSlide: 0, // 默认展示第零项
        on: {
          slideChangeTransitionEnd: function() {
            // 拿到当前轮播索引
            self.bannerIndex = this.activeIndex
          }
        }
      },
    }
  }
}
</script>
```

- 当需要通过点击其他来触发切换

主要是利用 `this.swiper.slideTo(索引, 延迟)` 实现, 比如 

```html
<templete>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in Topspeed">
      <!-- 要轮播的内容 -->
      {{bannerIndex}}
    </swiper-slide>
  </swiper>

  <div class="riskBack">
    <span @click="handlePrev">
      ＜ 上一题
    </span>
    <span @click="handleNext">
      下一题 ＞
    </span>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    // 拿到轮播图 DOM
    swiper () {
      return this.$refs.mySwiper.swiper
    },
  },
  data () {
    const self = this
    return {
      bannerIndex: 0,
      swiperOption: {
        initialSlide: 0, // 默认展示第零项
        on: {
          slideChangeTransitionEnd: function() {
            // 拿到当前轮播索引
            self.bannerIndex = this.activeIndex 
          }
        }
      },
    }
  },
  methods: {
    handlePrev() {
      if (this.currentIndex > 0) {
        this.currentIndex--
        // 滑动到第几个
        this.swiper.slideTo(this.currentIndex, 600)
      }
    },
  }
}
</script>
```