# 釜底抽薪的 router key

### 场景还原

下面这个场景真的是伤透了很多程序员的心...先默认大家用的是 `Vue-router` 来实现路由的控制。

假设我们在写一个博客网站，需求是从 `/post-page/a`，跳转到 `/post-page/b`。

然后我们惊人的发现，**页面跳转后数据竟然没更新**？

原因是 `vue-router` "智能地"发现这是同一个组件，然后它就决定要`复用`这个组件，所以你在 `created` 函数里写的方法压根就没执行。

**通常的解决方案是监听 $route 的变化来初始化数据，如下**：

```js
data() {
  return {
    loading: false,
    error: null,
    post: null
  }
}, 
watch: {
  '$route': {
    handler: 'resetData',
    immediate: true
  }
},
methods: {
  resetData() {
    this.loading = false
    this.error = null
    this.post = null
    this.getPost(this.$route.params.id)
  },
  getPost(id){

  }
}
```

bug是解决了，可每次这么写也太不优雅了吧？

秉持着能偷懒则偷懒的原则，我们希望代码这样写：

```js
data() {
  return {
    loading: false,
    error: null,
    post: null
  }
},
created () {
  this.getPost(this.$route.params.id)
},
methods () {
  getPost(postId) {
    // ...
  }
}
```

### 招式解析

那要怎么样才能实现这样的效果呢？

答案是给 `router-view` 添加一个 `unique` 的 `key`。

这样即使是公用组件，`只要 url 变化了`，`就一定会重新创建这个组件`。（虽然损失了一丢丢性能，但避免了无限的 bug）。

同时，注意我`将 key 直接设置为路由的完整路径`，一举两得。

```js
<router-view :key="$route.fullpath"></router-view>
```

链接地址: [Vue.js最佳实践](https://segmentfault.com/a/1190000014085613)