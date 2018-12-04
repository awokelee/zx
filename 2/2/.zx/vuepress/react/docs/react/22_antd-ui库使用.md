# antd ui 库使用

[官网](https://ant.design/components/list-cn/)

- 安装

`yarn add antd`

- 使用

```js {2,3}
import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'; // 引入 antd 的 css
import { Input, Button, List } from 'antd'; // 根据需要引入 antd 组件

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
  render(){
    return (
      <Fragment>
        <div style={{marginTop: 10, marginLeft: 10}}>
          <Input placeholder='todo' style={{width: 300, marginRight: 10}} />
          <Button type='primary'>提交</Button>
          <List
            style={{marginTop: 10, width: 300}}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </Fragment>
    )
  }
}

export default TodoList
```