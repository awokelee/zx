# Vue 优化

## Object.freeze()

使用 Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。

对于 data 或 vuex 里使用 freeze 冻结的对象，vue 不会做 getter 和 setter 的转换。

如果有一个巨大的数组或 Object，并且确信数据不会修改，使用 Object.freeze()可以让性能大幅提升。在我的实际开发中，这种提升大约有5~10倍，倍数随着数据量递增。

```js
<p v-for="item in list">{{ item.value }}</p>

new Vue({
    data: {
        // vue不会对list里的object做getter、setter绑定
        list: Object.freeze([
            { value: 1 },
            { value: 2 }
        ])
    },
    created () {
        // 界面不会有响应
        this.list[0].value = 100;

        // 下面两种做法，界面都会响应
        this.list = [
            { value: 100 },
            { value: 200 }
        ];
        this.list = Object.freeze([
            { value: 100 },
            { value: 200 }
        ]);
    }
})
```

## 路由懒加载

