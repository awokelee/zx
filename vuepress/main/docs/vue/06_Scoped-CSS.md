# Scoped CSS

```html
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

转换结果：

```html
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

### 混用本地和全局样式

你可以在一个组件中同时使用有 `scoped` 和非 `scoped` 样式：

```html
<style>
/* 全局样式 */
</style>

<style scoped>
/* 本地样式 */
</style>
```

### 子组件的根元素

**使用 scoped 后，父组件的样式将不会渗透到子组件中**。

不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

### 深度作用选择器

如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如`影响子组件`，你可以使用 `>>>` 操作符：

```HTML
<style scoped>
.a >>> .b { /* ... */ }
</style>
```

上述代码将会编译成：

```CSS
.a[data-v-f3f3eg9] .b { /* ... */ }
```

有些像 `Sass` 之类的预处理器无法正确解析 `>>>`。这种情况下你可以使用 `/deep/` 操作符取而代之——这是一个 `>>>` 的别名，同样可以正常工作。

### 注意

**Scoped 样式不能代替 class**! 考虑到浏览器渲染各种 CSS 选择器的方式，当 `p { color: red }` 是 `scoped` 时 (即与特性选择器组合使用时) **会慢很多倍**。

如果你使用 class 或者 id 取而代之，比如 `.example { color: red }`，性能影响就会消除。

**在递归组件中小心使用后代选择器**! 对选择器 .a .b 中的 CSS 规则来说，如果匹配 .a 的元素包含一个递归子组件，则所有的子组件中的 .b 都将被这个规则匹配。