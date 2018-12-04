# 化繁为简的 Watchers

### 场景还原

```js
created(){
    this.fetchPostList()
},
watch: {
    searchInputValue(){
        this.fetchPostList()
    }
}
```

组件创建的时候我们获取一次列表，同时监听 `input` 框，每当发生变化的时候重新获取一次筛选后的列表这个场景很常见，有没有办法优化一下呢？

### 招式解析

首先，在 `watchers` 中，可以直接使用函数的字面量名称；

其次，声明 `immediate:true` 表示创建组件时立马执行一次。

```js
watch: {
    searchInputValue:{
        handler: 'fetchPostList',
        immediate: true
    }
}
```

链接地址: [Vue.js最佳实践](https://segmentfault.com/a/1190000014085613)