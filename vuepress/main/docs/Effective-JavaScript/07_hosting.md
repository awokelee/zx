# 变量提升

“变量提升”(`Hoisting`)意味着变量和函数的声明会在物理层面移动到代码的最前面，但这么说并不准确。实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中。

`JavaScript` 在执行任何代码段之前，将函数声明放入内存中的优点之一是，这允许你可以在你的代码中使用一个函数，在声明该函数之前。

```js
catName("Chloe");

function catName(name) {
    console.log("我的猫名叫 " + name);
}
```

理解 `JavaScript` 变量声明行为的一个好办法是吧变量声明看作由两部分组成, 即声明和赋值.

`JavaScript` 隐式地提升(`hoists`) 声明部分到封闭函数的顶部, 而将赋值留在原地.

```js
function abc() {
    console.log(foo);
    var foo = 9;
}
abc();
```

上面的代码, `JavaScript` 会做隐式提升, 可以用下面代码理解:

```js {2,4}
function abc() {
    var foo; // 1. 声明
    console.log(foo);
    foo = 9; // 2. 赋值
}
```

::: tip 相关链接:
[https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting), by MDN
:::