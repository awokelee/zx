# styled-components 使用 iconfont

- 文件目录

从 [iconfont.cn](http://iconfont.cn) 选完图标保存本地后, 新建 `iconfont` 目录, 把 `iconfont.css` 改 `iconfont.js`.

```bash {9,10,11,12,13}
├── App.js
├── common
|  └── header
|     ├── index.js
|     └── style.js
├── index.js
├── statics
|  ├── iconfont
|  |  ├── iconfont.eot
|  |  ├── iconfont.js
|  |  ├── iconfont.svg
|  |  ├── iconfont.ttf
|  |  └── iconfont.woff
|  └── logo.png
└── style.js
```

- `iconfont/iconfont.js`

使用 `styled-components` 的 `injectGlobal` 把 `iconfont` 注入到全局样式.

```js {1,2}
import { injectGlobal } from 'styled-components'
injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1534763420363');
    src: url('./iconfont.eot?t=1534763420363#iefix') format('embedded-opentype'),
    url('data:application/x-font-woff;charset=utf-8;base64,......省略') format('woff'),
    url('./iconfont.ttf?t=1534763420363') format('truetype'),
    url('./iconfont.svg?t=1534763420363#iconfont') format('svg');
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
```

- 组件使用 iconfont

```js {12}
......
class Header extends Component {
  render() {
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
      </HeaderWrapper>
    )
  }
}

export default Header
```