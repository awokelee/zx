# PureComponent 提升性能

`PureComponent` 要配合 `immutable` 使用 不然可能会有坑.

`PureComponent` 其实做的就是 每个组件自动做了 `shouldComponentUpdate()`.

```js {1,3}
import React, { PureComponent } from 'react'

class List extends PureComponent {
  ......
}
```
