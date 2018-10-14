# reduce 和 map

`reduce` 是一种数组运算，通常用于将数组的`所有成员"累积"为一个值`。

```js
var arr = [1, 2, 3, 4];

var sum = (a, b) => a + b;

arr.reduce(sum, 0) // 10
```

上面代码中，`reduce` 对数组 `arr` 的每个成员执行 `sum` 函数。

`sum` 的参数 `a` 是累积变量，参数 `b` 是当前的数组成员。

每次执行时，`b`会加到`a`，最后输出`a`。

累积变量必须有一个初始值，上例是`reduce`函数的第二个参数`0`。

如果省略该参数，那么初始值`默认是数组的第一个成员`。

```js
var arr = [1, 2, 3, 4];

var sum = function (a, b) {
  console.log(a, b);
  return a + b;
};

arr.reduce(sum) // => 10
// 1 2
// 3 3
// 6 4
```

上面代码中，`reduce`方法省略了初始值。通过`sum`函数里面的打印语句，可以看到累积变量每一次的变化。

总之，`reduce`方法提供了一种遍历手段，对数组所有成员进行"累积"处理。

### map 是 reduce 的特例

累积变量的初始值也可以是一个`数组`

```js
var arr = [1, 2, 3, 4];

var handler = function (newArr, x) {
  newArr.push(x + 1);
  return newArr;
};

arr.reduce(handler, [])
// [2, 3, 4, 5]
```

上面代码中，累积变量的`初始值是`一个`空数组`，结果`reduce`就`返回`了一个`新数组`，等同于执行`map`方法，对原数组进行一次"变形"。

下面是使用`map`改写上面的例子

```js
var arr = [1, 2, 3, 4];
var plusOne = x => x + 1;
arr.map(plusOne) // [2, 3, 4, 5]
```

事实上，所有的`map`方法都可以基于`reduce`实现

```js
function map(f, arr) {
  return arr.reduce(function(result, x) {
    result.push(f(x));
    return result;
  }, []);
}
```

因此，`map`只是`reduce`的一种特例

### reduce 的本质

本质上，`reduce`是三种运算的合成。

- `遍历`
- `变形`
- `累积`

```js
var arr = [1, 2, 3, 4];
var handler = function (newArr, x) {
  newArr.push(x + 1);
  return newArr;
};

arr.reduce(handler, [])
// [2, 3, 4, 5]
```

上面代码中，首先，`reduce`遍历了原数组，这是它能够取代`map`方法的根本原因；

其次，`reduce`对原数组的每个成员进行了"变形"（上例是加`1`）；

最后，才是把它们累积起来（上例是`push`方法）