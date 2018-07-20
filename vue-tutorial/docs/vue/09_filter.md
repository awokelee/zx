# filter

## 创建

在 `src` 下新建 `filters` 文件夹, 创建 `index.js`, 案例如下

```js
// 时间戳格式化
export function handleDateFormat (t) {
  let date = new Date(t)
  let Y = date.getFullYear() + '-'
  let M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'
  let D =
    date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' '
  let h =
    date.getHours() < 10
      ? '0' + date.getHours() + ':'
      : date.getHours() + ':'
  let m =
    date.getMinutes() < 10
      ? '0' + date.getMinutes() + ':'
      : date.getMinutes() + ':'
  let s =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  t = Y + M + D + h + m + s
  return t
}
```

## 使用

- `main.js`中注入

```js
import * as filters from './filters'

// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
```

- 组件中使用

```html
<span>{{timestamp | parseTime}}</span>
```
