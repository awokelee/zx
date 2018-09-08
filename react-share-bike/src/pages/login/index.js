import React, { Component } from 'react'
import { Button } from 'antd'
import './index.less'

class Login extends Component {
  render() {
    return (
      <div className="home-wrap">
        <Button type="primary">Login</Button>
      </div>
    )
  }
}

export default Login