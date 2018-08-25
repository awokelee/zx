# 转 String

`String` 函数可以将任意类型的值转化成字符串，转换规则如下。

- 原始类型值

**数值：** 转为相应的字符串。

**字符串：** 转换后还是原来的值。

**布尔值：** `true` 转为字符串 `"true"`，`false` 转为字符串 `"false"`。

**undefined：** 转为字符串 `"undefined"`。

**null：** 转为字符串 `"null"`。

```js
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"
```

- 对象

`String` 方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。

```js
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
```

- `String` **转换规则**

`String` 方法背后的转换规则，与 `Number` 方法基本相同，只是互换了 `valueOf` 方法和 `toString` 方法的执行顺序。

先调用对象自身的 `toString` 方法。如果返回原始类型的值，则对该值使用 `String` 函数，不再进行以下步骤。

如果 `toString` 方法返回的是对象，再调用原对象的 `valueOf` 方法。如果 `valueOf` 方法返回原始类型的值，则对该值使用 `String` 函数，不再进行以下步骤。

如果 `valueOf` 方法返回的是对象，就报错。

下面是一个例子。

```js
String({a: 1})
// "[object Object]"

// 等同于
String({a: 1}.toString())
// "[object Object]"
```

上面代码先调用对象的 `toString` 方法，发现返回的是字符串 `[object Object]`，就不再调用 `valueOf` 方法了。

如果 `toString` 法和 `valueOf` 方法，返回的都是对象，就会报错。

```js
var obj = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return {};
  }
};

String(obj)
// TypeError: Cannot convert object to primitive value
```

下面是通过自定义 `toString` 方法，改变返回值的例子。

```js
String({
  toString: function () {
    return 3;
  }
})
// "3"

String({
  valueOf: function () {
    return 2;
  }
})
// "[object Object]"

String({
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 3;
  }
})
// "3"
```

上面代码对三个对象使用 `String` 函数。第一个对象返回 `toString` 方法的值（数值3），第二个对象返回的还是 `toString` 方法的值（`[object Object]`），第三个对象表示 `toString` 方法先于`valueOf` 方法执行。

::: tip 相关链接:
[https://wangdoc.com/javascript/features/conversion.html#number](https://wangdoc.com/javascript/features/conversion.html#number), by 阮一峰.
:::