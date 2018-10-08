# 新版本的 setState

- 旧版本 `setState` 写法

参数是一个对象

```js
this.setState({
  inputValue: e.target.value
})
```

- 16 版本 `setState` 写法

第一个参数是一个函数, 函数有个参数 `prevState` 表示之前的 `state`.

`setState` 是异步的, 第二个参数是一个回调函数, 表示更改完 `state` 后执行的操作.

```js
handleInputChange(e){
  // 16 版本新写法, 里面是个函数变成异步, 需要先保存 e.target.value
  const inputValue = e.target.value
  this.setState(() => ({ inputValue }), ()=>{
    console.log('等 state 更新后再执行这里')
  })
}

handleBtnClick(){
  // 接受一个参数, prevState 表示改变之前的状态
  this.setState(prevState => ({
    list: [...prevState.list, prevState.inputValue],
    inputValue: ''
  }))
}
```