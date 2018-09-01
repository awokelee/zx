<template>
  <div class="container">
    <button class="login-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">
      <div class="userInfo">
        <img :src="userInfo.avatarUrl" alt="">
        <p v-text="userInfo.nickName"></p>
      </div>
    </button>
    <year-progress></year-progress>
    <button v-if="isLogin" class="btn" @click="scanCode">添加图书</button>
  </div>
</template>
<script>
import YearProgress from '@/components/YearProgress'
import { showSuccess } from '@/util'
import qcloud from 'wafer2-client-sdk'
import config from '@/config'
export default {
  components: {
    YearProgress
  },
  computed: {
    isLogin() {
      return this.userInfo.nickName !== '点击登录'
    }
  },
  data() {
    return {
      userInfo: {
        avatarUrl: '../../../static/img/unlogin.jpg',
        nickName: '点击登录'
      }
    }
  },
  created() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) this.userInfo = userInfo
  },
  methods: {
    scanCode() {
      wx.scanCode({
        success: res => {
          console.log(res)
        }
      })
    },
    getUserInfo(options) {
      let user = wx.getStorageSync('userinfo')
      const self = this
      if (!user) {
        wx.login({
          success(loginResult) {
            qcloud.setLoginUrl(config.loginUrl)
            // 首次登录
            qcloud.login({
              success: res => {
                console.log(11, res)
              },
              fail: err => {
                console.error(22, err)
              }
            })
          },
          fail(loginError) {
            console.log('登录失败33', loginError)
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
.container {
  padding: 0 30rpx;
  .login-btn {
    border: none;
    background: #fff;
  }
  .login-btn::after {
    border: none;
  }
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

