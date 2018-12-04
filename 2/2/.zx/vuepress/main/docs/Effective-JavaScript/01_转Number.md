# 转 Number

- 原始类型值

原始类型值的转换规则如下。

```js
// 数值：转换后还是原来的值
Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0
```

`Number` 函数将字符串转为数值，要比 `parseInt` 函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为 NaN。

```js
parseInt('42 cats') // 42
Number('42 cats') // NaN
```

上面代码中，`parseInt` 逐个解析字符，而 `Number` 函数整体转换字符串的类型。

另外，`parseInt` 和 `Number` 函数都会自动过滤一个字符串前导和后缀的空格。

```js
parseInt('\t\v\r12.34\n') // 12
Number('\t\v\r12.34\n') // 12.34
```

- 对象

简单的规则是，`Number` 方法的参数是对象时，将返回 `NaN`，除非是包含单个数值的数组。

```js
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
```

之所以会这样，是因为 `Number` 背后的转换规则比较复杂

- `Number` **转换规则**

**第一步**，调用对象自身的 `valueOf` 方法。如果返回原始类型的值，则直接对该值使用 `Number` 函数，不再进行后续步骤。

**第二步**，如果 `valueOf` 方法返回的还是对象，则改为调用对象自身的 `toString` 方法。如果 `toString` 方法返回原始类型的值，则对该值使用 `Number` 函数，不再进行后续步骤。

**第三步**，如果 `toString` 方法返回的是对象，就报错。

请看下面的例子。

```js
var obj = {x: 1};
Number(obj) // NaN

// 等同于
if (typeof obj.valueOf() === 'object') {
  Number(obj.toString());
} else {
  Number(obj.valueOf());
}
```

上面代码中，`Number` 函数将 `obj` 对象转为数值。背后发生了一连串的操作，首先调用 `obj.valueOf` 方法, 结果返回对象本身；

于是，继续调用 `obj.toString` 方法，这时返回字符串 `[object Object]`，对这个字符串使用 `Number` 函数，得到 `NaN`。

默认情况下，对象的 `valueOf` 方法返回对象本身，所以一般总是会调用 `toString` 方法，而 `toString` 方法返回对象的类型字符串（比如 `[object Object]`）。所以，会有下面的结果。

```js
Number({}) // NaN
```

如果 `toString` 方法返回的不是原始类型的值，结果就会报错。

```js
var obj = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return {};
  }
};

Number(obj)
// TypeError: Cannot convert object to primitive value
```

上面代码的 `valueOf` 和 `toString` 方法，返回的都是对象，所以转成数值时会报错。

从上例还可以看到，`valueOf` 和 `toString` 方法，都是可以自定义的。

```js
Number({
  valueOf: function () {
    return 2;
  }
})
// 2

Number({
  toString: function () {
    return 3;
  }
})
// 3

Number({
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 3;
  }
})
// 2
```

上面代码对三个对象使用 `Number` 函数。第一个对象返回 `valueOf` 方法的值，第二个对象返回 `toString` 方法的值，第三个对象表示 `valueOf` 方法先于 `toString` 方法执行。

::: tip 相关链接:
[https://wangdoc.com/javascript/features/conversion.html#number](https://wangdoc.com/javascript/features/conversion.html#number), by 阮一峰.
:::