# sourceMap（减少包体积）

::: tip
`npm run build` 打完包后生成的 `dist` 目录默认是含有 `.map` 文件(打包后代码被压缩混淆了, `map` 文件就是源文件)，为了减少生产包体积可以不生成
:::

找到 `config/index.js` 文件

将 `productionSourceMap: true`, 改成 `productionSourceMap: false` 即可