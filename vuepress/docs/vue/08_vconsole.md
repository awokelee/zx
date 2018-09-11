# vConsole 移动端控制台

- 安装

`npm install vconsole`

- 引入

在 `src/assets` 目录下创建个 `util` 文件夹，并在里新建一个文件 `vconsole.js`

例如：

```js
import Vconsole from 'vconsole'
let vConsole = new Vconsole()
export default vConsole
```

引用，可以在 `main.js` 中全局引用 `require('./assets/util/vconsole.js')`

启动项目页面中就会出现 `vconsole` 控件