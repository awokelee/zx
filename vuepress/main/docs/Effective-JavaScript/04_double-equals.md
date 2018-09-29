# == 与 ===

`==` 用于一般比较，`===` 用于严格比较，`==` 在比较的时候可以转换数据类型，`===` 严格比较，只要 **类型** 不匹配就返回 `flase`.

- `==`

`==` 只要求值相等, 下图是 `==` 比较的逻辑.

![](./media/==.jpg)

上图中的 `toPrimitive` 就是对象转基本类型。

```js
false == 0 // true
77 == '77' // true
```

- `[] == ![] // -> true`

这里来解析一道题目 `[] == ![] // -> true` ，下面是这个表达式为何为 `true` 的步骤

```js
// [] 转成 true，然后取反变成 false
[] == false

// 根据第 8 条得出
[] == ToNumber(false)
[] == 0

// 根据第 10 条得出
ToPrimitive([]) == 0

// [].toString() -> ''
'' == 0

// 根据第 6 条得出
0 == 0 // -> true
```

- `===`

`===` 要求值和类型都相等.

```js
false === 0 // false(两侧类型不同)
77 === '77' // false(两侧类型不同)
```

- 比较运算符

如果是对象，就通过 `toPrimitive` 转换对象.

如果是字符串，就通过 `unicode` 字符索引来比较.

::: tip 相关链接:
[https://yuchengkai.cn/docs/zh/frontend/#%E6%93%8D%E4%BD%9C%E7%AC%A6](https://yuchengkai.cn/docs/zh/frontend/#%E6%93%8D%E4%BD%9C%E7%AC%A6), by InterviewMap
:::