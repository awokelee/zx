# react 定义组件

- 定义组件

```js
// React 是 JSX 语法支持需要, React.Component 是定义组件需要
// render 函数的标签都是 JSX 语法
import React, { Component } from 'react'; 

class App extends Component {
  render() {
    // JSX
    return (
      <div>
        hello world
      </div>
    );
  }
}

export default App;
```

一个类继承了 `React` 的 `Component` 则成为了一个 `React` 组件

在 `render` 函数返回的内容就是展示的内容

通过 `export default` 导出该组件

其他组件中通过 `import App` 导入使用

- 渲染到页面

在 `index.js` 中

```js {5}
import React from 'react'; // 这里虽然显示应用, 但是 JSX 语法需要
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); // 渲染到 id 为 root 元素上
```

在 `index.html` 中

```html {15}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>React App</title>
  </head>
  <body>
    <noscript>
      noscript 就是不支持 script 时展示的内容.
    </noscript>
    <div id="root"></div>
  </body>
</html>
```