import myFetch from './fetch'

export let loginApi = {
  login: (userName, userPwd) => {
    // TODO 这里的post 参数 传不到服务器上
    // return myFetch('POST','user/login',{ userName,userPwd });
    // 暂时使用拼接到url的方式 登录
    return myFetch('POST', `user/login?userName=${userName}&userPwd=${userPwd}`, null)
  },
  loginOut () {
    return myFetch('post', `user/logout`)
  },
  changePassword(userPwd,oldUserPwd) {
    return myFetch('post','sys/userManage/modifyPwd',{userPwd,oldUserPwd});
  },
};
