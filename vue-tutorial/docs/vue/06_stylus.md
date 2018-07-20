# stylus

> 使用 stylus

## 安装

- 安装 `stylus`, `npm install stylus --save`

- 安装 `stylus-loader`, `npm install stylus-loader --save`

- 使用

```css
<style lang="stylus">

</style>
```

## 变量

- 在 `src/assets/styles` 目录下新建 `varibles.styl` 文件

`varibles.styl` 文件内容

```css
$headerHeight = 60px
```

- 组件中使用

```css
<style lang="stylus" scoped>
// styles 是配置的别名, 组件中引入时别名前需要加 ～
@import '~styles/varibles.styl'
.lang
  height: $headerHeight
</style>
```

## mixin

- 在 `src/assets/styles` 目录下新建 `mixins.styl` 文件

`mixins.styl` 文件内容

```css
ellipsis()
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
```

- 组件中使用

```css
<style lang="stylus" scoped>
// styles 是配置的别名, 组件中引入时别名前需要加 ～
@import '~styles/mixins.styl'
.lang
  ellipsis()
</style>
```

## 全局样式

- 在 `src/assets/styles` 目录下新建 `global.styl` 文件

`global.styl` 文件内容

```css
// 引入变量
@import './varibles.styl'

// 全局样式
.el-submenu__title
  height: 46px
  line-height: 46px
```