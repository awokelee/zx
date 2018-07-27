# element-ui PC 端 UI 库

::: tip
`element-ui` 是 **饿了么** 团队开发的一个 `Vue` **PC端** `UI` 库, 封装了很多组件, 开箱即用, 饿了么组件都以 `el-` 开头,  [官网地址](http://element.eleme.io/#/zh-CN/component/installation)
:::

- 安装

`npm i element-ui -S`

- 引入

在 `main.js` 引入

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

- 在组件中使用

参照官网案例, 直接复制代码即可

```html
<el-button>搜索</el-button>
```