# axios 请求接口

- 安装

`yarn add axios`

- 使用

```js
import axios from 'axios'
......
componentDidMount() {
  axios.get('/api/todolist')
  .then((res)=>{
    this.setState(()=>({
      list: [...res.data]
    }))
  })
  .catch(()=>{console.log('失败')})
}
```