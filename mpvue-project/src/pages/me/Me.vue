<template>
  <div class="container">
    <div class="userInfo">
      <img :src="userInfo.avatarUrl" alt="">
      <p v-text="userInfo.nickName"></p>
    </div>
    <YearProgress></YearProgress>
    <button class="btn" @click="scanCode">添加图书</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
    this.userInfo = wx.getStorageSync('userInfo')
    console.log(this.userInfo, 44)
  },
  methods: {
    scanCode() {
      wx.scanCode({
        success: res => {
          console.log(res)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.container {
  padding: 0 30rpx;
  .userInfo {
    margin-top: 100rpx;
    text-align: center;
    img {
      width: 150rpx;
      height: 150rpx;
      margin: 20rpx;
      border-radius: 50%;
    }
  }
}
</style>

