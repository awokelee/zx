# react 过渡和动画

- 过渡

下面是 `App.js` 内容, 实现点击按钮 切换 `div` 的显示与隐藏.

```js
import React, { Component, Fragment } from 'react';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
    this.hanleToggle = this.hanleToggle.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hidden'}>hello world</div>
        <button onClick={this.hanleToggle}>toggle</button>
      </Fragment>
    );
  }

  hanleToggle() {
    this.setState((prevState)=>({
      show: !prevState.show
    }))
  }
}

export default App;
```

当使用 **过渡** 时, `style.css` 内容如下:

```css {1,3}
.show { opacity: 1 ; transition: all 1s ease-in; }

.hidden{ opacity: 0 ; transition: all 1s ease-in; }
```

- 动画

`App.js` 还是不变, `style.css` 内容如下:

```css {1,3,5,11}
.show { animation: show-item 2s ease-in forwards; }

.hidden{ animation: hide-item 2s ease-in forwards; }

@keyframes hide-item {
  0% { opacity: 1; color: red; }
  50% { opacity: 0.5; color: green; }
  100% { opacity: 0; color: blue; }
}

@keyframes show-item {
  0% { opacity: 0; color: red; }
  50% { opacity: 0.5; color: green; }
  100% { opacity: 1; color: blue; }
}
```