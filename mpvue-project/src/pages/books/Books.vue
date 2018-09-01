<template>
  <div class="container">
    <div class="userInfo">
      <img src="" alt="">
      <p></p>
    </div>
    <YearProgress></YearProgress>
    <button class="btn">我的</button>
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
  }
}
</script>
<style lang="scss">
.container {
  padding: 0 30rpx;
  .userInfo {
    margin-top: 100rpx;
  }
}
</style>

