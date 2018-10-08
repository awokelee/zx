# react 异步组件及 withRouter

异步加载组件, 这里用到一个第三方库 `react-loadable` [网址](https://github.com/jamiebuilds/react-loadable)

- 安装

`yarn add react-loadable`

- 定义异步组件

在 `detail` 路由下定义 `loadable.js`

```bash {3}
detail
├── index.js
├── loadable.js
├── store
|  ├── actionCreators.js
|  ├── actionTypes.js
|  ├── index.js
|  └── reducer.js
└── style.js
```

`loadable.js` 内容如下:

```js
import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: () => {
    return <div>正在加载...</div>
  },
});

export default () => <LoadableComponent/>
```

- 使用

在 `App.js` 中不再引入 `Detail/index.js` 而是 `loadable.js`

```js {4,13}
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Detail from './pages/detail/loadable'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
            <Header />
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
```

- `withRouter` 使用

使用 `react-loadable` 后, 为了获取路由参数需要用 `withRouter`

```js {3,12,15}
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
......
class Detail extends PureComponent {
  render() {
    return (
      ......
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
```