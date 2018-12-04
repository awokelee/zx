# create-react-app 使用别名

- 安装 `react-app-rewired`

`create-react-app` 脚手架隐藏了 `webpack` 默认配置, `package.json` 中定义了 `scripts` 可以执行 `yarn eject` 暴露出来.

这里我们使用 `react-app-rewired` （一个对 `create-react-app` 进行自定义配置的社区解决方案）.

```bash
yarn add react-app-rewired
```

- 修改 `package.json`

把 `package.json` `scripts` 中 `react-scripts` 替换为 `react-app-rewired`:

修改前:

```bash
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
```

修改后:

```bash
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test --env=jsdom",
  "eject": "react-app-rewired eject"
}
```

- 新建 `config-overrides.js`, 配置别名

然后在项目根目录创建一个 `config-overrides.js` 用于修改默认配置。

```js
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve('src'),
      'pages': resolve('src/pages'),
  }

  return config;
}
```

- 组件中使用别名

```js {3}
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from 'pages/home'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Redirect from='*' to='/'></Redirect>
        </Switch>
      </Router>
    );
  }
}

export default App;
```