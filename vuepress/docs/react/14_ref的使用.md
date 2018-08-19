# ref 操作 DOM

一般不直接去操作 `DOM`, 但 `React` 提供了操作 `DOM` 的方法.

```js {11,23}
render() {
  return (
    <Fragment>
      <div>
        <label htmlFor='insertArea'>输入内容</label>
        <input
          id='insertArea'
          className='input'
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(input)=>{this.input = input}}
        />
        <button onClick={this.handleBtnClick}>submit</button>
      </div>
      <ul>
        {this.getTodoItem()}
      </ul>
    </Fragment>
  )
}

handleInputChange(){
  const inputValue = this.input.value
  this.setState(() => ({ inputValue }), ()=>{
    console.log('等 state 更新后再执行这里')
  })
}
```

操作 DOM 时, 注意 setState 是异步, 它有第二个参数是一个回调.