<template>
  <div>
    <button
      class="weui-btn"
      type="primary"
      open-type="getUserInfo"
      @getuserinfo="getUserInfo"
      >
        授权
    </button>
  </div>
</template>
<script>
import { showSuccess } from '@/util'
export default {
  methods: {
    getUserInfo(e) {
      showSuccess('登录成功')
      wx.setStorageSync('userInfo', e.target.userInfo)
      wx.switchTab({
        url: '/pages/me/main'
      })
    }
  }
}
</script>
<style>
</style>

