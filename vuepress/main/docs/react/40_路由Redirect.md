# 路由 Redirect

使用 `react-router-dom` 中的 `Redirect` 做路由重定向.

```js {2,26}
import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
......
class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if(!loginStatus){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号'
              innerRef={(input) => {this.account = input}}
            />
            <Input placeholder='密码' type='password'
              innerRef={(input) => {this.password = input}}
            />
            <Button 
              onClick={() => this.props.login(this.account, this.password)}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/' />
    }
  }
}
......
```