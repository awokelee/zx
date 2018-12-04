# vue 项目技术随笔

## Vue 路由切换时页面内容没有重新加载

> 问题原因：在组件mounted钩子中调用的刷新页面内容，但测试发现这个钩子没有被调用。后来发现App.vue中使用了： keep-alive是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。这就是问题所在了。

- 解决办法:

使用Vue组件切换过程钩子activated(keep-alive组件激活时调用)，而不是挂载钩子mounted：

```js
<script>
export default {
  activated: function() {
    this.getData()
  }
}
</script>
```