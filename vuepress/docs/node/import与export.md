# import 和 export 的使用

- 导出变量

```js
export const name = 'Luke'
export const getName = () => {
  return name
}
```

```js
import { name } from './ex'
import { getName } from './ex'
```

- 导出默认

```js
// 导出默认
const age = 19
export default age
```

```js
// 不需要对应变量名, 而是根据 export default 的
import age from './ex'
import ageeee from './ex'

console.log(age) // 19
console.log(ageeee) // 19
```

- 批量导出

```js
// 批量导出
export {
  name as name2,
  getName as getName2,
  age
}
```

```js
// 批量导入
import {
  name2 as name3,
  getName2 as getName3,
  age as age3
} from './ex'

console.log(name3)
console.log(getName3())
console.log(age3)
```