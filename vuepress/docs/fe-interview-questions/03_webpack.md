# Webpack

## 使用 Webpack 优化项目

- 对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩
- 使用 ES6 模块来开启 tree shaking，这个技术可以移除没有使用的代码
- 优化图片，对于小图可以使用 base64 的方式写入文件中
- 按照路由拆分代码，实现按需加载
- 给打包出来的文件名添加哈希，实现浏览器缓存文件

## 优化打包速度

- 减少文件搜索范围
  - 比如通过别名
  - loader 的 test，include & exclude
- Webpack4 默认压缩并行
- Happypack 并发调用
- babel 也可以缓存编译

## Babel 原理

本质就是编译器，当代码转为字符串生成 AST，对 AST 进行转变最后再生成新的代码

- 分为三步：词法分析生成 Token，语法分析生成 AST，遍历 AST，根据插件变换相应的节点，最后把 AST 转换为代码

## 如何实现一个插件

- 调用插件 apply 函数传入 compiler 对象
- 通过 compiler 对象监听事件

比如你想实现一个编译结束退出命令的插件

```js
class BuildEndPlugin {
  apply (compiler) {
    const afterEmit = (compilation, cb) => {
      cb()
      setTimeout(function () {
        process.exit(0)
      }, 1000)
    }

    compiler.plugin('after-emit', afterEmit)
  }
}

module.exports = BuildEndPlugin
```

::: tip 参考链接
[大厂面经](https://juejin.im/post/5ba34e54e51d450e5162789b), by 夕阳.
:::