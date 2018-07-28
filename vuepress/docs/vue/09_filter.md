# filter 过滤器

::: tip
有时候需要时间格式化, 金币格式化等, 直接通过 `|` 管道符就能搞定
:::

- 创建

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

```js
// 金钱格式化
const digitsRE = /(\d{3})(?=\d)/g

export function currency (value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}
```

- 使用

在 `main.js` 中注入

```js
import * as filters from './filters'

// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
```

在组件中使用:

```html
<span>{{timestamp | currency}}</span>
```
