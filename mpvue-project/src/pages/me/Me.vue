<template>
  <div class="container">
    <button class="login-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">
      <div class="userInfo">
        <img :src="userInfo.avatarUrl" alt="">
        <p v-text="userInfo.nickName"></p>
      </div>
    </button>
    <year-progress></year-progress>
    <button v-if='userInfo.openId' class="btn" @click="scanCode">添加图书</button>
  </div>
</template>
<script>
import YearProgress from '@/components/YearProgress'
import { showSuccess, post, showModal} from '@/util'
import qcloud from 'wafer2-client-sdk'
import config from '@/config'
export default {
  components: {
    YearProgress
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
    let user = wx.getStorageSync('userinfo')
    if (!user) return
    this.userInfo = user
  },
  methods: {
    async addBook(isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.userInfo.openId
      })
      showModal('添加成功', `《${res.title}》 添加成功`)
    },
    scanCode() {
      wx.scanCode({
        success: res => {
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    },
    getUserInfo(e) {
      let user = wx.getStorageSync('userinfo')
      if (user) return (this.userInfo = user)
      const self = this
      wx.login({
        success(loginResult) {
          qcloud.setLoginUrl(config.loginUrl)
          qcloud.login({
            success: userinfo => {
              qcloud.request({
                url: config.userUrl,
                login: true,
                success(userRes) {
                  showSuccess('登录成功')
                  wx.setStorageSync('userinfo', userRes.data.data)
                  self.userInfo = userRes.data.data
                }
              })
            }
          })
        },
        fail(loginError) {
          console.log('登录失败', loginError)
        }
      })
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

