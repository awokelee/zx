# jsx 的一些细节

`jsx` 就是在 `js` 中 写 `html` 标签和自己创建的组件.

- 组件首字母大写

如果是自己创建的组件, 必须以 **大写字母开头**, 如下面的 `App` 组件:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

- `Fragment` 组件

在 `render` 函数中, 必须有一个根元素包裹, 在 `React 16` 引入了 `Fragment`, 作用是不会渲染到 `DOM`.

下面组件中的 `Fragment` 不会渲染到页面, 所以只会看到 两个 `div` 元素.

```js {6,9}
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>元素1</div>
        <div>元素2</div>
      </Fragment>
    );
  }
}

export default App;
```

- 定义和改变 `state`

**定义:** 在 react 中定义响应式状态需要在 `constructor` 构造函数中定义 `state`, 用 `super` 调用父类构造函数.

**展示 state:** 直接用 `this.state.名称`.

**更改 state:** 通过 `react` 提供的 `this.setState()` 方法

```js {6,12,19}
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props) // 调用父类构造函数
    this.state = { inputValue: 'hello world' }
  }

  render() {
    return (
      <Fragment>
        <div>{this.state.inputValue}</div>
        <button onClick={this.handleBtnClick.bind(this)}>改变 inputValue</button>
      </Fragment>
    );
  }

  handleBtnClick() {
    this.setState({ inputValue: 'new value' })
  }
}

export default App;
```

**immutable:** `react` 中 `state` 不允许我们直接去改变, 会有性能问题, 如下案例中我们要操作数组, 我们可以先做个拷贝然后 `setState`

```js
// 不推荐
this.state.list.splice(index, 1)
// 推荐
const list = [...this.state.list]
list.splice(index, 1)
this.setState({ list })
```

- 定义方法和绑定事件

原生 `js` 中事件都是 `onclick` `onchange` 这种, 而 `react` 中需要采用 `onClick` `onChange` 第二个单词首字母大写方式.

注意 `this` 指向: 如果不绑定 `this`, 函数中的 `this` 为 `undefined`, 这里用  `.bind(this)` 手动绑定 `this` 指向当前组件.

如果需要传值给函数, 则可以用 `.bind(this, '参数')` 的方式(第一个参数须为 `this`, 后面的参数可以是用户自定义的)

```js {12,17}
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props) // 调用父类构造函数
    this.state = { inputValue: 'hello world' }
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.handleBtnClick.bind(this, 'test')}>点击</button>
      </Fragment>
    );
  }

  handleBtnClick(e, params){
    // e.target 为 DOM 元素
    // params 为传过来的参数, 即字符串 'test'
    console.log(e.target)
  }
}

export default App;
```

**绑定 this 的方式:**

直接绑定在 jsx 中

```js
<button onClick={this.handleBtnClick.bind(this, 'test')}>点击</button>
```

在构造函数中, 性能更好

```js
import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    // 绑定 this, 性能比直接绑定在 render 中好
    this.handleClick = this.handleClick.bind(this) 
  }

  render() {
    const { content } = this.props
    return <div onClick={this.handleClick}>{content}</div>
  }
}

export default TodoItem
```


- `map` 循环

当需要循环展示数据时, 在 `JSX` 中 用 `{}` 然后返回即可. 下面案例就是把 `list` 数据每一项展示在一个 `li` 元素中.

```js {5,6,13}
render() {
  return (
    <Fragment>
      <ul>
        {
          this.state.list.map((item, index)=>{
            return (
              <li key={index} >
                {item}
              </li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}
```

- 使用样式

需要在 `jsx` 中用 `className` 代替 `class`, 因为跟 `js` 定义类就是用关键字 `class`

```js
import './style.css'
......
render() {
  return (
    <Fragment>
      <ul className='ul-border'>
        {
          this.state.list.map((item, index)=>{
            return (
              <li key={index} >
                {item}
              </li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}
```

- 插入 html

不推荐直接插入 html, 存在安全性问题, 但是有需求的话 可以通过 `dangerouslySetInnerHTML` 实现.

```js {11}
......
render() {
  return (
    <Fragment>
      <ul>
        {
          this.state.list.map((item, index)=>{
            return (
              <li
                key={index}
                dangerouslySetInnerHTML={{__html: item}}
              >
              </li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}
```

- 使用 lable

`label`, 扩大点击区域, `html` 中是用 `for`, `react` 要用 `htmlFor`.

```js {5,7}
render() {
  return (
    <Fragment>
      <div>
        <label htmlFor='insertArea'>输入内容</label>
        <input
          id='insertArea'
          className='input'
        />
      </div>
    </Fragment>
  )
}
```

- 注释

类似于 `js` 的注释, 案例如下:

```js {6,8}
render() {
  return (
    <Fragment>
      <ul>
        {
          // 注释方式一, 注意换行
        }
        { /* 注释方式二 */}
      </ul>
    </Fragment>
  )
}
```