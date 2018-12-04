# stylus 样式

::: tip stylus
一种 `CSS 预处理器`, 为 `CSS` 增加一些编程的的特性，无需考虑浏览器的兼容性问题，例如你可以在 CSS 中使用 **变量**、简单的 **程序逻辑**、**函数** 等等在编程语言中的一些基本技巧，可以让 `CSS` 更见简洁，适应性更强，代码更直观等诸多好处。

`stylus` 跟 `CSS` 最直观的不同就是 省略了 `{}` 和 `;`
:::

- 安装 `stylus` 和 `stylus-loader`

```bash
npm i stylus stylus-loader -D
```

- 使用

在 `vue` 组件中的 `style` 标签中 声明使用语言是 `stylus`, 即 `lang="stylus"`

```css
<style lang="stylus">

</style>
```

- 定义变量

由于有些样式可以被很多组件使用, 则可以考虑使用变量 **复用**, 更重要的是 **易维护**, 当需求更改时只需要维护一个变量就行而不用每个文件去替换

在 `src/assets/styles` 目录下新建 `varibles.styl` 文件

假如我想将头部的高度设置为变量, 那么在 `varibles.styl` 文件中参照如下定义变量:

```css
$headerHeight = 60px
```

定义好变量后, 在组件中先 **引入变量** 然后使用, 下面的是在组件中使用案例

```css {3,5}
<style lang="stylus" scoped>
// styles 是配置的别名, 组件中引入时别名前需要加 ～
@import '~styles/varibles.styl'
.lang
  height: $headerHeight
</style>
```

- mixin

mixin 相当于定一个了一个 **方法**, 方法里面写了很多样式, 这些样式一般都可以被复用

在 `src/assets/styles` 目录下新建 `mixins.styl` 文件

假如我想定义一个文字超出长度省略不换行的 `mixin`, 则在 `mixins.styl` 文件中定义如下内容

```css
ellipsis()
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
```

定义好 `mixin` 后, 在组件中先 **引入** 然后使用, 下面的是在组件中使用案例

```css {3,5}
<style lang="stylus" scoped>
// styles 是配置的别名, 组件中引入时别名前需要加 ～
@import '~styles/mixins.styl'
.lang
  ellipsis()
</style>
```

- 全局样式

在 `src/assets/styles` 目录下新建 `global.styl` 文件

假如我想定义 **全局** `饿了么UI库` 的菜单高度, 那么可以在 `global.styl` 文件中写如下内容即可生效

```css
// 全局样式
.el-submenu__title
  height: 46px
  line-height: 46px
```

- 样式穿透

覆盖 `UI` 库的样式, 比如在当前组件需要覆盖库中 `class` 为 `el-table` 的样式

```html {2}
<style lang="stylus" scoped>
>>>.el-table
  font-size: 20px
</style>
```