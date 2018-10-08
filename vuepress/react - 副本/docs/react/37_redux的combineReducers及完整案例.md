# redux 的 combineReducers 及案例

`redux` 的 `combineReducers` 主要是拆分 `reducer`, 分块管理, 便于维护和管理.

- 目录结构

```bash
├── App.js
├── index.js
├── style.js
├── common
|  └── header
|     ├── index.js
|     ├── store
|     └── style.js
├── statics
|  ├── iconfont
|  |  ├── iconfont.eot
|  |  ├── iconfont.js
|  |  ├── iconfont.svg
|  |  ├── iconfont.ttf
|  |  └── iconfont.woff
|  └── logo.png
└── store
   ├── index.js
   └── reducer.js
```

- `App.js`

```js {3}
import React, { Component } from 'react';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

export default App;
```

- `index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import './statics/iconfont/iconfont';

ReactDOM.render(<App />, document.getElementById('root'));
```

- `style.js`

```js
import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
```

- `store/index.js`

```js
import { createStore, compose } from 'redux'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
                        || compose;
const store = createStore(reducer, composeEnhancers())

export default store
```

- `store/reducer.js`

```js {1,4}
import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/header/store'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer
```

- `header/index.js`

```js {4,54,60,63,66}
import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators }  from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSeach,
  Addition,
  Button
} from './style'

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props
  return (
    <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载 APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
            <NavSeach
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSeach>
            </CSSTransition>
            <i
              className={focused ? 'focused iconfont' : 'iconfont'}
            >
              &#xe614;
            </i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe753;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
```

- `header/style.js`

```js
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
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
` ;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;  
  .iconfont {
    position: absolute;
    right: 0;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSeach = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
```

- `header/store/index.js`

```js {2,3,5}
import reducer from './reducer'
import  * as actionCreators  from './actionCreators'
import * as actionTypes from './actionTypes'

export { reducer, actionCreators, actionTypes }
```

- `header/store/actionTypes.js`

```js
export const SEARCH_FOCUS = 'header/SEARCH_FOCUS'
export const SEARCH_BLUR= 'header/SEARCH_BLUR'
```

- `header/store/actionCreators.js`

```js
import * as actionTypes from './actionTypes'

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})
```

- `header/store/reducer.js`

```js
import * as actionTypes from './actionTypes'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if(action.type === actionTypes.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state
}
```