# react-router-dom 路由

:::tip
4.0 版本已不需要路由配置, 一切皆组件.

react-router: 提供一些 router 的核心 api, 包括 Router, Route, Switch 等.

react-router-dom (跟浏览器有关): 提供了 BrowserRouter, HashRouter, Route, Link, Switch, NavLink.
:::

- 安装

这里安装的是 `react-router 4.0`, 执行 `yarn add react-router-dom`

- 使用

在 `App.js` 中引入路由, 代码如下:

```js {3,13,14,15,16,17,18}
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact render={()=><div>Home</div>}></Route>
              <Route path='/detail' exact render={()=><div>Detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
```

去掉 `render`, 采用 `component` 方式:

```js {5,6,17,18}
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
```

代码中每个 `Route` 表示一个个路由规则, `path` 表示路径, `exact` 指精确匹配, `render` 函数可以直接写内容, `component` 表示对应的组件, 注意 `BrowserRouter` 里面要有个根元素, 这里用了个 `div`.

- `react-router-dom` 核心用法

`HashRouter` 和 `BrowserRouter`, `hash` 带 `#`.

`Route`: `path`、`exact`、`component`、`render`

```js
<Route path="/detail/:id" />
......
// 获取
this.props.match.params.id
```

`NavLink`、`Link`

```js
<Link to="/">Home</Link>
```

`Switch`

`Switch` 匹配到就不会继续往下.

```js
<Switch>
  <Route path="/admin/list" component={List} />
  <Route path="/admin/detail" component={Detail} />
</Switch>
```