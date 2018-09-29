# 转 Boolean

如果 `JavaScript` 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为 `false`，其他值都视为 `true`。

- `undefined`

- `null`

- `false`

- `0`

- `NaN`

- `""` 或 `''`（空字符串）

注意，所有对象（包括空对象）的转换结果都是 `true`，甚至连 `false` 对应的布尔对象 `new Boolean(false)` 也是 `true`。

```js
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true
```

所有对象的布尔值都是 `true`，这是因为 `JavaScript` 语言设计的时候，出于性能的考虑，如果对象需要计算才能得到布尔值，对于 `obj1 && obj2` 这样的场景，可能会需要较多的计算。

为了保证性能，就统一规定，对象的布尔值为 `true`。

::: tip 相关链接:
[https://wangdoc.com/javascript/features/conversion.html#number](https://wangdoc.com/javascript/features/conversion.html#number), by 阮一峰.
:::