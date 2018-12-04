# axios 本地 mock 数据

在 `public` 目录下新建 `api/headerList.json` 文件, 当 `axios` 请求 `axios.get('/api/headerList.json')` 会去找对象的路由, 找不到则会到 `public` 目录下去找, 基于这个可以用来本地 mock 数据.

```bash {1,3}
public
└── api
   └── headerList.json
```

需要请求接口的地方案例如下:

```js {2,6}
......
import axios from 'axios'

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      // 拿到的数据
      const data = res.data
    }).catch((err)=>{ console.log(err) })
  }
}
```