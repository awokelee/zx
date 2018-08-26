# 变量提升

“变量提升”(`Hoisting`)意味着变量和函数的声明会在物理层面移动到代码的最前面，但这么说并不准确。实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中。

`JavaScript` 在执行任何代码段之前，将函数声明放入内存中的优点之一是，这允许你可以在你的代码中使用一个函数，在声明该函数之前。

```js
catName("Chloe");

function catName(name) {
    console.log("我的猫名叫 " + name);
}
```

即使我们在定义这个函数之前调用它，函数仍然可以工作。这是因为在 `JavaScript` 中执行上下文的工作方式造成的。

变量提升也适用于其他数据类型和变量。变量可以在声明之前进行初始化和使用。但是如果没有初始化，就不能使用它们

`JavaScript` 仅提升声明，而不提升初始化。如果你先使用的变量，再声明并初始化它，变量的值将是 `undefined`

```js
var x = 1;                 // 声明 + 初始化 x
console.log(x + " " + y);  // '1 undefined'
var y = 2;                 // 声明 + 初始化 y


//上面的代码和下面的代码是一样的 
var x = 1;                 // 声明 + 初始化 x
var y;                     //声明 y
console.log(x + " " + y);  //y 是未定义的
y = 2;                     // 初始化  y 
```

::: tip 相关链接:
[https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting), by MDN
:::