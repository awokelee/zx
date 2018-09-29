# less 样式

只需要安装 `npm i less less-loader -D`, 重新 `npm run dev` 即可, 不需要配置其他(`webpack.config.js`).

然后在 `.vue` 文件中直接使用:

```js
<style scoped lang="less">
.todos {
  &-title {
    font-size: 28px;
    color: rebeccapurple;
  }
}
</style>
```