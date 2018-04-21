<template>
  <div class="bg">
    <span class="bg2">
    <!-- <el-row>
        <el-col class="content" style="width:340px;margin-left:534px;margin-top:64px;"> -->
    <div class="loginDialog">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="userName">
          <el-input v-model="form.userName" placeholder="请输入用户名" class="usnamebtn">

          </el-input>
          <i class="userName"> </i>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model="form.userPwd" type="password" placeholder="请输入密码">

          </el-input>
           <i class="pwd"> </i>
        </el-form-item>
          <el-checkbox v-model="remember" label="记住用户名和密码" style='color:#999'></el-checkbox>
          <el-button class="login-btn" type="primary" @click="submitForm('form')" :loading="loading" style='margin-top:15px;background:#334056'>登录</el-button>
      </el-form>
    </div>
    </span>
    <!-- </el-col>
      </el-row> -->
  </div>
</template>

<script>
  import router from '../../routers';
  import auth from '../../auth';
  import { loginApi } from '../../api';
  let userNameKey = 'login_user_name';
  let userPwdKey = 'login_user_password';
  export default {
    name: 'login',
    data() {
    	return {
        loading: false,
        remember: true,
        form: {
          userName: localStorage.getItem(userNameKey) ||  '',
          userPwd: localStorage.getItem(userPwdKey) ||  '',
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', },
          ],
          userPwd: [
            { required: true, message: '请输入密码', }
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.requestLogin(this.form.userName,this.form.userPwd);
          } else {
            return false;
          }
        });
      },
      async requestLogin(userName,userPwd) {
        this.loading = true;
        let res = await loginApi.login(userName,userPwd);
        this.loading = false;
        if(res && res.code === '2000') {
        	if(this.remember) {
            localStorage.setItem(userNameKey,userName);
            localStorage.setItem(userPwdKey,userPwd);
          }else {
        		localStorage.removeItem(userNameKey);
        		localStorage.removeItem(userPwdKey);
          }
          auth.login();
          // router.push({name:'organization'})
          window.location.href="/pages/welcome"
          // let from = this.$route.query && this.$route.query.from;
          // if(from && from.length > 0) {
          //   router.replace(from);
          // }else {
          // 	router.replace('/');
          // }
        }else {
          this.$message.error(res && res.message || '登陆失败');
        }
      }
    }
  }
</script>

<style>
.bg {
  background: url("../../assets/loginBg.jpg") no-repeat;
  height: 429px;
  width: 100%
  /* position: relative; */
  /* background-size:contain; */
}

.el-form-item{
  margin-bottom: 16px;
}

.loginDialog input{
  height: 43px;
  text-indent: 75px;
}
.loginDialog  .el-checkbox__label span{
  font-size: 12px;
}

.login-btn {
  width: 100%;
}

.content {
  padding: 350px 0 100px 0;
  width: 340px;
  /* margin-left:300px; */
}

.bg2 {
  background: url("../../assets/loginContent.png") no-repeat;
  width: 1200px;
  height: 420px;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%);
  /* height: 0px; */
}

.userName {
  background: url("../../assets/usname_icon.gif") no-repeat;
  z-index: 999;
  position: absolute;
  height: 24px;
  width: 44px;
  left: 17px;
  top: 10px;
  border-right: 1px solid #ccc;
}

.pwd {
  background: url("../../assets/pwd_icon.gif") no-repeat;
  z-index: 999;
  position: absolute;
  height: 24px;
  width: 40px;
  left: 21px;
  top: 10px;
  border-right: 1px solid #ccc;
}

.el-input-group__prepend {
  width: 20px !important;
  background-color: #fff;
}

.loginDialog {
  /* margin: auto 50; */
  position: absolute;
  width: 340px;
  left: 20%;
  position: absolute;
  top: 30%;
  transform: translate(-25%);
}
</style>
