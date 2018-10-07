# antd 按需加载组件和配置 less

- 使用 `babel-plugin-import`

`babel-plugin-import` 是一个用于按需加载组件代码和样式的 `babel` 插件，现在我们尝试安装它并修改 `config-overrides.js` 文件.

```bash
yarn add babel-plugin-import
```

```js
+ const { injectBabelPlugin } = require('react-app-rewired');

  module.exports = function override(config, env) {
+   config = injectBabelPlugin(
+     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
+     config,
+   );
    return config;
  };
```

然后移除前面在 src/App.css 里全量添加的 @import '~antd/dist/antd.css'; 样式代码，并且按下面的格式引入模块。

```js
  // src/App.js
  import React, { Component } from 'react';
- import Button from 'antd/lib/button';
+ import { Button } from 'antd';
  import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      );
    }
  }

  export default App;
```

- 使用 `less`

自定义主题需要用到 `less` 变量覆盖功能。我们可以引入 `react-app-rewire` 的 `less` 插件 `react-app-rewire-less` 来帮助加载 `less` 样式，同时修改 `config-overrides.js` 文件。

```bash
yarn add react-app-rewire-less
```

```js
  const { injectBabelPlugin } = require('react-app-rewired');
+ const rewireLess = require('react-app-rewire-less');

  module.exports = function override(config, env) {
    config = injectBabelPlugin(
-     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
      // change importing css to less
+     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
      config,
    );
+   config = rewireLess.withLoaderOptions({
+     modifyVars: { "@primary-color": "#1DA57A" },
+     javascriptEnabled: true,
+   })(config, env);
    return config;
  };
```

这里利用了 `less-loader` 的 `modifyVars` 来进行主题配置， 变量和其他配置方式可以参考 配置主题 文档。

修改后重启 `yarn start`，如果看到一个绿色的按钮就说明配置成功了。