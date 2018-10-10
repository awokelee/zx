# 权限设置

::: tip
根据后台接口返回, 给项目按钮设置权限
:::

- 配置权限

在 `main.js` 中添加指令, 这里增加了个 **指令** 叫 `has`, 案例如下

```js
import Vue from 'vue'

/** 权限指令 **/
Vue.directive('has', {
  bind: function (el, binding) {
    if (!Vue.prototype.$_has(binding.value)) {
      el.parentNode.removeChild(el)
    }
  }
})

// 权限检查方法
Vue.prototype.$_has = function (value) {
  let isExist = false
  // 根据登录后拿到该用户有哪些权限, 这里根据你具体需求
  let buttonpermsStr = window.sessionStorage.getItem('buttenpremissions')
  if (buttonpermsStr === undefined || buttonpermsStr === null) {
    return false
  }
  let buttonperms = JSON.parse(buttonpermsStr)
  for (let i = 0; i < buttonperms.length; i++) {
    if (buttonperms[i].perms.indexOf(value) > -1) {
      isExist = true
      break
    }
  }
  return isExist
}
```

- 使用方法

假如后台返回的权限中 `editprize` 代表 `奖品编辑` 权限, 则需要在 `奖品编辑` `按钮`上加 `v-has="'editprize'"`, 有该权限时页面会`展示`按钮, 反之则`自动隐藏`了按钮

```html
<el-button v-has="'editprize'">编辑</el-button>
```

::: warning
目前这种方式需要跟后台共同维护一份权限字典, 比如 `editprize` 代表 `奖品编辑`, `addprize` 代表 `增加奖品`
:::