# alias 别名配置

> 配置别名，在引入文件和组件时无需自己找目录层级

`build/webpack.base.conf.js` 中增加你需要的 `alias`

- 配置案例如下:

```js
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'), // @ 代表 src 目录
      'styles': resolve('src/assets/styles'), // styles 代表 src/assets/styles 目录
      'common': resolve('src/common')
    }
  },
```

- 使用如下:

`js` 中

```js
// 引入 src/assets/styles 目录下的 reset.css
import 'styles/reset.css'
// 引入 src 目录下的 reset.css
import config from '@/api'
```

`css` 中

```html
<style lang="stylus" scoped>
// 引入 src/assets/styles 目录下的 varibles.styl, 但引入时别名前需要加 ～
@import '~styles/varibles.styl'
</style>
```