# alias 别名配置

::: tip alias
配置别名前: `import Home from '../../../../../../../../../../components/Index'`

层级多容易找错

配置别名后: `import '@/components/Index'`
:::

- 添加配置

找到 `build/webpack.base.conf.js` 文件增加你需要的 `alias`

配置案例如下:

```js {5}
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

在 `js` 和 **组件** 中使用别名:

```js
// 引入 src/assets/styles 目录下的 reset.css
import 'styles/reset.css'
// 引入 src 目录下的 reset.css
import config from '@/api'
```

在 `css` 中使用别名

```html {3}
<style lang="stylus" scoped>
// 引入 src/assets/styles 目录下的 varibles.styl, 但引入时别名前需要加 ～
@import '~styles/varibles.styl'
</style>
```