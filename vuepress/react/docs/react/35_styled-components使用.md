# styled-components 使用

下面以 `Header` 组件为例

- `style.js`

```js {1,2,4,10,19}
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
```

- `index.js`

```js {3,4,10,11,12}
import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    )
  }
}

export default Header
```