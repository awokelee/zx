# react-transition-group 实现动画

[官网地址](https://reactcommunity.org/react-transition-group/)

- 安装

`yarn add react-transition-group`

- 优点

有钩子函数、`CSS` 方式、`JS` 方式、移除 `DOM` 等,

- 单个元素使用

利用 `react-transition-group` 的 `CSSTransition`, `App.js` 内容如下:

```js {2,15,16,17,18,19,20,21,22,23,24}
import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
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
        <CSSTransition
          in={this.state.show} // 进入条件
          timeout={300}
          classNames='fade' // 跟 style.css 的样式前缀
          unmountOnExit // 退出去除 DOM
          onEntered={(el)=>{el.style.color = 'red'}} // 其中一个钩子
          appear={true} // 第一次有动画
        >
          <div>hello world</div>
        </CSSTransition>
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

`style.css` 内容如下, 类名前缀根据 `js` 中定义的 `classNames` 来的, 类名可以参考官网.

```css
.fade-enter, .fade-appear { opacity: 0; }

.fade-enter-active, .fade-appear-active { opacity: 1; transition: opacity 1s ease-in; }

.fade-enter-done { opacity: 1; }

.fade-exit { opacity: 1; }

.fade-exit-active{ opacity: 0; transition: opacity 1s ease-in; }

.fade-exit-done{ opacity: 0;
```

- 一组元素使用

利用 `react-transition-group` 的 `CSSTransition` 配合 `TransitionGroup`, `style.css` 内容同上, `App.js` 代码如下:

```js {2,15,19,29,33}
import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { list: [] }
    this.hanleAddItem = this.hanleAddItem.bind(this)
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
        {
          this.state.list.map((item, index)=>{
            return (
              <CSSTransition
                in={this.state.show} // 进入条件
                timeout={300}
                classNames='fade' // 跟 style.css 的样式前缀
                unmountOnExit // 退出去除 DOM
                onEntered={(el)=>{el.style.color = 'red'}} // 其中一个钩子
                appear={true} // 第一次有动画
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })
        }
        </TransitionGroup>
        <button onClick={this.hanleAddItem}>add</button>
      </Fragment>
    );
  }

  hanleAddItem() {
    this.setState((prevState)=>({
      list: [...prevState.list, 'item']
    }))
  }
}

export default App;

```