# sourceMap（减少包体积）

> `npm run build` 打完包后生成的 `dist` 目录默认是含有 `.map` 文件，为了减少包体积可以不开启

找到 `config/index.js`

将 `productionSourceMap: true`, 改成 `productionSourceMap: false`