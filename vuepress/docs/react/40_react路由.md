# react-router-dom 路由

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

代码中每个 `Route` 表示一个个路由规则, `path` 表示路径, `exact` 指精确匹配, `render` 函数可以直接写内容, `component` 表示对应的组件, 注意 `BrowserRouter` 里面要有个根元素, 这里用了个 div.