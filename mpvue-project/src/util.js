import config from './config'

export function get (url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      success: function (res) {
        console.log(res)
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

export function showSuccess (title) {
  wx.showToast({
    title,
    icon: 'success'
  })
}
